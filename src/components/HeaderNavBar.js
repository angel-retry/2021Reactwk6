import { useState } from "react";
import { Drawer } from "antd";
import HeaderNavItem from "./HeaderNavItem";
import HamMenu from "./HamMenu";
import { Link } from "react-router-dom";



export default function HeaderNavBar() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    return (
        <div>
            <HamMenu
                onClick={() => setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch}
            />
            <div className="headernav-bar collapse-mobile">
                <HeaderNavItem to="/" className="headernav-item" activeClassName="nav-item--active">
                    首頁
                </HeaderNavItem>
                <HeaderNavItem to="/story" className="headernav-item" activeClassName="nav-item--active">
                    品牌故事
                </HeaderNavItem>
                <HeaderNavItem to="/problem" className="headernav-item" activeClassName="nav-item--active">
                    常見Q&A
                </HeaderNavItem>
                <Link to="StoreShop" className="headernav-item" >
                    商品一覽
                </Link>
                <HeaderNavItem to="/contact" className="headernav-item" activeClassName="nav-item--active">
                    聯絡我們
                </HeaderNavItem>
                <HeaderNavItem to="/line" className="headernav-item" activeClassName="nav-item--active">
                    LINE客服
                </HeaderNavItem>
            </div>
        </div>
    );
}