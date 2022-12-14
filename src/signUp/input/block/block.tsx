import {useState } from "react";

interface SignUpBlocktType{
  name:string;
  state:boolean;
  setState:any;
}

function SignUpBlock(props:SignUpBlocktType) {
  const [texts, setTexts]=useState<any>('');
  
  const handleChangeTexts=(event:any)=>{
  setTexts(event.target.value);
  if(event.target.id==='First name'){
    if(event.target.value.length>3){
      props.setState(true);
    }
    else{
      props.setState(false);
    }
  }
  
  if(event.target.id==='Last name'){
    if(event.target.value.length>3){
      props.setState(true);
    }
    else{
      props.setState(false);
    }
  }

  if(event.target.id==='Email adress'){
      if(event.target.value.length>3 && event.target.value.includes('@')){
        props.setState(true);
      }
      else{
        props.setState(false);
      }
  } 
  }
  return (
    <input type="text" 
    name={props.name} 
    id={props.name} 
    placeholder={props.name} 
    className='SignUpBlock'
    onChange={(event)=>handleChangeTexts(event)}
    value={texts}
    />
  );
}

export default SignUpBlock;
