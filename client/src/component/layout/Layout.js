import React from "react";
// import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet";

const Layout = ({ children,title,description,keywords,author }) => {
  return (
    <div>
      <Helmet />
<meta charSet="utf-8"/>
       <meta name="description" content={description} />
       <meta name="keywords" content={keywords} />
       <meta name="author" content={author} />
     <title>{title}</title>
      <Helmet />
      <Header />
      <main style={{minHeight:"70vh"}}>
      <ToastContainer/>
        {children}
        </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;