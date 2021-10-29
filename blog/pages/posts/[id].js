import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData: { id, data, content } }) {
  return (
    <Layout>
      <p className="title">{data.title}</p>
      <p>{id}</p>
      <p>{data.date}</p>
      <p>{content}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
