import './CompArr.css';
import UserBlock from './UserBlock/UserBlock';

interface dataObj{
  id:number,
  name:string,
  lastname:string,
  online:boolean,
}

const data: Array<dataObj> = [
  { id: 0, name: "Alex", lastname: "QQQ", online: false },
  { id: 1, name: "Alex1", lastname: "QQQ1", online: true },
  { id: 2, name: "Alex2", lastname: "QQQ2", online: false },
  { id: 3, name: "Alex3", lastname: "QQQ3", online: true },
  { id: 4, name: "Alex4", lastname: "QQr", online: false },
  { id: 5, name: "Alex5", lastname: "QtQ1", online: true },
  { id: 6, name: "Alex6", lastname: "Qq2", online: false },
  { id: 7, name: "Alex7", lastname: "QyQ3", online: true },
];

  let creatUser=data.map((item, i)=>(<UserBlock info={item} index={i} length={data.length} key={i} />))

function CompArr() {
  return (
  <div className='displayUsers'>
    {creatUser}
  </div>
  );
}

export default CompArr;
