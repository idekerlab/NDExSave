import React from 'react'

import TextField from 'material-ui/TextField'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import FlatButton from 'material-ui/FlatButton'

export default class CatagoryCard extends React.Component {

  handleChange(field, event) {
    this.props.catagoryActions.updateField(this.props.currentCatagory, field, event.target.value)
    this.forceUpdate()
  }

  unselect(currentCatagory) {
    this.props.catagoryActions.unselect(currentCatagory)
    this.props.setCurrentCatagory(false)
  }

  render() {
    var textFields = []
    if (this.props.currentCatagory) {
      const fields = this.props.catagories[this.props.currentCatagory].get('fields')
      textFields = Object.keys(fields).map(function(F) {
        console.log(fields)
        console.log(F)
        return (<TextField
                 style={{ marginTop: '4%' }}
                 hintText={F}
                 fullWidth={true}
                 value={fields[F]}
                 onChange={this.handleChange.bind(this, F)}
                />)
      }.bind(this))
    }
    const card = this.props.currentCatagory ?
      (<div>
        <AppBar
          title={<span>{this.props.currentCatagory}</span>}
          iconElementLeft={<IconButton
                             onClick={this.unselect.bind(this, this.props.currentCatagory)}
                           ><NavigationClose/></IconButton>}
        />
        <div>
          {textFields}
        </div>
      </div>) : (<div></div>)
    return card
  }

}
