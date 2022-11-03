import React from 'react'
import './newsitem.css'

const NewsItem = ({ title, description, url, urlToImage,author }) => {
    return (
        <div className="news-app">
            <div className='news-item'>
                <img className='news-img' src={urlToImage} alt={urlToImage} />
                <h3><a href={url}>{title}</a></h3>
                {/* <p>{author}</p> */}
                {/* <p>{description}</p> */}
            </div>
        </div>
    )
}

export default NewsItem