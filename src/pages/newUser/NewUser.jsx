import "./newUser.css"

const NewUser = () => {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label className="newUserLabel">Username</label>
                    <input type="text" className="newUserInput" placeholder="Username" />
                </div>
                <div className="newUserItem">
                    <label className="newUserLabel">Full Name</label>
                    <input type="text" className="newUserInput" placeholder="Full Name" />
                </div>
                <div className="newUserItem">
                    <label className="newUserLabel">Email</label>
                    <input type="email" className="newUserInput" placeholder="email@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label className="newUserLabel">Password</label>
                    <input type="password" className="newUserInput" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label className="newUserLabel">Phone</label>
                    <input type="text" className="newUserInput" placeholder="+1 234 567 7890" />
                </div>
                <div className="newUserItem">
                    <label className="newUserLabel">Address</label>
                    <input type="text" className="newUserInput" placeholder="123 My Street" />
                </div>
                <div className="newUserItem">
                    <label className="newUserLabel">Gender</label>
                    <div className="newUserGender">
                        <input type="radio" className="newUserInput" name="gender" id="male" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" className="newUserInput" name="gender" id="female" value="female" />
                        <label for="female">Female</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser