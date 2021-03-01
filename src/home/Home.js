import React, { Component } from "react";
import './Home.css';
import  BlogList from './blog/BlogList';
import  { sampleBlogArticles } from './blog/sampleBlogArticles';
import SearchBar from '../searchBar/SearchBar';

class Home extends Component {
    constructor() {
        super()
        this.state = {     
            sampleBlogArticles: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://nb89portfolio.github.io/src/home/blog/fakeapidata.html')
            .then( response => response.json())
            .then(articles => this.setState({ sampleBlogArticles: articles}));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const filtering = this.state.sampleBlogArticles.filter(sampleBlogArticles => {
            return sampleBlogArticles.title.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        
        return (            
            <main>
                <SearchBar searchChange = {this.onSearchChange}/>
                <BlogList sampleBlogArticles = { filtering } />
            </main>
        );
    }
}

export default Home;