export const getDoctors = () =>{
    let doctors = [];

    const storedDoctors = localStorage.getItem('doctors');
    if(storedDoctors){
        doctors = JSON.parse(storedDoctors);
    }
    return doctors;
}

export const saveDoctors = (doctor) =>{
   let doctors = getDoctors();
   const isExist = doctors.find(d => d.id === doctor.id)
   if(isExist){
    return alert("Already Selected!!!");
   }
   doctors.push(doctor)
   localStorage.setItem('doctors', JSON.stringify(doctors))
   alert("Save to your Appointment");
}

export const deleteDoctors = (id) => {
    let doctors = getDoctors();
    const remaining = doctors.filter(d => d.id !== id);
    localStorage.setItem('doctors', JSON.stringify(remaining))
    alert("Delete from Appointment Card");
}