import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import home from "../styles/home.module.css";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={home.blog__description}>
        <p>I am a developer</p>
      </section>
      <section className={home.blog__heading}>
        <h2>Blog</h2>
        <ul className={home.posts__list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={home.posts__item} key={id}>
              <Link href={`/posts/${id}`}>
                <a>
                  <p className={home['posts__item-title']}>{title}</p>
                  <p>{id}</p>
                  <p>{date}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
