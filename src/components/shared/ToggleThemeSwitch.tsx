import { Switch, useColorMode } from "@chakra-ui/react";
import { VFC, memo } from "react";
import { useTheme } from "next-themes";

const DarkModeToggleSwitch: VFC<any> = memo(() => {
    const { theme, setTheme } = useTheme();
    const { colorMode, toggleColorMode } = useColorMode();

    const darkmode = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        toggleColorMode();
    };
    return (
        <>
            <div className="mr-16">
                <div>{colorMode === "light" ? "Enable Dark Theme " : "Enable Light Theme"}</div>
            </div>
            <Switch
                size="lg"
                onChange={darkmode}
                isChecked={colorMode === "dark"}
                className="animate-pulse"
            />
        </>
    );
});
DarkModeToggleSwitch.displayName = "DarkModeToggleSwitch";
DarkModeToggleSwitch.displayName = "DarkModeToggleSwitch";

export default DarkModeToggleSwitch;
