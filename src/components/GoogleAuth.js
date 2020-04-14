import React from 'react';

class GoogleAuth extends React.Component {

    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '560970423568-2q9i1uhu3tc8pbrdqsp9r81ln0101ng3.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            });
        });
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I dont know if we are signed in</div>
        } else if (this.state.isSignedIn) {
            return <div>I am signed In!</div>
        } else {
            return <div>I am not sighed in</div>
        }
    }

    render() {

        return <div>{this.renderAuthButton()}</div>
    }
}


export default GoogleAuth;