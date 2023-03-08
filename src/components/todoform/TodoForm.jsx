import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/modules/todos";

const TodoForm = () => {
  const dispatch = useDispatch();

  const todos = useSelector(({ todos }) => todos.todos);

  const [todo, setTodo] = useState({
    id: "",
    title: "",
    content: "",
    isDone: false,
  });

  const handleAddTodo = (e) => {
    // console.log(e);
    // console.log(todo);

    if (todo.title === "" || todo.content === "")
      alert("Please, Write Correctly");
    else {
      e.preventDefault();
      //<form> tag의 init 방지
      dispatch(addTodo(todo));
      //초기화를 하기 전에 디스패치가 보내 버리면 되는 거예유!
      setTodo({
        id: "",
        title: "",
        content: "",
        isDone: false,
      });
    }
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        maxHeight: "800px",
        margin: "20px auto 20px",
      }}
    >
      <form
        style={{
          borderRadius: "8px",
          border: "1px solid black",
          backgroundColor: "rgb(248, 248, 248)",
          display: "flex",
          padding: "30px",
          height: "45px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <label style={{ fontWeight: "700", fontSize: "18px" }}>TITLE</label>
          <input
            style={{
              height: "30px",
              width: "240px",
              borderRadius: "8px",
              padding: "0px 12px",
            }}
            type="text"
            value={todo.title}
            onChange={({ target: { value: title } }) => {
              setTodo((pre) => ({
                ...pre,
                id: todos.length + 1,
                title,
              }));
            }}
            autoFocus
          />
          <label style={{ fontWeight: "700", fontSize: "18px" }}>CONTENT</label>
          <input
            style={{
              height: "30px",
              width: "240px",
              borderRadius: "8px",
              padding: "0px 12px",
            }}
            type="text"
            value={todo.content}
            onChange={({ target: { value: content } }) => {
              setTodo((pre) => ({
                ...pre,
                content,
              }));
            }}
          />
        </div>
        <button
          style={{
            height: "30px",
            borderRadius: "8px",
            borderStyle: "double",
            borderWidth: "5px",
            width: "70px",
            backgroundColor: "rgb(186, 186, 186)",
            fontSize: "23px",
            fontWeight: "600",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          value={todo}
          onClick={handleAddTodo}
        >
          +
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
