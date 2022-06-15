import React from "react";
import styles from './app.module.css';
import {useLocation} from "react-router-dom";
import Header from "./components/main/header";
import Footer from "./components/main/footer";
import {LocationHandler} from "./hellperFunctions/LocationHandler";
import Routes from './routes'

const App = () => {

    const location = useLocation();

    return (
        <div className={styles['app-main']}>
            {!location.pathname.includes('/admin/') && <Header/>}
            <LocationHandler/>
            <Routes/>
            {!(location.pathname === '/sign-up' || location.pathname === '/sign-in' ||
                location.pathname === '/card-details' || location.pathname === '/email-verify' || location.pathname.includes('/admin/') ) && <Footer/>}
        </div>

    );
}

export default App;
