import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'

import Catagories from './Catagories'

export default class NDExSave extends React.Component {

  static defaultProps = {
    style: {
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    },
    theme: {},
    properties: [],
    networkName: "NDExSave",
    onSave: function(newProperties, pub) {
      console.log("Save called with")
      console.log(pub)
    }
  }

  onSave(pub) {
    this.props.onSave([], pub)
  }

  render() {
    const style = this.props.style
    const navStyle = {
      width: '100%',
      margin: 0
    }
    const catagoriesStyle = {
      width: '100%',
      margin: 0
    }
    const theme = getMuiTheme(this.props.theme)
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div style={style}>
          <AppBar
            title={this.props.networkName}
            style={navStyle}
            showMenuIconButton={false}
            iconElementRight={
              <div>
                <RaisedButton label="Save as public network" secondary={true} onClick={this.onSave.bind(this, true)} />
                <RaisedButton label="Save as private network" secondary={true} onClick={this.onSave.bind(this, false)} style={{ marginLeft: 20 }} />
              </div>
            }
          />
          <Catagories {...this.props} />
        </div>
      </MuiThemeProvider>
    )
  }

}
