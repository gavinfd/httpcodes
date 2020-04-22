import Head from "next/head";
import Quiz from "../components/Quiz";

import { getQuizPacks } from "../lib/getQuizPacks";

export async function getStaticPaths() {
  const quizPacks = await getQuizPacks();
  const quizPackNames = Object.keys(quizPacks);

  let paths = [];
  quizPackNames.forEach((quizName) =>
    paths.push({ params: { quiz: quizName } })
  );
  return { paths: paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const quizPacks = await getQuizPacks();
  const quiz = quizPacks[params.quiz];
  return {
    props: {
      quiz,
    },
  };
}

export default ({ quiz }) => {
  return (
    <div className="container">
      <Head>
        <title>Http Status Code Quiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Quiz questions={quiz}></Quiz>
      </main>

      <footer></footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 2rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .card-right {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          border-color: #1eb500;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card-right:hover,
        .card-right:focus,
        .card-right:active {
          color: #26ff00;
          border-color: #26ff00;
        }

        .card-right h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card-right p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .card-wrong {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          border-color: #a80000;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card-wrong:hover,
        .card-wrong:focus,
        .card-wrong:active {
          color: #ff0000;
          border-color: #ff0000;
        }

        .card-wrong h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card-wrong p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};
