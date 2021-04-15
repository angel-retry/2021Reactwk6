import { useState } from "react";
import { Drawer } from "antd";
import NavItem from "./NavItem";
import HamMenu from "./HamMenu";
import { Link } from "react-router-dom";



export default function FootersNavBar() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    return (
        <div>
            <HamMenu
                onClick={() => setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch}
            />
            <div className="footernav-bar collapse-mobile">
                <NavItem to="/" className="footernav-item" activeClassName="nav-item--active">
                    首頁
                </NavItem>
                <NavItem to="/story" className="footernav-item" activeClassName="nav-item--active">
                    品牌故事
                </NavItem>
                <NavItem to="/problem" className="footernav-item" activeClassName="nav-item--active">
                    常見Q&A
                </NavItem>
                <Link to="StoreShop" className="footernav-item" >
                    商品一覽
                </Link>
                <NavItem to="/contact" className="footernav-item" activeClassName="nav-item--active">
                    聯絡我們
                </NavItem>
                <NavItem to="/line" className="footernav-item" activeClassName="nav-item--active">
                    LINE客服
                </NavItem>
            </div>
        </div>
    );
}