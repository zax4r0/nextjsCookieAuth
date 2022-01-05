import type { NextPage } from "next";
import Head from "next/head";
import IndexLayout from "../components/layout";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Minvest</title>
                <meta name="description" content="All your investments in one single place" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <IndexLayout>
                <div className="w-ful h-full justify-center items-start flex">Hello</div>
            </IndexLayout>
        </div>
    );
};

export default Home;
