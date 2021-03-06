import { useContext } from "react";
import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import ImageSlider from "../components/Carousel/ImageSlider"
import { SliderData } from '../components/Carousel/SliderData'
import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function Home() {
  const { state: { page: { title, products } } } = useContext(StoreContext);
  return (
    <Layout className="main-layout">
      {/* <Layout className="bg-gray">
        <NavBar />
      </Layout> */}
      <Layout className="bg-white" >
        <Layout className="bg-header">
          <Header className="container layout-header">
            <AppHeader className="container" title={title} />
          </Header>
        </Layout>
        <Content className="container layout-bigcontent ">
          {/* <NavBar /> */}
          <ImageSlider slides={SliderData}/>
          <Content className="layout-content">
            <ProductList products={products} />
          </Content>
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Home;
