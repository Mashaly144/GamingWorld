import heroImg from '../assets/HeroBackGround.png';
import Button from '../ui/Button';

function Hero() {
  return (
    <div className=' relative'>
      <div className='container mx-auto'>
        <div className='flex-between flex-col lg:flex-row '>
          <div className=' flex-1 space-y-10'>
            <h1 className='mainHeader'>
              Let your mind{' '}
              <span className='bg-gradient-background text-transparent bg-clip-text'>
                explore
              </span>{' '}
              new world
            </h1>

            <p>
              Playing electronic games, whether through consoles, computers,
              mobile phones or another medium altogether. Gaming is a nuanced
              term that suggests regular gameplay, possibly as a hobby.
            </p>
            <div className='flex-start gap-4'>
              <Button styles={`main-button-active`}>Buy now</Button>
              <Button styles={`main-button`}>Play now</Button>
            </div>
            <div className='flex justify-center lg:justify-start gap-4 py-4 '>
              <div className=' flex  flex-col items-center'>
                <h3 className='font-extrabold text-2xl  '>300+</h3>
                <p>Unique style</p>
              </div>
              <div className=' flex  flex-col items-center'>
                <h3 className='font-extrabold text-2xl  '>200+</h3>
                <p>Project finished</p>
              </div>
              <div className=' flex  flex-col items-center'>
                <h3 className='font-extrabold text-2xl  '>500+</h3>
                <p>Happy customer</p>
              </div>
            </div>
            {/* buttons */}
          </div>
          <div className='flex-1'>
            <img src={heroImg} alt='HeroBackGround' className='imgHeader' />
          </div>
        </div>
        <div className='overlay-circle left-0 top-0' />
        <div className='overlay-circle right-0 top-52' />
      </div>
    </div>
  );
}

export default Hero;
