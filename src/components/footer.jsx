const Footer  = () => {
  return (
    <div className="mt-32 py-10 bg-zinc-950 w-full gradient-footer flex flex-col" > 
        <p className="flex justify-center font-semibold">Created with Love ❤️ by<span className="mx-1 font-semibold primary bg-clip-text">Leficullen</span></p>
        <div className="flex justify-center mt-4 gap-3">
            <a href="https://www.instagram.com/alfirizqyy/" target="_blank"><i className="ri-instagram-fill ri-xl group-hover:primary bg-clip-text smooth"></i></a>
            <a href="https://www.tiktok.com/@alpi.y" target="_blank"><i className="ri-tiktok-fill ri-xl group-hover:primary bg-clip-text smooth "></i></a>
            <a href="https://x.com/alfffcullennn" target="_blank"><i className="ri-twitter-fill group-hover:primary bg-clip-text ri-xl smooth"></i></a>
            <a href="https://github.com/Leficullen" target="_blank"><i className="ri-github-fill group-hover:primary bg-clip-text ri-xl smooth"></i></a>
        </div>
    </div>  
  );
};

export default Footer 