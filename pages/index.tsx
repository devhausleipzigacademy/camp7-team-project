import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../layout/header";
import NavigationBar from "../layout/navigationBar";
import TaskCard from "../components/taskCard";

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between h-full">
        <Header />
        <div className="flex flex-col gap-3">
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
        </div>
        <NavigationBar />
      </div>
    </div>
  );
};

export default Home;
