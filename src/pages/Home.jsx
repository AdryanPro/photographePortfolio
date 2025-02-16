import React from 'react'
import photographeHeader from '../assets/home/portfolioHeaderImg.png'
import zoomOnFace from '../assets/home/zoomOnFace.png'
import scrollDown from '../assets/home/scrollDown.png'
import "../css/home.css"
export default function Home() {
  return (
    <div className='mainWrapperHome'>
        <header className='headerHome'>
            <h1 className='h1TitleHome'>
                Julien <br />
                Pastouri
            </h1>
            <h2 className="underTitleHome">
                PHOTOGRAPHER <br />
                & VISUAL ARTIST
            </h2>
            <div className='fullbodyImgWrappe'>
                <img src={photographeHeader} alt="" />
                <img src={scrollDown} alt="" />
            </div>
            <img src={zoomOnFace} alt="" />
        </header>
    </div>
  )
}
