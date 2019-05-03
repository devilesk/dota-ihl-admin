import React from 'react';
import { List, Datagrid, TextField, ReferenceField, NumberField, BooleanField, DateField } from 'react-admin';
import { Create, Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, NumberInput, BooleanInput, DateInput } from 'react-admin';
import UserIcon from '@material-ui/icons/Person';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="leagueId" reference="Leagues">
                <TextField source="id" />
            </ReferenceField>
            <TextField source="steamId64" />
            <TextField source="discordId" />
            <TextField source="nickname" />
            <NumberField source="role1" />
            <NumberField source="role2" />
            <NumberField source="role3" />
            <NumberField source="role4" />
            <NumberField source="role5" />
            <TextField source="queueTimeout" />
            <BooleanField source="vouched" />
            <NumberField source="rating" />
            <NumberField source="rankTier" />
            <TextField source="gameModePreference" />
            <NumberField source="commends" />
            <NumberField source="reputation" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="leagueId" reference="Leagues">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="steamId64" />
            <TextInput source="discordId" />
            <TextInput source="nickname" />
            <NumberInput source="role1" />
            <NumberInput source="role2" />
            <NumberInput source="role3" />
            <NumberInput source="role4" />
            <NumberInput source="role5" />
            <TextInput source="queueTimeout" />
            <BooleanInput source="vouched" />
            <NumberInput source="rating" />
            <NumberInput source="rankTier" />
            <TextInput source="gameModePreference" />
            <NumberInput source="commends" />
            <NumberInput source="reputation" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="leagueId" reference="Leagues">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="steamId64" />
            <TextInput source="discordId" />
            <TextInput source="nickname" />
            <NumberInput source="role1" />
            <NumberInput source="role2" />
            <NumberInput source="role3" />
            <NumberInput source="role4" />
            <NumberInput source="role5" />
            <TextInput source="queueTimeout" />
            <BooleanInput source="vouched" />
            <NumberInput source="rating" />
            <NumberInput source="rankTier" />
            <TextInput source="gameModePreference" />
            <NumberInput source="commends" />
            <NumberInput source="reputation" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Create>
);

export default {
    icon: UserIcon,
    list: UserList,
    edit: UserEdit,
    create: UserCreate,
};