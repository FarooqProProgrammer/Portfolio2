import { Flex, Heading, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { BsBriefcase } from "react-icons/bs"
import { NavContext } from '../../hook/NavContext';

export default function About() {
  const { NavEnabled } = useContext(NavContext);

  return (
    <Flex
      width={'100%'}
      height={'100vh'}
      bgColor={'#8A2CE2'}
      justifyContent={'start'}
      alignItems={'start'}
      flexDirection={'column'}
      padding={20}
      overflowY={'auto'}
    >


      <Flex
        flexDirection={'column'}
        justifyContent={'start'}
        alignItems={'start'}
        gap={2}
      >
        <Heading className='text-white'>About Me</Heading>
        <Text
          color={'white'}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum aliquet, ultricies vulputate sociis montes arcu torquent nulla sociosqu.
          Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum aliquet, ultricies vulputate sociis montes arcu torquent nulla sociosqu.
          Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum aliquet, ultricies vulputate sociis montes arcu torquent nulla sociosqu.

        </Text>
      </Flex>

      <div className='w-full py-3  gap-2'>

        <div>
          <div className='w-full py-2 px-6'>
            <Text
              fontSize={{ 'lg': '4xl' }}
              color={'white'}
            >Education</Text>
          </div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#fff', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #8A2CE2' }}
              date="2011 - present"
              iconStyle={{ background: '#8A2CE2', color: '#fff' }}
              icon={<BsBriefcase />}
            >
              <h3 className="vertical-timeline-element-title text-[#8A2CE2]">University of Karachi</h3>
              <h4 className="text-xs text-[#8A2CE2]">Software Engineer</h4>
              <p className='text-[#8A2CE2]'>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit curae habitasse ut nascetur gravida, porta ornare nunc sed dui.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#fff', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #8A2CE2' }}
              date="2018 - 2020"
              iconStyle={{ background: '#8A2CE2', color: '#fff' }}
              icon={<BsBriefcase />}
            >
              <h3 className="vertical-timeline-element-title text-[#8A2CE2]">Punjab Group of Colleges</h3>
              <h4 className="text-xs text-[#8A2CE2]">ICS - Computer</h4>
              <p className='text-[#8A2CE2]'>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit curae habitasse ut nascetur gravida, porta ornare nunc sed dui.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>

        </div>
        <div>
          <div className='w-full py-2 px-6'>
            <Text
              fontSize={{ 'lg': '4xl' }}
              color={'white'}
            >Services</Text>
          </div>
          <VerticalTimeline
            className={`${NavEnabled && '-z-50'}`}
          >
            <VerticalTimelineElement
              className={` vertical-timeline-element--work`}
              style={{ zIndex: NavEnabled && -100 }}
              contentStyle={{ background: '#fff', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #8A2CE2' }}
              date="2022/12 - 2023/2"
              iconStyle={{ background: '#8A2CE2', color: '#fff' }}
              icon={<BsBriefcase />}
            >
              <h3 className="vertical-timeline-element-title text-[#8A2CE2]">Trainiship</h3>
              <h4 className="text-xs text-[#8A2CE2]">Fortify</h4>
              <p className='text-[#8A2CE2]'>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit curae habitasse ut nascetur gravida, porta ornare nunc sed dui.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#fff', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #8A2CE2' }}
              date="2023- 2023"
              iconStyle={{ background: '#8A2CE2', color: '#fff' }}
              icon={<BsBriefcase />}
            >
              <h3 className="vertical-timeline-element-title text-[#8A2CE2]">Internee.PK</h3>
              <h4 className="text-xs text-[#8A2CE2]">React Internship</h4>
              <p className='text-[#8A2CE2]'>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit curae habitasse ut nascetur gravida, porta ornare nunc sed dui.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>

        </div>

      </div>

    </Flex>
  )
}
