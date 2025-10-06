// import { useContext } from "react";
import { DoctorContext } from "../../Context/DoctorContext";
import Appointments from "../../Components/Appointments/Appointments";
import { useEffect, useState } from "react";
import { getDoctors } from "../../utils";

const MyBooking = () => {
  //   const { selectedDoctor } = useContext(DoctorContext);
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const savedDoctors = getDoctors;
    setDoctors(savedDoctors);
  }, []);

  if(doctors.length < 1){
    return <p>No Doctor Selected</p>
  }
  console.log(doctors);

  return (
    <div>
      <div className="">
        <h2 className="text-2xl font-bold mt-8 mb-4 text-center">
          Book an Appointment
        </h2>
            {
                doctors.map((doctor, index) => <Appointments key={index} doctor={doctor} setDoctors={setDoctors} ></Appointments>)
            }
      </div>
    </div>
  );
};

export default MyBooking;
