export default function AddEmployee({data, setData}){
    
    function handleSubmit(event){
        const firstName = event.target.elements.firstName.value
        const lastName = event.target.elements.lastName.value
        const designation = event.target.elements.designation.value
        const gender = event.target.elements.gender.value
        const team = event.target.elements.team.value
        const updatedData = [...data, {
            id:data.length+1,
            name:firstName+" "+lastName,
            designation:designation,
            gender:gender,
            teamName:team
        }]
        setData(updatedData)
        localStorage.setItem('employeeData', JSON.stringify(updatedData));
        document.getElementById("add-employee-form").reset()
        window.alert(`Added ${firstName + " " +lastName} in Team ${team}.`)
        event.preventDefault()
    }
    return(
        <div>
            <form onSubmit={handleSubmit} id="add-employee-form">
                <label for = "firstName" className="label">First Name: </label><br/>
                <input type="text" id="firstName" placeholder="Enter First Name" required/><br/>
                
                <label for="lastName" className="label">Last Name: </label><br/>
                <input type="text" id="lastName" placeholder="Enter Last Name" required/><br/>
                
                <label for = "designation" className="label">Designation: </label><br/>
                <input type="text" id="designation" placeholder="Enter designation" required/><br/>

                <label for="teamName" className="label">Team</label><br/>
                <select name="team" id="teamName">
                    <option value={""}> -- Select Team -- </option>
                    <option value={"A"}>Team A</option>
                    <option value={"B"}>Team B</option>
                    <option value={"C"}>Team C</option>
                    <option value={"D"}>Team D</option>
                </select>
                <div className="gender">
                    <p className="label">Gender</p>
                    <input type="radio" name="gender" value={"Male"}/>
                    <label>Male</label><br/>
                    <input type="radio" name="gender" value={"Female"}/>
                    <label>Female</label><br/>
                </div>
                <div className="submit-button-container">
                    <button type="submit" >Submit</button>
                </div>
            </form>
        </div>
    )
}