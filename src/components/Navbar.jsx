//Lesson 10: Toast Component
//Lesson 10: Adding toast notification when logged out

import { UnlockIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from '@chakra-ui/react';

export default function Navbar() {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: 'Logged Out',
      description: 'Successfully logged out',
      duration: 4000,
      isClosable: true,
      status: 'success', //info,error
      position: 'top',
      icon: <UnlockIcon />,
    });
  };

  return (
    <>
      <Flex as='nav' p='10px' alignItems='center'>
        <Heading as='h1'>Dojo Tasks</Heading>

        <Spacer />

        <HStack spacing='20px'>
          <Box bg='pink.200' p='10px'>
            M
          </Box>
          <Text>mario@netninja.com</Text>
          <Button colorScheme='purple' onClick={showToast}>
            Logout
          </Button>
        </HStack>
      </Flex>

      {/* <Flex bg='gray.200' justify='space-between' wrap='wrap' gap='2'>
        <Box w='150px' h='50px' bg='red'>
          1
        </Box>
        <Box w='150px' h='50px' bg='yellow'>
          2
        </Box>
        <Box w='150px' h='50px' bg='green' flexGrow='1'>
          3
        </Box>
        <Box w='150px' h='50px' bg='purple' flexGrow='2'>
          4
        </Box>
      </Flex> */}
    </>
  );
}
