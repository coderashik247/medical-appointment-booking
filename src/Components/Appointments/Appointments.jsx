import Container from "../Container/Container";
import { DoctorContext } from "../../Context/DoctorContext";
import { deleteDoctors, getDoctors } from "../../utils";

const Appointments = ({ doctor, setDoctors }) => {

    const handleCancelAppointment = (id) =>{
        deleteDoctors(id);
        const savedDoctors = getDoctors();
        setDoctors(savedDoctors);
    }
  return (
    <Container>
      <div className="bg-white rounded-xl mx-auto px-8 mb-8 space-y-4 ">
        <div className=" px-8  border-b-2 py-3 border-dashed border-[#0f0f0f46] flex justify-between items-center">
          <div>
            <h2 className="font-bold text-lg"> {doctor.name} </h2>
            <p className="text-lg text-[#0f0f0f99]"> {doctor.education} </p>
          </div>
          <p className="text-lg text-[#0f0f0f99]">
            {" "}
            Appointment Fee: {doctor.consultant_fee} Taka + VAT{" "}
          </p>
        </div>
        <button onClick={() => handleCancelAppointment(doctor.id)} className=" bg-white my-6 py-3 rounded-full w-full text-[#ff0000] border border-[#ff0000] font-bold hover:cursor-pointer hover:bg-[#ff0000] hover:text-white">
          Cancel Appointment{" "}
        </button>
      </div>
    </Container>
  );
};

export default Appointments;
