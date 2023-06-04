import React from 'react';
import '../article/article.css';

function Article({imageUrl, date, text}) {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imageUrl} alt="blog" />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  )
}

export default Article
