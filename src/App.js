import Home from './pages/Home.js'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage.js';
import ServicesPage from './pages/ServicesPage.js';
import AboutPage from './pages/AboutPage.js';
import BlogsPage from './pages/BlogsPage.js';
import BlogDetailsPage from './pages/BlogDetails.js';
import ProductDetails from './pages/ProductDetails.js';
import ProductsPage from './pages/ProductsPage.js';
import CategoryProductsPage from './pages/CategoryProductsPage.js';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/category/:categoryName' element={<CategoryProductsPage />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blogs' element={<BlogsPage />} />
        <Route path='/blogDetails/:id' element={<BlogDetailsPage />} />
      </Routes>
    </>
  )
}

export default App;