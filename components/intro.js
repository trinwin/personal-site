import Head from "next/head";
import styles from "./intro.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Intro() {
  return (
    <div>
      <Head>
        <title>Trinwin</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi 👋🏻, I'm a Software Engineering Intern at Hinwin, Inc. 🎬 and a
          former Software Engineering Intern at Tesla 🚘 and Roku 📺.
          <br /> I'm currently an upcoming Computer Science senior at San Jose
          State University 📚.
        </p>
        <p>
          📊 You check checkout my side projects on{" "}
          <a href="https://github.com/trinityng">Github</a>.
        </p>
        <p>
          🙋🏻‍♀️ Feel free to connect with me on{" "}
          <a href="https://www.linkedin.com/in/trinityng/">LinkedIn</a>.
        </p>
      </section>
    </div>
  );
}
