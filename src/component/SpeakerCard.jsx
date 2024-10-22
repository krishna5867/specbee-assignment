import React from 'react'

const SpeakerCard = ({ image, name, designation, companyName, onClick, imgClassName }) => {
    return (
        <div className='rounded-[11px]'>
            <div className='rounded-[11px] py-9 px-5 bg-white cursor-pointer' onClick={onClick}>
                <div className='flex flex-col items-center'>
                    <div className='w-[150px] h-[150px] rounded-full overflow-hidden flexjustify-center'>
                        <img src={image} alt={name} className={`${imgClassName}`} />
                    </div>
                    <div className='flex flex-col gap-y-1 mt-2 items-center'>
                        <h2 className='text-2xl font-bold'>{name}</h2>
                        <p className='text-lg font-semibold text-center'>{designation}</p>
                        <p className='text-base font-normal text-gray-dark'>{companyName}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpeakerCard