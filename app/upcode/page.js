"use client";

import Code from "@/components/displayFormet/Code";
import Formet from "@/components/displayFormet/Formet";
import Preview from "@/components/displayFormet/Preview";
import axios from "axios";
import { useState } from "react";

export default function UpCode() {
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [clearId, setClearId] = useState('');

  const handleFormSubmit =(e)=>{
    e.preventDefault();
    setSuccessMsg("");
    setErrMsg("");

    const form = e.target;
    const id = form.id.value;
    const category = form.category.value;
    const code = form.code.value;
    const product = {id, category, code};
    // console.log(user)
    axios.post('https://code-back-battlesofarmys-projects.vercel.app/code', product)
    .then((res)=>{
      setClearId('');
      setSuccessMsg("Successfully Code Uploaded")
    })
    .catch((err)=> setErrMsg(err));
  }



  const handleDelete =(e)=>{
    e.preventDefault();
    setSuccessMsg("");
    setErrMsg("");

    const form = e.target;
    const id = form.id.value;
    const category = form.category.value;
    const product = {id, category};
    // console.log(user)
    axios.delete('http://localhost:5000/code', {data: product})
    .then((res)=>{
      setClearId('');
      setSuccessMsg("Successfully Deleted");
      console.log(res.data)
    })
    .catch((err)=> setErrMsg(err));
  }
  
  return (
    <>
      <Formet>
        <Preview>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto w-full md:w-2/3">
          <form onSubmit={handleFormSubmit} className="space-y-6">
          {/* Name  */}
          <div>
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                Category
              </label>
              <div className="mt-1">
                <input
                  placeholder="Category Name"
                  id="category"
                  name="category"
                  type="text"
                  required
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg"
                />
              </div>
            </div>


            <div>
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                Id
              </label>
              <div className="mt-1">
                <input
                  required
                  value={clearId}
                  placeholder="Code Id"
                  onChange={(e)=> setClearId(e.target.value)}
                  id="id"
                  name="id"
                  type="number"
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg"
                />
              </div>
            </div>


            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Your Code
              </label>
              <div className="mt-1">
                <textarea
                  required
                  rows={6}
                  placeholder="The code"
                  id="code"
                  name="code"
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            {
              successMsg && <p className="text-green-600 mt-2">{successMsg}</p>
            }
            {
              errMsg && <p className="text-red-600 mt-2">{errMsg}</p>
            }
            </div>
          </form>
        </div>
      </div>
        </Preview>
        <Code>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="mt-4 sm:mx-auto w-full md:w-2/3">
          <form onSubmit={handleDelete} className="space-y-6">
          {/* Name  */}
          <div>
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                Category
              </label>
              <div className="mt-1">
                <input
                  placeholder="Category Name"
                  id="category"
                  name="category"
                  type="text"
                  required
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg"
                />
              </div>
            </div>


            <div>
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                Id
              </label>
              <div className="mt-1">
                <input
                  required
                  value={clearId}
                  placeholder="Code Id"
                  onChange={(e)=> setClearId(e.target.value)}
                  id="id"
                  name="id"
                  type="number"
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            {
              successMsg && <p className="text-green-600 mt-2">{successMsg}</p>
            }
            {
              errMsg && <p className="text-red-600 mt-2">{errMsg}</p>
            }
            </div>
          </form>
        </div>
      </div>
        </Code>
      </Formet>
    </>
  )
}
