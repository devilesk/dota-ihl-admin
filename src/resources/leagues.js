import React from 'react';
import { List, Datagrid, TextField, ReferenceField, NumberField, DateField } from 'react-admin';
import { Create, Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, NumberInput, DateInput } from 'react-admin';
import LeagueIcon from '@material-ui/icons/LocationCity';

export const LeagueList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="guild_id" />
            <ReferenceField source="currentSeasonId" reference="Seasons">
                <TextField source="id" />
            </ReferenceField>
            <NumberField source="readyCheckTimeout" />
            <NumberField source="captainRankThreshold" />
            <TextField source="captainRoleRegexp" />
            <TextField source="categoryName" />
            <TextField source="channelName" />
            <TextField source="adminRoleName" />
            <NumberField source="initialRating" />
            <NumberField source="eloKFactor" />
            <TextField source="matchmakingSystem" />
            <TextField source="defaultGameMode" />
            <TextField source="lobbyNameTemplate" />
            <TextField source="draftOrder" />
            <NumberField source="leagueid" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export const LeagueEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="guild_id" />
            <ReferenceInput source="currentSeasonId" reference="Seasons">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <NumberInput source="readyCheckTimeout" />
            <NumberInput source="captainRankThreshold" />
            <TextInput source="captainRoleRegexp" />
            <TextInput source="categoryName" />
            <TextInput source="channelName" />
            <TextInput source="adminRoleName" />
            <NumberInput source="initialRating" />
            <NumberInput source="eloKFactor" />
            <TextInput source="matchmakingSystem" />
            <TextInput source="defaultGameMode" />
            <TextInput source="lobbyName_template" />
            <TextInput source="draft_order" />
            <TextInput source="leagueid" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Edit>
);

export const LeagueCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="guild_id" />
            <ReferenceInput source="currentSeasonId" reference="Seasons">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <NumberInput source="readyCheckTimeout" />
            <NumberInput source="captainRankThreshold" />
            <TextInput source="captainRoleRegexp" />
            <TextInput source="categoryName" />
            <TextInput source="channelName" />
            <TextInput source="adminRoleName" />
            <NumberInput source="initialRating" />
            <NumberInput source="eloKFactor" />
            <TextInput source="matchmakingSystem" />
            <TextInput source="defaultGameMode" />
            <TextInput source="lobbyName_template" />
            <TextInput source="draft_order" />
            <TextInput source="leagueid" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Create>
);

export default {
    icon: LeagueIcon,
    list: LeagueList,
    edit: LeagueEdit,
    create: LeagueCreate,
};