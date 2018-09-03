// Code ControlledInput Component Here
import React from 'react'

class ControlledInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }



  render() {
    return (
      <form>
        <input type="text"
          value={this.state.value}
          onChange={this.handleChange}/>
      </form>
    )
  }

}

export default ControlledInput
