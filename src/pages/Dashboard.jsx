import { Heading, Text, Container, Box, SimpleGrid } from '@chakra-ui/react';

export default function Dashboard() {
  // const boxStyles = {
  //   p: '10px',
  //   bg: 'purple.400',
  //   color: 'white',
  //   m: '10px',
  //   textAlign: 'center',
  //   filter: 'blur(2px)',

  //   ':hover': {
  //     bg: 'blue.200',
  //     color: 'black',
  //   },
  // };

  return (
    <SimpleGrid p='10px' spacing={10} minChildWidth='250px'>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>

      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>

      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
    </SimpleGrid>
    // <Container as='Section' maxWidth='4xl' py='20px'>
    //   <Heading my='30px' p='10px'>
    //     Chakra UI Components
    //   </Heading>

    //   <Text marginLeft='30px'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, rem!</Text>

    //   <Text ml='30px' color='blue.300' fontWeight='bold'>
    //     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, rem!
    //   </Text>

    //   <Box ml='30px' p='20px' bg='orange'>
    //     <Text color='white'>This is a box like DIV in css</Text>
    //   </Box>

    //   <Box sx={boxStyles}>Hello, Ninjas!</Box>
    // </Container>
  );
}
