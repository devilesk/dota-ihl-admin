import React from 'react';
import { List, Datagrid, TextField, ReferenceField, NumberField, DateField } from 'react-admin';
import { Create, Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, NumberInput, DateInput } from 'react-admin';
import LeaderboardIcon from '@material-ui/icons/Assessment';

export const LeaderboardList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="leagueId" reference="Leagues">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField source="seasonId" reference="Seasons">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField source="userId" reference="Users">
                <TextField source="id" />
            </ReferenceField>
            <NumberField source="rating" />
            <NumberField source="wins" />
            <NumberField source="losses" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export const LeaderboardEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="leagueId" reference="Leagues">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="seasonId" reference="Seasons">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="userId" reference="Users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <NumberInput source="rating" />
            <NumberInput source="wins" />
            <NumberInput source="losses" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Edit>
);

export const LeaderboardCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="leagueId" reference="Leagues">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="seasonId" reference="Seasons">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="userId" reference="Users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <NumberInput source="rating" />
            <NumberInput source="wins" />
            <NumberInput source="losses" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Create>
);

export default {
    icon: LeaderboardIcon,
    list: LeaderboardList,
    edit: LeaderboardEdit,
    create: LeaderboardCreate,
};