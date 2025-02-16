import React from 'react'
import photographeHeader from '../assets/home/portfolioHeaderImg.png'
import zoomOnFace from '../assets/home/zoomOnFace.png'
import scrollDown from '../assets/home/scrollDown.png'
import "../css/home.css"
export default function Home() {

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

    </div>
  )
}
