import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getData = async () => {
    const response = await fetch("https://mern-backened-i1r3.onrender.com");
    const result = await response.json();
    // console.log(result);

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      setData(result);
    }
  };

  const handleDelete = async (id) => {
    const response = await fetch(`https://mern-backened-i1r3.onrender.com/${id}`, {
      method: "DELETE",
    });
    const result = response.json();

    if (!response.ok) {
      // console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      setError("Data deleted Sucessfully");
      setTimeout(() => {
        setError("");
        getData();
      }, 2000);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="my-2 lg:my-8 flex flex-col gap-10 items-center justify-center">
      <h2 className="text-lg lg:text-3xl">All data</h2>
      {error && (
        <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          {error}
        </div>
      )}
      <div className="grid grid-cols-3 gap-10">
        {data?.map((elm, index) => (
          <div
            key={index}
            className="w-[300px] h-[200px] flex items-center justify-center rounded-md border"
          >
            <div className="p-4">
              <h2 className="text-lg font-semibold">{elm?.name}</h2>
              <h2 className="mt-3 text-sm text-gray-600">{elm?.email}</h2>
              <h2 className="mt-3 text-sm text-gray-600">{elm?.age}</h2>
              <div className="flex gap-10">
                <button
                  type="button"
                  className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={() => handleDelete(elm._id)}
                >
                  Delete
                </button>
                <Link
                  to={`/${elm._id}`}
                  type="button"
                  className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;
