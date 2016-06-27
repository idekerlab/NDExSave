import React from 'react'

import Paper from 'material-ui/Paper'
import CatagoryList from './CatagoryList'
import CatagoryCard from './CatagoryCard'

export default class Catagories extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentCatagory: false
    }
  }

  setCurrentCatagory(catagoryName) {
    console.log("Change catagoryName")
    console.log(catagoryName)
    this.setState({ currentCatagory: catagoryName })
  }

  render() {
    const listStyle = {
      height: '90%',
      width: '47%',
      margin: '2%',
      marginRight: '1%',
      float: 'left'
    }
    const cardStyle = {
      height: '90%',
      width: '47%',
      margin: '2%',
      marginLeft: '1%',
      float: 'right'
    }
    return (
      <div style={{ width: '100%', height: '90%' }}>
        <Paper
          zDepth={2}
          style={listStyle}
        >
          <CatagoryList
            catagories={this.props.catagories}
            catagoryActions={this.props.catagoryActions}
            setCurrentCatagory={this.setCurrentCatagory.bind(this)}
          />
        </Paper>
        <Paper
          zDepth={2}
          style={cardStyle}
        >
          <CatagoryCard
            catagories={this.props.catagories}
            catagoryActions={this.props.catagoryActions}
            currentCatagory={this.state.currentCatagory}
            setCurrentCatagory={this.setCurrentCatagory.bind(this)}
          />
        </Paper>
      </div>
    )
  }

}
