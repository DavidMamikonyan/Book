// in src/App.js
import * as React from "react";
import {fetchUtils, Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import AllNotifications from './AllNotifications';
import EditAllNotifications from './AllNotifications/Edit';
import LastNotification from './LastNotification';
import EditLastNotification from './LastNotification/Edit';
import {useEffect} from "react";
import {authActions} from "../../redux/slice/auth";
import useHttp from "../../hooks/use-http";
import simpleRestProvider from 'ra-data-simple-rest';


// const dataProvider = jsonServerProvider('http://34.229.195.200:3000/books');
const dataProvider = simpleRestProvider('http://34.229.195.200:3000/books');
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


export default () => {

    const {error, sendRequest: sendUserData,} = useHttp();

    useEffect(() => {


        const fetchedData = (data) => {
            console.log(data);
        };

        sendUserData({
            method: 'GET',
            url: 'http://34.229.195.200:3000/books/getAllNotifications',
            // data: {
            //     "email": emailValue,
            //     "password": passwordValue,
            // }
        }, fetchedData);


    },[])


    return (
            <Admin basename="/admin" dataProvider={dataProvider}  >
                 <Resource name="getAllNotifications" list={AllNotifications} edit={EditAllNotifications}/>
               <Resource name="getLastNotification" list={LastNotification} edit={EditLastNotification} />
            </Admin>
        )
}

