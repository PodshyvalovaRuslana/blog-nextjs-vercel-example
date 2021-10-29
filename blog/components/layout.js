import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";

export const siteTitle = "Next.js blog project";
const name = "Lana Taylor";

export default function Layout({ children, home }) {
  return (
    <div className={styles.header}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header>
        <>
          <Image
            priority
            src="/images/portrait.webp"
            className={styles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1>{name}</h1>

          {!home && (
            <Link href="/">
              <a className={styles.header__link}>go back home page</a>
            </Link>
          )}
        </>
      </header>
      <main>{children}</main>
    </div>
  );
}
