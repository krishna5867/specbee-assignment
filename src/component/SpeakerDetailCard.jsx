import React from 'react'
import SocailIcons from './SocailIcons';

const SpeakerDetailCard = ({ image, name, designation, companyName, bio }) => {
    return (
        <div className='w-full flex flex-col md:flex-row justify-between gap-x-4 py-9 px-7'>
            <div className='flex items-center gap-x-4 w-fullborder border-gray-light border-b-2 md:border-b-0 md:border-r-2 pb-2 mb-2 w-full md:w-1/3 '>
                <div className='rounded-full overflow-hidden flex items-center'>
                    <img src={image} alt={name} />
                </div>
                <div className='flex flex-col gap-y-4 justify-between'>
                    <div>
                    <h1 className='text-lg lg:text-2xl font-bold'>{name}</h1>
                    <p className='text-lg font-semibold'>{designation}</p>
                    <p className='text-base font-normal text-gray-dark'>{companyName}</p>

                    </div>
                    <SocailIcons />
                </div>
            </div>
            <div className='max-w-4xl md:w-2/3 w-full'>
                <p className='text-lg lg:text-xl font-normal font-lora text-black leading-6'>{bio}</p>
            </div>
        </div>
    )
}

export default SpeakerDetailCard

