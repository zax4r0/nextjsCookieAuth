/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
    title: "Minvest",
    titleTemplate: "%s | Minvest",
    defaultTitle: "Minvest",
    description:
        "Minvest is a finance managing software where you can allow your users to view finantial report , publish roadmap, and complete your customer feedback loop.",
    openGraph: {
        url: "https://admin.minvest.mayaenterprises.co.in",
        title: "minvest",
        description:
            "Minvest is a finance managing software where you can allow your users to view finantial report , publish roadmap, and complete your customer feedback loop.",
        images: [
            {
                url: "https://admin.minvest.mayaenterprises.co.in",
                alt: "minvest.MayaEnterprises.co.in og-image",
            },
        ],
        site_name: "minvest",
    },
    twitter: {
        handle: "@minvest",
        cardType: "summary_large_image",
    },
};

export default defaultSEOConfig;
