import React, { useState, useContext } from 'react';

import UserList from '../components/UserList.js'
import { AppContext } from '../router/AppContext'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const CustomerPage = () => {

    const classes = useStyles();

    const [name, setName] = useState("")
    const [person, setPerson] = useState("")

    const { customersList } = useContext(AppContext);

    const handleSearch = () => {
      let currCustomer = {
        name: name, 
        contactPerson: person
      }
      console.log(currCustomer)
      // currCustomer = currCustomer.filter(variable => variable !== "")
      // console.log(currCustomer)
    }

    

    return ( 
        <div className={classes.root}>
        <Grid container spacing={3}>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
                
                <TextField onChange={e => setName(e.target.value)} value={name} id="outlined-basic" label="Customer Name" variant="outlined" />
                <TextField onChange={e => setPerson(e.target.value)} value={person} id="outlined-basic" label="Contact Person" variant="outlined" />
                        <Button
                        variant="contained"
                        color="default"
                        onClick={handleSearch}
                        className={classes.button}
                        startIcon={<CloudUploadIcon />}
                        >
                        Search Customer
                    </Button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
                
                <Button
                        variant="contained"
                        color="default"
                        onClick={handleSearch}
                        className={classes.button}
                        startIcon={<CloudUploadIcon />}
                        >
                        ADD RECORD MODLE
                    </Button>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>

                {/* <UserList records={customersList} /> */}

            </Paper>
          </Grid>
        </Grid>
      </div>
        //     Customers

        // * Search customer FormField (By name itp)
        // * edit customer info

        
     );
}
 
export default CustomerPage
