import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { VFC, memo } from "react";
import { useTheme } from "next-themes";
const DarkModeToggle: VFC<any> = memo(() => {
    const { theme, setTheme } = useTheme();
    const { colorMode, toggleColorMode } = useColorMode();

    const darkmode = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        toggleColorMode();
    };
    return (
        <>
            <IconButton
                aria-label="theme toggle"
                bg={useColorModeValue("#000000", "#FFFFFF")}
                color={useColorModeValue("#FFFFFF", "#000000")}
                icon={colorMode === "light" ? <RiMoonFill /> : <RiSunLine />}
                onClick={darkmode}
            />
        </>
    );
});

DarkModeToggle.displayName = "DarkModeToggle";

export default DarkModeToggle;
