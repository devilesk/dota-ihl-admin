import React from 'react';
import { connect } from 'react-redux';
import { userLogout } from 'react-admin';
import MenuItem from '@material-ui/core/MenuItem';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';

const MyLogoutButton = ({ userLogout, ...rest }) => (
    <MenuItem
        onClick={userLogout}
        //{...sanitizeRestProps(rest)}
    >
        <ExitIcon /> Logout
    </MenuItem>
);
//export default connect(undefined, { userLogout })(MyLogoutButton);
const myCustomUserLogout = () => userLogout('/logout');
export default connect(undefined, { userLogout: myCustomUserLogout })(MyLogoutButton);