import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import CartSummary from "./CartSummary";
import { pageContentsSet, activeNavItemSet } from "../actions";
import { getJSON } from "../api";
import HeaderNavBar from "./HeaderNavBar";

export default function Header({ title }) {
  const { dispatch } = useContext(StoreContext);
  const onClickHeader = () => {
    pageContentsSet(dispatch, "NORDIC NEST Shopping Cart", getJSON("/"));
    activeNavItemSet(dispatch, "/");
  };

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="header-text" onClick={onClickHeader}>
          <Link to="/">
            <img className="header-logo" src="https://scontent.ftpe12-2.fna.fbcdn.net/v/t1.6435-9/170511365_847361936128209_625601099276302411_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=_iNwXZP7RsMAX8lyfmU&_nc_ht=scontent.ftpe12-2.fna&oh=8e91f13464f254ae8e6beb251bfb1dfd&oe=609C142B"></img>
            {/* <h1 className="header-title">{title}</h1> */}
          </Link>
          {/* <p className="header-slogan">An example made by Create-React-App.</p> */}
        </div>
        <HeaderNavBar />
        <CartSummary />
      </div>

      {/* <hr className="hr-header-line" /> */}
    </header>
  );
}
