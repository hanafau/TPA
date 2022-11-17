import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import "../components/Input.css";

function TodoInput() {
  let [name, setName] = useState();
  let dispatch = useDispatch();
  return (
    <div className="bungkus">
      <div className="container">
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" />
        <button
          onClick={() => {
            dispatch(
              addTodo({
                id: uuid(),
                name: name,
              })
            );
            setName("");
          }}
          className="btn btn-primary m-2"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
