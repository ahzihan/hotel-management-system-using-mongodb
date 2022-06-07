
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [ email, setEmail ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [ signInWithEmailAndPassword, user ] = useSignInWithEmailAndPassword( auth );
  const provider = new GoogleAuthProvider();

  const handleEmail = event => {
    setEmail( event.target.value );
  };
  const handlePassword = event => {
    setPassword( event.target.value );
  };

  if ( user ) {
    navigate( from, { replace: true } );
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    signInWithEmailAndPassword( email, password );
  };
  const handleGoogleSignIn = event => {
    event.preventDefault();
    signInWithPopup( auth, provider )
      .then( result => {
        const user = result.user;
        if ( user ) {
          navigate( from, { replace: true } );
        }
      } ).catch( error => {
        console.error( error );
      } );
  };
  return (
    <div className="signup-form w-50 mx-auto my-5 p-3">
      <form onSubmit={handleFormSubmit} className="form-horizontal">
        <div className="row">
          <div className="">
            <h2 className="text-center">Login</h2>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-form-label d-block">Email Address</label>
          <div className="">
            <input onBlur={handleEmail} type="email" className="form-control" name="email" required="required" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-form-label d-block">Password</label>
          <div className="">
            <input onBlur={handlePassword} type="password" className="form-control" name="password" required="required" />
          </div>
        </div>
        <div className="form-group row">
          <div className="">
            <p><label className="form-check-label"><input type="checkbox" required="required" /> I accept the Terms of Use &amp; Privacy Policy</label></p>
            <button type="submit" className="btn btn-primary btn-lg">Login</button>
          </div>
        </div>
      </form>
      <div className="">I have no account? <Link to="/register">SignUp here</Link></div>
      <div className="or-seperator"><b>or</b></div>
      <p className="hint-text text-center">Login with your social media account or email address</p>
      <div className="social-btn text-center">
        <Link to="/login" className="btn btn-primary btn-lg">Facebook</Link>
        <Link to="/login" onClick={handleGoogleSignIn} className="btn btn-primary btn-lg btn-danger"> Google</Link>
      </div>
    </div>
  );
};

export default Login;
