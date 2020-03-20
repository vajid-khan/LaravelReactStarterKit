import React from 'react';

import Footer from './partials/footer';
import Header from './partials/header';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const masterLayout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default masterLayout;