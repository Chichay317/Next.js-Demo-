// our-domain.com/
import Head from "next/head"; //adding metadata
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

// Next.js takes the first render cycle and returns it as the pre-rendered HTML code.
// Two forms of pre-rendering are Static Generation(what we should use) and Server side rendering. Using static generation, the page is pre-rendered when you build it for production

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active react meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

//static generation example. it has to be written inside of the pages folder and the name must be getStaticProps. Next.js will first call this before the component function. it can be async as Next.js will wait for this promise to be resolved so that the page can be pre-rendered with the required data. it doesn't execute on the client or server side but during the build process. the props object it returns is the props passed to the component function or to be set in the component function. revalidate takes a number which is the number of seconds Next.js will wait before it will regenerate the page for an incoming request
export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://CodeDeev:Chichay317@cluster0.mqk4lzr.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db(); //allows us to get hold of the database we are connecting

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

// Server side rendering example. this will not run during the build process but always on the server after deployment. it runs for every incoming request. use only when you have data that changes very frequently like multiple times every second and if you need access to the request/response object maybe for authentication
// export async function getServerSideProps(context) {
//   const req = context.req; //gives access to the full incoming request
//   const res = context.res; //gives access to the response sent back

//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
