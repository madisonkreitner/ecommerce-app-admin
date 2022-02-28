import { Link } from "react-router-dom"
import "./product.css"
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@mui/icons-material"

const Product = () => {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart 
                        data={productData}
                        dataKey="Sales"
                        title="Sales"
                    />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://thumbor.forbes.com/thumbor/711x862/https://specials-images.forbesimg.com/imageserve/5e478b99f133f4000628ea66/AirPods-Pro-Transparency-mode-and-Live-Listen-act-as-a-hearing-aid-/960x0.jpg?fit=scale" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoKValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoKValue">3423</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoKValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoKValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" className="productInput" placeholder="Apple Airpods"/>
                        <label>In Stock</label>
                        <select name="inStock" id="inStock" className="productSelect">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active" className="productSelect">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://thumbor.forbes.com/thumbor/711x862/https://specials-images.forbesimg.com/imageserve/5e478b99f133f4000628ea66/AirPods-Pro-Transparency-mode-and-Live-Listen-act-as-a-hearing-aid-/960x0.jpg?fit=scale" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product