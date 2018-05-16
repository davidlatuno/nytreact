import axios from "axios";

export default {
    getArticles: function(search) {
        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b5fe66c8adcd495790816ca899dfefad&q=" + search);
    }
}