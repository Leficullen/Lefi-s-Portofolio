import DataImage from "./data";

function App() {
  return (
    <>
    {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-center gap-8">
        <img src={DataImage.HeroImage} alt="" className="w-[500px] md:mr-auto mx-auto my-auto flex" />
        <div className=" items-center">
          <div className="bg-zinc-800 w-fit p-3 rounded-md my-3 mx-auto lg:mx-0">
            <q className="text-xl text-white">Welcome to my website👋</q>
          </div>
          <h1 className="text-5xl/tight font-semibold relative bg-zinc-900 w-fit rounded-xl primary bg-clip-text text-align-center mx-auto lg:mx-0 mb-3"> Hello, I'm Lefi!</h1>
          <div className="mb-5">
            <p className="text-xl text-gray-500 text-center lg:text-left ">I'm a software engineer and a New Student of Indonesia University with Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore excepturi totam quis tempora, autem numquam itaque molestiae iure. Explicabo facere nisi omnis illo similique, assumenda optio dolorum ipsum laudantium minima? </p>
          </div>
          <div className="bg-zinc-800 w-fit p-3 rounded-md items group-hover:primary mx-auto lg:mx-0 font-semibold" >
            <a href="#" className=""> <i className="ri-arrow-down-double-line ri-lg"></i> Explore Me!</a>
          </div>
        </div>
      </div>
    {/* Hero Section */}

    



    </>
    
  )
}

export default App
