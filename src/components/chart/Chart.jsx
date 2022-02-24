import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Jan',
      "Active User": 4000,
    },
    {
      name: 'Feb',
      "Active User": 4000,
    },
    {
      name: 'Mar',
      "Active User": 2000,
    },
    {
      name: 'Apr',
      "Active User": 3200,
    },
    {
      name: 'May',
      "Active User": 3400,
    },
    {
      name: 'Jun',
      "Active User": 4500,
    },
    {
      name: 'Jul',
      "Active User": 5100,
    },
    {
      name: 'Aug',
      "Active User": 4800,
    },
    {
      name: 'Sep',
      "Active User": 4500,
    },
    {
      name: 'Oct',
      "Active User": 5700,
    },
    {
      name: 'Nov',
      "Active User": 5100,
    },
    {
      name: 'Dec',
      "Active User": 5600,
    },
];

const Chart = () => {
    return (
        <div className="chart">
            <h3 className="chartTitle">User Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550BD"/>
                    <Line type="monotone" dataKey="Active User" stroke="#5550BD" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart