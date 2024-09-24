import '../css/home.css'

function Home() {
    return (
        <section className="home mb-36">
            <div className='home-container flex flex-col items-center justify-center'>
                <p className='text-white text-4xl font-bold uppercase text-center'>step up your</p>
                <p className='text-white text-7xl font-bold uppercase mt-4 fitP text-center'><span className='text-red-500 fit'>fitness</span> with us</p>
                <p className='text-stone-200 text-xl font-semibold capitalize mt-4 text-center'>build your body and fitness with profissional touch</p>
                <button className='text-white text-lg font-bold mt-4 text-center uppercase bg-red-500 pt-3 pb-3 pl-7 pr-8 rounded-lg hover:scale-110 duration-300'>join us</button>
            </div>
        </section>
    );
}

export default Home;