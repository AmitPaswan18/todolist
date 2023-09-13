"use client";

import { Cagliostro } from "next/font/google";
import React, { useState } from "react";
import { render } from "react-dom";

const page = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [todo, setTodo] = useState([]);

  const onFormSubmit = (e) => {
    setTodo([...todo, { title, description }]);
    console.log(todo);
    e.preventDefault();
    setdescription("");
    settitle("");
  };

  const deleteHandler = (index) => {
    let copytask = [...todo];
    copytask.splice(index, 1);
    setTodo(copytask);
  };

  let renderTask = <h1 className="text-white"> No task available</h1>;

  if (todo.length > 0) {
    renderTask = todo.map((task, index) => {
      return (
        <>
          <li key={index}>
            <h4 className="text-white"> {task.title} </h4>
            <h4 className="text-white"> {task.description} </h4>
            <button
              className="text-white bg-red-50"
              onClick={() => {
                deleteHandler(index);
              }}>
              {" "}
              Delete{" "}
            </button>
          </li>
        </>
      );
    });
  }

  return (
    <>
      <h1 className=" flex  items-center justify-center text-white bg-teal-500 text-center h-10 font-bold">
        Amit ToDo List
      </h1>
      <form className="py-2" onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          className="text-xl mx-4 border-zinc-800 border-4 "
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Description"
          className="text-xl mx-4 border-zinc-800 border-4"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        <button className="bg-black text-white text-lg rounded-md p-1">
          Add a Task
        </button>
      </form>
      <div className="bg-black">
        {" "}
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
