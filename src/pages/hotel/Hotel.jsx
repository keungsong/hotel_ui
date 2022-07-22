import './hotel.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import {MdLocationPin,MdArrowBackIosNew,MdArrowForwardIos} from 'react-icons/md'
import Footer from '../../components/footer/Footer'
import MailList from '../../components/mailList/MailList'
//import { useState } from 'react'


const hotel = () => {

  //const [slideNumber,setSlideNumber] = useState(0);
  //const [open,setOpen] = useState(false);
  const photos = [
    {
      src:"https://theculturetrip.com/wp-content/uploads/2021/06/kiridara-luang-prabang.jpg"
    },
    {
      src:"https://theculturetrip.com/wp-content/uploads/2021/06/kiridara-luang-prabang.jpg"
    },
    {
      src:"https://theculturetrip.com/wp-content/uploads/2021/06/kiridara-luang-prabang.jpg"
    },
    {
      src:"https://theculturetrip.com/wp-content/uploads/2021/06/kiridara-luang-prabang.jpg"
    }
  ]

  const handleOpen =(i)=>{
    //setSlideNumber(i);
   // setOpen(true);
  }
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className='hotelContainer'>
        { <div className='slider'>
             <MdArrowBackIosNew/>
            
           <div className='sliderWrapper'>
              <img src='' alt="" className='sliderImg' />
           </div>
           <MdArrowForwardIos/>
          </div>}
        <div className='hotelWrapper'>
          <button className='bookNow'>Reserve or Book now!</button>
          <h1 className='hotelTitle'>Luang Parbang hotel</h1>
          <div className='hotelAddress'>
            <MdLocationPin/>
            <span>Luang Parbang Mekong</span>

          </div>
          <span className='hotelDes'>Excellent location - 500m from you</span>
          <span className='hotelPriceHightlight'>Book a stay over ₭ 150,000 at this property and get a free airport taxi</span>
          <div className='hotelImages'>
            {
              photos.map((photo,i)=>(
                <div className='hotelImgWrapper'>
                  <img onClick={()=>handleOpen(i)} src={photo.src} alt="" 
                  className='hotelImg'/>
                </div>
              ))
            }
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailText'>
              <h1>Stay in the city</h1>
              <p className='hotelDesc'>Located a 5-minuts walk to the hotel from city</p>
            </div>
            <div className='hotelDetailPrice'>
              <h1>Perfect for a 1-night stay</h1>
              <span>Located in the city</span>
              <h2>
                <b>₭ 150,000</b>

              </h2>
              <button>Reserve or Book now</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default hotel