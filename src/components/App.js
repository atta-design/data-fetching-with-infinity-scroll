import OpenIssueIcon from './OpenIssueIcon';
import CloseIssueIcon from './CloseIssueIcon';
import IssueList from './IssueList';
import '../assets/index.css'
import { useState } from 'react';
function App() {
  const [status,setStatus]=useState(0)
  const openHandler=()=>{
    setStatus(1)

  }
  const closeHandler=()=>{
    setStatus(2)

  }
  return (
    <div className="container">
      <div className="box">
        <div className="box-header">
          <div  data-testid="open-issues" className="open-issues" onClick={openHandler}>
            <OpenIssueIcon /> Open
          </div>
          <div data-testid="close-issues" className="close-issues" onClick={closeHandler}>
            <CloseIssueIcon /> Closed
          </div>
        </div>

        <IssueList status={status} />
      </div>
    </div>
  );
}

export default App;
