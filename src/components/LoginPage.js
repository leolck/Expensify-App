import React from 'react';
import { connect } from 'react-redux';
import { startLoginFacebook, startLoginGoogle, startLoginTwitter } from '../actions/auth';

// Fonts (Font Awesome)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LoginPage = ({ startLoginFacebook, startLoginGoogle, startLoginTwitter }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <div className="box-layout__body">
                <div className="box-layout__body-login">
                    <FontAwesomeIcon icon={["fab", "facebook-f"]}></FontAwesomeIcon>
                    <button
                        className="button-login button--facebook"
                        onClick={startLoginFacebook}
                    >
                        Login with Facebook
                    </button>
                </div>
                
                <div className="box-layout__body-login">
                    <FontAwesomeIcon icon={["fab", "google"]}></FontAwesomeIcon>
                    <button 
                        className="button-login button--google" 
                        onClick={startLoginGoogle}
                    >
                        Login with Google
                    </button>
                </div>
                <div className="box-layout__body-login">
                    <FontAwesomeIcon icon={["fab", "twitter"]}></FontAwesomeIcon>
                    <button
                        className="button button--twitter"
                        onClick={startLoginTwitter}
                    >
                        Login with Twitter
                    </button>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch)  => ({
    startLoginFacebook: () => dispatch(startLoginFacebook()),
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginTwitter: () => dispatch(startLoginTwitter())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);



