import { useState, useEffect } from 'react';

export default function AllMemberCards({employee,setData, handleCardClick, selectedTeam, setSelectedTeam}){
    // console.log(employee)
    // const [data, setData] = useState(employee)
    const data = employee
    const teamOptions = [
        // {value:"", text:" -- Select Team -- "},
        {value:"A", text:"Team A"},
        {value:"B", text:"Team B"},
        {value:"C", text:"Team C"},
        {value:"D", text:"Team D"}
    ]
    function handleChange(e) {
        // console.log(e.target.value)
        setSelectedTeam(e.target.value)
    }
    let [currTeamMembersCount, setCurrTeamMembersCounts] = useState(data.reduce(countFun, 0))
    useEffect(() =>{setCurrTeamMembersCounts(data.reduce(countFun, 0))},[data, selectedTeam])
    function countFun(total, ele){
      return ele.teamName===selectedTeam?total+1:total
    }
    function Members(){
        
        const memberCards = data.map(ele => {
            return (
                <div className="member-card" style = {selectedTeam===ele.teamName ?{boxShadow:"0px 0px 1px 1px black"}:{boxShadow:"none"}} onClick={()=>handleCardClick(ele)}>
                    <img 
                        src={ele.gender === "Male"? "/images/maleIcon.png"                      :"/images/femaleIcon.png"} 
                        alt="Profile Icon"/>
                    <p><span>Full Name:</span> {ele.name}</p>
                    <p><span>Designation:</span> {ele.designation}</p>
                </div>
            )
        })
        return(
            <div className="card-group">
               {memberCards}
            </div>
        )
    }
    return (
        <div>
            <div className='brief-team'>
                <h1>Team Member Management</h1>
                <h2>Team {selectedTeam} has {currTeamMembersCount} members.</h2>
            </div>
            <form className='form-container'>
                <select name='team' id='teamform' onChange={handleChange}>
                    {teamOptions.map(ele => <option key = {ele.value} value = {ele.value}>{ele.text}</option>)}
                </select>
            </form>
            <hr style={{width:"70%",margin:" 20px auto"}}/>
            <Members/>
        </div>
    )
}