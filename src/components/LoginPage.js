import React from 'react';
import { connect } from 'react-redux';
import { startLoginFacebook, startLoginGithub, startLoginGoogle, startLoginTwitter } from '../actions/auth';

// Fonts (Font Awesome)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LoginPage = ({ startLoginFacebook, startLoginGithub, startLoginGoogle, startLoginTwitter }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <div className="box-layout__body">
                <div className="box-layout__body-login">
                    <button     
                        className="button-login button--facebook"
                        onClick={startLoginFacebook}
                    >
                        <FontAwesomeIcon icon={["fab", "facebook-f"]} pull="left"></FontAwesomeIcon>
                        Login with Facebook
                    </button>
                </div>
                <div className="box-layout__body-login">
                    <button
                        className="button-login button--github"
                        onClick={startLoginGithub}
                    >
                        <FontAwesomeIcon icon={["fab", "github"]} pull="left"></FontAwesomeIcon>
                        Login with Github
                    </button>
                </div>
                <div className="box-layout__body-login">
                    <button 
                        className="button-login button--google" 
                        onClick={startLoginGoogle}
                    >
                        <FontAwesomeIcon icon={["fab", "google"]} pull="left"></FontAwesomeIcon>
                        Login with Google
                    </button>
                </div>
                <div className="box-layout__body-login">
                    <button
                        className="button-login button--twitter"
                        onClick={startLoginTwitter}
                    >
                        <FontAwesomeIcon icon={["fab", "twitter"]} pull="left"></FontAwesomeIcon>
                        Login with Twitter
                    </button>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch)  => ({
    startLoginFacebook: () => dispatch(startLoginFacebook()),
    startLoginGithub: () => dispatch(startLoginGithub()),
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginTwitter: () => dispatch(startLoginTwitter())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);



