import Link from "next/link";
import { useRouter } from "next/router";
import Meta from "@/components/Meta";

function post({ post }) {
  // using next router to get data from routes
  //   const router = useRouter();
  //   const { id } = router.query;

  return (
    <>
      <Meta title={post.title} />
      <Link href="/">Go back</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <br />
    </>
  );
}
// using the  data fetching method provided by next js for pages
// getServerSideProps
export const getServerSideProps = async (context) => {
  const res = await fetch(`https://dummyjson.com/post/${context.params.id}`);

  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

// Using a combination of getStaticProps and getServerSideProps
// export const getStaticProps = async (context) => {
//   const res = await fetch(`https://dummyjson.com/posts/${context.params.id}`);

//   const post = await res.json();

//   return {
//     props: {
//       post,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://dummyjson.com/posts`);

//   const post = await res.json();

//   const ids = post.map((post) => post.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default post;
