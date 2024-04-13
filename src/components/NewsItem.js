import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
  let  {title, description, imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
      <div className="card" >
  <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2023/12/03/1600x900/GTA_6__1701612816291_1701612816490.png":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body"> 
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark" >Read More</a>
  </div>
</div>
         
      </div>
    )
  }
}

export default NewsItem
