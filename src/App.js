import { BrowserRouter, Route, Link,  Routes } from 'react-router-dom';
import "./employeeData";
import './App.css';
import AllMemberCards from './Components/AllMemberCards';
import GroupedMembers from './Components/GroupedMembers';
import employeeData from './employeeData';
import { useState, useEffect} from 'react';
import AddEmployee from './Components/AddEmployee';

//whenever switch from home(1) --> teams(2) --> home(3) if in 1st step we change team 2 different team then switch to teams then when we go to 3rd step default value in form is not the one we previously selected but in header it shows prev selected value.
//In grouped members component we have to click the team 2 times to show the members and on first click only header changes,why??
//
//

function App() {
  const [selectedTeam, setSelectedTeam] = useState("A")
  const [data, setData] = useState(employeeData)
  useEffect(()=> {
    const storedData = localStorage.getItem('employeeData');
    if(storedData){
      setData(JSON.parse(storedData))
    }
  }, []);
  function handleCardClick(ele){
    // console.log(selectedTeam)
    // console.log(data)
    // console.log(ele)
    const newTeams = data.map(currEle=>{
        
      if(currEle.id===ele.id){
          return currEle.teamName === selectedTeam ? {...currEle, teamName:""}: {...currEle, teamName:selectedTeam}
      }else{
          return {...currEle}
      }
    })
    console.log(newTeams)
    setData(newTeams)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <div className='listLinks'>
          <ul>
            <li className='linksItems'><Link to="/">Home</Link></li>
            <li className='linksItems'><Link to = "allteams">Teams</Link></li>
            <li className='linksItems'><Link to="add_employee">Add Employee</Link></li>
          </ul>
        </div>
        
        <Routes>
          <Route exact path='/' element = {<AllMemberCards employee={data} setData = {setData} handleCardClick={handleCardClick} selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam}/>} />
          <Route exact path='allteams' element = {<GroupedMembers employees={data}/>}/>
          <Route exact path='add_employee' element={<AddEmployee data={data} setData={setData}/>}/>
        </Routes>
        
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
