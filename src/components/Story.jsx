import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap';
import Button from './Button';

const Story = () => {
  const frameRef = useRef('null');

  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0, 
      rotateY: 0,
      ease: 'power1.inOut'
    })
  }

  const handleMouseMove = (e) => {
    const {clientX , clientY} = e;
    const element = frameRef.current;

    if(!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX, rotateY,
      transformPerspective: 500,
      ease: 'power1.inOut'
    })
  }

  return (
    <div>
      <section id='story' className='min-h-dvh w-screen bg-zinc-950 text-blue-50'>
        <div className='flex size-full flex-col items-center py-10 pb-24'>
            <p className='font-general text-sm uppercase md:text-[10px]'>the Purple Mountain</p>

            <div className='relative size-full'>
                <AnimatedTitle
                title='li<b>g</b>ht and <br /> extremely bright g<b>a</b>laxies'
                sectionId="#story"
                containerClass='mt-5 pointer-events-none mix-blend-differnce relative z-10'
                />

                <div className='story-img-container'>
                    <div className='story-img-mask'>
                        <div className='story-img-content'>
                            <img
                            ref={frameRef}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseLeave}
                            onMouseEnter={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                            src='/img/entrance.webp'
                            alt='entrance'
                            className='object-contain'
                            />
                        </div>
                    </div>

                      {/* for the rounded corner */}
                    <svg
                      className="invisible absolute size-0"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <filter id="flt_tag">
                          <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="8"
                            result="blur"
                          />
                          <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="flt_tag"
                          />
                          <feComposite
                            in="SourceGraphic"
                            in2="flt_tag"
                            operator="atop"
                          />
                        </filter>
                      </defs>
                    </svg>

                </div>
            </div>

            <div className='-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end'>
              <div className='flex h-full w-fit flex-col items-center md:items-start'>
                <p className='mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start'>
                Team leader Qing-Hua Tan of the Purple Mountain Observatory explained that the project used a new technique to examine the distribution of light from distant and extremely bright galaxies.
                </p>
                <Button id="realm-button" title="discover space" containerClass="mt-5" />
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Story
