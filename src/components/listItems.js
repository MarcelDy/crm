import React from 'react';

import { NavLink } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>


    <NavLink to='/'>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
    </NavLink>

    <NavLink to='/proces'>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Processes" />
      </ListItem>
    </NavLink>  

    <NavLink to='/hotline'>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Hotline" />
      </ListItem>
    </NavLink>

    <NavLink to='/churn'>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Churn" />
      </ListItem>
    </NavLink>

    <NavLink to='/sales'>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Sales Summary" />
      </ListItem>
    </NavLink>

  </div>
);