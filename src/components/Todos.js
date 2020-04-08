import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <div>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChange={props.handleChange}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </div>
  );
};

export default Todos;

// import React from "react";
// import TodoItem from "./TodoItem";

// class Todos extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.todos.map(todo => (
//           <TodoItem
//             key={todo.id}
//             todo={todo}
//             handleChange={this.props.handleChange}
//             deleteTodo={this.props.deleteTodo}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default Todos;
