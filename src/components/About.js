import Image from "./Image";
import '../css/about.css'

import aboutImg from '../imgs/about.png'

function About() {
    return (
        <section id="about" className="about flex flex-row justify-center items-center mb-36">
            <Image src={aboutImg} alt='About' />
            <div className="flex flex-col about-container">
                <h3 className="uppercase text-red-600 font-bold text-5xl">learn more about<br /> us</h3>
                <p className="text-white pp mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sapiente accusantium, a quisquam est asperiores tempora
                    reiciendis? Dolores minima vel nostrum quo. Iure hic itaque voluptas. Iusto corrupti illum.</p>

                <a href="" className='text-white text-lg font-bold w-fit mt-10 uppercase bg-red-500 pt-3 pb-3 pl-7 pr-8 rounded-lg hover:scale-110 duration-300'>read more</a>
            </div>
        </section>
    );
}

export default About;