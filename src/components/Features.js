import feature1 from '../imgs/1.svg'
import feature2 from '../imgs/2.svg'
import feature3 from '../imgs/3.svg'
import feature4 from '../imgs/4.svg'
import Image from './Image';
import '../css/features.css'

function Featurs() {
    return (
        <section id='features' className="bg-black flex flex-col justify-center items-center mb-36 features">
            <h1 className='text-white font-bold uppercase text-5xl mb-24'>features</h1>
            <div className="flex flex-row justify-evenly items-center features-container">
                <div className='w-1/6 feature'>
                    <Image src={feature1} alt='Feature One' />
                    <h3 className='text-white font-bold capitalize text-xl text-center mt-28 mb-8'>weightLefting</h3>
                    <p className='text-neutral-200 text-center'>Lorem ipsum dolor sit amet consectetur beatae ipsum.</p>
                </div>

                <div className='w-1/6 feature'>
                    <Image src={feature2} alt='Feature Two' />
                    <h3 className='text-white font-bold capitalize text-xl text-center mt-28 mb-8'>specific muscle</h3>
                    <p className='text-neutral-200 text-center'>Lorem ipsum dolor sit amet consectetur beatae ipsum.</p>
                </div>

                <div className='w-1/6 feature'>
                    <Image src={feature3} alt='Feature Three' />
                    <h3 className='text-white font-bold capitalize text-xl text-center mt-28 mb-8'>flex your muscle</h3>
                    <p className='text-neutral-200 text-center'>Lorem ipsum dolor sit amet consectetur beatae ipsum.</p>
                </div>

                <div className='w-1/6 feature'>
                    <Image src={feature4} alt='Feature Four' />
                    <h3 className='text-white font-bold capitalize text-xl text-center mt-28 mb-8'>cardio exercise</h3>
                    <p className='text-neutral-200 text-center'>Lorem ipsum dolor sit amet consectetur beatae ipsum.</p>
                </div>
            </div>
        </section>
    );
}

export default Featurs;