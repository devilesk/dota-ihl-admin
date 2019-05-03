import React from 'react';
import { List, Datagrid, TextField, ReferenceField, DateField } from 'react-admin';
import { Create, Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, DateInput } from 'react-admin';
import ReputationIcon from '@material-ui/icons/Star';

export const ReputationList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
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

export const ReputationEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
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

export const ReputationCreate = props => (
    <Create {...props}>
        <SimpleForm>
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
    icon: ReputationIcon,
    list: ReputationList,
    edit: ReputationEdit,
    create: ReputationCreate,
};