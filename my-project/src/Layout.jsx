import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import BannerText from "./components/Banner/BannerText";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

const Layout = () => {
    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <Hero />
            <Services />
            <Banner />
            <BannerText />
            <Blogs />
            <Footer />
        </main>
    )
}

export default Layout