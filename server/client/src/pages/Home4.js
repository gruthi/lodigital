import React, { Component } from 'react';
import "./Home.css";
import "./PageTemplate.css";

class Home extends Component {

    state={
        slide0: 0,
        slide1: 1,
        slide2: 2,
        slide3: 3,
        direction: 'rtl',
        changeSlide: this.intervalSlide
    };
    
    
    
    intervalSlide = () => {
        
        let setIntervalSlide =
        this.state.direction === 'rtl'
        ?
        setInterval(this.changeSlideStandRTL, 4000)
        :
        setInterval(this.changeSlideStandLTR, 4000)
        console.log(setIntervalSlide);
        return setIntervalSlide;
    }

    componentDidMount = () => {
        // const IntervalRTL = setInterval(this.changeSlideStandRTL, 4000);
        this.intervalSlide();
    }
    
    componenWillMount = () => {
        this.state.direction === 'rtl'
        ?
        clearInterval(this.state.changeSlide)
        :
        clearInterval(this.state.changeSlide)
    }

    changeSlideStandRTL = () => {
        if (this.state.direction === 'ltr') {
            // clearInterval(this.state.changeSlide);
            this.setState({ direction: 'rtl' });
            this.intervalSlide();
        }
        else{
            this.setState({ 
                slide0: (this.state.slide0+3)%4,
                slide1: (this.state.slide1+3)%4,
                slide2: (this.state.slide2+3)%4,
                slide3: (this.state.slide3+3)%4
            });
        }
    }
    changeSlideStandLTR = () => {
        if (this.state.direction === 'rtl') {
            clearInterval(this.state.changeSlide);
            this.setState({ direction: 'ltr' });
            this.intervalSlide();
        }
        else{
            this.setState({
                slide0: (this.state.slide0+1)%4,
                slide1: (this.state.slide1+1)%4,
                slide2: (this.state.slide2+1)%4,
                slide3: (this.state.slide3+1)%4
            });
        }
    }
    
    
    // setInterval(this.changeSlideStandRTL, 4000);

    render(){
        const slides = [
            { name: 'First',  title: 'First item', description: 'Lorem ipsum', slideStand: `slide slideStand${this.state.slide0} ${this.state.direction}`},
            { name: 'Second', title: 'Second item', description: 'Lorem ipsum', slideStand: `slide slideStand${this.state.slide1} ${this.state.direction}`},
            { name: 'Three', title: 'Three item', description: 'Lorem ipsum', slideStand: `slide slideStand${this.state.slide2} ${this.state.direction}`},
            { name: 'Four', title: 'Four item', description: 'Lorem ipsum', slideStand: `slide slideStand${this.state.slide3} ${this.state.direction}`}
        ];
        
        return(
            <div className='HomePage pageTemplate'>
                <div className="slider">
                    {slides.map((slide, index) => 
                        <div name={slide.name} className={slide.slideStand}  key={index} >
                            <div><h1>{slide.title}</h1></div>
                            <div className='desc'>{slide.description}</div>
                            {/* {console.log(slide.slideStand)} */}
                        </div>)}
                    <button name='RTL' onClick={this.changeSlideStandRTL}>click RTL</button>
                    <button name='LTR' onClick={this.changeSlideStandLTR}>click LTR</button>
                </div>
            </div>
        )
    }
}

export default Home;