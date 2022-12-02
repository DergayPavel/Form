import SignUpLabel from './text/text';
import '../signUp.css';
import { useState } from 'react';
import eyeOpen from './open-eye.png';
import eyeClose from './close-eye.png';


interface BlockPasswordType{
    text:string;
    state:boolean;
    setState:any;
}

function BlockPassword(props:BlockPasswordType) {
    const[password,setPassword]=useState<any>('');
    
    const handleChangePassword=(event:any)=>{
        setPassword(event.target.value);
        let pass=event.target.value;
        let arrPass=pass.split('');
        let colNumber=0;
        let colLater=0;
        arrPass.map((item:any)=>{
            if(!isNaN(item)){
                colNumber+=1;
            }
            else{
                colLater+=1;
            }
        })

        if(colLater>2 && colNumber>0){
            props.setState(true);
        }
        else{
            props.setState(false);
        }
    }

    
    const [show,setShow]=useState(false);
    const showPassword=()=>{
        setShow(!show)
    }
    return (
    <div className='mainPassword'>
        <SignUpLabel name={props.text}/>
        <div className='blockPassword'>
            <input 
            type={show?'text':'password'}
            placeholder='Password'
            className='inputPassword'
            value={password}
            onChange={(event)=>handleChangePassword(event)}/>
            <img src={show? eyeOpen: eyeClose} 
            onClick={showPassword} 
            className='imgPassword'/>
        </div>
    </div>
    );
}

export default BlockPassword;