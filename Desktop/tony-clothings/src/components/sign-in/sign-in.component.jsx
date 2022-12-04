import React from "react";
import "./sign-in.styles.scss";
import { render } from '@testing-library/react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";


import { signInWithGoogle } from './../../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name] : value})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({email: "", password: ""})

    }

    render() {
        return (
          <div className="sign-in" onSubmit={this.handleSubmit}>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form>
              <FormInput
                name="email"
                type="email"
                value={this.state.email}
                handleChange={this.handleChange}
                label="email"
                required
              />

              <FormInput
                name="password"
                type="password"
                value={this.state.password}
                handleChange={this.handleChange}
                label="password"
                required
              />

              <div className="buttons">
                <CustomButton type="submit"> Sign in </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                  SIGN IN WITH GOOGLE
                </CustomButton>
              </div>
            </form>
          </div>
        );
    }
}

export default SignIn;