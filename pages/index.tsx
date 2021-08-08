import React, { useEffect, useState } from "react";
import Head from 'next/head'
import { getLabels } from "../hooks/useLabels";
import { Header, HeaderLeft } from "../components/header/header";
import { RecoilRoot } from "recoil";
import { HamburgerMenuContainer } from "../components/hamburger-menu/hamburger-menu.container";
import Loading from "../components/loading/loading";

export default function Index({
  labels: { name },
}: {
  labels: {
    name: string;
  };
}) {
  const [isLoading, setIsLoading] = useState(true);

  // Remove Blocking screen after 2 seconds
  useEffect(
    () => {
      let isMounted = true;
      const id = setTimeout(() => {
        if (isMounted) setIsLoading(false);
      }, 2000)
      return () => {
        isMounted = false;
        clearTimeout(id);
      };
    },
    [],
  );

  return (
    <RecoilRoot>
      <Head>
        <title>NextJS Test</title>
      </Head>
      <div className="app">
        <Header 
          left={<HeaderLeft />}
        />
        <div>
          <HamburgerMenuContainer />
          TRANSLATED AT BUILD TIME: <br/>
          {name}: Jo
        </div>
      </div>
      <Loading isLoading={isLoading} />
    </RecoilRoot>
  )
}

export async function getStaticProps() {
  const labels = await getLabels(["name"]);
  return {
    props: {
      labels,
    },
  }
}