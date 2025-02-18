import React from 'react'
import "../css/home.css"
import photographeHeader from '../assets/home/portfolioHeaderImg.png'
import zoomOnFace from '../assets/home/zoomOnFace.png'
import scrollDown from '../assets/home/scrollDown.png'
import LatestWork1 from '../assets/home/LatestWork1.png'
import LatestWork2 from '../assets/home/LatestWork2.png'
import LatestWork3 from '../assets/home/LatestWork3.png'
import LatestWork4 from '../assets/home/LatestWork4.png'
import exhibition1 from '../assets/home/exhibitions1.png'
import exhibition2 from '../assets/home/exhibition2.png'
import exhibition3 from '../assets/home/exhibition3.png'
import client1 from '../assets/home/client1.png'
import client2 from '../assets/home/client2.png'
import client3 from '../assets/home/client3.png'
import workTogether from '../assets/home/workTogether.png'
export default function Home() {
    const services = [
        { id: "01", title: "PHOTO SHOOTING", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: "02", title: "VIDEO EDITING", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: "03", title: "ART DIRECTION", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
      ];
    const exhibitions = [
    {
        city: "New York",
        venue: "Town Hall",
        year: "2022",
        title: "INDEPENDENT Beauty",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: { month: "Jun", day: "16" },
        image: exhibition1,
    },
    {
        city: "Berlin",
        venue: "Kunsthalle",
        year: "2022",
        title: "IN HUMANITY WE Trust",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: { month: "Mar", day: "02" },
        image: exhibition2,
    },
    {
        city: "Berlin",
        venue: "Kunsthalle",
        year: "2022",
        title: "BERLIN AT Night",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: { month: "Feb", day: "01" },
        image: exhibition3,
    },
    ];
    const clients = [
    {
        name: "Michelle Lindermann",
        role: "Photoshoot",
        feedback: "I Really Enjoyed Working With Jacob",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Laoreet sit amet cursus sit amet dictum sit amet justo.",
        image: client1,
    },
    {
        name: "Jarvis Jackson",
        role: "Art Direction",
        feedback: "I Really Enjoyed Working With Jacob",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: client2,
    },
    {
        name: "Daniela Borg",
        role: "Video Editing",
        feedback: "I Really Enjoyed Working With Jacob",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",
        image: client3,
    },
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

        {/* <h1 className="displayTilte1displayTilte">LATEST Work</h1> */}

        <div className="LatestWork-header">
            <h1>EXHIBITIONS<span className="red">'22</span></h1>
            {/* <a href="#viewall" className="view-all">View All →</a> */}
        </div>
        
        <section className='LatestWork'>
            <div className="WrapperImg1et4">
                <div className="firstImg">
                    <h4 className='topTitle' >DANCING IN <br /> BLACK & White</h4>
                    <img src={LatestWork1} alt="" />
                    <p className='underImg'>New York</p>
                    <p className='underImg'>Octobre 2021</p>
                </div>
                <div className="forthImg">
                    <h4 className='topTitle' >FASHION Week</h4>
                    <img src={LatestWork4} alt="" />
                    <p className='underImg'>New York</p>
                    <p className='underImg'>Octobre 2021</p>
                </div>
            </div>

            <div className="WrapperImg2et3">
                <div className="secondImg">
                    <h4 className='topTitle' >DANCING IN <br /> BLACK & White</h4>
                    <img src={LatestWork2} alt="" />
                    <p className='underImg'>New York</p>
                    <p className='underImg'>Octobre 2021</p>
                </div>
                <div className="thirdImg">
                    <h4 className='topTitle' >FASHION Week</h4>
                    <img src={LatestWork3} alt="" />
                    <p className='underImg'>New York</p>
                    <p className='underImg'>Octobre 2021</p>
                </div>
            </div>
        </section>

        <section className="exhibitions">
            <div className="exhibitions-header">
                <h1>EXHIBITIONS<span className="red">'22</span></h1>
                <a href="#viewall" className="view-all">
                View All →
                </a>
            </div>
            <div className="exhibition-list">
                {exhibitions.map((exhibit, index) => (
                <div className="exhibition-item" key={index}>
                    <img src={exhibit.image} alt={exhibit.title} className="exhibition-image" />
                    <div className="exhibition-details">
                    <p className="location">
                        {exhibit.city} — {exhibit.venue} — {exhibit.year}
                    </p>
                    <h2 className="title">
                        {exhibit.title.split(" ").map((word, i) =>
                        i === exhibit.title.split(" ").length - 1 ? (
                            <span key={i} className="highlight">{word}</span>
                        ) : (
                            `${word} `
                        )
                        )}
                    </h2>
                    <p className="description">{exhibit.description}</p>
                    <a href="#buy-ticket" className="buy-ticket">Buy Ticket →</a>
                    </div>
                    <div className="exhibition-date">
                    <span className="month">{exhibit.date.month}</span>
                    <span className="day">{exhibit.date.day}</span>
                    </div>
                </div>
                ))}
            </div>
        </section>
        <section className="clients">
      <div className="clients-header">
        <h1>
          WHAT MY CLIENTS <span className="red">Say</span>
        </h1>
        <p>WORKED WITH OVER <span className="red">50 CLIENTS</span> AROUND THE WORLD</p>
        <a href="#workwithme" className="btn-work">Work With Me →</a>
      </div>

      <div className="clients-list">
        {clients.map((clients, index) => (
          <div className="clients-item" key={index}>
            <img src={clients.image} alt={clients.name} className="client-image" />
            <div className="clients-details">
              <h2 className="feedback">
                <span className="quote-mark">“</span>{clients.feedback}
              </h2>
              <p className="description">{clients.description}</p>
              <p className="client-info">
                {clients.name} — <span className="role">{clients.role}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="workTogether">
        <img src={workTogether} alt="" />
        <h1>LET'S WORK <br /> <span className='red'>Together</span> </h1>
    </section>
    </div>
  )
}
