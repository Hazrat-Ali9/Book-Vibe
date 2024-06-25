const Contact = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                    <div className="text-black">Of course! What would you like to talk about? Feel free to share anything on your mind.</div>
                </div>
                <img src="https://mambaui.com/assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
            </div>
            <form className="space-y-6">
                <div>
                    <label className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-200" />
                </div>
                <div>
                    <label className="text-sm">Email</label>
                    <input id="email" type="email" className="w-full p-3 rounded bg-gray-200" />
                </div>
                <div>
                    <label className="text-sm">Message</label>
                    <textarea id="message" rows="3" className="w-full p-3 rounded bg-gray-200"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-vibe-btn-primary text-white">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;