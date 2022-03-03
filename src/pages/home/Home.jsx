import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import { userData } from "../../dummyData"
import WidgetSmall from "../../components/widgetSmall/WidgetSmall"
import WidgetLarge from "../../components/widgetLarge/WidgetLarge"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`;

const Home = () => {
    return (
        <>
            <Topbar />
            <Container>
                <Sidebar />
                <div className="home">
                    <FeaturedInfo />
                    <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
                    <div className="homeWidgets">
                        <WidgetSmall />
                        <WidgetLarge />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Home