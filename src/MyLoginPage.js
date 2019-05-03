import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from 'react-admin';

class MyLoginPage extends Component {
    componentDidMount(){
        const credentials = { };
        this.props.userLogin(credentials);
    }

    render() {
        return (<div/>);
    }
};

export default connect(undefined, { userLogin })(MyLoginPage);