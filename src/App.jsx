import DataImage from "./data";
import { listProyek } from "./data";

function App() {
  return (
    <>
    {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-center gap-8">
        <img src={DataImage.HeroImage} alt="" className="w-[500px] md:mr-auto mx-auto my-auto flex" />
        <div className="justify-center flex-col flex">
          <div className="p-1 primary w-fit rounded-md h-fit my-3 lg:mx-0 mx-auto hover:scale-105 transition-all ease-in-out duration-300">
            <div className="bg-zinc-800 w-fit p-3 rounded-md">
              <q className="text-xl text-white">Welcome to my website👋</q>
            </div>
          </div>
          <h1 className="text-5xl/tight font-semibold relative bg-zinc-900 w-fit rounded-xl primary bg-clip-text text-align-center mx-auto lg:mx-0 mb-3"> Hello, I'm Lefi!</h1>
          <div className="mb-5">
            <p className="text-xl text-gray-500 text-center lg:text-left ">I'm a software engineer and a New Student of Indonesia University with Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore excepturi totam quis tempora, autem numquam itaque molestiae iure. Explicabo facere nisi omnis illo similique, assumenda optio dolorum ipsum laudantium minima? </p>
          </div>
          <div className="bg-pink-700 w-fit p-3 rounded-md items hover:bg-pink-900 smooth hover:scale-105 mx-auto lg:mx-0 font-semibold" >
            <a href="#" className=""> <i className="ri-arrow-down-double-line ri-lg"></i> Explore Me!</a>
          </div>
        </div>
      </div>

    {/* About Section */}
    <div className="tittle flex mt-32 mb-10 text-4xl mx-auto w-full justify-center primary-2 bg-clip-text font-semibold">About Me</div>
    <div className="container flex justify-center p-1 primary w-fit mx-auto rounded-3xl" id="about">
      <div className="in-container bg-black rounded-3xl flex flex-col md:flex-row">
        <div className="description p-10 flex items-justify flex-col justify-center">
          <p className="text-2xl font-semibold primary bg-clip-text">
          Full Name: </p>
          <p className="text-xl/loose font-semibold text-gray-500 whitespace-pre">Muh. Alfi Rizqy</p>
          <p className="text-2xl font-semibold primary bg-clip-text">
          University: </p>
          <p className="text-xl/loose font-semibold text-gray-500 whitespace-pre">Indonesia University</p>
          <p className="text-2xl font-semibold primary bg-clip-text">
          Faculty: </p>
          <p className="text-xl/loose font-semibold text-gray-500 whitespace-pre">Computer Science</p>
          <p className="text-2xl font-semibold primary bg-clip-text">
          Study Program: </p>
          <p className="text-xl/loose font-semibold text-gray-500 whitespace-pre">Information System</p>
          <p className="text-2xl font-semibold primary bg-clip-text">
          Address: </p>
          <p className="text-xl/loose font-semibold text-gray-500 whitespace-pre">Bu Nining Kost, Beji, Depok</p>
          
        </div>
        <div className="flex md:items-center justify-center px-5">
          <img src={DataImage.AboutImage} alt="" className="w-80 p-3" />
        </div>
      </div>
    </div>


    {/* Projects   Section */}
    <div className="projects mt-32 mb-20 text-4xl font-semibold primary-2 bg-clip-text justify-center flex">My Projects</div>
      <div className="container">
        <div className="project-box grid grid-cols-3 gap-7 bg-zinc-950 py-10 rounded-2xl">
          {listProyek.map((proyek)=> (
            <div key={proyek.id} className=" bg-zinc-900 rounded-xl mx-3">
              <img src={proyek.gambar} alt="" className="rounded-xl" />
              <div>
                <h2 className="flex justify-center pt-5 pb-3 text-xl font-semibold primary bg-clip-text">{proyek.nama}</h2>
                <p className="flex text-center text-gray-400 pb-5">{proyek.desk}</p>
              </div>
            </div>              
          ))}
        </div>
      </div>

    </>
    
  )
}

export default App
