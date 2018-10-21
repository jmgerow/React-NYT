import axios from "axios";

// const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
// const apiKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931q=";

export default {
    // articleSearch: function (query) {
    //    return axios.get(queryURL + apiKey + query) 

    // },

    // Gets all books
    getArticles: function () {
        return axios.get("/api/articles");
    },
    // Gets the book with the given id
    getArticles: function (id) {
        return axios.get("/api/articles/" + id);
    },
    // Deletes the book with the given id
    deleteArticle: function (id) {
        return axios.delete("/api/articles/" + id);
    },
    // Saves an article to the database
    saveArticle: function (articleData) {
        return axios.post("/api/articles", articleData);
    },
    pullArticles: function (data) {
        return axios.post("/api/articles/scrape", data);
    }
};


