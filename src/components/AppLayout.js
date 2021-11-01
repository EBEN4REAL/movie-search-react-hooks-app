import React from 'react';
import Header from "./AppHeader";
import Footer from  "./AppFooter";
import { MovieProvider } from '../contexts/MovieContext';


const  Layout = ({filtertext, children}) => {

    return (
        <div>
            <MovieProvider>
                <Header />
                    {children}
                <Footer />
            </MovieProvider>
        </div>
    )
}


export default Layout;