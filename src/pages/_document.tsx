/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */
import createEmotionServer from "@emotion/server/create-instance";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import * as React from "react";

import createEmotionCache from "../styles/createEmotionCache";

const APP_NAME = "Myapp";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const originalRenderPage = ctx.renderPage;
        const cache = createEmotionCache();

        const { extractCriticalToChunks } = createEmotionServer(cache);

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App: any) => props => <App emotionCache={cache} {...props} />,
            });

        const initialProps = await Document.getInitialProps(ctx);

        const emotionStyles = extractCriticalToChunks(initialProps.html);
        const emotionStyleTags = emotionStyles.styles.map(style => (
            <style
                data-emotion={`${style.key} ${style.ids.join(" ")}`}
                key={style.key}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: style.css }}
            />
        ));

        return {
            ...initialProps,
            styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
        };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="application-name" content={APP_NAME} />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-title" content={APP_NAME} />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="theme-color" content="#FFFFFF" />
                    <meta charSet="utf-8" />
                    <meta name="twitter:card" content="summary" />
                    <meta
                        name="twitter:image"
                        content="https://minvest.mayaenterprises.co.in/logo.webp"
                    />
                    <meta name="twitter:creator" content="@zax4r0" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="minvest" />
                    <meta name="twitter:url" content="https://minvest.mayaenterprises.co.in" />
                    <meta name="msapplication-tap-highlight" content="no" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="theme-color" content="#00C480" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="msapplication-config" content="/icons/browserconfig.xml" />
                    <link rel="manifest" href="/manifest.json" />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-2048-2732.jpg"
                        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-2732-2048.jpg"
                        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-1668-2388.jpg"
                        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-2388-1668.jpg"
                        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-1536-2048.jpg"
                        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-2048-1536.jpg"
                        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-1668-2224.jpg"
                        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-2224-1668.jpg"
                        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-1620-2160.jpg"
                        media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-2160-1620.jpg"
                        media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-1284-2778.jpg"
                        media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-2778-1284.jpg"
                        media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-1170-2532.jpg"
                        media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-2532-1170.jpg"
                        media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-1125-2436.jpg"
                        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-2436-1125.jpg"
                        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-1242-2688.jpg"
                        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-2688-1242.jpg"
                        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-828-1792.jpg"
                        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-1792-828.jpg"
                        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-1242-2208.jpg"
                        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-2208-1242.jpg"
                        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-750-1334.jpg"
                        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-1334-750.jpg"
                        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-640-1136.jpg"
                        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        href="/pwa/appleSpash/apple-splash-1136-640.jpg"
                        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="192x192"
                        href="/icons/android-icon-192x192.png"
                    />
                    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
