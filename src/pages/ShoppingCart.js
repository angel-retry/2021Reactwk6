import { useContext,useEffect } from "react";
import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import CartModal from "../components/CartModal";
import { StoreContext } from "../store";

const { Header, Content, Footer } = Layout;

function ShoppingCart({ match }) {
   const { state: { cartItems }, dispatch } = useContext(StoreContext);   

   useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
   }, [cartItems])

   return (
      <Layout className=" main-layout">
         {/* <Layout className="bg-gray">
            <NavBar />
         </Layout> */}
         <Layout className="bg-white">  
            <Layout className="bg-header">
               <Header className="container layout-header">
                  <AppHeader title="ShoppingCart" />
               </Header>
            </Layout>   
            <Content className="container layout-bigcontent ">
               <NavBar />
               <Content className="layout-content">
                  <CartModal/>
               </Content>
            </Content>
            <Footer className="layout-footer">
               <AppFooter />
            </Footer>
         </Layout>
      </Layout>
   );
}

export default ShoppingCart;