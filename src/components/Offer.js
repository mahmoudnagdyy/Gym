import '../css/offer.css'

function Offer() {
    return (
        <section id='offer' className="offer mb-36">
            <div className='offer-container flex flex-col'>
                <h2 className='text-white mt-12 uppercase text-7xl font-bold text-center'>a big <span className='text-red-600'>offer</span> for <br />this summer</h2>
                <p className='text-stone-200 mt-7 text-lg text-center'>Lorem ipsum dolor sit amet consectetur.</p>
                <button className='text-white text-lg font-bold mt-4 text-center uppercase bg-red-500 pt-3 pb-3 pl-7 pr-8 w-fit m-auto rounded-lg hover:scale-110 duration-300'>join now</button>
            </div>
        </section>
    );
}

export default Offer;