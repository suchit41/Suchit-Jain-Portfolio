import React from 'react'
import { motion } from "framer-motion";
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

import Tilt from 'react-tilt'
import {services} from "../constants"
import {fadeIn,textVariant} from '../utils/motion'


const ServiceCard =({title,index,icon})=>{
  return(
    <Tilt classNames='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right","spring",0.5*index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
        options ={{
          max: 45,
          scale: 1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'

        >
          <img src={icon} alt={title}
          classNames="w-16 h-16 object contain"
          ></img>
          <h3 className='text-white text-[20px] font-bold text-center' >{title}</h3>

        </div>

      </motion.div>
    
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()} >
      <p className={styles.sectionSubText}>Intrduction
      <h2 className={styles.heroHeadText}>Overview</h2>
      </p>

    </motion.div>

    <motion.p
     variants={fadeIn("","",0.1,1)}
    className="m-4 text-secondary text-[17px]
    max-w-3xl leading-[30px]">
     Curious about the workings of the world and perpetually learning. I have got excellent analytical skills and problem solving ability. Able to delegate effectively and deliver on expectations. I understand the needs of requirement gathering and purpose driven analysis to gain valuable insights that will help in creating a better product.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10 '>
      {services.map((services,index)=>(
        <ServiceCard 
        key={services.title} index={index} {...services}>
        </ServiceCard>

      ))}

    </div>
    </>
  )
}

export default SectionWrapper(About,"about")