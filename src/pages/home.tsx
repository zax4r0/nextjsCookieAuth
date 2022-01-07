import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import IndexLayout from "../components/layout";
// import useSwr from "swr";
import { fetcher } from "@/app/lib/fetcher";
import { Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot } from "@chakra-ui/react";
import Link from "next/link";

const Home: NextPage = ({ fallbackData }: any) => {
    // const { data } = useSwr<any | null>(
    //     `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT2}/users`,
    //     fetcher,
    //     { fallbackData }
    // );
    return (
        <div>
            <Head>
                <title>Minvest</title>
                <meta name="description" content="All your investments in one single place" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <IndexLayout>
                <div className="w-ful h-full justify-center items-start flex">
                    <Table variant="simple">
                        <TableCaption>Usertable</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>email</Th>
                                <Th>profile</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {fallbackData?.data?.map((user: any) => (
                                <Tr key={user?.id}>
                                    <Td>{user?.id}</Td>
                                    <Td>{user?.email}</Td>
                                    <Td>
                                        <Link href="/users/[id]" as={`/users/${user.id}`}>
                                            View Full detaail
                                        </Link>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                        <Tfoot>table footer</Tfoot>
                    </Table>
                </div>
            </IndexLayout>
        </div>
    );
};

export default Home;

Home.getInitialProps = async (ctx: NextPageContext) => {
    const userId = ctx.req?.headers.cookie;
    console.log(userId);
    const res = await fetcher(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT2}/users`, ctx);
    return { fallbackData: res };
};
