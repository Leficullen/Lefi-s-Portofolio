import { listProyek } from "../data";
import { listVideo } from "../data";
import { listGraphic } from "../data";

const Projects = () => {
    return (
    <div>
        <div id="project" className="projects mt-32 mb-5 text-4xl font-semibold primary-2 bg-clip-text justify-center flex scroll-mt-32" data-aos="fade-down">My Projects</div>
        <p id="project-website" className="text-2xl flex justify-center mb-10 text-gray-400 scroll-mt-27" data-aos="fade-up">Website Projects:</p>
        <div className="container group">
            <div className="project-box grid lg:grid-cols-3 grid-cols-1 gap-10 lg:gap-0 bg-zinc-950 gradient-border-container p-5 py-10 rounded-2xl" data-aos="fade-up">
            {listProyek.map((proyek)=> (
                <div key={proyek.id} className=" bg-zinc-900 rounded-xl mx-5 hover:scale-105 smooth border-3 border-zinc-900 hover:border-3 hover:border-white p-1">
                <img src={proyek.gambar} alt="" className="rounded-xl " />
                <div data-aos="fade-up">
                    <h2 className="flex justify-center pt-5 pb-3 text-2xl font-semibold primary bg-clip-text">{proyek.nama}</h2>
                    <p className="flex text-center justify-center text-gray-300 pb-5">{proyek.desk}</p>
                    <div className="flex flex-wrap">
                    {proyek.tools.map((tool, index) =>(
                        <p key={index} className="px-3 hover:scale-110 smooth gradient-border rounded-md font-semibold mx-auto justify-center flex mb-5">{tool}</p>
                    ))}
                    </div>
                    <div className="flex justify-center mb-3 bg-zinc-800 rounded-sm px-5 py-1 font-semibold mx-auto w-fit hover:bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 hover:scale-105 smooth shadow-xl border-2 border-zinc-700">
                    <a href={proyek.view} target="_blank" className="">Visit <i className="ri-eye-line"></i></a>
                    </div>
                    <p className="justify-center flex mb-5 text-red-500">{proyek.status}</p>
                </div>
                </div>              
            ))}
            </div>
        </div>
        <p id="project-video"className="text-2xl flex justify-center mb-10 text-gray-300 my-10 scroll-mt-27" data-aos="fade-right">Video Projects:</p>
        <div className="container">
        <div className="project-box grid lg:grid-cols-3 grid-cols-1 bg-zinc-950 gradient-border-container py-10 px-4" data-aos="fade-up">
            {listVideo.map((video) => (
            <div key={video.id} className="rounded-xl bg-zinc-900 m-3 hover:scale-105 smooth border-2 border-zinc-900 hover:border-2 hover:border-white" >
                <video src={video.tampilan} autoPlay muted loop playsInline className="lg:w-[400px] w-full  rounded-xl"></video>
                <div data-aos="fade-up">
                <h2 className="primary bg-clip-text font-semibold text-xl justify-center flex pt-5 pb-3 text-center">{video.nama}</h2>
                <p className="text-gray-500 justify-center text-center flex pb-5">{video.desk}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
        <p id="project-graphic" className="text-2xl flex justify-center mb-10 text-gray-300 my-10 scroll-mt-27" data-aos="fade-left">Graphic Projects:</p>
        <div className="container">
        <div className="project-box grid lg:grid-cols-3 grid-cols-1 text-center bg-zinc-950 gradient-border-container lg:py-10 py-3 px-4" data-aos="fade-up">
            {listGraphic.map((graphic) => (
            <div key={graphic.id} className="rounded-xl bg-zinc-900 mx-3 scale-90 hover:scale-95 smooth border-3 border-zinc-900 hover:border-3 hover:border-white">
                <img src={graphic.tampilan} alt="" className="rounded-xl" />
                <div data-aos="fade-up">
                <h2 className="primary bg-clip-text font-semibold text-xl justify-center flex pt-5 pb-3">{graphic.nama}</h2>
                <p className="text-gray-500 justify-center text-center flex pb-5">{graphic.desk}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
 );
}

export default Projects;
