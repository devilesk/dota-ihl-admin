import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

export default () => (
    <Card>
        <CardHeader title="Welcome to the dota-ihl administration" />
        <CardContent>
            <Button href="/logs">
                <LibraryBooksIcon style={{ paddingRight: '0.5em' }} />
                Logs
            </Button>
        </CardContent>
    </Card>
);