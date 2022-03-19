import React, { Component } from "react";
import axios from "axios";

class CallingBackEnd extends Component {
  state = { posts: [] };

  async componentDidMount() {
    const { data: posts } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.setState({ posts });
    //console.log("Data", data);
  }

  handleAdd = () => {
    console.log("Add");
  };

  render() {
    return (
      <>
        <h1 className="mb-4">BackEnd</h1>
        <button
          type="button"
          class="btn btn-success mb-4"
          onClick={this.handleAdd}
        >
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((p) => (
              <tr>
                <th scope="row">{p.id}</th>
                <td>{p.title}</td>
                <td>
                  <button type="button" class="btn btn-info">
                    Update
                  </button>
                </td>
                <td>
                  <button type="button" class="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default CallingBackEnd;
