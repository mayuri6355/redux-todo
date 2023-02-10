import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Todo.css";
import { addTodo, deleteTodo, removeTodo } from "../Actions";

export default function Todo() {
  const [inputdata, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);
  return (
    <>
      <div className="main-div ">
        <div className="child-div ">
          <figure>
            <figcaption>Add Your List Here ✌ </figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder=" ✍ Add Items.."
              value={inputdata}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputdata), setInputData(""))}
            ></i>
          </div>

          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">

                  <i
                    className="far fa-trash-alt add-btn"
                    title="delete item"
                    onClick={() =>
                      dispatch(deleteTodo(elem.id))
                    }
                  ></i>
                </div>
                </div>
              );
            })}
          </div>

          <div className="showItems"> 
          <button className="btn effect04" data-sm-link-text="remove All" onClick={()=>dispatch(removeTodo())}>
            <span>Check List</span></button>
          </div>
        </div>
      </div>
    </>
  );
}
