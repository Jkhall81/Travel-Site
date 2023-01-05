import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80"
          alt="/"
        />
      </div>
      {/* Right Side */}
      <div>
        <h3>Plan Your Next Trip</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          recusandae aspernatur quos maiores dolores excepturi deleniti. Amet,
          culpa est quaerat laborum eos non cupiditate, pariatur explicabo
          debitis, itaque repudiandae iure.
        </p>
        <div>
          <button>Learn More</button>
          <button>Book Your Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
