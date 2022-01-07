import { extendTheme } from "@chakra-ui/react";

import Button from "./components/button";
import fonts from "./fonts";

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

const customTheme = extendTheme({
    fonts,
    config,
    colors: {
        primaryLight: "#FFFFFF",
        lightAccent: "#00C480",
        primaryDark: "#151516",
        darkAccent: "#00C480",
        textLight: "#151516",
        textDark: "#FFFFFF",
    },
    components: {
        Button,
    },
});

export default customTheme;
