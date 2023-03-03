import React from "react";
import "./BannerSlider.css";
import Slider from "react-slick";
import fruitImage1 from "../../assets/caglar-oskay.jpg";
import fruitImage2 from "../../assets/javier-balseiro.jpg";
import fruitImage3 from "../../assets/mario-beqollari.jpg";
import fruitImage4 from "../../assets/philippe-gauthier.jpg";

function BannerSlider(){
    const data = [
        {
            id: 1, 
            image: {fruitImage1},
            title: "Fresh Friuts & Vegetable and many more...",
            descrption: "Providing freesh real time test of the fruits and many more...",
            button: "https:www.google.com"
        },
        {
            id: 2, 
            image: {fruitImage2},
            title: "Fresh Friuts & Vegetable and many more...",
            descrption: "Providing freesh real time test of the fruits and many more...",
            button: "https:www.google.com"
        },
        {
            id: 3, 
            image: {fruitImage3},
            title: "Fresh Friuts & Vegetable and many more...",
            descrption: "Providing freesh real time test of the fruits and many more...",
            button: "https:www.google.com"
        },
        {
            id: 4, 
            image: {fruitImage4},
            title: "Fresh Friuts & Vegetable and many more...",
            descrption: "Providing freesh real time test of the fruits and many more...",
            button: "https:www.google.com"
        }
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div className="bannerSlider">
            <Slider className="bannerSlider" {...settings}> 
                {
                    data.map(item=>{
                        return(
                            <div className="imageContainer" key={item.id}>

                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}

export default BannerSlider;