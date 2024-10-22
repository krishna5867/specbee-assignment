import React, { useState } from 'react'
import SpeakerCard from './SpeakerCard'
import ArrowImg from "../component/assets/arrow.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { speakersData } from "../component/utils/speakersData"
import Modal from './modal';
import SpeakerDetailCard from './SpeakerDetailCard';
import { settings } from './utils/sliderCarousel';

const Speakers = () => {
  const [currSpeaker, setCurrentSpeaker] = useState({});
  const [isModelOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (val) => {
    setCurrentSpeaker(val)
    setIsModalOpen(true)
  }

  const handleClose = () => {
    setCurrentSpeaker({});
    setIsModalOpen(false);
  }

  return (
    <div className="mx-auto max-w-7xl py-10 flex flex-col gap-y-14">
      <div>
        <h1 className='text-center text-3xl md:text-4xl font-bold font-Metropolis leading-9]'>View our Featured Speakers for the Event</h1>
        <p className='text-center text-lg font-normal leading-[18px'>Speakers are core contributors and industry thought leaders working at <span className='text-blue'>companies</span> that push for innovation.</p>
      </div>
      {isModelOpen && (
        <Modal onClick={handleClose}>
          <SpeakerDetailCard
            image={currSpeaker.image}
            name={currSpeaker.name}
            designation={currSpeaker.designation}
            companyName={currSpeaker.companyName}
            bio={currSpeaker.bio}
          />
        </Modal>
      )}
      <div className='mx-auto w-full px-6 rounded-[10px]'>
      <Slider {...settings} className='slick-slider rounded-[10px]'>
        {
          speakersData.map((speaker) => (
            <SpeakerCard
              key={speaker.companyName}
              image={speaker.image}
              name={speaker.name}
              designation={speaker.designation}
              companyName={speaker.companyName}
              onClick={() => handleOpenModal(speaker)}
            />
          ))
        }
      </Slider>
      </div>
      <div className='px-2'>
        <div className='flex items-baseline gap-x-10 max-w-3xl mx-auto'>
          <p className="font-normal text-lg text-black font-workSans leading-5 max-w-40">Click here to see the full program</p>
          <div className='w-1/2'>
            <button className='bg-blue text-white rounded-md md:rounded-[10px] md:py-[20px]md:px-[66px] h-14 text-base leading-none md:text-xl font-semibold w-full'>See the Program</button>
            <img src={ArrowImg} alt="arrow" className='relative -left-20 mt-3' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speakers