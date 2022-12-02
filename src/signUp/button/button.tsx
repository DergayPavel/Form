import '../signUp.css';
import { Button } from './Button.stuled';
interface btnType{
  able:boolean
}

function SignUpBtn(props:btnType) {
  const clicBtn=()=>{
    console.log()
  };

  return (
    <Button state={props.able} disabled={!props.able} onClick={clicBtn} type='button'>Sign Up</Button>
  );
}

export default SignUpBtn;