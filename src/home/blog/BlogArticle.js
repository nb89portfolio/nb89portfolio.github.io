import React from 'react';
import './BlogArticle.css';

const BlogArticle = (props) => {
    const {title, paragraph, time } = props;
    return (
        <article>
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <time>{time}</time>
        </article>
    );
}

export default BlogArticle;