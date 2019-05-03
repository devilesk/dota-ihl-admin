import React from 'react';
import { List, Datagrid, TextField, ReferenceField, BooleanField, DateField } from 'react-admin';
import { Create, Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, BooleanInput, DateInput } from 'react-admin';
import QueueIcon from '@material-ui/icons/LowPriority';

export const QueueList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="leagueId" reference="Leagues">
                <TextField source="id" />
            </ReferenceField>
            <BooleanField source="enabled" />
            <DateField source="timestamp" />
            <TextField source="queueType" />
            <TextField source="queueName" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export const QueueEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="leagueId" reference="Leagues">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <BooleanInput source="enabled" />
            <DateInput source="timestamp" />
            <TextInput source="queueType" />
            <TextInput source="queueName" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Edit>
);

export const QueueCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="leagueId" reference="Leagues">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <BooleanInput source="enabled" />
            <DateInput source="timestamp" />
            <TextInput source="queueType" />
            <TextInput source="queueName" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Create>
);

export default {
    icon: QueueIcon,
    list: QueueList,
    edit: QueueEdit,
    create: QueueCreate,
};