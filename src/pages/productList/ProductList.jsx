import { DataGrid } from "@mui/x-data-grid"
import "./productList.css"
import { productRows } from "../../dummyData";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        // TODO:
        // send a post to the api to remove the data
        // if successful, set the data, if error, show an error
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 180, renderCell: (params) => {
            return (
                <div className="productListItem">
                    <img className="productListImg" src={params.row.img} alt="" />
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 100 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'price', headerName: 'Price', width: 120 },
        {
            field: 'action',
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/products/${params.row.id}`}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
    ];

    return (
        <div className="productList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
                checkboxSelection  
            />
        </div>
    )
}

export default ProductList