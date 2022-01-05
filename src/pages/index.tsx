import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

function LoginPage() {
    // hmm use history if authh let me know
    const router = useRouter();

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [lostMessage, setLostMessage] = useState("Forgot password ?");
    const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();
        // Do something
        router.push("/home");
    };
    const handalForgotpass = () => {
        // Do something
        setLostMessage("Check Our Email for resetting password");
    };

    return (
        <>
            <div className="bg-primaryLight dark:bg-primaryDark font-family-karla h-screen overflow-hidden">
                <div className="w-full flex flex-wrap">
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                            <a className="text-center bg-primaryLight dark:bg-primaryDark text-green-400 font-bold text-xl p-4">
                                M-ADMIN
                            </a>
                        </div>
                        <div className="flex flex-col justify-center  my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                            <p className="text-center text-3xl">Welcome</p>
                            <form className="flex flex-col pt-3 md:pt-8" onSubmit={handelSubmit}>
                                <div className="flex flex-col pt-4">
                                    <label htmlFor="email" className="text-lg">
                                        Email
                                    </label>
                                    <input
                                        ref={emailRef}
                                        type="email"
                                        id="email"
                                        placeholder="your@email.com"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 ext-primaryDark dark:text-textDark mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                                <div className="flex flex-col pt-4">
                                    <label htmlFor="password" className="text-lg">
                                        Password
                                    </label>
                                    <input
                                        ref={passwordRef}
                                        type="password"
                                        id="password"
                                        placeholder="Password"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 ext-primaryDark dark:text-textDark mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                                <input
                                    type="submit"
                                    value="Log In"
                                    className=" cursor-pointer bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
                                />
                            </form>
                            <div className="text-center pt-12 pb-12">
                                <p onClick={handalForgotpass}>
                                    <a className="underline font-semibold cursor-pointer">
                                        {lostMessage}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
