import doctorImg from "../../assets/doctor.png";
import { GoPlusCircle } from "react-icons/go";

const Doctor = ({doctor}) => {
      const { image, name, education,  experience, registration_number } = doctor
  return (
    <>
      <section className="flex flex-col space-y-5 dark:bg-gray-50 p-5 rounded-2xl">
        <div className="">
          <img
            alt=""
            className="object-cover w-full h-[280px] rounded-3xl"
            src={image || doctorImg}
          />
        </div>
        <div className="flex flex-col flex-1 space-y-2">
          <div className="flex gap-5 items-center text-sm ">
            <span className="px-4 py-1 bg-[#09982f33] text-[#09982F] rounded-full">
              Available
            </span>
            <span className="px-5 py-1 bg-[#176ae533] text-[#176ae5] rounded-full">
              {experience} Years Experience
            </span>
          </div>
          <h3 className="flex-1 py-2 text-2xl font-bold">
            {name}
          </h3>
          <p className="text-[#0f0f0f99]"> {education} </p>
          <span className="border border-dashed border-[#0f0f0f99] my-2"></span>
          <div className="flex justify-start gap-3 items-center text-[#0f0f0f99] mb-3">
            <GoPlusCircle />
            <p>Reg No: BD {registration_number} </p>
          </div>
          <button className="border-blue-700 border text-blue-700 font-bold py-2 rounded-full hover:bg-blue-700 hover:text-white mb-3">
            View Details
          </button>
        </div>
      </section>
    </>
  );
};

export default Doctor;
