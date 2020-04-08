import React, { useState, useEffect } from "react";
import Todos from "./Todos";
import Header from "./layout/Header";
import AddTodo from "./AddTodo";
import uuid from "uuid";
import axios from "axios";

const TodoApp = (props) => {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);

  const handleChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
    setShow(!show);
  };

  const deleteTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    console.log("test run");
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => setTodos(response.data));
  }, []);

  return (
    <div className="container">
      <Header headerSpan={show} />
      <AddTodo addTodo={addTodo} />
      <Todos
        todos={todos}
        handleChange={handleChange}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoApp;

// import React from "react";
// import Todos from "./Todos";
// import Header from "./layout/Header";
// import AddTodo from "./AddTodo";
// import uuid from "uuid";
// import axios from "axios";

// class TodoApp extends React.Component {
//   state = {
//     todos: [],
//     show: false
//   };

//   handleChange = id => {
//     this.setState({
//       todos: this.state.todos.map(todo => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed;
//         }
//         return todo;
//       }),
//       show: !this.state.show
//     });
//   };

//   deleteTodo = id => {
//     this.setState({
//       todos: [
//         ...this.state.todos.filter(todo => {
//           return todo.id !== id;
//         })
//       ]
//     });
//   };

//   addTodo = title => {
//     const newTodo = {
//       id: uuid.v4(),
//       title: title,
//       completed: false
//     };
//     this.setState({
//       todos: [...this.state.todos, newTodo]
//     });
//   };

//   componentDidMount() {
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
//       .then(response => this.setState({ todos: response.data }));
//   }

//   render() {
//     return (
//       <div className="container">
//         <Header headerSpan={this.state.show} />
//         <AddTodo addTodo={this.addTodo} />
//         <Todos
//           todos={this.state.todos}
//           handleChange={this.handleChange}
//           deleteTodo={this.deleteTodo}
//         />
//       </div>
//     );
//   }
// }

// export default TodoApp;
