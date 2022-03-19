import React, { Component } from "react";
import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("Logging the error", error);
    alert("An unexpected error occured.");
  }

  return Promise.reject(error);
});

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class CallingBackEnd extends Component {
  state = { posts: [] };

  async componentDidMount() {
    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
    //console.log("Data", posts);
  }

  handleAdd = async () => {
    const obj = { title: "Kavindu", body: "a" };
    //post request only return newly added value
    const { data: post } = await axios.post(apiEndpoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async (post) => {
    post.title = "Updated";
    //put method update entire form : need to send all the data set
    await axios.put(apiEndpoint + `/${post.id}`, post);

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async (post) => {
    const originalState = this.state.posts;
    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });
    try {
      await axios.delete(apiEndpoint + `/${post.id}`);
      // throw new Error("");
    } catch (ex) {
      //Expected & Unexpected Error handling
      if (ex.response && ex.response.status === 404)
        alert("This post has already been deleted.");

      this.setState({ posts: originalState });
    }
  };

  render() {
    return (
      <>
        <h1 className="mb-4">BackEnd</h1>
        <button
          type="button"
          className="btn btn-success mb-4"
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
              <tr key={p.id}>
                <th scope="row">{p.id}</th>
                <td>{p.title}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => this.handleUpdate(p)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(p)}
                  >
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
