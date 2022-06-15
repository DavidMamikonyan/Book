import React from "react";
import { BooleanField, Datagrid, DateField, List, NumberField, TextField } from 'react-admin';

export default () => (
    <List style={{ overflow: "scroll"}}>
        <Datagrid rowClick="edit">
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
            <DateField source="donated" />
            <TextField source="deadline" />
            <NumberField source="usersuggested" />
            <DateField source="audiocount" />
            <BooleanField source="isPdfAdded" />
            <TextField source="narrator" />
            <NumberField source="status" />
            <TextField source="genre" />
            <NumberField source="yearOfPublishing" />
            <TextField source="ISBN" />
            <TextField source="imageLink" />
        </Datagrid>
    </List>
);
