import React, { useState, useEffect, useContext } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import AppProvider from './router/AppContext';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Avatar from '@material-ui/core/Avatar';
import NotificationsIcon from '@material-ui/icons/Notifications';

import avatar from './images/user.jpg'

import ChurnPage from './pages/ChurnPage'
import HotlinePage from './pages/HotlinePage'
import SalesPage from './pages/SalesPage'
import ProcesPage from './pages/ProcesPage'
import CustomerPage from './pages/CustomerPage'

import { mainListItems } from './components/listItems';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));






export default function Dashboard() {
  

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <AppProvider>
            <Router>
                <div className={classes.root}>
                  <CssBaseline />
                  <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                      <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                      >
                        <MenuIcon />
                      </IconButton>
                      <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        SalesLols
                      </Typography>
                      <Avatar alt="user" src={avatar} />

                      <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                          <NotificationsIcon />
                        </Badge>

                      </IconButton>
                    </Toolbar>
                  </AppBar>
                  <Drawer
                    variant="permanent"
                    classes={{
                      paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                    }}
                    open={open}
                  >
                    <div className={classes.toolbarIcon}>
                      <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                      </IconButton>
                    </div>
                    <Divider />
                    <List>{mainListItems}</List>
                  </Drawer>
                  <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>

                      
                                
                                <Switch>
                                  <Route path="/" exact component={CustomerPage}/>
                                  <Route path="/proces" component={ProcesPage}/>
                                  <Route path="/churn" component={ChurnPage}/>
                                  <Route path="/hotline" component={HotlinePage}/>
                                  <Route path="/sales" component={SalesPage}/>
                                  <Route path="/" component={CustomerPage}/>                     
                                  </Switch>
                          </Container>
                                  </main>
                                  </div>
             </Router>
         </AppProvider>
        
      
    
  );
}


// import AppProvider from './AppContext';
// import Loading from './Loading'
// import Login from "../login-page/Login"
// import Signup from "../login-page/Signup"
// import Blog from "../blog-page/Blog.js"
// import HomePage from '../landing-page/HomePage'
// import ErrorPage from './ErrorPage'
// import ResetPassword from '../login-page/ResetPassword'
// import Dashboard from '../app/Dashboard'
// import AccountPage from '../app/AccountPage'
// import NotificationsPage from '../app/NotificationsPage'




// const App = () => {

//   const [isLoaded, setIsLoaded] = useState(false);
//   const toggle = () => setIsLoaded(!isLoaded)

//   useEffect(() => setTimeout(() => toggle(), 1000), []);
    
//   return ( 
//     <AppProvider>
//       <Router>
//             {isLoaded? (         
//                     <Switch>
//                       <Route path="/" exact component={HomePage}/>
//                       <Route path="/blog" component={Blog} />
//                       <Route path="/login" component={Login}/>
//                       <Route path="/resetpassword" component={ResetPassword}/>
//                       <Route path="/signup" component={Signup}/>
//                       <Route path="/dashboard" component={Dashboard}/>
//                       <Route path="/news" component={NotificationsPage}/>
//                       <Route path="/account" component={AccountPage}/>
//                       <Route path="/" component={ErrorPage}/>

//                     </Switch>
//               ) : (
//                 <Loading />
//               )}
//             </Router>
//         </AppProvider>
//    );
// }
 
// export default App;


   