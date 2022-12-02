import React from 'react';

interface SignUpLabelType{
  name:string;
}


function SignUpLabel(props:SignUpLabelType) {
  return (
    <label className='SignUpInputLable'>{props.name}</label>
  );
}

export default SignUpLabel;