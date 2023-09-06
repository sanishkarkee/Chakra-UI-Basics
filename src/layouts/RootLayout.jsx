// ----Lesson 4, Grid: type 2 using Grid component
// ---- Condition: make side bar on left and content on right

import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Grid, GridItem } from '@chakra-ui/react';

export default function RootLayout() {
  return (
    <Grid templateColumns='repeat(6, 1fr)' bg='gray.50'>
      <GridItem as='aside' colSpan='1' bg='purple.400' minH='100vh' p='30px'>
        <span>Side bar</span>
      </GridItem>

      <GridItem as='main' colSpan='5' p='40px'>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
