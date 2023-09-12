// ----Lesson 4, Grid: type 2 using Grid component
// ----Lesson  Condition: make side bar on left and content on right

import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';

export default function Dashboard() {
  const tasks = useLoaderData();

  return (
    <SimpleGrid spacing={10} minChildWidth='300px'>
      {/*1st ko task le taska ma data cha/chaina check garcha */}
      {tasks &&
        tasks.map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <Flex gap='5px'>
                <Box w='50px' h='50px'>
                  <Text>AV</Text>
                </Box>

                <Box>
                  <Heading as='h3' size='sm'>
                    {task.title}
                  </Heading>
                  <Text as='u'>By: {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color={'gray.500'}>
              <Text>{task.description}</Text>
            </CardBody>

            <Divider color='gray.200' />

            <CardFooter>
              <HStack>
                <Button colorScheme='pink' leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button
                  colorScheme='blue'
                  variant='outline'
                  leftIcon={<EditIcon />}
                >
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export const tasksLoader = async () => {
  const res = await fetch('http://localhost:3000/tasks');

  return res.json();
};
