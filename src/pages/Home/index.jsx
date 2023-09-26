import { Button } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { NavContext } from '../../hook/NavContext';

export default function Home() {
  const {NavEnabled} = useContext(NavContext);

  
  return (
    <section className=" body-font bg-firstColor">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            I'm Muhammad Farooq ,<br />  <span className='lg:text-4xl md:text-4xl sm:text-xl'>Full Stack Web Developer</span>
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag
            typewriter affogato, hella selvage wolf narwhal dreamcatcher.
          </p>
          <Button
            border={'1px solid #8A2CE2'}
            color={'#8A2CE2'}
            gap={2}
            zIndex={NavEnabled && -100}
          >
            More About Me
            <AiOutlineArrowRight />
          </Button>


        </div>
      </div>
    </section>

  )
}
