import { useLoaderData } from "react-router";
import Container from "../Container/Container";
import { GoPlusCircle } from "react-icons/go";
import { CiCircleQuestion } from "react-icons/ci";

const Profile = () => {
  const profileData = useLoaderData();
  // console.log(profileData);
  //   const {image, name, education,  experience, registration_number } = doctor
  const {
    description,
    image,
    name,
    education,
    registration_number,
    specialty,
    working_at,
    available_days,
    consultant_fee,
  } = profileData;
  return (
    <Container>
      <div className="mb-9">
        <div className="bg-white text-center py-8 space-y-3 rounded-xl">
          <h2 className="text-3xl font-bold">Doctor's Profile Details</h2>
          <p className="text-lg text-[#0f0f0f99] w-10/12 mx-auto "> {description} </p>
        </div>
        <div className="mt-8 rounded-xl bg-white">
          <div className="hero-content flex-col lg:flex-row ">
            <div className="flex-1 p-6 flex justify-center items-center">
              <img className="h-[400px] w-[400px] rounded-2xl" src={image} />
            </div>
            <div className="flex-1 space-y-3">
              <h1 className="text-3xl font-bold"> {name} </h1>
              <p className="text-lg text-[#0f0f0f99]"> {education} </p>
              <p className="text-lg text-[#0f0f0f99]"> {specialty} </p>
              <p className="text-lg text-[#0f0f0f99] ">
                Working at:
                <p className="text-black my-3"> {working_at} </p>
              </p>
              <div className="border-dashed border-y-2 border-[#0f0f0f50] flex justify-start items-center">
                <div className="flex justify-start gap-3 items-center text-[#0f0f0f99] my-3">
                  <GoPlusCircle />
                  <p>Reg No: BD {registration_number} </p>
                </div>
              </div>
              <div>
                <span className="text-base font-bold text-[#0f0f0f]">Availability</span> 
                <span className="p-4">
                  {available_days.map(day => <button className="bg-[#ffa00033] mx-3 px-3 py-1 rounded-xl text-[#ffa000]"> {day} </button> )}
                </span>
              </div>
              <div>
                <span className="text-base font-bold text-[#0f0f0f]">Consultation Fee: </span>
                <span className="text-base font-semibold text-[#176AE5] ">Taka: {consultant_fee} </span> <span className="text-[#14141480] font-light">(incl.Vat)</span> <span className="text-[#176AE5] font-light">Per consultation</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white flex justify-center items-center flex-col rounded-xl">
          <h2 className="text-2xl font-bold mt-8 mb-4">Book an Appointment</h2>
          <div className="w-full flex justify-between items-center px-8 border-t-2 border-b-2 py-3 border-dashed border-[#0f0f0f46]">

              <h2 className="font-bold text-lg">Availability</h2>


              <button className="bg-[#09982f33]  px-3 py-1 rounded-xl text-[#09982f]"> Doctor Available Today </button>

          </div>
          <p className="bg-[#ffa00033] mx-3 px-3 py-1 rounded-xl text-[#ffa000] flex justify-between items-center mt-4"> <CiCircleQuestion className="mr-2" /> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation. </p>
          <button className=" bg-[#176AE5] my-6 py-3 rounded-full w-11/12 mx-auto text-white font-bold hover:cursor-pointer hover:bg-[#95b8ec83] hover:text-[#176AE5] hover:border-[#176AE5] hover:border " >Book Appointment Now </button>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
