import React from 'react';
import Navbar from '../navbar';
import Header from '../header';
import About from '../about';
import Clients from '../clients';
import Partners from '../partners';
import Contato from '../contato';
import Footer from '../footer';

function Home () {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Clients />
            <Partners />
            <Contato />
            <Footer />
        </>
    )
}

export default Home;