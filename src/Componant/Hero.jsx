import heroImg from "../assets/HeroBackGround.png";
function Hero() {
  return (
    <div className="flex-between container mx-auto snap-align-none">
      <div className=" flex-1 space-y-10">
        <h1 className="mainHeader">Let your mind explore new world</h1>
        <p>
          Playing electronic games, whether through consoles, computers, mobile
          phones or another medium altogether. Gaming is a nuanced term that
          suggests regular gameplay, possibly as a hobby.
        </p>
        <div className="flex gap-4 py-4">
          <div className=" flex  flex-col items-center">
            <h3 className="font-extrabold text-2xl	">300+</h3>
            <p>Unique style</p>
          </div>
          <div className=" flex  flex-col items-center">
            <h3 className="font-extrabold text-2xl	">200+</h3>
            <p>Project finished</p>
          </div>
          <div className=" flex  flex-col items-center">
            <h3 className="font-extrabold text-2xl	">500+</h3>
            <p>Happy customer</p>
          </div>
        </div>
      </div>
      <div className=" flex-2">
        <img src={heroImg} alt="HeroBackGround" className="imgHeader" />
      </div>
    </div>
  );
}

export default Hero;
