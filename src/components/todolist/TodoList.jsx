import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { chgTodo, delTodo } from "../../redux/modules/todos";

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector(({ todos }) => todos.todos);

  // const TodoArea = styled.div`
  //   max-width: "1200px";
  //   max-height: "800px";
  //   margin: "20px auto 20px";
  // `;

  const todoArea = styled.div`
    max-width: 1200px;
    max-height: 800px;
    margin: 20px auto 20px;
  `;

  return (
    <div
      className="todoArea"
      style={{
        maxWidth: "1200px",
        maxHeight: "800px",
        margin: "20px auto 20px",
        //네 면의 여백에 대한 단축속성
        //margin: "상하 좌우"
        //margin: "상 좌우 하"
      }}
    >
      <div>
        <h2>WORKING</h2>
        <div
          className="todoWrap"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            margin: "0px 0px 50px",
          }}
        >
          {todos.map((todo) => {
            if (!todo.isDone)
              return (
                <div
                  key={todo.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <div
                    className="todoBox"
                    style={{
                      minWidth: "245px",
                      minHeight: "150px",
                      border: "3px solid black",
                      borderRadius: "8px",
                      padding: "12px 20px 20px",
                    }}
                  >
                    <div>
                      <div>
                        <h2
                          className="todo-title"
                          style={{
                            display: "block",
                            fontSize: "1.5em",
                          }}
                        >
                          {todo.title}
                        </h2>
                      </div>
                      <Link
                        to={`/${todo.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <p style={{ textAlign: "right" }}>detail</p>
                      </Link>
                    </div>

                    <footer
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "5px",
                      }}
                    >
                      <button
                        style={{
                          border: "1px solid black",
                          height: "30px",
                          width: "100px",
                          backgroundColor: "rgb(248,248,248)",
                          borderRadius: "8px",
                          cursor: "pointer",
                          fontSize: "15px",
                          color: "#b65d5d",
                        }}
                        onClick={() => {
                          dispatch(delTodo(todo));
                        }}
                      >
                        &nbsp;del
                      </button>

                      <button
                        style={{
                          border: "1px solid black",
                          height: "30px",
                          width: "100px",
                          backgroundColor: "rgb(186, 186, 186)",
                          borderRadius: "8px",
                          cursor: "pointer",
                          fontSize: "15px",
                        }}
                        onClick={() => {
                          dispatch(chgTodo(todo));
                        }}
                      >
                        {todo.isDone ? "canc" : "done"}
                      </button>
                    </footer>
                  </div>
                </div>
              );
          })}
        </div>
      </div>

      <hr
        style={{
          size: "3",
          color: "rgb(120,120,120)",
          borderStyle: "dotted",
          borderWidth: "2px",
        }}
      ></hr>
      <br />
      <div>
        <h2>
          <span style={{ backgroundColor: "rgb(230, 230, 230)" }}>DONE</span>
        </h2>
        <div
          className="todoWrap"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            margin: "0px 0px 50px",
          }}
        >
          {todos.map((todo) => {
            if (todo.isDone)
              return (
                <div
                  key={todo.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <div
                    className="todoBox"
                    style={{
                      minWidth: "245px",
                      minHeight: "150px",
                      border: "3px solid black",
                      borderRadius: "8px",
                      padding: "12px 20px 20px",
                    }}
                  >
                    <div>
                      <div>
                        <h2
                          className="todo-title"
                          style={{
                            display: "block",
                            fontSize: "1.5em",
                          }}
                        >
                          {todo.title}
                        </h2>
                      </div>
                      <Link
                        to={`/${todo.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <p style={{ textAlign: "right" }}>detail</p>
                      </Link>
                    </div>

                    <footer
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "5px",
                      }}
                    >
                      <button
                        style={{
                          border: "1px solid black",
                          height: "30px",
                          width: "100px",
                          backgroundColor: "rgb(248,248,248)",
                          borderRadius: "8px",
                          cursor: "pointer",
                          fontSize: "15px",
                          color: "#b65d5d",
                        }}
                        onClick={() => {
                          dispatch(delTodo(todo));
                        }}
                      >
                        &nbsp;del
                      </button>

                      <button
                        style={{
                          border: "1px solid black",
                          height: "30px",
                          width: "100px",
                          backgroundColor: "rgb(248,248,248)",
                          borderRadius: "8px",
                          cursor: "pointer",
                          fontSize: "15px",
                        }}
                        onClick={() => {
                          dispatch(chgTodo(todo));
                        }}
                      >
                        {todo.isDone ? "canc" : "done"}
                      </button>
                    </footer>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
