import React, { useEffect, useState } from "react";
import Head from 'next/head'
import { getLabels } from "../hooks/useLabels";
import { Header, HeaderLeft } from "../components/header/header";
import { RecoilRoot } from "recoil";
import { HamburgerMenuContainer } from "../components/hamburger-menu/hamburger-menu.container";
import { MenuContainer } from "../components/menu/menu-container";
import LoadingContainer from "../components/loading/loading-container";
import { useLoading } from "../hooks/useLoading";

export default function Index({
  name,
}: {
  name: string;
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

  useLoading(isLoading);

  return (
    <>
      <Head>
        <title>NextJS Test</title>
      </Head>
      <div className="app">
        <Header 
          left={<HeaderLeft />}
        />
        <div>
          <HamburgerMenuContainer>
            <MenuContainer />
          </HamburgerMenuContainer>
          Added at BUILD TIME: <br/>
          Hello {name}
        </div>
      </div>
      <LoadingContainer />
    </>
  )
}



export async function getStaticProps() {
  const result = await fetch("https://api.github.com/users/jovdb")
  const json = await result.json();
  if (!result.ok) throw new Error(json.message || "Error");

  return {
    props: {
      name: json.name,
    },
  }
}