import type { NextPage } from "next";
import dynamic from "next/dynamic";
const IndexLayout = dynamic(() => import("../components/layout/"));

const About: NextPage = () => {
    return <IndexLayout>Hmm ABout</IndexLayout>;
};

export default About;
