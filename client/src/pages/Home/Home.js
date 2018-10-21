import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import axios from "axios";


class Home extends Component {
    state = {
        articles: [],
        topic: "",
        startYear: "",
        endYear: ""
    };

    componentDidMount() {
        this.loadArticles();
        console.log(this.state.articles)
    }

    loadArticles = () => {
        API.getArticles()
            .then(res =>
                this.setState({ articles: res.data, title: "", date: "", url: "" })
            )
            .catch(err => console.log(err));
    };

    clearArticles = () => {
        API.clearArticles()
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    articleSearch = (response) => {
        const apiKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" +
            this.state.topic + "&begin_date=" + this.state.startYear + "0101" + "&end_date=" + this.state.endYear + "1231";


        axios.get(queryURL).then(function (response, id) {
            // console.log('response', response.data.response.docs[0].headline.main)
            // console.log('response', response.data.response.docs[0].web_url)
            // console.log('response', response.data.response.docs[0].pub_date)
            // // console.log('response', response.data.response.docs[0])
            for (var i = 0; i < response.data.response.docs.length; i++) {

                if (i == 5) {
                    break
                } else {
                    API.pullArticles({
                        title: response.data.response.docs[i].headline.main,
                        url: response.data.response.docs[i].web_url,
                        date: response.data.response.docs[i].pub_date

                    })
                       
                }
                // console.log(response.data.response.docs[i].headline.main)
            }


            // .then(res => this.loadBooks())
            // .catch(err => console.log(err));

        })
        

    };

    // displayArticles = response => {
    //     console.log('response', response)
    // }

    handleFormSubmit = event => {
        event.preventDefault();

        this.clearArticles();
        this.articleSearch();
        
        this.loadArticles()

    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Search for Articles</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.topic}
                                onChange={this.handleInputChange}
                                name="topic"
                                placeholder="Topic (required)"
                            />
                            <Input
                                value={this.state.startYear}
                                onChange={this.handleInputChange}
                                name="startYear"
                                placeholder="Start Year (required)"
                            />
                            <Input
                                value={this.state.endYear}
                                onChange={this.handleInputChange}
                                name="endYear"
                                placeholder="End Year (required)"
                            />
                            <FormBtn
                                // disabled={!(this.state.author && this.state.title)}
                                onClick={this.handleFormSubmit}
                            >
                                Search
                  </FormBtn>
                        </form>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Results</h1>
                        </Jumbotron>
                        {this.state.articles.length ? (
                            <List>
                                {this.state.articles.map(article => (
                                    <ListItem key={article._id}>
                                        <Link to={"/articles/" + article._id}>
                                            <strong>
                                                {article.title} <br></br> {article.url}
                                            </strong>
                                        </Link>
                                        {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Saved Articles</h1>
                        </Jumbotron>
                        {this.state.articles.length ? (
                            <List>
                                {this.state.articles.map(article => (
                                    <ListItem key={article._id}>
                                        {/* <Link to={"/articles/" + article._id}> */}
                                            <strong>
                                                {/* {article.title} <br></br> {article.url} */}
                                            </strong>
                                        {/* </Link> */}
                                        {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }


};


export default Home;