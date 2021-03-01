import React from 'react';
import BlogArticle from './BlogArticle'; 

const BlogList = ({sampleBlogArticles}) => {
    const blogComponent = sampleBlogArticles.map((article, index) => {
        return (
            <BlogArticle 
                key={ index } 
                title={sampleBlogArticles[index].title} 
                paragraph={sampleBlogArticles[index].paragraph} 
                time={sampleBlogArticles[index].time} />
        );
    });
    return (
        <section>
            { blogComponent }     
        </section>
    );
}

export default BlogList;