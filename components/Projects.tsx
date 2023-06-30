import React from 'react'

type Props = {}

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, i) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center pt-[240px] md:pt-[210px] lg:pt-[190px] xl:pt-[175px] 2xl:pt-[88px]'>
            <img 
            src="https://github.com/Ruheee/Talento/raw/master/assets/homepage.png" 
            alt="" 
            style={{ width: "40%", height: "auto" }}
          />

          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#7DE2D1]/50 '>Case Study {i + 1} of {projects.length}:
              </span>{" "}
              Job Search Platform
            </h4>

            <p className='text-lg text-center md:text-left'>Talento is a revolutionary job search platform that leverages the swipe mechanic from popular dating apps to streamline the job hunting process for both employers and job seekers.</p>
          </div>
        </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#7DE2D1]/10 left-0 h-[500px] -skew-y-12' />
    </div>
  );
}

export default Projects
