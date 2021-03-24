import React, { useState } from 'react';

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


    return ( 
        <div className={classes.root}>
        <Grid container spacing={3}>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
                
                <TextField id="outlined-basic" label="Customer Name" variant="outlined" />
                <TextField id="outlined-basic" label="Contact Person" variant="outlined" />
                        <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<CloudUploadIcon />}
                        >
                        Upload
                    </Button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>
      </div>
        //     Customers

        // * Search customer FormField (By name itp)
        // * edit customer info

        
     );
}
 
export default CustomerPage
