import Link from "next/link";

const HuluButton = ({ name, path }: { name: string; path: string }) => {
    return (
        <>
            <Link href={path}>
                <a className="btn btn-light btn-lg btn-icon">
                    <button className="bg-[#DDE0E6]  hover:bg-gray-200 text-gray-800 dark:bg-transparent dark:text-white px-8 py-5 text-md font-semibold border-0 dark:border-2 dark:border-white  rounded-md cursor-pointer uppercase tracking-wide leading-3 hover:opacity-80">
                        {name}
                    </button>
                </a>
            </Link>
        </>
    );
};

export default HuluButton;
