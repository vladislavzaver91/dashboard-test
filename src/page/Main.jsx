import Sidebar from "../components/Sidebar/Sidebar";
import Customers from '../components/Customers/Customers';

const Main = () => {
    return (
        <main className="main">
            <Sidebar />
            <Customers />
        </main>
    )
};

export default Main;