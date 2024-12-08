import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../assets/bg.png'
import pencil from '../assets/pencil.png'

const Hero = () => {
    return (
        <section className='py-20 max-padd-container xl:py-8'>
            <div className='flex-col gap-12 flexCenter xl:flex-row'>
                {/* left side */}
                <div className='flex flex-col flex-1 pt-12 xl:pt-32'>
                    <h1 className='h1 max-w-[46rem]'>
                        Discover <span className='inline-flex'>
                            <span className='inline-flex items-center justify-center p-5 h-16 w-16 bg-secondary text-white -rotate-[31deg] rounded-full'>B</span>ooks
                        </span>
                        <img className='relative inline-flex bottom-2' src={pencil} alt="" height={49} width={49} /> That Inspire Your World
                    </h1>
                    <p>Explore a world of stories, knowledge, and inspiration. Discover books that ignite your imagination, broaden your perspective, and enrich your journey. From timeless classics to modern masterpieces, find the perfect read for every moment</p>
                    <div className='mt-6'>
                        <Link to={'/store'} className='btn-secondaryOne'> Explore Now
                        </Link>
                    </div>
                </div>

                {/* right-side */}
                <div className='relative z-10 flex flex-1 top-12'>
                    <div>
                        <img src={bg} alt="" height={588} width={588} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
