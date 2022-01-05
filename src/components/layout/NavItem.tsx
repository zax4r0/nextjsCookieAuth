import {
    Box,
    Button,
    Flex,
    FlexProps,
    Text,
    HStack,
    Icon,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    useColorModeValue,
    VStack,
    Avatar,
} from "@chakra-ui/react";
import Link from "next/link";
import { ReactText } from "react";
import { IconType } from "react-icons";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import DarkModeToggleSwitch from "../shared/ToggleThemeSwitch";
import { useRouter } from "next/router";

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    const value = useColorModeValue("primaryDark", "gray.300");

    return (
        <Link href="/home">
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                color={value}
                cursor="pointer"
                _hover={{
                    bg: "lightAccent",
                    color: { value },
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: { value },
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    const Bgvalue = useColorModeValue("primaryDark", "gray.300");
    const ColorValue = useColorModeValue("primaryDark", "#FFFFFF");

    const router = useRouter();

    const handelLogout = () => {
        // Do something
        router.push("/");
    };

    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={Bgvalue}
            borderBottomWidth="1px"
            borderBottomColor={Bgvalue}
            justifyContent={{ base: "space-between", md: "flex-end" }}
            {...rest}
        >
            <IconButton
                display={{ base: "flex", md: "none" }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text
                display={{ base: "flex", md: "none" }}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold"
            >
                {/* <Image src={hello} alt="" /> */}
            </Text>

            <HStack spacing={{ base: "0", md: "6" }}>
                <Flex alignItems="center">
                    <Menu>
                        {({ isOpen }) => (
                            <>
                                <MenuButton
                                    py={2}
                                    transition="all 0.3s"
                                    _focus={{ boxShadow: "none" }}
                                    isActive={isOpen}
                                    as={Button}
                                    // rightIcon={<FiChevronDown />}
                                >
                                    <HStack>
                                        <Avatar
                                            size="sm"
                                            src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                                        />
                                        <VStack
                                            display={{ base: "none", md: "flex" }}
                                            alignItems="flex-start"
                                            spacing="1px"
                                            ml="2"
                                        >
                                            <Text fontSize="sm" color={ColorValue}>
                                                name
                                            </Text>
                                            <Text fontSize="xs" color={ColorValue}>
                                                email
                                            </Text>
                                        </VStack>
                                        <Box display={{ base: "none", md: "flex" }}>
                                            <FiChevronDown />
                                        </Box>
                                    </HStack>
                                </MenuButton>
                                <MenuList bg={Bgvalue} color={ColorValue}>
                                    <MenuItem>Download</MenuItem>
                                    <MenuItem onClick={() => alert("Im Iron Man")}>
                                        Create a Copy
                                    </MenuItem>
                                    <MenuItem>Profile</MenuItem>
                                    <MenuItem>Settings</MenuItem>
                                    <MenuItem>Billing</MenuItem>
                                    <MenuItem>
                                        <DarkModeToggleSwitch />
                                    </MenuItem>

                                    <MenuDivider />
                                    <MenuItem>
                                        <p onClick={() => handelLogout()}>
                                            <Button>Sign out</Button>
                                        </p>
                                    </MenuItem>
                                </MenuList>
                            </>
                        )}
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};

export default NavItem;
