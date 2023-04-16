import Head from "next/head";
import Picture from "../components/Picture";
import Work from "../components/Work";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import Historial from "../components/Historial";
import { FC, useEffect, useState } from "react";
import ScrollTop from "../components/ScrollTop";
import dynamic from "next/dynamic";
import { Partytown } from '@builder.io/partytown/react';
import { FaLess } from "react-icons/fa";
const LayoutGroup = dynamic(() => import('framer-motion').then((mod) => mod.LayoutGroup), {
  ssr: false,
})

const DynamicNav = dynamic(() => import("../components/Nav"));

const Home: FC = () => {
  const [scrollTop, setScrollTop] = useState(false);

  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      if (window.pageYOffset > 300) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisibility);
    }
  }, []);

  return (
    <>
      <Head>
        <Partytown debug={false} forward={['dataLayer.push']}/>
        <title>CV Domingo ArandaC</title>
        <meta
          name="description"
          content="Sitio web arandom Core Portfolio."
        />
        <meta property="og:title" content="Splatboy Dev's portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://splatboy-dev.xyz" />
        <meta property="og:description" content="Sitio web arandom Core, Mi portafolio personal, donde puedes encontrar mis proyectos y mis datos de contacto, creado con React.js." />
        <meta property="description" content="El sitio web arandom Core, Mi portafolio personal, donde puedes encontrar mis proyectos y mis datos de contacto, creado con React.js." />
        <meta name="theme-color" content="#FFF1" />
        <link rel="icon" href="https://blogger.googleusercontent.com/img/a/AVvXsEh-k8LuPRCBvZp80lskW4d4FXtwjvFJcjmM9Ew2eDA0cbbhi7jdzDv3oMYMoyy0QGzG4KKmZDUB9lsvYUDMD2uJThyuj2u_iGKhyshYGul5sA-7Oo9EU8mh7_-JlJKmMkOE2IPva9Qrmj6V9JRTha3M1hXUoGeAgoZPzB7Rq4WpOim2-ryuH7USOHEu" />
        <link rel="preconnect" href="https://fonts.googleapis.com&display=optional" />
        <link href="./splatboy-dev.webp" sizes="100%" />
      </Head>
      <LayoutGroup>
        {typeof window !== "undefined" && <DynamicNav />}
        <Picture />
        <Contact />
        <Work />
        <Tools />
        <Historial/>
        
      </LayoutGroup>
      {scrollTop && <ScrollTop />}
    </>
    
  );
};

export default Home;
