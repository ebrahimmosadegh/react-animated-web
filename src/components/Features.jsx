const BentoCard = ({src, title, description, isComingSoon}) => {
    return(
        <div className='relative size-full'>
            <video
            src={src}
            loop
            muted
            autoPlay
            className='absolute left-0 top-0 size-full object-cover object-center'
            />
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
                <h1 className='bento-title special-font'>{title}</h1>
                {description && (
                    <p className='mt-3 max-w-64 text-xs md:text-base'>{description}</p>
                )}
            </div>
        </div>
    )
}
import React from 'react'

const Features = () => {
  return (
    <section className='bg-zinc-950 pb-52'>
      <div className='container mx-auto px-3 md:px-10'>
        <div className='px-5 py-32'>
            <p className='font-circular-web text-lg text-blue-50'>
            birth the universe's most monstrous galaxies
            </p>
        <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
        "Our findings take us closer to solving a long-standing mystery in astronomy that will redefine our understanding of how galaxies were created in the early universe."
        </p>
        </div>
      <div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
        <BentoCard
        src='videos/feature-1.mp4'
        title={<>di<b>s</b>cover</>}
        description='Astronomers have discovered that large flows of cold gas created by collisions between galaxies in the early universe may have forged some of the most monstrous star systems.'
        isComingSoon
        />
      </div>

      <div className='grid has-[135vh] grid-cols-2 grid-rows-3 gap-7'>
        <div className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
            <BentoCard 
            src="videos/feature-2.mp4"
            title={<>sc<b>i</b>entis</>}
            description="a team led by scientists from the University of Southampton may have scored a touchdown in this quest. They believe their research may finally solve this long-standing galactic puzzle."
            />
        </div>

        <div className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
            <BentoCard 
            src="videos/feature-3.mp4"
            title={<>gal<b>a</b>xies</>}
            description="Two disk galaxies smashing together caused gas – the fuel from which stars are formed – to sink towards their center, generating trillions of new stars, team member and the University of Southampton researcher Anna Puglisi said in a statement"
            />
        </div>

        <div className='bento-tilt_2 row-span-1 ms-32 md:col-span-1 md:ms-0'>
            <BentoCard 
            src="videos/feature-4.mp4"
            title={<>cos<b>m</b>ic</>}
            description="These cosmic collisions happened some eight to 12 billion years ago when the universe was in a much more active phase of its evolution."
            />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Features
