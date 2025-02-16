import React from 'react'
import "../css/home.css"
import photographeHeader from '../assets/home/portfolioHeaderImg.png'
import zoomOnFace from '../assets/home/zoomOnFace.png'
import scrollDown from '../assets/home/scrollDown.png'
import LatestWork1 from '../assets/home/LatestWork1.png'
import LatestWork2 from '../assets/home/LatestWork2.png'
import LatestWork3 from '../assets/home/LatestWork3.png'
import LatestWork4 from '../assets/home/LatestWork4.png'


export default function Home() {
    const services = [
        { id: "01", title: "PHOTO SHOOTING", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: "02", title: "VIDEO EDITING", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: "03", title: "ART DIRECTION", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
      ];
  return (
    <div className='mainWrapperHome'>
        <header className='headerHome'>
            <div className="titleWrapper">
                <h1 className='h1TitleHome'>
                    Julien <br />
                    <span className='moveTheWords'></span> Pastourri
                </h1>
                <h2 className="underTitleHome">
                    PHOTOGRAPHER <br />
                    <span className='moveTheWords'></span> & VISUAL ARTIST
                </h2>
            </div>
            <div className='fullbodyImgWrappe'>
                <img className='photographeHeaderPic' src={photographeHeader} alt="" />
                <img className='scrollDownPic' src={scrollDown} alt="" />
            </div>
            <div className="zoomfFaceWrapper">
                <img src={zoomOnFace} alt="" />
            </div>
        </header>
        
        <h1 className="h1Service">
                Services
            </h1>
        <div className="servicesContainer">
            {services.map((service, index) => (
                <div key={index} className="serviceItem">
                <div className="serviceTitleWrapper">
                    <span className="serviceNumber">{service.id}</span>
                    <h3 className="serviceTitle">{service.title}</h3>
                </div>
                <p className="serviceDescription">{service.description}</p>
                </div>
            ))}
        </div>
        <section className='LatestWork'>
            <div className="WrapperImg1et4">
                <div className="firstImg">
                    <h4 className='topTitle' >DANCING IN <br /> BLACK & White</h4>
                    <img src={LatestWork1} alt="" />
                    <p className='underImg'>New York</p>
                    <p className='underImg'>Octobre 2021</p>
                </div>
                <div className="secondImg">
                    <h4 className='topTitle' >FASHION Week</h4>
                    <img src={LatestWork4} alt="" />
                    <p className='underImg'>New York</p>
                    <p className='underImg'>Octobre 2021</p>
                </div>
            </div>

            <div className="WrapperImg2et3">
                <div className="firstImg">
                    <h4 className='topTitle' >STYLE & Fashion</h4>
                    <img src={LatestWork2} />
                    <p className='underImg'>New York</p>
                    <p className='underImg'>Octobre 2021</p>
                </div>
                <div className="secondImg">
                    <h4 className='topTitle' >ONE Eye</h4>
                    <img src={LatestWork3} />
                    <p className='underImg'>New York</p>
                    <p className='underImg'>Octobre 2021</p>
                </div>
            </div>
        </section>
    </div>
  )
}
