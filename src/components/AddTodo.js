import React, { useState } from "react";

const AddTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTodo(inputText.title);
    setInputText({
      title: "",
    });
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        className="input-text"
        name="title"
        value={inputText.title}
        onChange={onChange}
      />
      <input type="submit" value="Submit" className="input-submit" />
    </form>
  );
};

export default AddTodo;

// import React, { Component } from "react";

// class AddTodo extends Component {
//   state = {
//     title: ""
//   };
//   onChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   onSubmit = e => {
//     e.preventDefault();
//     this.props.addTodo(this.state.title);
//     this.setState({
//       title: ""
//     });
//   };
//   render() {
//     return (
//       <form className="form-container" onSubmit={this.onSubmit}>
//         <input
//           type="text"
//           placeholder="Add Todo..."
//           className="input-text"
//           name="title"
//           value={this.state.title}
//           onChange={this.onChange}
//         />
//         <input type="submit" value="Submit" className="input-submit" />
//       </form>
//     );
//   }
// }

// export default AddTodo;
