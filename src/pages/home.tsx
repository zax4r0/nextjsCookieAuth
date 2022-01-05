import dynamic from "next/dynamic";
import type { NextPage } from "next";
import Head from "next/head";
const IndexLayout = dynamic(() => import("../components/layout"));

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Minvest</title>
                <meta name="description" content="All your investments in one single place" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <IndexLayout>Add here</IndexLayout>
        </div>
    );
};

export default Home;
