import React from 'react';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '560970423568-2q9i1uhu3tc8pbrdqsp9r81ln0101ng3.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    }

    render() {

        return <div>Google Auth</div>
    }
}


export default GoogleAuth;