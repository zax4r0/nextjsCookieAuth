import { NextPageContext } from "next";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
export async function fetcher(url: string, ctx: NextPageContext) {
    const cookie = ctx.req ? ctx.req.headers.cookie : undefined;
    const res = await fetch(url, {
        credentials: "include",
        headers: {
            cookie: cookie!,
        },
    });
    if (res.status === 401 && !ctx.req) {
        Router.replace("/");
        return {};
    }
    if (res.status === 401 && ctx.req) {
        ctx.res?.writeHead(302, {
            Location: `${process.env.NEXT_PUBLIC_SELF_ENDPOINT}`,
        });
        ctx.res?.end();
        return;
    }

    const json = await res.json();
    return json;
}
