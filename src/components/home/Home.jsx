// import TodoList from "../todolist/TodoList";
import TodoList from "../todolist/TodoList";
import Header from "../header/Header";
import TodoForm from "../todoform/TodoForm";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <TodoForm></TodoForm>
      <TodoList></TodoList>
    </div>
  );
};

export default Home;
