import React from 'react';
import { List, Datagrid, TextField, ReferenceField, DateField } from 'react-admin';
import { Create, Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, DateInput } from 'react-admin';
import CommendIcon from '@material-ui/icons/ThumbUp';

export const CommendList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="lobbyId" reference="Lobbies">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField source="recipientUserId" reference="Users">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField source="giverUserId" reference="Users">
                <TextField source="id" />
            </ReferenceField>
            <DateField source="timestamp" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export const CommendEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="lobbyId" reference="Lobbies">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="recipientUserId" reference="Users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="giverUserId" reference="Users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <DateInput source="timestamp" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Edit>
);

export const CommendCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="lobbyId" reference="Lobbies">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="recipientUserId" reference="Users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="giverUserId" reference="Users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <DateInput source="timestamp" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Create>
);

export default {
    icon: CommendIcon,
    list: CommendList,
    edit: CommendEdit,
    create: CommendCreate,
};