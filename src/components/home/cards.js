import React from "react"


const Card = ({  title, description, url, urlToImage,author="karl rockz",category="Technology"  } ) => {
  return (
    <>
      <div className='box'>
        <div className='img'>
          <img src={urlToImage} alt='' />
        </div>
        <div className='text'>
          <span className='category'>{category}</span>
          {/*<h1 className='titleBg'>{title}</h1>*/}
          
            <h1 className='titleBg'>{title}</h1>
          
          <div className='author flex'>
            <span>by {author}</span>
            {/* <span>{description}</span> */}
            <a href={url}>read more</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
