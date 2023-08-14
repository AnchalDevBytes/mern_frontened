import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  // console.log(name, email, age);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addUser = { name, email, age };
    const response = await fetch("http://localhost:5000", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      // console.log(result);
      setError("");
      setName("");
      setAge(0);
      setEmail("");
      navigate("/all");
    }
  };

  return (
    <div className="my-2 lg:my-8 flex flex-col gap-10 items-center justify-center">
      <h2 className="text-lg lg:text-3xl">Enter the Data</h2>
      {error
        ? setTimeout(() => {
            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              {error}
            </div>;
          }, 2000)
        : setTimeout(() => {
            <div className="mb-4 rounded-lg bg-green-200 px-6 py-5 text-base text-green-700">
              Added
            </div>;
          }, 2000)}
      <form
        onSubmit={handleSubmit}
        className="w-full flex items-center flex-col gap-10"
      >
        <div className="w-full md:w-1/3">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Name
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Enter your name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <p className="mt-1 text-xs text-gray-500">*This field is required</p>
        </div>
        <div className="w-full md:w-1/3">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Email
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="email"
            placeholder="Enter your email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="mt-1 text-xs text-gray-500">*This field is required</p>
        </div>
        <div className="w-full md:w-1/3">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Age
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="number"
            placeholder="Enter your age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80 active:text-red-300"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Create;
