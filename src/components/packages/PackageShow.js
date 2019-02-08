import React from 'react'

import axios from 'axios'


class PackageShow extends React.Component{

  constructor(){
    super()
    this.state = {}

  }

  getPackageData(){
    axios.get(`/api/packages/${this.props.match.params.name}`)
      .then( res =>{
        this.setState({ package: res.data})
      })
      .catch((err)=>console.log(err.message))
  }

  componentDidMount(){
    this.getPackageData()
  }

  render(){
    if(!this.state.package) return null
    const {
      name,
      description,
      author,
      publisher,
      links,
      license
    } = this.state.package.collected.metadata
    const {comments} = this.state.package
    function arrFromObj(obj){
      const arr = []
      for (const key in obj) arr.push([key, obj[key]])
      return arr
    }

    return(
      <section>
        <h1>Packages</h1>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{`author:${author.name}`}</p>
        <p>{`license:${license}`}</p>
        <p>{`publisher:${publisher.username}, ${publisher.email}`}</p>
        <h3>links:</h3>
        <ul>
          {arrFromObj(links).map( (link,i) => {
            return <li key={i}><a  href={link[1]}>{link[0]}</a></li>
          })}
        </ul>
        <h3>Comments</h3>
        <ul>
          {comments.map( (comment, i) =>
            <li key={i}>
              <p>{comment.text}</p>
              <p>{`Posted by ${comment.user.username}`}</p>
            </li>
          )}
        </ul>
      </section>
    )
  }
}

export default PackageShow