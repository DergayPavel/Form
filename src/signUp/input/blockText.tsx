import SignUpBlock from './block/block';
import SignUpLabel from './text/text';

interface BlockTextType{
  text:string;
  state:boolean;
  setState: any;
}

function BlockText(props:BlockTextType) {
  return (
    <div className='blockText'>
        <SignUpLabel name={props.text}/>
        <SignUpBlock name={props.text} state={props.state} setState={props.setState}/>
      </div>
  );
}

export default BlockText;