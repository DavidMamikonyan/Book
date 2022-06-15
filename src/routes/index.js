import {Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import AboutUs from "../pages/about-us";
import ProjectsPage from "../pages/projects";
import Production from "../pages/production";
import Library from "../pages/library";
import SingleBookPage from "../components/SingleBookPage";
import CreateBook from "../pages/createBook";
import CardDetails from "../pages/CardDetails";
import EmailVerify from "../pages/Auth/EmailVerify";
import ContactUs from "../pages/ContactUs";
import HowItWorks from "../pages/HowItWorks";
import MyAccount from "../pages/MyAccount";
import ProfileSettings from "../pages/ProfileSettings";
import Admin from "../pages/Admin";
import NotFound from "../pages/NotFound";
import React from "react";
import ProtectedRoute from './ProtectedRoute';



export default () => {

    return (
        <Routes>
            <Route path='*' element={<NotFound />} />
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about-us" element={<AboutUs/>}/>
            <Route exact path="/projects" element={<ProjectsPage/>}/>
            <Route exact path="/production" element={<Production/>}/>
            <Route
                path="/library"
                element={
                    <ProtectedRoute
                        redirectPath="/sign-in"
                        isAllowed={true}
                    >
                        <Library/>
                    </ProtectedRoute>
                }/>
            <Route exact path="/single-book-page" element={<SingleBookPage/>}/>
            <Route exact path="/create-book" element={<CreateBook/>}/>
            <Route exact path="/card-details" element={<CardDetails/>}/>
            <Route exact path="/email-verify" element={<EmailVerify/>}/>
            <Route exact path="/email-verify" element={<EmailVerify/>}/>
            <Route exact path="/contact-us" element={<ContactUs/>}/>
            <Route exact path="/how-it-works" element={<HowItWorks/>}/>
            <Route exact path="/my-account" element={<MyAccount/>}/>
            <Route exact path="/profile-settings" element={<ProfileSettings/>}/>
            <Route
                path="/admin/*"
                element={
                    <ProtectedRoute
                        redirectPath="/about-us"
                        isAllowed={true}
                        // isAllowed={!!user && user.roles.includes('admin')}
                    >
                        <Admin/>
                    </ProtectedRoute>
                }/>
        </Routes>
    );
}