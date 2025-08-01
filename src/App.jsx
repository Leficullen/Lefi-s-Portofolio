import DataImage from "./data";

function App() {
  return (
    <>
    {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 ">
        <img src={DataImage.HeroImage} alt="" className="w-[500px] md:mr-auto mx-auto my-auto flex hover:scale-105 smooth animate__animated animate__fadeInUp animate__delay-2s"/>
        <div className="justify-center flex-col flex ">
          <div className="p-1 primary w-fit rounded-md h-fit my-3 lg:mx-0 mx-auto hover:scale-105 transition-all ease-in-out duration-300">
            <div className="bg-zinc-800 w-fit p-3 rounded-md">
              <q className="text-xl text-white">Welcome to my website👋</q>
            </div>
          </div>
          <h1 className="text-5xl/tight font-semibold relative bg-zinc-900 w-fit rounded-xl primary bg-clip-text text-align-center mx-auto lg:mx-0 mb-3 hover:scale-105 smooth"> Hello, I'm Lefi!</h1>
          <div className="mb-5">
            <p className="text-xl text-gray-500 text-center lg:text-left ">I'm a software engineer and a New Student of Indonesia University with Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore excepturi totam quis tempora, autem numquam itaque molestiae iure. Explicabo facere nisi omnis illo similique, assumenda optio dolorum ipsum laudantium minima? </p>
          </div>
          <div className="bg-zinc-800 w-fit p-3 rounded-md  hover:bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 smooth hover:scale-105 mx-auto lg:mx-0 font-semibold shadow-xl" >
            <a href="#about" className="">Explore Me! <i className="ri-arrow-down-double-fill ri-lg"></i></a>

          </div>
        </div>
      </div>

    {/* About Section */}
    <div id="about" className="tittle flex mt-32 mb-10 text-4xl mx-auto justify-center primary-2 bg-clip-text font-semibold scroll-mt-32 " data-aos="fade-down">About Me</div>
    <div className="in-container bg-zinc-950 rounded-3xl flex flex-col md:flex-row gradient-border hover:scale-105 smooth justify-center w-full sm:w-fit mx-auto ">
        <div className="description p-10 flex items-justify flex-col justify-center gap-2" data-aos="fade-right">
          <div>
            <p className="text-2xl font-semibold primary bg-clip-text">
            Full Name: </p>
            <p className="text-xl/loose font-semibold text-gray-500 whitespace-pre">Muh. Alfi Rizqy</p>
          </div>
          <div>
            <p className="text-2xl font-semibold primary bg-clip-text">
            Place & Date Birth</p>
            <p className="text-xl/loose font-semibold text-gray-500">Watampone, 28 Mei 2007  </p>
          </div>
          <div>
            <p className="text-2xl font-semibold primary bg-clip-text">
            Address: </p>
            <p className="text-xl/loose font-semibold text-gray-500 ">Bu Nining Kost, Beji, Depok</p>
          </div>
          <div>
            <p className="text-2xl font-semibold primary bg-clip-text">
            University: </p>
            <p className="text-xl/loose font-semibold text-gray-500 ">Indonesia University</p>
          </div>
          <div>
            <p className="text-2xl font-semibold primary bg-clip-text">
            Faculty: </p>
            <p className="text-xl/loose font-semibold text-gray-500">Computer Science</p>
          </div>
        </div>
        <div className="flex md:items-center justify-center px-5" data-aos="fade-left">
          <img src={DataImage.AboutImage} alt="" className="w-80 p-3 mb-7 lg:mb-0 hover:scale-105 smooth spin" />
        </div>
    </div>
    


    {/* Projects   Section */}

    {/* Achievement Section */}

    {/* Contact Section */}
    </>
    
  )
}

export default App
