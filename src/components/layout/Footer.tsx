import { Box, Container, Stack, Text, useColorModeValue } from "@chakra-ui/react";

function Footer() {
    const Bgvalue = useColorModeValue("#FFFFFF", "primaryDark");
    const ColorValue = useColorModeValue("primaryDark", "#FFFFFF");
    return (
        <Box bg={Bgvalue} color={ColorValue}>
            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justify={{ base: "center", md: "center" }}
                align={{ base: "center", md: "center" }}
            >
                <Text>© 2020 Chakra Templates. All rights reserved</Text>
            </Container>
        </Box>
    );
}

export default Footer;
