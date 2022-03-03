import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../../dummyData";
import { DeleteOutline } from "@mui/icons-material";
import "./userList.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar";

const Container = styled.div`
    display: flex;
`;

const UserList = () => {
    const [data, setData] = useState(rows);

    const handleDelete = (id) => {
        // TODO:
        // send a post to the api to remove the data
        // if successful, set the data, if error, show an error
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 120, renderCell: (params) => {
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'transaction', headerName: 'Transaction Volume', width: 160 },
        {
            field: 'action',
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/users/${params.row.id}`}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
    ];
    

    return (
        <>
            <Topbar />
            <Container>
                <Sidebar />
                <div className="userList">
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        disableSelectionOnClick
                        checkboxSelection  
                        />
                </div>
            </Container>
        </>
    )
}

export default UserList