import React, { useState } from "react";
import doctor from "../assets/registration.jpg";
import BookAppointment from "./BookAppointment";

const DoctorCard = ({ data }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative my-3 border">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            className="w-[100%] h-[350px]"
            src={data.photo_url ? data.photo_url : doctor}
            alt="doctor"
          />
        </figure>
        <div className="card-body p-3">
          <h2 className="card-title font-sans font-medium text-xl">
            {data.name}
          </h2>
          <p className="font-sans font-normal my-1">
            {data.specialization}
          </p>
          <div className="card-actions justify-end ">
            <button
              className="btn btn-primary py-4 px-10 bg-lime-500 rounded-md"
              onClick={() => setShow(true)}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {show && (
        <BookAppointment
          doctorId={data._id}
          onClose={() => setShow(false)}
        />
      )}
    </div>
  );
};

export default DoctorCard;
