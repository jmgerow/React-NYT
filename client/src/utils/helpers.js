import axios from "axios";

// function for pulling articles
export default {
    articleSearch: function (topic, startYear, endYear) {
        const apiKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "?q=" +
            topic + "?begin_date=" + startYear + "?end_date=" + endYear;


        return new Promise(function (fulfill) {
            axios.get(queryURL).then(function (response) {
                console.log('response', response)

                let result = [];

                for (var i = 0; i < response.data.response.docs.length; i++) {


                    if (i === 5) {
                        break;
                    }

                    fulfill(result)
                    console.log('result', result)
                    
                }
            })

        })


    }
};

