import {
    Flex,
    useColorModeValue,
    Text,
    Stack,
    Heading,
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

function LoginPage() {
    // hmm use history if authh let me know
    const router = useRouter();
    const Bgvalue = useColorModeValue("#FFFFFF", "primaryDark");

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [lostMessage, setLostMessage] = useState("");

    async function handelSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT2}/login`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify({
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
            }),
            // body: `email=${emailRef.current?.value}&password=${passwordRef.current?.value}`,
        });
        const json = await res.json();
        console.log(json);
        router.push("/home");
    }

    console.log(emailRef.current?.value, passwordRef.current?.value);

    const handalForgotpass = () => {
        // Do something
        setLostMessage("You'll get an email with a reset link");
    };
    return (
        <Flex minH={"100vh"} align={"center"} justify={"center"} bg={Bgvalue}>
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>Sign in to your account</Heading>
                    <Text fontSize={"lg"} color={"green.500"}>
                        to enjoy all of our cool
                    </Text>
                    <Text fontSize={"lg"} color={"blue.500"}>
                        {lostMessage}
                    </Text>
                </Stack>
                <Box rounded={"lg"} bg={Bgvalue} boxShadow={"lg"} p={8}>
                    <Stack spacing={4}>
                        <form onSubmit={handelSubmit}>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" ref={emailRef} />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" ref={passwordRef} />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: "column", sm: "row" }}
                                    align={"start"}
                                    justify={"space-between"}
                                >
                                    <div className="text-center pt-12 pb-12">
                                        <p onClick={handalForgotpass}>
                                            <p className="underline font-semibold cursor-pointer">
                                                Forgot password ?
                                            </p>
                                        </p>
                                    </div>
                                </Stack>
                                <Button
                                    bg={"#040505"}
                                    color={"white"}
                                    _hover={{
                                        bg: "green.500",
                                    }}
                                    type="submit"
                                >
                                    Sign in
                                </Button>
                            </Stack>
                        </form>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}

export default LoginPage;
