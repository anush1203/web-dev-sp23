const TodoItem = ({
  todo = {
    done: true,
    title: "Buy milk",
    status: "COMPLETED",
  },
}) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={todo.done}></input>
      {todo.title}({todo.status})
    </li>
  );
};

export default TodoItem;
