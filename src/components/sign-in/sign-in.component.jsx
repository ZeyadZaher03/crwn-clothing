import React from "react";  
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "./../../firebase/firebase.utils";

import "./sign-in.styles.scss";


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error.message);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {

    const {email, password} = this.state;

    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            onChange={this.handleChange}
            value={email}
            label="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            label="password"
            onChange={this.handleChange}
            value={password}
            required
          />

          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in With google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn