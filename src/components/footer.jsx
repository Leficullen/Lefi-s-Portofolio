const Footer  = () => {
  return (
    <div className="mt-32 py-10 bg-zinc-950 w-full gradient-footer flex flex-col" > 
        <p className="flex justify-center font-semibold">Created with Love ❤️ by<span className="mx-1 font-semibold primary bg-clip-text">Leficullen</span></p>
        <div className="flex justify-center mt-4 gap-3">
            <a href=""><i className="ri-instagram-fill ri-xl primary bg-clip-text"></i></a>
            <a href=""><i className="ri-tiktok-fill ri-xl primary bg-clip-text "></i></a>
            <a href=""><i class="ri-twitter-fill primary bg-clip-text ri-xl"></i></a>
        </div>
    </div>
  );
};

export default Footer 