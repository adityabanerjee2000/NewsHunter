// import PropTypes from 'prop-types'
import React from 'react'

const NewsItem = (props) => {
  // static propTypes = {}
  
    let {title, description, imageUrl, newsUrl,author,date,source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
            <span className="badge rounded-pill bg-success">{source}</span>
          </div>
          <img src={!imageUrl?"https://imageio.forbes.com/specials-images/imageserve//62b8bce5ed523fd6507a1f0b/0x0.jpg?format=jpg&width=1200":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}
              
            
            </h5>
            <p className="card-text"> {description} </p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toLocaleTimeString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem

// {new Date(date).toGMTString()} -> By Harry 
// {new Date(date).toLocalTimeString()} -> By Me