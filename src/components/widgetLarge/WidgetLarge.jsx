import "./widgetLarge.css"
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js"

const WidgetLarge = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get("orders");
                setOrders(res.data);
            } catch (error) { }
        }
        getOrders();
    }, []);

    const Button = ({ type }) => {
        return <button className={`widgetLargeButton ${type}`}>{type}</button>
    }
    return (
        <div className="widgetLarge">
            <h3 className="widgetLargeTitle">Latest Transactions</h3>
            <table className="widgetLargeTable">
                <tr className="widgetLargeTr">
                    <th className="widgetLargeTh">Customer</th>
                    <th className="widgetLargeTh">Date</th>
                    <th className="widgetLargeTh">Amount</th>
                    <th className="widgetLargeTh">Status</th>
                </tr>
                {
                    orders.map((order) => (
                        <tr className="widgetLargeTr">
                            <td className="widgetLargeUser">
                                <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLargeImg" />
                                <span className="widgetLargeName">{order.userId}</span>
                            </td>
                            <td className="widgetLargeDate">{format(order.createdAt)}</td>
                            <td className="widgetLargeAmount">${order.amount}</td>
                            <td className="widgetLargeStatus">
                                <Button type={order.status} />
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default WidgetLarge