import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Card = ({ user }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await axios.post(`https://dashboard-server-2dvk.onrender.com/user/updateuser/${user._id}`, data);
  };

  const deleteUser = async () => {
    try {
      await axios.delete(`https://dashboard-server-2dvk.onrender.com/user/deleteuser/${user.Name}`);
      alert("Delete Successful");
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async () => {
    await axios.post(`https://dashboard-server-2dvk.onrender.com/user/updateuser/${user._id}`, user);
  };

  return (
    <div className="flex flex-row p-2 rounded-md shadow-md w-full bg-slate-400 mt-5">
      <form>
        <div className="flex flex-row flex-center">
          <label
            className="m-1 w-20 text-gray-700 text-2xl font-bold mb-2"
            htmlFor="_id"
          >
            ID
          </label>
          <input
            type="text"
            className="w-96 px-2 ml-20 py-1 mb-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="ID"
            {...register("_id")}
            defaultValue={user._id}
          />
        </div>
        <div className="flex flex-row flex-center">
          <label
            className="m-1 w-20 text-gray-700 text-2xl font-bold mb-2"
            htmlFor="Name"
          >
            Name
          </label>
          <input
            type="text"
            className="w-96 px-2 ml-20 py-1 mb-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Name"
            {...register("Name")}
            defaultValue={user.Name}
          />
        </div>
        <div className="flex flex-row flex-center">
          <label
            className="m-1 w-20 text-gray-700 text-2xl font-bold mb-2"
            htmlFor="Email"
          >
            Email
          </label>
          <input
            type="text"
            className="w-96 px-2 ml-20 py-1 mb-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Email"
            {...register("Email")}
            defaultValue={user.Email}
          />
        </div>
        <div className="flex flex-row flex-center">
          <label
            className="m-1 w-20 text-gray-700 text-2xl font-bold mb-2"
            htmlFor="contact"
          >
            Contact
          </label>
          <input
            type="text"
            className="w-96 px-2 ml-20 py-1 mb-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="contact"
            {...register("contact")}
            defaultValue={user.contact}
          />
        </div>
        <div className="flex flex-row flex-center">
          <label
            className="m-1 w-20 text-gray-700 text-2xl font-bold mb-2"
            htmlFor="experience"
          >
            Experience
          </label>
          <input
            type="text"
            className="w-96 px-2 ml-20 py-1 mb-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="experience"
            {...register("experience")}
            defaultValue={user.experience}
          />
        </div>
        <div className="flex flex-row flex-center">
          <label
            className="m-1 w-20 text-gray-700 text-2xl font-bold mb-2"
            htmlFor="password"
          >
            password
          </label>
          <input
            type="text"
            className="w-96 px-2 ml-20 py-1 mb-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="password"
            {...register("password")}
            defaultValue={user.password}
          />
        </div>
        <div className="flex flex-row flex-center">
          <label
            className="m-1 w-20 text-gray-700 text-2xl font-bold mb-2"
            htmlFor="role"
          >
            Role
          </label>
          <input
            type="text"
            className="w-96 px-2 ml-20 py-1 mb-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="role"
            {...register("role")}
            defaultValue={user.role}
            readOnly
          />
        </div>
        <div className="flex flex-center items-center">
          <div className="bg-lime-400 w-25 rounded-md m-5">
            <button className="m-2" onClick={updateUser} type="submit">
              Update
            </button>
          </div>
          <div className="w-25 bg-red-300 rounded-md m-5 ">
            <button className="m-2" onClick={deleteUser}>
              Delete
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Card;
