import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import DoctorCard from "./DoctorCard";
import axios from "axios";

const Pagination = ({ itemsPerPage }) => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [specialization, setSpecialization] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [name, setName] = useState("");
  const [selectedSpec, setSelectedSpec] = useState("");

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filtered.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filtered.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filtered.length;
    setItemOffset(newOffset);
  };

  // fetch doctors once
  useEffect(() => {
    const fetchData = async () => {
      try {
        const doctor = await axios.get(
          "https://appointment-manager-node.onrender.com/api/v1/doctors"
        );

        const doctors = doctor.data.data;
        setData(doctors);
        setFiltered(doctors);

        // extract unique specializations
        const specs = [...new Set(doctors.map((doc) => doc.specialization))];
        setSpecialization(specs);
      } catch (err) {
        console.error("Error fetching doctors:", err);
      }
    };
    fetchData();
  }, []);

  // filter by name & specialization
  useEffect(() => {
    let result = data;

    if (name.trim()) {
      result = result.filter((doc) =>
        doc.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (selectedSpec) {
      result = result.filter((doc) => doc.specialization === selectedSpec);
    }

    setFiltered(result);
    setItemOffset(0); // reset pagination
  }, [name, selectedSpec, data]);

  return (
    <div>
      <div className="flex gap-5">
        <div className="w-[400px]">
          <h3 className="my-1 font-sans font-medium text-[18px]">
            Search by doctor name:
          </h3>
          <input
            className="w-full py-3 px-5 bg-slate-300 border-none outline-none rounded-md"
            placeholder="Doctor Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="w-[400px]">
          <h3 className="my-1 font-sans font-medium text-[18px]">
            Filter by specialization:
          </h3>
          <select
            className="w-full bg-slate-300 py-3 px-5 border-none outline-none rounded-md"
            value={selectedSpec}
            onChange={(e) => setSelectedSpec(e.target.value)}
          >
            <option value="">All Specializations</option>
            {specialization.map((spec, index) => (
              <option key={index} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly">
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <div key={item._id}>
              <DoctorCard data={item} />
            </div>
          ))
        ) : (
          <p className="text-center w-full mt-10">No doctors found.</p>
        )}
      </div>

      <div className="mt-16 flex justify-between items-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="flex gap-3"
          pageLinkClassName="bg-black text-white py-1 px-[25px]"
          activeLinkClassName="bg-blue-500"
        />
        <div>
          Doctors from {itemOffset + 1} to{" "}
          {Math.min(itemOffset + itemsPerPage, filtered.length)} of{" "}
          {filtered.length}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
