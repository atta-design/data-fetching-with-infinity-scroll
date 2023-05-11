import { useEffect, useState } from 'react';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import Loading from './Loading';
import '../assets/index.css';
import CloseIssueIcon from './CloseIssueIcon';
import IssueItem from './IssueItem';
var num=1
function IssueList({status}) {
  const[feching,setFeching]=useState(true)
  const [page] = useInfiniteScroll(feching);
 
  const[data,setData]=useState([])
  const[newdata,setnewData]=useState([])


  function fetchMoreListItems(page) {
    
    fetch(`http://localhost:9000/issues?page=${page}&issuesFilter=${status}`).then(res=>res.json())
    .then(res=>setnewData(res))

    setData([...data,...newdata])

  }


useEffect(()=>{
  fetchMoreListItems(page)
},[page])
useEffect(()=>{
  if(newdata.length!==0){
    setFeching(true)
    }else{setFeching(false)}
},[newdata])


  useEffect(()=>{
    fetch(`http://localhost:9000/issues?page=1&issuesFilter=${status}`).then(res=>res.json())
    .then(res=>setData(res))

setFeching(true)
  },[status])

console.log(data)



console.log(feching)


  return (
    <div >
    {data.length===0?<Loading />:
    data.map(data=><div key={Math.random()} className="issues" data-testid="issues">{data.title}</div>)}
     
      
      {
     }
    </div>
  );
  
}

export default IssueList;
