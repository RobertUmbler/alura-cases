import { useEffect, useState } from "react";
import C_Link from "/src/components/C_Link";

import Head from 'next/head'

export async function getStaticProps(context) {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

  const fetchFaq = await fetch(FAQ_API_URL)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  return {
    props: {
      teste: "teste",
      fetchFaq,
    }, // will be passed to the page component as props
  };
}

export default function faq({fetchFaq}) {
  // const [faq, setFaq] = useState([]);

  // useEffect(() => {}, []);
  console.log(fetchFaq)
  return (
    <div>
      <Head>
        <title>FAQ</title>
      </Head>
      <h1>Alura Cases - FAQ</h1>
      <C_Link href="/">Ir para a Home</C_Link>

      <ul>
        {fetchFaq.map((item, index) => {
          return (
            <ol key={index}>
              <h2>{item.question}</h2>
              <li>{item.answer}</li>
            </ol>
          );
        })}
      </ul>
    </div>
  );
}
