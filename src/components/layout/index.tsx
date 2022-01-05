import { Box, Drawer, DrawerContent, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { ReactNode } from "react";
import Footer from "./Footer";

import { MobileNav } from "./NavItem";
import SidebarContent from "./Sidebar";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box minH="100vh" bg={useColorModeValue("#EDF2F7", "primaryDark")}>
                <SidebarContent onClose={() => onClose} display={{ base: "none", md: "block" }} />
                <Drawer
                    autoFocus={false}
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    returnFocusOnClose={false}
                    onOverlayClick={onClose}
                    size="sm"
                >
                    <DrawerContent>
                        <SidebarContent onClose={onClose} />
                    </DrawerContent>
                </Drawer>
                {/* mobilenav */}
                <MobileNav onOpen={onOpen} />
                <Box ml={{ base: 0, md: 60 }} p="4">
                    {children}
                </Box>
                <Footer />
            </Box>
        </>
    );
};

export default Layout;
