import React, { useState, useContext } from 'react';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import { AppContext } from '../router/AppContext'

const ProcesPage = () => {

    const { productsList } = useContext(AppContext)

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
  


    //   if (!res[value.Id]) {
    //     res[value.Id] = { Id: value.Id, qty: 0 };
    //     result.push(res[value.Id])
    //   }
    //   res[value.Id].qty += value.qty;
    //   return res;
    // }, {});

    var result = [];

   productsList.reduce(function(res, value) {
    if (!res[value.productName]) {
        res[value.productName] = { productName: value.productName, price: 0 };
         result.push(res[value.productName])
        }
    res[value.productName].price += value.price;
  return res;
}, {});


    return ( 
        <div>
            Proces


            <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                This is a success message!
                </Alert>
            </Snackbar>


        </div>
     );
}
 
export default ProcesPage;