import MotionBox from "@/components/motion/Box";
import { Box, Button, Heading, Image, Text, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

const Page404 = () => {
    const { colorMode } = useColorMode();

    return (
        <>
            <div className="w-screen h-screen m-0 p-0 bg-primaryLight dark:bg-primaryDark">
                <MotionBox
                    animate={{ y: 20, scale: 0.97 }}
                    transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                    marginY={8}
                    maxWidth={[240, 320]}
                    marginX="auto"
                >
                    <Image
                        src="/assets/images/404 Error-pana.svg"
                        alt="Error 404 not found Illustration"
                    />
                </MotionBox>

                <Box marginY={4}>
                    <Heading textAlign="center">Page not Found.</Heading>

                    <Box textAlign="center" marginTop={4}>
                        <Text>It&apos;s Okay!</Text>
                        <Link href="/" passHref>
                            <Button backgroundColor={colorMode === "light" ? "#FFFFFF" : "#040505"}>
                                Let&apos;s Head Back
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </div>
        </>
    );
};
export default Page404;
