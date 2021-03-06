const React = require('react')

const axios = require('axios')

class SearchBar extends React.Component{
  // constructor(){
  //   super()
  //
  //   this.state = {
  //     text: ''
  //   }
  //   this.handleChange = this.handleChange.bind(this)
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }

  // handleChange(e){
  //   this.setState({text: e.currentTarget.value})
  // }
  //
  // handleSubmit(e){
  //   e.preventDefault()
  //   const that = this
  //   axios
  //     .get(this.props.url+'/'+this.state.text)
  //     .then((data) => {
  //       this.props.returnData(data)
  //     })
  //     .catch(function (error) {
  //       if (error.response) {
  //         console.log(error.response.data)
  //         console.log(error.response.status)
  //         console.log(error.response.headers)
  //         console.log(that)
  //         that.props.returnData(error.response.status)
  //       }
  //     })
  // }



  render(){
    return(
      <form className="search-bar" onSubmit={this.props.handleSubmit}>
        <div className="field has-addons">
          <div className="control field">
            <input
              autoComplete="off"
              className="input is-skew"
              name="search"
              type="text"
              placeholder="Search"
              onChange={this.props.handleChange}
              value={this.props.value}
            />
          </div>
          <div className="control">
            <button className="button is-info is-skew">
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default SearchBar
