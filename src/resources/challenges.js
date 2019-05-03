import React from 'react';
import { List, Datagrid, TextField, ReferenceField, BooleanField, DateField } from 'react-admin';
import { Create, Edit, SimpleForm, TextInput, BooleanInput, ReferenceInput, SelectInput, DateInput } from 'react-admin';
import ChallengeIcon from '@material-ui/icons/Whatshot';

export const ChallengeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <BooleanField source="accepted" />
            <ReferenceField source="recipientUserId" reference="Users">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField source="giverUserId" reference="Users">
                <TextField source="id" />
            </ReferenceField>
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export const ChallengeEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <BooleanInput source="accepted" />
            <ReferenceInput source="recipientUserId" reference="Users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="giverUserId" reference="Users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Edit>
);

export const ChallengeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <BooleanInput source="accepted" />
            <ReferenceInput source="recipientUserId" reference="Users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="giverUserId" reference="Users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Create>
);

export default {
    icon: ChallengeIcon,
    list: ChallengeList,
    edit: ChallengeEdit,
    create: ChallengeCreate,
};