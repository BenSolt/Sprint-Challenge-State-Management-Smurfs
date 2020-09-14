import React from "react";
import ReactDOM from "react-dom";

// import "./styles.css";
import './Recipe.css';

class Test2 extends React.Component {
  state = {
    ActionItemsList: [
      {
        Title: "ffff",
        DueDate: "2018-08-09",
        Info: 'ingredients1'
      },
      {
        Title: "dddd",
        DueDate: "2018-08-09",
        Info: 'ingredients2'
      }
    ]
  };

  addActionItemToState = (title, dueDate, info) => {
    let toBeAddedActionItem = {
      Title: title,
      DueDate: dueDate,
      Info: info
    };
    this.setState(prevState => ({
      ActionItemsList: prevState.ActionItemsList.concat(toBeAddedActionItem)
    }));
  };
  deleteActionItemFromState = index => {
    const ActionItemsList = [...this.state.ActionItemsList];
    ActionItemsList.splice(index, 1);
    this.setState({ ActionItemsList });
  };
  
  render() {
    return (
      <div>
        <ActionItemForum addActionItemToState={this.addActionItemToState} />
        <ActionItemList
          actionItemsList={this.state.ActionItemsList}
          deleteActionItemFromState={this.deleteActionItemFromState}
        />
      </div>
    );
  }
}
class ActionItemForum extends React.Component {
  state = {
    title: "",
    dueDate: "",
    info: ""
  };

  handleChange = event => {
    event.persist();
    console.log(event.target.name);
    // this.setState({ actionItem: event.target.value });
    this.setState(prevState => ({
      title:
        event.target.name === "title"
          ? event.target.value
          : prevState.title,
      dueDate:
        event.target.name === "dueDate" 
        ? event.target.value 
        : prevState.dueDate,
      info:
        event.target.name === "info"
        ? event.target.value 
        : prevState.info
    }));
  };
  handleSubmission = event => {
    event.preventDefault();
    console.log(this.state.title);
    console.log(this.state.dueDate);
    this.props.addActionItemToState(this.state.title, this.state.dueDate, this.state.info);
    this.setState(prevState => ({
      title: "",
      dueDate: "",
      info: ""
    }));
    alert("Action Item Added to List");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmission}>
          <div className="form-group">
            {/* <label for="title">Title:</label> */}
            <input
              type="text"
              className="Input"
              id="title"
              onChange={this.handleChange}
              value={this.state.title}
              name="title"
              required
            />
          </div>
          <div className="form-group">
            {/* <label for="dueDate">Due Date:</label> */}
            <input
              type="Date"
              className="Input"
              id="dueDate"
              name="dueDate"
              onChange={this.handleChange}
              value={this.state.dueDate}
            //   required
            />
          </div>

          <div className="form-group">
            {/* <label for="dueDate">Due Date:</label> */}
            <input
              type="text"
              className="Input"
              id="info"
              name="info"
              onChange={this.handleChange}
              value={this.state.info}
            //   required
            />
          </div>
          <button type="submit" className="BtnAddRecipe">
            Add
          </button>
        </form>
      </div>
    );
  }
}

const ActionItemList = props => {
  const emptyList = length => {
    if (length === 0) {
      return (
        <tr style={{ "text-align": "center" }}>
          <td colSpan="3">No Record</td>
        </tr>
      );
    }
  };

  const deleteActionItemFromState = index => () => {
    props.deleteActionItemFromState(index);
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Sr#</th>
            <th>Title</th>
            <th>Due Date</th>
            <th> Delete </th>
          </tr>
        </thead>
        <tbody>
          {emptyList(props.actionItemsList.length)}
          {props.actionItemsList.map((actionItem, i) => (
            <tr key={i + 1}>
              <td>{i + 1}</td>
              <td>{actionItem.Title}</td>
              <td>{actionItem.DueDate}</td>
              <td>{actionItem.Info}</td>
              <td>
                <button
                  type="button"
                  className="BtnDeleteRecipe"
                  onClick={deleteActionItemFromState(i)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test2;