import { useSidebarMenu } from "../../context/SidebarContext";
import { ArrowRight, ArrowRightActive, Discount, Key, LogoIcon, Question, Square, UserSquare, Wallet,  } from "../../icons";
import { UserPhoto } from "../../images";

const Sidebar = () => {
    const { isOpen } = useSidebarMenu();

    return (
        <div className={`${'sidebar'} ${isOpen ? 'active' : ""}`}>
            <div className="logo">
                <img src={LogoIcon} alt="LogoIcon" />
                <h1 className="logo-title">Dashboard<span className="logo-title_text">v.01</span></h1>
            </div>
            <nav className="sidebar_nav">
                <ul className="nav-list">
                    <li className="nav-list_item">
                        <img src={Key} alt="Key" />
                        <a href="" className="nav-list-item_link">Dashboard</a>
                    </li>
                    <li className="nav-list_item">
                        <img src={Square} alt="Square" />
                        <a href="" className="nav-list-item_link">Product
                        </a>
                        <img className='link-icon-arrow' src={ArrowRight} alt="ArrowRight" />
                    </li>
                    <li className="nav-list_item active">
                        <img src={UserSquare} alt="UserSquare" />
                        <a href="" className="nav-list-item_link">Customers
                        </a>
                        <img className='link-icon-arrow' src={ArrowRightActive} alt="ArrowRight" />
                    </li>
                    <li className="nav-list_item">
                        <img src={Wallet} alt="Wallet" />
                        <a href="" className="nav-list-item_link">Income
                        </a>
                        <img className='link-icon-arrow' src={ArrowRight} alt="ArrowRight" />
                    </li>
                    <li className="nav-list_item">
                        <img src={Discount} alt="Discount" />
                        <a href="" className="nav-list-item_link">Promote
                        </a>
                        <img className='link-icon-arrow' src={ArrowRight} alt="ArrowRight" />
                    </li>
                    <li className="nav-list_item">
                        <img src={Question} alt="Question" />
                        <a href="" className="nav-list-item_link">Help
                        </a>
                        <img className='link-icon-arrow' src={ArrowRight} alt="ArrowRight" />
                    </li>
                </ul>
            </nav>
            <div className="user_container">
                <img src={UserPhoto} alt="User" width={42} height={42} />
                <div className="user_info">
                    <h3 className="user-info_title">
                        Evano
                    </h3>
                    <p className="user-info_text">
                        Project Manager
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;