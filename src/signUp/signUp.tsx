import SignUpBtn from './button/button';
import BlockText from './input/blockText';
import SignUpName from './name/name';
import './signUp.css';
import BlockPassword from './input/blockPassword';
import React, { useState,useEffect} from 'react';



function SignUp() {
  const [firstName,setFirstName]=useState<boolean>(false);
  const [lastName,setLastName]=useState<boolean>(false);
  const [email,setEmail]=useState<boolean>(false);
  const [password,setPassword]=useState<boolean>(false);
  let able=false;
  if(firstName && lastName && email && password){
    able=true;
  }

  console.log('firstName: ',firstName, ' lastName: ',lastName, ' email: ',email, ' password: ',password);

  return (
      <form className='SignUpForm'>
        <SignUpName/>
        <BlockText text='First name' state={firstName} setState={setFirstName}/>
        <BlockText text='Last name' state={lastName} setState={setLastName}/>
        <BlockText text='Email adress' state={email} setState={setEmail}/>
        <BlockPassword text='Password'state={password} setState={setPassword}/>
        <SignUpBtn able={able}/>
        <div className='SignUpCheckBoxBlock'>
          <input type="checkbox" 
          name="checkbox" 
          id="checkbox" 
          className='SignUpCheckBox'/>
          <label className='SignUpCheckBoxLable'>Already registered sign in?</label>
        </div>
      </form>
  );
}


export default SignUp;
