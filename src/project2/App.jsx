import React from 'react';
import {
    BrowserRouter as Router,Routes, Route
} from "react-router-dom";
import './index.css';

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Product = React.lazy(() => import("./pages/Product"));
const Contact = React.lazy(() => import("./pages/Contact"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));
const Address = React.lazy(() => import("./pages/Address"));
const MainLayout = React.lazy(() => import("./pages/MainLayout"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));


export default function CustomApp() {
    return (
        <React.Suspense>
        <Router>
            <Routes>
                <Route
                    element={<MainLayout />}
                    path=""
                >
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/product" element={<Product />}>
                        <Route path=":id" element={<ProductDetail/>}/>
                    </Route>
                    <Route path="/contact" element={<Contact />}>  
                        <Route path="address" element={<Address/>}/> 
                        <Route path="contact-us" element={<ContactUs/>}/> 
                    </Route>
                </Route>
                <Route path="*" element={<div>The page not found</div>}/>
                </Routes>
        </Router>
        </React.Suspense>
    )
}
