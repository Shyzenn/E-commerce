import React from "react";

const page = () => {
  return (
    <div className="max-h-screen">
      <div className="text-[3rem] mb-10">
        <h1>Love to hear from you,</h1>
        <h1>Get in touch 👋</h1>
      </div>
      <form>
        <div className="flex gap-5 w-full">
          <div className="flex flex-col w-[50%]">
            <label htmlFor="" className="font-semibold">
              Your Name
            </label>
            <input
              type="text"
              className="bg-stone-100 w-full p-2 mt-1"
              placeholder="full name"
            />
          </div>
          <div className="flex flex-col w-[50%]">
            <label htmlFor="" className="font-semibold">
              Your Email
            </label>
            <input
              type="text"
              className="bg-stone-100 w-full p-2 mt-1"
              placeholder="johndoe@email.com"
            />
          </div>
        </div>
        <div className="flex gap-5 mt-8 w-full">
          <div className="flex flex-col w-[50%]">
            <label htmlFor="" className="font-semibold">
              What you are interested
            </label>
            <input
              type="text"
              className="bg-stone-100 w-full p-2 mt-1"
              placeholder="design & branding"
            />
          </div>
          <div className="flex flex-col w-[50%]">
            <label htmlFor="" className="font-semibold">
              Subject
            </label>
            <input
              type="text"
              className="bg-stone-100 w-full p-2 mt-1"
              placeholder="enter the subject"
            />
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <label htmlFor="" className="font-semibold">
            Message
          </label>
          <textarea
            name=""
            id=""
            placeholder="Let us know your concern about"
            className="bg-stone-100 w-full p-2 mt-1"
          ></textarea>
        </div>
        <button className="mt-10 bg-black text-white w-[40%] py-2 rounded-md ">
          Send message
        </button>
      </form>
    </div>
  );
};

export default page;
