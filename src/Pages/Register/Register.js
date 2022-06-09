import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import 'react-toastify/dist/ReactToastify.css';
import './Registar.css';
import Loading from "../Shared/Loading/Loading";


const Register = () => {
  const [ email, setEmail ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  const [ confirmPassword, setConfirmPassword ] = useState( '' );
  const navigate = useNavigate();
  const [ error, setError ] = useState( '' );
  const [ agree, setAgree ] = useState( false );
  const [ createUserWithEmailAndPassword, user, loading ] = useCreateUserWithEmailAndPassword( auth, { sendEmailVerification: true } );

  if ( loading ) {
    return <Loading></Loading>;
  }
  const handleEmail = event => {
    setEmail( event.target.value );
  };
  const handlePassword = event => {
    setPassword( event.target.value );
  };
  const handleConfirmPassword = event => {
    setConfirmPassword( event.target.value );
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    if ( password !== confirmPassword ) {
      setError( 'Password did not match!, Please try again.' );
      return;
    }
    if ( password.length < 6 ) {
      setError( 'Password must be 6 character or long' );
      return;
    }
    createUserWithEmailAndPassword( email, password );
    toast( 'User created successfully.' );
    navigate( '/' );
  };
  return (
    <div className="signup-form w-50 mx-auto my-5 p-3">
      <form onSubmit={handleFormSubmit} className="form-horizontal">
        <div className="row">
          <div className="">
            <h2 className="text-center">Sign Up</h2>
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
          <label className="col-form-label d-block">Confirm Password</label>
          <div className="">
            <input onBlur={handleConfirmPassword} type="password" className="form-control" name="confirm_password" required="required" />
          </div>
          <p className="text-danger">{error}</p>
        </div>
        <div className="form-group row">
          <div className="">
            <p><label className={`ps-2 ${ agree ? '' : 'text-danger' }`}>
              <input onClick={() => setAgree( !agree )} type="checkbox" name="terms" /> I accept the Terms of Use &amp; Privacy Policy</label></p>
            <ToastContainer />
            <button disabled={!agree} type="submit" className="btn btn-primary btn-lg">Sign Up</button>
          </div>
        </div>
      </form>
      <div>Already have an account? <Link to="/login">Login here</Link></div>
      <div className="or-seperator"><b>or</b></div>
      <p className="hint-text text-center">Sign up with your social media account or email address</p>
      <div className="social-btn text-center">
        <a href="#" className="btn btn-primary btn-lg">Facebook</a>
        <a href="#" className="btn btn-primary btn-lg btn-danger"> Google</a>
      </div>
    </div>
  );
};

export default Register;
