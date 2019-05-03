import React from 'react';
import { List, Datagrid, TextField, ReferenceField, NumberField, DateField } from 'react-admin';
import { Create, Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, NumberInput, DateInput } from 'react-admin';
import LobbyIcon from '@material-ui/icons/Room';

export const LobbyList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="leagueId" reference="Leagues">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField source="seasonId" reference="Seasons">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField source="botId" reference="Bots">
                <TextField source="id" />
            </ReferenceField>
            <TextField source="queueType" />
            <TextField source="lobbyName" />
            <TextField source="channelId" />
            <TextField source="roleId" />
            <TextField source="lobbyId" />
            <TextField source="password" />
            <DateField source="readyCheckTime" />
            <TextField source="state" />
            <TextField source="gameMode" />
            <TextField source="matchId" />
            <NumberField source="selectionPriority" />
            <NumberField source="playerFirstPick" />
            <NumberField source="firstPick" />
            <NumberField source="radiantFaction" />
            <NumberField source="winner" />
            <TextField source="failReason" />
            <ReferenceField source="captain1UserId" reference="Users">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField source="captain2UserId" reference="Users">
                <TextField source="id" />
            </ReferenceField>
            <DateField source="startedAt" />
            <TextField source="finishedAt" />
            <TextField source="valveData" />
            <TextField source="odotaData" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export const LobbyEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="leagueId" reference="Leagues">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="seasonId" reference="Seasons">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="botId" reference="Bots">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="queueType" />
            <DateInput source="lobbyName" />
            <DateInput source="channelId" />
            <DateInput source="roleId" />
            <DateInput source="lobbyId" />
            <TextInput source="password" />
            <TextInput source="readyCheckTime" />
            <TextInput source="state" />
            <TextInput source="gameMode" />
            <TextInput source="matchId" />
            <NumberInput source="selectionPriority" />
            <NumberInput source="playerFirstPick" />
            <NumberInput source="firstPick" />
            <NumberInput source="radiantFaction" />
            <NumberInput source="winner" />
            <TextInput source="failReason" />
            <ReferenceInput source="captain1UserId" reference="Users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="captain2UserId" reference="Users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="startedAt" />
            <TextInput source="finishedAt" />
            <TextInput source="valveData" />
            <TextInput source="odotaData" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Edit>
);

export const LobbyCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="leagueId" reference="Leagues">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="seasonId" reference="Seasons">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="botId" reference="Bots">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="queueType" />
            <DateInput source="lobbyName" />
            <DateInput source="channelId" />
            <DateInput source="roleId" />
            <DateInput source="lobbyId" />
            <TextInput source="password" />
            <TextInput source="readyCheckTime" />
            <TextInput source="state" />
            <TextInput source="gameMode" />
            <TextInput source="matchId" />
            <NumberInput source="selectionPriority" />
            <NumberInput source="playerFirstPick" />
            <NumberInput source="firstPick" />
            <NumberInput source="radiantFaction" />
            <NumberInput source="winner" />
            <TextInput source="failReason" />
            <ReferenceInput source="captain1UserId" reference="Users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="captain2UserId" reference="Users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="startedAt" />
            <TextInput source="finishedAt" />
            <TextInput source="valveData" />
            <TextInput source="odotaData" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Create>
);

export default {
    icon: LobbyIcon,
    list: LobbyList,
    edit: LobbyEdit,
    create: LobbyCreate,
};