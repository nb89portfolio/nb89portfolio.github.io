import React, { Component } from "react";
import './Home.css';
import  BlogList from './blog/BlogList';
import  { sampleBlogArticles } from './blog/sampleBlogArticles';
import SearchBar from '../searchBar/SearchBar';
import Scroll from '../scroll/Scroll';
import ErrorBoundary from '../errorboundary/ErrorBoundary';
import Form from '../Form';

class Home extends Component {
    constructor() {
        super()
        this.state = {     
            sampleBlogArticles: sampleBlogArticles, // should be [] or sampleblogarticles
            searchField: ''
        }
    }
/*
    componentDidMount() {
        fetch(need server data)
            .then( response => response.json())
            .then(articles => this.setState({ sampleBlogArticles: articles}));
    }
*/
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const {sampleBlogArticles, searchField} = this.state;
        const filtering = sampleBlogArticles.filter(sampleBlogArticles => {
            return sampleBlogArticles.title.toLowerCase().includes(searchField.toLowerCase());
        })
     
        if(!sampleBlogArticles.length){
            return (
                <main>
                    <SearchBar searchChange = {this.onSearchChange}/>
                    <p>loading.</p>
                </main>
            );
        } else if(!filtering.length){
            return (
                <main>
                    <SearchBar searchChange = {this.onSearchChange}/>
                    <p>nothing found.</p>
                </main>
            );
        } else {
            return (            
                <main>
                    <SearchBar searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <Form/>
                            <BlogList sampleBlogArticles = { filtering } />
                        </ErrorBoundary>
                    </Scroll>
                </main>
            );
        }
    }
}

export default Home;