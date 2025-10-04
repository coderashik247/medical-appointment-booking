import doctorImg from '../../assets/doctors_1png.png'
import patientImg from '../../assets/patient.webp';

const Banner = () => {
    return (
        <div className='flex justify-center items-center flex-col my-[40px] lg:my-[100px] space-y-4'>
            <h1 className='lg:text-5xl text-3xl  font-bold lg:w-3/6 w-full mx-auto text-center lg:leading-[60px]'>Dependable Care, Backed by Trusted <span >Professionals.</span> </h1>
            <p className='lg:w-4/6 text-justify px-2 lg:text-center lg:text-lg text-[#605d5d]'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className=' lg:w-full text-center lg:flex justify-center gap-3 space-y-2 lg:space-y-0'>
                <input type="text" name="" className='bg-white py-3 pl-3 rounded-2xl lg:w-2/5 block' placeholder='Search any Doctor' id=""  /> <button className='py-3 px-5 rounded-2xl font-bold text-white bg-[#176AE5]'>Search Now</button>
            </div>
            <div className='flex gap-7 flex-col lg:flex-row px-3 lg:px-0'>
                <img className='h-[200px] lg:h-[400px] w-[600px]' src={doctorImg} alt="" />
                <img className='h-[200px] lg:h-[400px] w-[600px] rounded-xl'  src={patientImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;