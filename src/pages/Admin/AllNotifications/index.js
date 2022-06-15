import React from "react";
import styles from './allNotifications.module.css';
import {DeleteButton,  Datagrid,  List,  TextField,EditButton, BooleanField, NumberField } from 'react-admin';

export default (props) => {
       console.log(props);
       return <List {...props} >
            <Datagrid >
                <TextField source="id" />
                <TextField source="nameEnglish" />
                <TextField source="nameArabic" />
                <TextField source="descriptionEnglish" />
                <TextField source="descriptionArabic" />
                <TextField source="authorEnglish" />
                <TextField source="authorArabic" />
                <TextField source="imageext" />
                <BooleanField source="isImage" />
                <NumberField source="kickoffPledge" />
                <TextField source="goal" />
                <TextField source="donated" />
                <TextField source="deadline" />
                <NumberField source="usersuggested" />
                <NumberField source="audiocount" />
                <BooleanField source="isPdfAdded" />
                <TextField source="narrator" />
                <TextField source="status" />
                <TextField source="genre" />
                <NumberField source="yearOfPublishing" />
                <TextField source="ISBN" />
                <TextField source="imageLink" />
                <EditButton basepath='/getAllNotifications'/>
                <DeleteButton basepath='/getAllNotifications'/>
            </Datagrid>
        </List>
}