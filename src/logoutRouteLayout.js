import React, { Component } from 'react';

class LogoutRouteLayout extends Component {
    componentDidMount(){
        localStorage.removeItem('token');
    }
    
    render() {
        return (
            <center>
                <p>
                    <strong>
                        Logged out.
                    </strong>
                </p>
            </center>
        );
    }
}

export default LogoutRouteLayout