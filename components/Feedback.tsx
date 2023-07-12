"use client";

import { motion } from "framer-motion";

import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import { testimonials } from "@/constants";
import Image from "next/image";

type FeedbackCardProps = {
  index: number,
  testimonialData: {
    testimonial: string,
    name: string,
    designation: string,
    company: string,
    image: string
  }
}

const FeedbackCard = ({ index, testimonialData }: FeedbackCardProps) => {
  return (
    <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>
      
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">
          {testimonialData.testimonial}
        </p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {testimonialData.name}
            </p>

            <p className="mt-1 text-secondary text-[12px]">
              {testimonialData.designation} of {testimonialData.company}
            </p>
          </div>
          
          <Image
            src={testimonialData.image}
            alt={`feedback-by-${testimonialData.name}`}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  )
}

const Feedback = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className="padding bg-tertiary rounded-2xl min-h-[300px]">
        <motion.div variants={textVariant(0)}>
          <p className="sectionSubText">What others say</p>
          <h2 className="sectionHeadText">Testimonials.</h2>
        </motion.div>
      </div>

      <div className="paddingX -mt-20 pb-14 flex flex-wrap gap-7">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard 
            key={testimonial.name} 
            index={index} 
            testimonialData={testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedback, "");