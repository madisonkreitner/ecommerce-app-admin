import { Visibility } from "@mui/icons-material"
import { useEffect, useState } from "react";
import "./widgetSmall.css"
import { userRequest } from "../../requestMethods"

const WidgetSmall = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get("users/?new=true");
                setUsers(res.data);
            } catch (error) { }
        }
        getUsers();
    }, []);
    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">New Members</span>
            <ul className="widgetSmallList">
                {
                    users.map((user) => (
                        <li className="widgetSmallListItem">
                            <img src={user.img || "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"} alt="" className="widgetSmallImg" />
                            <div className="widgetSmallUser">
                                <span className="widgetSmallUsername">{user.username}</span>
                            </div>
                            <button className="widgetSmallButton">
                                <Visibility className="widgetSmallIcon"/>
                                Display
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default WidgetSmall