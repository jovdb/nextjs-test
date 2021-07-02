import React, { useEffect, useState } from "react";
import Head from 'next/head'
import Loading from "../components/loading/loading";
import { Header, HeaderLeft } from "../components/header/header";

export default function Home() {
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
    <>
      <Head>
        <title>NextJS Test</title>
      </Head>
      <div className="app">
        <Header 
          left={<HeaderLeft />}
        />
        <div>
          <HamburgerMenuContainer />
          My name is Jo
        </div>
      </div>
      <Loading isLoading={isLoading}/>
    </>
  )
}
