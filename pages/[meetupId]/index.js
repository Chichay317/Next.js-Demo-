// our-domain.com/[meetupId]
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

// getStaticPaths is also used in a page component file like getStaticProps and getServerSideProps. it is used in dynamic files with getStaticProps(not getServerSideProps). here, we define all the specific meetupIds for which this page should be pre-generated. the fallback key tells Next.js whether your paths array contains all supported parameter values or just some and setting it to false means that your path contains all, setting it to true or 'blocking' will allow next.js to dynamically pregenerate some parameter values as requests are coming in. the difference between true and blocking is that true will first return an empty page then pull the dynamically generated content (you'll need to handle that case where the data is not there yet) while blocking will not return anything till the data comes in. fallback allows you to pregenerate some of your pages for some specific meetupIds(e.g pages visited frequently)
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://CodeDeev:Chichay317@cluster0.mqk4lzr.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db(); //allows us to get hold of the database we are connecting

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); //this means that we are fetching all the objects but each of them will only contain the id

  client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

// using context in getStaticProps will not give us the response/request object but a params object where our identifiers between the square bracket will be the properties and the values will be the actual values encoded in the URL
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://CodeDeev:Chichay317@cluster0.mqk4lzr.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db(); //allows us to get hold of the database we are connecting

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  }); //to findOne, we return how to search for a single document

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
