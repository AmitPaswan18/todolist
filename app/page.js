"use client";
import React, { useState } from "react";

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
          <div className=" bg-gradient-to-r from-blue-600 to-violet-600 ">
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
          </div>
        </>
      );
    });
  }

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-violet-600 h-[100vh] w-full">
        <h1 className=" flex  text-3xl items-center justify-center text-white text-center py-3 font-bold">
          To Do List
        </h1>
        <form
          className="py-10  bg-gradient-to-r from-fuchsia-500 to-pink-500  "
          onSubmit={onFormSubmit}>
          <input
            type="text"
            placeholder="Enter Task"
            className="text-xl mx-4 border-zinc-800 border-2 rounded-lg placeholder:px-2"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter Description"
            className="text-xl mx-4 border-zinc-800 border-2 rounded-lg placeholder:px-2"
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
      </div>
    </>
  );
};

export default page;
