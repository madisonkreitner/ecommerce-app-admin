import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar"
import "./newProduct.css"

const Container = styled.div`
    display: flex;
`;

const NewProduct = () => {
    return (
        <>
            <Topbar />
            <Container>
                <Sidebar />
                <div className="newProduct">
                    <h1 className="newProductTitle">New Product</h1>
                    <form className="newProductForm">
                        <div className="newProductFileUpload">
                            <label>Image</label>
                            <input type="file" id="file" />
                        </div>
                        <div className="newProductItem">
                            <label className="newProductLabel">Name</label>
                            <input type="text" placeholder="Apple Airpods" />
                        </div>
                        <div className="newProductItem">
                            <label className="newProductLabel">Stock</label>
                            <input type="text" placeholder="123" />
                        </div>
                        <div className="newProductItem">
                            <label>Active</label>
                            <select name="active" id="active" className="newProductSelect">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <button className="newProductButton">Create</button>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default NewProduct