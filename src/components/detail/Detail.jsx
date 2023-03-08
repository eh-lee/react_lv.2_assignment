import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //'id' parameter 추출, todos.find()에 들어가는 인자임
  const todos = useSelector(({ todos }) => todos.todos);
  const detailTodo = todos.find((todo) => todo.id === Number(id));

  return (
    <div
      style={{
        width: "auto",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "600px",
          height: "auto",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {detailTodo ? (
          <div>
            <button
              style={{
                display: "flex",
                alignItems: "left",
                justifyContent: "flex-start",
                margin: "20px 0px",
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              PREV
            </button>
            <div
              key={detailTodo.id}
              style={{
                display: "flex",
                alignItems: "left",
                justifyContent: "space-between",
                height: "auto",
                padding: "0px 15px 50px",
                flexDirection: "column",
              }}
            >
              <h3>No. {detailTodo.id}</h3>
              <h1 style={{ display: "block", alignItems: "center" }}>
                Title: {detailTodo.title}
              </h1>
              <main style={{ fontSize: "20px", display: "block" }}>
                Content: {detailTodo.content}
              </main>
              <div
                className="isDone"
                style={{
                  padding: "30px 0px 0px",
                  diplay: "flex",
                  textAlign: "right",
                  color: "#b53f3f",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                ➡️ {detailTodo.isDone ? "Already Done" : "Not Yet"}{" "}
              </div>
            </div>
          </div>
        ) : (
          <div>Todo not found.</div>
        )}
      </div>
    </div>
  );
};

export default Detail;
