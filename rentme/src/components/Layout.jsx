import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home'; // Import your other content components here
import Services from './Services';
import Aboutus from './Aboutus';
import Testimonial from './Testimonial';

const ScrollToTop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
};

const Layout = () => {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={Aboutus} />
                <Route path="/services" exact component={Services} />
                <Route path="/blog" exact component={Testimonial} />
                {/* <Route path="/contact" exact component={ContactUs} /> */}
            </Switch>
        </Router>
    );
};

export default Layout;
