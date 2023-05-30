import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const   NavbarComp = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box boxShadow="sm">
      <Flex paddingX={4} paddingY={2} alignItems="center">
        <Heading size="md">Logo</Heading>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Services</Link>
        </Box>
        <IconButton
          aria-label="Open Drawer"
          display={{ base: "block", md: "none" }}
          icon={<HamburgerIcon />}
          onClick={handleDrawerToggle}
        />
      </Flex>
      <Drawer placement="left" isOpen={isDrawerOpen} onClose={handleDrawerToggle}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <VStack spacing={4} align="start">
                <Link href="#">Home</Link>
                <Link href="#">About</Link>
                <Link href="#">Contact</Link>
                <Link href="#">Services</Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default NavbarComp 



//Stack For Responsieness we write {[]} in this type and it starts from lower size to large size