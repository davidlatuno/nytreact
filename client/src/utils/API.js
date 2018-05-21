import axios from "axios";

export default {
    getArticlesWithYear: function(search, start, end) {
        return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b5fe66c8adcd495790816ca899dfefad&q=${search}&begin_date=${start}&end_date${end}`);
    },

    getArticles: function(search) {
        return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b5fe66c8adcd495790816ca899dfefad&q=${search}`);
    },

    createSaved: function(article) {
        return axios.post("/api/Articles", article)
    },

    getSaved: function() {
        return axios.get("/api/Articles")
    },

    deleteArticle: function(id) {
        return axios.delete("/api/Articles/" + id);
    }
}