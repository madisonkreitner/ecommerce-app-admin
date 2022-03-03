import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material"
import { Link } from "react-router-dom"
import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar"
import "./user.css"

const Container = styled.div`
    display: flex;
`;

const User = () => {
    return (
        <>
            <Topbar />
            <Container>
                <Sidebar />
                <div className="user">
                    <div className="userTitleContainer">
                        <h1 className="userTitle">Edit User</h1>
                        <Link to="/newUser">
                            <button className="userAddButton">Create</button>
                        </Link>
                    </div>
                    <div className="userContainer">
                        <div className="userShow">
                            <div className="userShowTop">
                                <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png" alt="" className="userShowImg" />
                                <div className="userShowTopTitle">
                                    <span className="userShowUsername">Jon Snow</span>
                                    <span className="userShowUserTitle">Lord Commander</span>
                                </div>
                            </div>
                            <div className="userShowBottom">
                                <div className="userShowTitle">Account Details</div>
                                <div className="userShowInfo">
                                    <PermIdentity className="userShowIcon"/>
                                    <span className="userShowInfoTitle">jonsnow69</span>
                                </div>
                                <div className="userShowInfo">
                                    <CalendarToday className="userShowIcon"/>
                                    <span className="userShowInfoTitle">10.12.1999</span>
                                </div>
                                <div className="userShowTitle">Contact Details</div>
                                <div className="userShowInfo">
                                    <PhoneAndroid className="userShowIcon"/>
                                    <span className="userShowInfoTitle">+1 234 456 7890</span>
                                </div>
                                <div className="userShowInfo">
                                    <MailOutline className="userShowIcon"/>
                                    <span className="userShowInfoTitle">jon@gmail.com</span>
                                </div>
                                <div className="userShowInfo">
                                    <LocationSearching className="userShowIcon"/>
                                    <span className="userShowInfoTitle">Castle Black</span>
                                </div>
                            </div>
                        </div>
                        <div className="userUpdate">
                            <span className="userUpdateTitle">Edit</span>
                            <form action="" className="userUpdateForm">
                                <div className="userUpdateLeft">
                                    <div className="userUpdateItem">
                                        <label className="userUpdateLabel">Username</label>
                                        <input type="text" className="userUpdateInput" placeholder="jonsnow69"/>
                                    </div>
                                    <div className="userUpdateItem">
                                        <label className="userUpdateLabel">Full Name</label>
                                        <input type="text" className="userUpdateInput" placeholder="Jon Snow"/>
                                    </div>
                                    <div className="userUpdateItem">
                                        <label className="userUpdateLabel">Email</label>
                                        <input type="email" className="userUpdateInput" placeholder="jon@gmail.com"/>
                                    </div>
                                    <div className="userUpdateItem">
                                        <label className="userUpdateLabel">Phone</label>
                                        <input type="text" className="userUpdateInput" placeholder="+1 234 456 7890"/>
                                    </div>
                                    <div className="userUpdateItem">
                                        <label className="userUpdateLabel">Address</label>
                                        <input type="text" className="userUpdateInput" placeholder="Castle Black"/>
                                    </div>
                                </div>
                                <div className="userUpdateRight">
                                    <div className="userUpdateUpload">
                                        <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png" alt="" className="userUpdateImg" />
                                        <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                                        <input type="file" id="file" className="userUpdateInput" style={{ display:"none" }}/>
                                    </div>
                                    <button className="userUpdateButton">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default User