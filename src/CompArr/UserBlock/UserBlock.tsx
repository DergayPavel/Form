import userImg from './user.png'
import userImg2 from './user2.png'
import { Text1 } from './UserBlock.styled'

interface propsType{
  info:dataObj,
  index:number,
  length:number
}

interface dataObj{
  id:number,
  name:string,
  lastname:string,
  online:boolean,
}

function addImg(index:number,length:number){ 
  if(index===0 || index===length-1){
    return <img src={userImg2} alt='' className='imgUser'/>
  }
  else{
    return <img src={userImg} alt='' className='imgUser'/>
  }
}

function UserBlock(props:propsType) {
  return (
      <div className='userBlock'>
        <div>
          {addImg(props.index,props.length)}
        </div>
        <Text1 st={props.index===0||props.index===props.length-1?'custom':'origin'}>
          <div>{props.info.id}</div>
          <div>{props.info.name}</div>
          <div>{props.info.lastname}</div>
          <div>{props.info.online?'online':'offline'}</div>
        </Text1>
      </div>
    );
  }
  
  export default UserBlock;