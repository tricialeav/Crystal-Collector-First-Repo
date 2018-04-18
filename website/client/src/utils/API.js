import axios from "axios";

export default {

  getComments: function() {
    return axios.get("/api/comments");
  },

  getComment: function(id) {
    return axios.get("/api/comments/" + id);
  },

  deleteComment: function(id) {
    return axios.delete("/api/comments/" + id);
  },
  // Saves a book to the database
  saveComments: function(comment) {
    return axios.post("/api/comments", comment);
  }
};
