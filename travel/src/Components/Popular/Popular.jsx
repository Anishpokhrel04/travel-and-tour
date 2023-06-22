import './popular.scss';

import {AiOutlineArrowLeft} from 'react-icons/ai';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {BsDot} from 'react-icons/bs';

//importing image
// import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpeg';
import img4 from '../../assets/img4.webp';
import img5 from '../../assets/img5.webp';

//using map function

const Data = [
  {
    id:1,
    imgSrc: img2,
    destTitle:'kathmandu',
    location: 'Nepal',
    grade: 'CUlTURAL RELAX'
  },

  {
    id:2,
    imgSrc: img3,
    destTitle:'kathmandu',
    location: 'Nepal',
    grade: 'CUlTURAL RELAX'
  },

  {
    id:3,
    imgSrc: img4,
    destTitle:'kathmandu',
    location: 'Nepal',
    grade: 'CUlTURAL RELAX'
  },

  {
    id:4,
    imgSrc: img5,
    destTitle:'kathmandu',
    location: 'Nepal',
    grade: 'CUlTURAL RELAX'
  },
]

const Popular = () => {
  return (
    <div className='popular section container'>
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className='secTitle'>popular Destination</h2>
            <p>From historical cities to natural specteculars, come see the best of the world!</p>
          </div>

          <div className="iconDiv flex">
            <AiOutlineArrowLeft className='icon leftIcon' />
            <AiOutlineArrowRight className= 'icon' />
          </div>
        </div>

        <div className="mainContent ">
          {
            Data.map((item)=>{
return(
  <div className="singleDestination grid" key={item.id}>
            <div className="destImage">
              <img src={item.imgSrc} alt="destination" />
              <div className="overlayInfo">
              <h3>{item.destTitle}</h3>
              <p>Lorem ipsum dolor sit amet.</p>
              <AiOutlineArrowRight className='icon'/>
            </div>
            </div>

            <div className="destFooter">
              <div className="number">01</div>
              <div className="destText flexs">
                <h6>{item.location}</h6>
                <span className='flex'>
                  <span className='dot'>
                    <BsDot className='icon'/>
                  </span>
                  {item.grade}
                </span>
              </div>
            </div>
            
          </div>
)
            })
          };
          
        </div>
      </div>
    </div>
  )
}

export default Popular
