import Nav from "../../nav";
import Classes from "./Classes";
import ConditionalOutput from "./conditional-output";
import Styles from "./styles";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-list";

export default function Assignment6() {
  return (
    <div>
      <Nav />
      <h1>Assignment 6</h1>
      <TodoList />
      <TodoItem />
      <ConditionalOutput />
      <Styles />
      <Classes />
    </div>
  );
}
