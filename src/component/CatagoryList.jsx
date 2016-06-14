import React from 'react'

import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

export default class CatagoryList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  handleOpen = (event) => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  selectCatagory(catagoryName) {
    this.props.catagoryActions.select(catagoryName)
    this.setState({
      open: false
    })
  }

  unselectCatagory(catagoryName) {
    this.props.catagoryActions.unselect(catagoryName)
  }

  setCurrentCatagory(catagoryName) {
    this.props.setCurrentCatagory(catagoryName)
  }

  render() {
    const unselected = Object.keys(this.props.catagories).map(function(C) {
      if (!this.props.catagories[C].get('selected')) {
        return (<MenuItem primaryText={C} onClick={this.selectCatagory.bind(this, C)}/>)
      }
    }.bind(this))
    const selected = Object.keys(this.props.catagories).map(function(C) {
      if (this.props.catagories[C].get('selected')) {
        return (<RaisedButton
          label={C}
          primary={true}
          onClick={this.setCurrentCatagory.bind(this, C)}
          style={{ width: '100%', marginTop: '4%'}}
          fullWidth={true}
        />)
      }
    }.bind(this))
    return (
        <div>
          <Toolbar>
            <ToolbarGroup firstChild={true}>
              <RaisedButton
                label="Add a Catagory"
                secondary={true}
                onClick={this.handleOpen}
              />
              <Popover
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                onRequestClose={this.handleClose}
              >
                <Menu>
                  {unselected}
                </Menu>
              </Popover>
            </ToolbarGroup>
          </Toolbar>
          <div>
            {selected}
          </div>
        </div>
    )
  }

}
