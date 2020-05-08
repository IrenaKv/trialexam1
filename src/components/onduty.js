import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GetDoctors(props) {
  const [doctors, setDoctors] = useState([]);

  const fetcher = async () => {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
    );

    console.log("Hey, this is our first render cycle!!", response);
    setDoctors(response.data);
  };

  const doctor = (doctor) => doctor.name;

  useEffect(fetcher, []);

  return <ul>{doctors.map(doctor)}</ul>;
}

// const filteredItems = doctors.filter((d) => d);
// function displayDoctors() {
//   if (doctors.length === 0) {
//     return "Loading...";
//   } else {
//     return (
//       <div>
//         {doctors.map((doctor) => {
//           const availability = doctor.onDuty ? "on duty" : "off duty";
//           return (
//             <DoctorCard
//               key={doctor.id}
//               doctor={doctor.doctor}
//               onDuty={availability}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

// useEffect(() => {
//   async function fetchDoctors() {
//     const response = await axios.get(
//       "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
//   //     );
//       console.log(response);
//       setDoctors(response.data);
//     }
//     return <ul>{GetDoctors.map(doctor)}</ul>;
//   });
// }
