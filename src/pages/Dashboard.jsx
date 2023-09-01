import { Heading, Text, Container, Box } from '@chakra-ui/react';

export default function Dashboard() {
  const boxStyles = {
    p: '10px',
    bg: 'purple.400',
    color: 'white',
    m: '10px',
    textAlign: 'center',
  };
  return (
    <Container as='Section' maxWidth='4xl' py='20px'>
      <Heading my='30px' p='10px'>
        Chakra UI Components
      </Heading>

      <Text marginLeft='30px'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, rem!</Text>

      <Text ml='30px' color='blue.300' fontWeight='bold'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, rem!
      </Text>

      <Box ml='30px' p='20px' bg='orange'>
        <Text color='white'>This is a box like DIV in css</Text>
      </Box>

      <Box sx={boxStyles}>like styled Components</Box>
    </Container>
  );
}
