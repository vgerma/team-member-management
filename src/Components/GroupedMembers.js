import React from "react";
import { useState, useEffect } from "react";

export default function GroupedMembers({employees}){
    // const teams = ["Team A", "Team B", "Team C", "Team D"]
    const [selectedTeam, setSelectedTeam] = useState("A")
    const [selectedTeamCount, setSelectedTeamCount] = useState(employees.reduce(countFun, 0))

    useEffect(() =>{setSelectedTeamCount(employees.reduce(countFun, 0))},[selectedTeam])
    function countFun(total, ele){
        return ele.teamName===selectedTeam?total+1:total
    }

    const teamA = employees.filter(ele=>ele.teamName==="A")
    const teamB = employees.filter(ele=>ele.teamName==="B")
    const teamC = employees.filter(ele=>ele.teamName==="C")
    const teamD = employees.filter(ele=>ele.teamName==="D")
    function ParticularTeamData({team, teamName}){
        const [isOpen, setIsOpen] = useState(false)
        // console.log(team)
        const teamEle = team.map(ele=>(
            <div className="groupedmembers-details">
                <p><span>Full Name:</span> {ele.name}</p>
                <p><span>Designation:</span> {ele.designation}</p>
            </div>
        ))
        function handleTeamClick(team){
            setIsOpen(!isOpen)
            setSelectedTeam(team)
            // setSelectedTeamCount(employees.reduce(countFun, 0))
        }
        return(
            <div className="one-team">
                <button onClick = {()=>handleTeamClick(teamName)}>Team {teamName}</button><hr/>
                <div className="empty"></div>
                {isOpen && teamEle}

            </div>
        )
    }
    
    return(
        <div>
            <div className='brief-team'>
                <h1>Team Member Management</h1>
                <h2>Team {selectedTeam} has {selectedTeamCount} members.</h2>
            </div>
            <div className="all-teams">
                <ParticularTeamData team={teamA} teamName={"A"}/>
                <ParticularTeamData team={teamB} teamName={"B"}/>
                <ParticularTeamData team={teamC} teamName={"C"}/>
                <ParticularTeamData team={teamD} teamName={"D"}/>
            </div>
        </div>
    )
}