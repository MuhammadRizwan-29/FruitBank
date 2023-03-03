import React from "react";
import BannerSlider from "../component/Banners/BannerSlider";
import Navbar from "../component/Navbar/Navbar";

function Home(){
    return(
        <div>
            <Navbar />
            <BannerSlider />
        </div>
    );
}

export default Home;