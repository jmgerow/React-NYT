import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";


class Home extends Component {
    state = {
        articles: [],
        topic: "",
        startYear: "",
        endYear: ""
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
                                {this.state.books.map(book => (
                                    <ListItem key={book._id}>
                                        <Link to={"/books/" + book._id}>
                                            <strong>
                                                {book.title} by {book.author}
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
            </Container>
        );
    }


};


export default Home;