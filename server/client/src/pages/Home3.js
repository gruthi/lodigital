import React, { Component } from 'react';
import "./Home.css";
import "./PageTemplate.css";

class Home extends Component {

    state={slide0: 0,
        slide1: 1,
        slide2: 2,
        slide3: 3,
        duration: 'ltr'
    };
    
    changeSlidePositionRTL = () => {
        if (this.state.duration === 'ltr') {
            this.setState({ duration: 'rtl' });
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
    changeSlidePositionLTR = () => {
        if (this.state.duration === 'rtl') {
            this.setState({ duration: 'ltr' });
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


    render(){
        const slides = [
            { name: 'First',  title: 'First item', description: 'Lorem ipsum', slidePosition: `slide slidePosition${this.state.slide0} ${this.state.duration}`},
            { name: 'Second', title: 'Second item', description: 'Lorem ipsum', slidePosition: `slide slidePosition${this.state.slide1} ${this.state.duration}`},
            { name: 'Three', title: 'Three item', description: 'Lorem ipsum', slidePosition: `slide slidePosition${this.state.slide2} ${this.state.duration}`},
            { name: 'Four', title: 'Four item', description: 'Lorem ipsum', slidePosition: `slide slidePosition${this.state.slide3} ${this.state.duration}`}
        ];
        
        return(
            <div className='HomePage pageTemplate'>
                <div className="slider">
                    {slides.map((slide, index) => 
                        <div name={slide.name} className={slide.slidePosition}  key={index} >
                            <div><h1>{slide.title}</h1></div>
                            <div className='desc'>{slide.description}</div>
                            {/* {console.log(slide.slidePosition)} */}
                        </div>)}
                    <button name='RTL' onClick={this.changeSlidePositionRTL}>click RTL</button>
                    <button name='LTR' onClick={this.changeSlidePositionLTR}>click LTR</button>
                </div>
            </div>
        )
    }
}

export default Home;
{/* <div className="container mt-3"> */}
