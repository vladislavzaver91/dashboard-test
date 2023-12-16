import CustomersTable from "../CustomersTable/CustomersTable";
import Pagination from "../Pagination/Pagination";
import { SearchIcon } from "../../icons";
import { IoClose } from "react-icons/io5";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { useSidebarMenu } from "../../context/SidebarContext";

const Customers = () => {
    const { isOpen, setIsOpen } = useSidebarMenu();

    return (
        <div className="section">
            <div className="section-title_wrapper">
                <h2 className="section-title">Hello Evano 👋🏼,</h2>
                <button
                    className='sidebar-menu_btn'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <IoClose className="sidebar-menu_icon" />
                    ) : (
                        <RiMenuUnfoldLine className="sidebar-menu_icon" />
                    )}
                </button>
            </div>
            <div className="customers">
                <div className="customers_top-thumb">
                    <div className="customers-title_wrapper">
                        <h3 className='customer-title'>All Customers</h3>
                        <p className="customer-text">Active Members</p>
                    </div>
                    <div className="customers_search-input">
                        <img src={SearchIcon} alt="SearchIcon" />
                        <input
                            className='search-input'
                            type="text"
                            placeholder="Search" />
                    </div>
                </div>

                <CustomersTable />
                
                <div className="customers_bottom-thumb">
                    <p className="customers_total-data-text">
                        Showing data 1 to 8 of  256K entries
                    </p>

                    <Pagination />

                </div>
            </div>
        </div>
    )
};

export default Customers;