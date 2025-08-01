const Contact = () => {
    return (
    <div>
        <div>
            <div id="contact" className="mt-32  text-4xl font-semibold primary-2 bg-clip-text justify-center flex scroll-mt-32 mb-10" data-aos="fade-down"> Contact Me
            </div>
            <div className="flex justify-center ">
                <form action="https://formsubmit.co/alfirizqy2007@gmail.com" method="POST" className="flex flex-col justify-center sm:w-fit w-full bg-zinc-950 p-10 rounded-xl gradient-border-container gap-3" autoComplete="off" data-aos="zoom-in">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="font-semibold primary-2 bg-clip-text text-xl">Full Name</label>
                        <input type="text" name="Name" placeholder="Enter your name here..." className="border border-zinc-600 rounded-md p-2" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="font-semibold primary-2 bg-clip-text text-xl">Email</label>
                        <input type="text" name="E-mail" placeholder="Enter your e-mail here..." className="border border-zinc-600 rounded-md p-2" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="font-semibold primary-2 bg-clip-text text-xl">Message</label>
                        <textarea name="Message" id="message" cols="35" rows="5" placeholder="Enter your message here..." className="border border-zinc-600 rounded-md p-2" required></textarea>
                    </div>
                    <div>
                        <button type="submit" target="_blank" className="flex justify-center mt-5 bg-zinc-800 rounded-sm px-5 py-2 font-semibold mx-auto w-full hover:bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 hover:scale-101 smooth shadow-xl cursor-pointer">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);
}
export default Contact;