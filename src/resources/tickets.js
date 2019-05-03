import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField } from 'react-admin';
import { Create, Edit, SimpleForm, TextInput, NumberInput, DateInput } from 'react-admin';
import TicketIcon from '@material-ui/icons/Theaters';

export const TicketList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <NumberField source="leagueid" />
            <TextField source="name" />
            <DateField source="mostRecentActivity" />
            <DateField source="startTimestamp" />
            <DateField source="endTimestamp" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export const TicketEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <NumberInput source="leagueid" />
            <TextInput source="name" />
            <DateInput source="mostRecentActivity" />
            <DateInput source="startTimestamp" />
            <DateInput source="endTimestamp" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Edit>
);

export const TicketCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <NumberInput source="leagueid" />
            <TextInput source="name" />
            <DateInput source="mostRecentActivity" />
            <DateInput source="startTimestamp" />
            <DateInput source="endTimestamp" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Create>
);

export default {
    icon: TicketIcon,
    list: TicketList,
    edit: TicketEdit,
    create: TicketCreate,
};