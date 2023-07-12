"use client"

import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { services } from '@/constants';
import { fadeIn, textVariant } from '@/utils/motion';
import Image, { StaticImageData } from 'next/image';
import { SectionWrapper } from '@/hoc';

type ServiceCardProps = {
  index: number,
  title: string,
  icon: StaticImageData
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          //@ts-ignore
          options={{
            max: 45,
            scale: 1,
            speed: 400
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12
          min-h-[200px] flex justify-evenly items-center flex-col'
        >
          <Image
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className='sectionSubText'>Introduction</p>
        <h2 className='sectionHeadText'>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text=[17px max-w-3xl leading-[30px]'
      >
        I`m a software developer with great experience in the
        Javascript ecossytem. I have experience with Typescript
        ReactJS, React Native, NextJS, NodeJS and also with Java
        for some Webservices and Microsservices. I'm a quick leaner
        and passionated about build efficient and scalable products
        and solutions to help client's and improve people's life. Let's
        change the world together! 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');