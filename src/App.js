import React from "react";
import styles from './app.module.css';
import {LocationHandler} from "./hellperFunctions/LocationHandler";
import {Routes, Route, useLocation} from "react-router-dom";
import {Navbar} from "./components/main/header/Navbar";
import AboutUs from "./pages/about-us";
import Footer from "./components/main/footer";
import Home from "./pages/home";
import ProjectsPage from "./pages/projects";
import Library from './pages/library/index';
import SingleBookPage from "./components/SingleBookPage";
import Production from "./pages/production";
import CreateBook from "./pages/createBook";
import CardDetails from "./pages/CardDetails";
import ContactUs from "./pages/ContactUs";
import HowItWorks from "./pages/HowItWorks";
import EmailVerify from "./pages/Auth/EmailVerify";

function App() {
    const location = useLocation();

    return (
        <div className={styles['app-main']}>
            <Navbar/>
            <LocationHandler/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about-us" element={<AboutUs/>}/>
                <Route exact path="/projects" element={<ProjectsPage/>}/>
                <Route exact path="/production" element={<Production/>}/>
                <Route exact path="/library" element={<Library/>}/>
                <Route exact path="/single-book-page" element={<SingleBookPage/>}/>
                <Route exact path="/create-book" element={<CreateBook/>}/>
                <Route exact path="/card-details" element={<CardDetails/>}/>
                <Route exact path="/email-verify" element={<EmailVerify/>}/>
                <Route exact path="/email-verify" element={<EmailVerify/>}/>
                <Route exact path="/contact-us" element={<ContactUs/>}/>
                <Route exact path="/how-it-works" element={<HowItWorks/>}/>
            </Routes>
            {!(location.pathname === '/sign-up' || location.pathname === '/sign-in' ||
                location.pathname === '/card-details' || location.pathname === '/email-verify') && <Footer/>}
        </div>

    );
}

export default App;
