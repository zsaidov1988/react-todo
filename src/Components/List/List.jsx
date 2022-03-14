import "./List.css";
import { useState } from "react";

function List() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("data")) || []);
  localStorage.setItem("data", JSON.stringify(todos));
  console.log("List");
  const handleAddTodo = (evt) => {
    if (evt.keyCode === 13 && evt.target.value.length > 0) {
      const newTodo = {
        id: todos.at(-1) ? todos.at(-1).id + 1 : 1,
        value: evt.target.value,
        isComplated: false,
      };

      setTodos([...todos, newTodo]);
      console.log(todos);

      evt.target.value = null;
    }
  };

  return (
    <section className="list-section">
      <div className="container">
        <div className="list-section__wrapper">
          <div className="list-section__left">
            <p>Input ToDo and press Enter</p>
            <input type="text" onKeyUp={handleAddTodo} />
          </div>
          <div className="list-section__right">


            {todos.length > 0 && (

              <ul className="list-section__list list">
                {todos.map((todo) => (
                  <li key={todo.id} className="list__item">
                    <div className="list__item-head">
                      <div>
                        <input className="list__checkbox" type="checkbox" id={`id${todo.id}`} onChange={() => {
                          todo.isComplated = !todo.isComplated; setTodos([...todos]);
                        }} checked={todo.isComplated} />
                        <label htmlFor={`id${todo.id}`}>Done</label>
                      </div>
                      <button className="list__del-btn"
                        onClick={() => {
                          setTodos(
                            todos.filter(
                              (item) => item.id !== todo.id
                            )
                          )
                        }
                        }>x</button>
                    </div>
                    <div className={(todo.isComplated) ? "list__item-body list__item-body-done" : "list__item-body list__item-body-not-done"}>
                      {todo.value}
                    </div>
                  </li>
                ))}
              </ul>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}

export default List;