import Head from "next/head";
import { MainLayuot } from "@layouts";
import { Home } from "@pages/home";

const Page = () => {
  return (
    <>
      <Head>
        <title>EPICSTARS</title>
        <meta name="description" content="description" />
      </Head>
      <Home />
    </>
  );
};

Page.getLayout = (page) => <MainLayuot overflow={false}>{page}</MainLayuot>;

export default Page;
