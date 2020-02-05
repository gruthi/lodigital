import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import computer2Img from '../images/computer2.jpg'
import computer3Img from '../images/computer3.jpg'
import computer4Img from '../images/computer4.jpg'
import "./Home.css";
import "./PageTemplate.css";

 
class Home extends Component {
    render() {
        return (
         <div className="Home">
              
            <Carousel infiniteLoop={true} autoPlay={true} interval={4000} transitionTime={500}>
                <div>
                    <img src={computer2Img} alt="Los Angeles"/>
                    {/* <img src={computer2Img} alt="Los Angeles"/> */}
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={computer3Img} alt="Los Angeles"/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={computer4Img} alt="Los Angeles"/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
          </div> 
        );
    }
};

// function Home(){
    
//   return (
    
//     <div className="Home PageTemplate">
//         <div className="container mt-3">

           
//             <div id="myCarousel" className="carousel slide" data-ride="carousel">

//                 {/* <!-- Indicators --> */}
//                 <ul className="carousel-indicators">
//                     <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
//                     <li data-target="#myCarousel" data-slide-to="1"></li>
//                     <li data-target="#myCarousel" data-slide-to="2"></li>
//                 </ul>
                
//                 {/* <!-- The slideshow --> */}
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                     <img src={computer2Img} alt="Los Angeles" width="1100" height="500"/>
//                     </div>
//                     <div className="carousel-item">
//                     <img src={computer3Img} alt="Chicago" width="1100" height="500"/>
//                     </div>
//                     <div className="carousel-item">
//                     <img src={computer4Img} alt="New York" width="1100" height="500"/>
//                     </div>
//                 </div>
                
//                 {/* <!-- Left and right controls --> */}
//                 <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
//                     <span className="carousel-control-prev-icon"></span>
//                 </a>
//                 <a className="carousel-control-next" href="#myCarousel" data-slide="next">
//                     <span className="carousel-control-next-icon"></span>
//                 </a>
//                 </div>

//                 </div>

//     </div>
//   );
// };

export default Home;
