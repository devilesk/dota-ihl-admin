import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField } from 'react-admin';
import { Create, Edit, SimpleForm, TextInput, NumberInput, DateInput } from 'react-admin';
import BotIcon from '@material-ui/icons/Android';

export const BotList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="steamId64" />
            <TextField source="accountName" />
            <TextField source="personaName" />
            <TextField source="password" />
            <TextField source="status" />
            <NumberField source="lobbyCount" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export const BotEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="steamId64" />
            <TextInput source="accountName" />
            <TextInput source="personaName" />
            <TextInput source="password" />
            <TextInput source="status" />
            <NumberInput source="lobbyCount" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Edit>
);

export const BotCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="steamId64" />
            <TextInput source="accountName" />
            <TextInput source="personaName" />
            <TextInput source="password" />
            <TextInput source="status" />
            <NumberInput source="lobbyCount" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Create>
);

export default {
    icon: BotIcon,
    list: BotList,
    edit: BotEdit,
    create: BotCreate,
};