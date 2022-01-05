import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRef } from "react";

function ResetPasswordForm(): JSX.Element {
    const Bgvalue = useColorModeValue("#FFFFFF", "primaryDark");
    const router = useRouter();

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();
        // Do something
        router.push("/home");
    };
    return (
        <Flex minH={"100vh"} align={"center"} justify={"center"} bg={Bgvalue}>
            <form onSubmit={handelSubmit}>
                <Stack
                    spacing={4}
                    w={"full"}
                    maxW={"md"}
                    bg={Bgvalue}
                    rounded={"xl"}
                    boxShadow={"lg"}
                    p={6}
                    my={12}
                >
                    <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
                        Enter new password
                    </Heading>
                    <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input
                            ref={emailRef}
                            placeholder="your-email@example.com"
                            _placeholder={{ color: "gray.500" }}
                            type="email"
                        />
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" ref={passwordRef} />
                    </FormControl>
                    <Stack spacing={6}>
                        <Button
                            bg={"#040505"}
                            color={"white"}
                            _hover={{
                                bg: "green.400",
                            }}
                        >
                            Submit
                        </Button>
                    </Stack>
                </Stack>
            </form>
        </Flex>
    );
}
export default ResetPasswordForm;
