import React from 'react';
import { List, Datagrid, TextField, ReferenceField, BooleanField, DateField } from 'react-admin';
import { Create, Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, BooleanInput, DateInput } from 'react-admin';
import SeasonIcon from '@material-ui/icons/Cloud';

export const SeasonList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="leagueId" reference="Leagues">
                <TextField source="id" />
            </ReferenceField>
            <TextField source="name" />
            <BooleanField source="active" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export const SeasonEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="leagueId" reference="Leagues">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="name" />
            <BooleanInput source="active" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Edit>
);

export const SeasonCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="leagueId" reference="Leagues">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="name" />
            <BooleanInput source="active" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Create>
);

export default {
    icon: SeasonIcon,
    list: SeasonList,
    edit: SeasonEdit,
    create: SeasonCreate,
};