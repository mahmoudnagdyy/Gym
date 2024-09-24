import '../css/contact.css'

function Contact() {
    return (
        <section id="contact" className="bg-black flex flex-col justify-center items-center mb-36">
            <h1 className="text-white font-bold uppercase text-5xl mb-16">contact us</h1>

            <form className="flex flex-col justify-center items-center">
                <input className="name" type="text" placeholder="Full Name" />
                <input className='email' type="email" placeholder="Enter Your Email" />
                <textarea placeholder='Message'></textarea>
                <input className='text-white font-bold bg-red-600 mt-10 w-fit pt-3 pb-3 pl-8 pr-8 rounded-lg cursor-pointer hover:scale-110 duration-300' type="submit" value='Send' />
            </form>
        </section>
    );
}

export default Contact;