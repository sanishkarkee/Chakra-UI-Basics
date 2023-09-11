// ----Lesson 4, Grid: type 2 using Grid component
// ----Lesson  Condition: make side bar on left and content on right

// ----Lesson 6: add side bar contents
// ---- add links in sidebar to open different pages

import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Grid, GridItem } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';

export default function RootLayout() {
  return (
    <Grid templateColumns='repeat(6, 1fr)' bg='gray.50'>
      <GridItem
        as='aside'
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg='purple.400'
        minH='100vh'
        p={{ base: '20px', lg: '30px' }}
      >
        <Sidebar />
      </GridItem>

      <GridItem as='main' colSpan={{ base: 6, lg: 4, xl: 5 }} p='40px'>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
