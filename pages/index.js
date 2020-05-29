import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi 👋🏻, I'm a Software Engineering Intern at Hinwin, Inc. 🎬 and a
          former Software Engineering Intern at Tesla 🚘 and Roku 📺.
          <br /> I'm currently an upcoming Computer Science senior at San Jose
          State University 📚.
        </p>
        <p>
          📊 You check checkout my side projects on{' '}
          <a href="https://github.com/trinityng">Github</a>.
        </p>
        <p>
          🙋🏻‍♀️ Feel free to connect with me on{' '}
          <a href="https://www.linkedin.com/in/trinityng/">LinkedIn</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// getStaticProps runs only on the server-side, never be run on the client-side
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
