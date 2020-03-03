import React, { Component } from 'react';
import "./Home.css";
import "./PageTemplate.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

class Home extends Component {

    state={
        slide0: 0,
        slide1: 1,
        slide2: 2,
        slide3: 3,
        direction: 'rtl'
    };
    
    intervalSlide = () => {
        this.state.direction === 'rtl'
        ?
        this.setIntervalSlide = setInterval(this.changeSlideStandRTL, 4000)
        :
        this.setIntervalSlide = setInterval(this.changeSlideStandLTR, 4000)
    }

    componentDidMount = () => {
        this.intervalSlide();
    }

    changeSlideStandRTL = () => {
        if (this.state.direction === 'ltr') {
            clearInterval(this.setIntervalSlide);
            this.setState({ direction: 'rtl' }, () => {this.intervalSlide();});
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
            clearInterval(this.setIntervalSlide);
            this.setState({ direction: 'ltr' }, () => {this.intervalSlide();});
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
        // const slides = [
        //     { name: 'First',  title: 'First item', description: 'Lorem ipsum', slideStand: `slide slideStand${this.state.slide0} ${this.state.direction}`},
        //     { name: 'Second', title: 'Second item', description: 'Lorem ipsum', slideStand: `slide slideStand${this.state.slide1} ${this.state.direction}`},
        //     { name: 'Three', title: 'Three item', description: 'Lorem ipsum', slideStand: `slide slideStand${this.state.slide2} ${this.state.direction}`},
        //     { name: 'Four', title: 'Four item', description: 'Lorem ipsum', slideStand: `slide slideStand${this.state.slide3} ${this.state.direction}`}
        // ];

        const slides = [
            { name: 'First',  title: 'מיקום', description: <ul><li>המרכז לצעירים, רח' גרטבול, לוד</li><li><b>בקרוב במקומות נוספים!</b></li></ul>, slideStand: `slide slideStand${this.state.slide0} ${this.state.direction}`},
            { name: 'Second', title: 'קהל היעד', description: <p>מועמדים ללא רקע<br/>או עם רקע בסיסי בתכנות WEB,<br/>המעוניינים להתמקצע בתחום האינטרנט<br/>ובתכנות בעולם ה-<small>WEB</small>.</p>, slideStand: `slide slideStand${this.state.slide1} ${this.state.direction}`},
            { name: 'Three', title: 'יתרונות התכנית', description: <p>מסלול ייחודי שנבנה בהתאמה לצרכי השוק,<br/>ומעניק כרטיס כניסה לעולם הפיתוח Full stack</p>, slideStand: `slide slideStand${this.state.slide2} ${this.state.direction}`},
            { name: 'Four', title: 'לימוד רב ערוצי', description: <ul><li>שיעורים פרונטליים</li><li>שיעורי תרגול</li><li>שיעורי אונליין</li><li>עבודה עצמית בבית</li></ul>, slideStand: `slide slideStand${this.state.slide3} ${this.state.direction}`}
        ];
        
        return(
            <div className='HomePage pageTemplate'>
                <div className="slider">
                    {slides.map((slide, index) => 
                        <div name={slide.name} className={slide.slideStand}  key={index} >
                           <div>
                                <div className='senter'><h1>{slide.title}</h1></div>
                                <div className='desc text-senter'>{slide.description}</div>
                            </div>
                        </div>)}
                    {/* <button name='RTL' onClick={this.changeSlideStandRTL}>click RTL</button> */}
                    <div name='buttonRTL'  onClick={this.changeSlideStandRTL}> <IoIosArrowForward/></div>
                    <div name='buttonLTR' onClick={this.changeSlideStandLTR}><IoIosArrowBack/></div>
                    <Link to="/contactUs" ><div name='joinButton'>להצטרפות</div></Link>
                </div>
            </div>
        )
    }
}

export default Home;