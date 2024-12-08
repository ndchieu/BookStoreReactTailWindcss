import React from 'react'
import Title from './Title'
import { TbTruckReturn } from 'react-icons/tb'
import about from '../assets/book_1.png'
const About = () => (
    <section className='py-12 max-padd-container xl:py-24'>
        {/* Container */}
        <div className='flex-col gap-16 flexCenter xl:gap-8 xl:flex-row'>
            {/* Left side */}
            <div className='flex-1 p-8'>
                <Title title1={'Unveiling Our '} title2={"Store's key features!"} titleStyles={'pb-10'} paraStyles={'!block'} />
                <p>From timeless classics to modern masterpieces, find the <br />
                    perfect read for every moment</p>

                <div className='flex flex-col items-start py-8 gap-y-4'>
                    <div className='flexCenter gap-x-4'>
                        <div className='h-16 rounded-md min-w-16 bg-secondaryOne flexCenter'>
                            <TbTruckReturn className='text-2xl' />
                        </div>
                        <div>
                            <h4 className='medium-18'>Easy Returns Process</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat possimus consectetur fuga quis delectus?</p>
                        </div>
                    </div>
                    <div className='flexCenter gap-x-4'>
                        <div className='h-16 rounded-md min-w-16 bg-secondaryOne flexCenter'>
                            <TbTruckReturn className='text-2xl' />
                        </div>
                        <div>
                            <h4 className='medium-18'>Secure Payment Options</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat possimus consectetur fuga quis delectus?</p>
                        </div>
                    </div>
                    <div className='flexCenter gap-x-4'>
                        <div className='h-16 rounded-md min-w-16 bg-secondaryOne flexCenter'>
                            <TbTruckReturn className='text-2xl' />
                        </div>
                        <div>
                            <h4 className='medium-18'>Live Customer Support</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat possimus consectetur fuga quis delectus?</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right side */}
            <div className='flex-1 flexCeter'>
                <div className='bg-secondaryOne flexCenter p-24 max-h-[33rem] max-w-[33rem] rounded-3xl'>
                    <img src={about} alt="aboutImg" height={244} width={244} className='rounded-lg shadow-2xl shadow-slate-900/50' />
                </div>
            </div>
        </div>
    </section>
)

export default About
