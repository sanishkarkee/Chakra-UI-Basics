// ----Lesson 6: add side bar contents
// ---- add links in sidebar to open different pages

import { AtSignIcon, CalendarIcon, EditIcon } from '@chakra-ui/icons';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <List color='white' fontSize='1.2em' spacing={4}>
      <ListItem>
        <NavLink to='/'>
          <ListIcon as={CalendarIcon} color={'white'} /> Dashboard
        </NavLink>
        {/* from react-router-dom */}
      </ListItem>
      <ListItem>
        <NavLink to='/create'>
          <ListIcon as={EditIcon} color={'white'} /> New Task
        </NavLink>{' '}
        {/* from react-router-dom */}
      </ListItem>
      <ListItem>
        <NavLink to='/profile'>
          <ListIcon as={AtSignIcon} color={'white'} /> Profile
        </NavLink>{' '}
        {/* from react-router-dom */}
      </ListItem>
    </List>
  );
}
