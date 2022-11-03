import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from '../newsitem'
import './newslist.css'


const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=politics&apiKey=58b560b1b32f4181a5921914afc27b0b`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [])
    return (
        <div className='politicscontainer'>
            {articles.map(article => {
                return(
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                        author={article.author}

                    />
                    
                )
            })}
        </div>
    )
}

export default NewsList
