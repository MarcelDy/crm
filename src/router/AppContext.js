import React, { createContext, useState } from 'react';
import axios from "axios";

export const AppContext = createContext();

const customers = [
    {
        id:1,
        name: "Bur na Morence",
        contactPerson: "Adaś",
    },
    {
        id:2,
        name: "Rowerek",
        contactPerson: "Karolek",
    },
    {
        id:3,
        name: "Night Club",
        contactPerson: "Barney",
    },
]

const processes = [
    {
        id:1,
        userId: 1,
        status: "open",
        openDate: '2020-09-11',
        closeDate: false,
        owner: "Jerry"
    },
    {
        id:2,
        userId: 1,
        status: "win",
        openDate: '2020-09-15',
        closeDate: '2020-10-15',
        owner: "Jerry"
    },
    {
        id:3,
        userId: 1,
        status: "lose",
        openDate: '2020-09-11',
        closeDate: '2020-09-11',
        owner: "Jerry"
    },
    {
        id:4,
        userId: 2,
        status: "win",
        openDate: '2020-09-15',
        closeDate: '2020-10-15',
        owner: "Tom"
    },
    {
        id:5,
        userId: 3,
        status: "lose",
        openDate: '2020-10-11',
        closeDate: '2020-11-11',
        owner: "Tom"
    }
]

const products = [
    {
        id:1,
        procesId: 1,
        productName: 'Apple',
        price: 100
    },
    {
        id:2,
        procesId: 1,
        productName: 'Cheese',
        price: 100
    },
    {
        id:3,
        procesId: 2,
        productName: 'Cheese',
        price: 150
    },
    {
        id:4,
        procesId: 3,
        productName: 'Apple',
        price: 160
    },
    {
        id:5,
        procesId: 4,
        productName: 'Apple',
        price: 120
    },
    {
        id:6,
        procesId: 4,
        productName: 'Cheese',
        price: 110
    },

]

const AppProvider = ({children}) => {


    //States
    const [isUserLogged, setIsUserLogged ] = useState(true)
    const [userData, setUserData] = useState([])
    const [dataAreFetched, setDataAreFetched] = useState(false)

    const [customersList, setCustomersList ] = useState(customers)
    const [processesList, setProcessesList ] = useState(processes)
    const [productsList, setProductsList ] = useState(products)

    

    //States Functions
   
    const toggleSetUserData = () => {
        if(isUserLogged) {
            refreshLists()
        }
    }

    const toggleLoggedState = () => setIsUserLogged(prevValue => !prevValue);
    


      
  


   

    //Functions
    const refreshLists = () => {
        axios
          .get("/api/walletlist/")
          .then((res) => {
            setUserData(res.data);
          }) 
          .catch((err) => setDataAreFetched(false));
      };



    return (
        <AppContext.Provider value={{ 
            isUserLogged, 
            toggleLoggedState, 
            userData, 
            toggleSetUserData, 
            dataAreFetched, 
            setDataAreFetched, 
            productsList,
            processesList,
            customersList

            }}>
            {children}
        </AppContext.Provider>
    )
};

export default AppProvider;