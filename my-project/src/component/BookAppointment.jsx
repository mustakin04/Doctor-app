import React, { useState } from "react";
import axios from "axios";

const BookAppointment = ({ doctorId, onClose }) => {
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // handle booking
  const handleBook = async () => {
    if (!date) {
      setMessage("Please select a date!");
      return;
    }

    try {
      setLoading(true);
      await axios.post(
        "https://appointment-manager-node.onrender.com/api/v1/appointments",
        { doctorId, date }
      );

      setMessage("✅ Appointment booked successfully!");
      setLoading(false);

      // close modal after 2s
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      setMessage("❌ Failed to book appointment.");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
        <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>

        <label className="block mb-2">Select Date:</label>
        <input
          type="date"
          className="w-full border px-3 py-2 rounded-md mb-4"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {message && (
          <p className="text-sm mb-2 text-center">{message}</p>
        )}

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleBook}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            {loading ? "Booking..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
