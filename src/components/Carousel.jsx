import React, {useState} from "react";
import './Carousel.css';

import profileImg1 from "../assets/img_jonno.png";
import profileImg2 from "../assets/img_jenny.png";
import iconStar from "../assets/rating-star.png";
import iconButtonArrow from "../assets/button-arrow.png";

const CarouselCardComp = (props) => {
    const ratingStar = <img src={iconStar} alt="Rating" className="img-star"/>;

    //toggle slide position
    const currentSlidePosition = props.position[0]
    const amountOfSlide = props.position[1]
    const halfwayOfSlider = amountOfSlide%2 == 0 ? 
                            amountOfSlide / 2 : 
                            parseInt(amountOfSlide/2) + 1;

    const insertLeft = (currentSlidePosition - 1) * 100 - 
                       ((halfwayOfSlider - 1) * 100) + "%";

    return(
        <div className="slide-margin"
        style={{left: insertLeft}}>
            <div className="slide-card flex">
                <div className="testimony_container flex">
                    <img src={props.img} alt={props.user} className="testimony-pic" />
                    <div className="testimony_right-tab">
                        <div className="testimony-rating flex">
                            {[...Array(props.star)].map((e, i) => 
                            <span key={`star ${(i)}`}>{ratingStar}</span>)}
                        </div>
                        <p className="testimony-desc">
                            {`"${props.content}"`}
                        </p>
                        <p className="testimony-name">
                            {props.user}
                        </p>
                    </div>                                
                </div>
            </div>        
        </div>
    )
}

export const CarouselComp = () => {
    const amountOfSlide = 5;   //update per slide change
    const limitTop = parseInt(amountOfSlide / 2);
    const limitBottom = amountOfSlide%2 == 0 ? 
                        -(parseInt(amountOfSlide/2) - 1) :
                        -(parseInt(amountOfSlide/2));
    const [transformSlide, setTransformSlide] = useState(0);
    const [limiter, setLimiter] = useState(0);
    const [disableRight, setDisableRight] = useState(false);
    const [disableLeft, setDisableLeft] = useState(false);

    const toggleRight = () => {
        if(limiter < limitTop) {
            setDisableLeft(false)

            const xAxis = -limiter * 100 - 100;
            setTransformSlide(xAxis);
            setLimiter(limiter + 1);
        }
        (limiter == limitTop - 1 && setDisableRight(true))      
    }

    const toggleLeft = () => {
        if(limiter > limitBottom) {
            setDisableRight(false)

            const xAxis = -limiter * 100 + 100;
            setTransformSlide(xAxis);
            setLimiter(limiter - 1);
        }
        (limiter == limitBottom + 1 && setDisableLeft(true))
    }

    return(
        <div className="carousel_container">
            <div className="carousel_frame flex">
                <div className="carousel-slide"
                style={{transform: `translateX(${transformSlide}%)`}}>
                    <CarouselCardComp position={[1, 5]} 
                    img={profileImg1} star={5}
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                    user="Jonno Dee 32, Bromo"
                    />
                    <CarouselCardComp position={[2, 5]} 
                    img={profileImg2} star={5}
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                    user="Jenna Dee 32, Bromo"
                    /> 
                    <CarouselCardComp position={[3, 5]} 
                    img={profileImg1} star={5}
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                    user="Jonno Dee 32, Bromo"
                    /> 
                    <CarouselCardComp position={[4, 5]} 
                    img={profileImg2} star={5}
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                    user="Jenna Dee 32, Bromo"
                    /> 
                    <CarouselCardComp position={[5, 5]} 
                    img={profileImg1} star={5}
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                    user="Jonno Dee 32, Bromo"
                    />  
                    {/*Please update amountOfSlide in this 
                    component when you add or remove slide*/}              
                </div>
            </div>
            <div className="carousel_buttons flex">
                <button className={`carousel-button button-left ${!!disableLeft && "disable"}`} onClick={toggleLeft}>
                    <img src={iconButtonArrow} alt="slide left" className="arrow-filter"/></button>
                <button className={`carousel-button button-right ${!!disableRight && "disable"}`} onClick={toggleRight}>
                    <img src={iconButtonArrow} alt="slide right" className="arrow-filter"/></button>
            </div>           
        </div>
    )
}