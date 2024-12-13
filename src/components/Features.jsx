import { useRef, useState } from 'react'
import { TiLocation } from 'react-icons/ti'

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

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
      <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
        <BentoCard
        src='videos/feature-1.mp4'
        title={<>di<b>s</b>cover</>}
        description='Astronomers have discovered that large flows of cold gas created by collisions between galaxies in the early universe may have forged some of the most monstrous star systems.'
        isComingSoon
        />
      </BentoTilt>

      <div className='grid has-[135vh] grid-cols-2 grid-rows-3 gap-7'>
        <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
            <BentoCard 
            src="videos/feature-2.mp4"
            title={<>sc<b>i</b>entis</>}
            description="a team led by scientists from the University of Southampton may have scored a touchdown in this quest. They believe their research may finally solve this long-standing galactic puzzle."
            />
        </BentoTilt>

        <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
            <BentoCard 
            src="videos/feature-3.mp4"
            title={<>gal<b>a</b>xies</>}
            description="Two disk galaxies smashing together caused gas – the fuel from which stars are formed – to sink towards their center, generating trillions of new stars, team member and the University of Southampton researcher Anna Puglisi said in a statement"
            />
        </BentoTilt>

        <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
            <BentoCard 
            src="videos/feature-4.mp4"
            title={<>cos<b>m</b>ic</>}
            description="These cosmic collisions happened some eight to 12 billion years ago when the universe was in a much more active phase of its evolution."
            />
        </BentoTilt>

        <BentoTilt className='bento-tilt_2'>
          <div className='flex size-full flex-col justify-between bg-violet-300 p-5'>
            <h1 className='bento-title special-font max-w-64 text-black'>M<b>o</b>re co<b>m</b>ing s<b>o</b>on!</h1>
            <TiLocation className='m-5 scale-[5] self-end' />
          </div>
        </BentoTilt>

        <BentoTilt className='bento-tilt_2'>
          <video
          src='videos/feature-5.mp4'
          loop
          muted
          autoPlay
          className='size-full object-cover object-center'
          />
        </BentoTilt>

      </div>
      </div>
    </section>
  )
}

export default Features
