import React from 'react';
import { LoginPage } from '../../components/LoginPage';
import { shallow } from 'enzyme';

let startLoginFacebook, startLoginGithub, startLoginGoogle, startLoginTwitter, wrapper;

beforeEach(() => {
    startLoginFacebook = jest.fn();
    startLoginGithub = jest.fn();
    startLoginGoogle = jest.fn();
    startLoginTwitter = jest.fn();
    wrapper = shallow(
        <LoginPage 
            startLoginFacebook={startLoginFacebook}
            startLoginGithub={startLoginGithub}
            startLoginGoogle={startLoginGoogle}
            startLoginTwitter={startLoginTwitter}
        />
    );
});

test('should render LoginPage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLoginFacebook on button click', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(startLoginFacebook).toHaveBeenCalled();
});

test('should call startLoginGithub on button click', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(startLoginGithub).toHaveBeenCalled();
});

test('should call startLoginGoogle on button click', () => {
    wrapper.find('button').at(2).simulate('click');
    expect(startLoginGoogle).toHaveBeenCalled();
});

test('should call startLoginTwitter on button click', () => {
    wrapper.find('button').at(3).simulate('click');
    expect(startLoginTwitter).toHaveBeenCalled();
});