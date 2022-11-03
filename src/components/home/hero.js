import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./hero.css"
import Card from "./cards.js"
import '../../styles/utils.css'


const Hero = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            var obj = await axios.get(`https://newsapi.org/v2/everything?q=sports+country=in+&apiKey=58b560b1b32f4181a5921914afc27b0b`);
            // var res= respond.slice(0,4);
            setArticles(obj.data.articles)
            console.log(obj)
        }

        getArticles()
    }, [])

  return (
    <>
      <section className='hero'>
        <div className='container '>
          {articles.map((artic) => {
            return (
              <>
                return(
                    <Card
                        title={artic.title}
                        description={artic.description}
                        url={artic.url}
                        urlToImage={artic.urlToImage} 
                        author={artic.author}

                    />
                    
                )
              </>
            )
          })}
          
        </div>
      </section>
    </>
  )
}

export default Hero