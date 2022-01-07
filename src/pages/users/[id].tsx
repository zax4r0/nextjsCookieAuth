import { fetcher } from "@/app/lib/fetcher";
import Layout from "@/components/layout";
import { NextPageContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import useSwr from "swr";

const SingleUser: any = ({ fallbackData }: any) => {
    const router = useRouter();
    const userId = router.query.id;
    const { data } = useSwr<any | null>(
        `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT2}users/${userId}`,
        fetcher,

        { fallbackData }
    );
    return (
        <Layout>
            {JSON.stringify(data)}
            <Link href="/home">Home</Link>
        </Layout>
    );
};

export default SingleUser;

SingleUser.getInitialProps = async (ctx: NextPageContext) => {
    const userId = ctx.query.id;
    const res = await fetcher(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT2}/users/${userId}`, ctx);
    return { fallbackData: res };
};
