import { useLoaderData } from "react-router";
import Doctor from "../Doctor/Doctor";


const Doctors = () => {
  const doctors = useLoaderData();
    doctors;
  return (
    <div className="mt-10">
      <section className="py-6 sm:py-12 ">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-4xl font-bold">Our Best Doctors</h2>
            <p className="lg:w-4/6 text-justify mx-auto px-2  lg:text-center lg:text-lg text-[#605d5d]">
              Meet our experienced and expert doctors, dedicated professionals
              who combine knowledge, compassion, and genuine care to provide
              top-quality medical care you can trust for you and your family’s
              health.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {
                doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
