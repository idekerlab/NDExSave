import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

import Catagories from './Catagories'

export default class NDExSave extends React.Component {

  static defaultProps = {
    style: {
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    },
    theme: {},
    networkName: "NDExSave",
    onSave: function(cx) { console.log(cx) }
  }

  onSave() {
    var cx = JSON.parse(this.props.cx)
    Object.keys(this.props.catagories).map((C) => {
      cx.push({
        networkAttributes: [{
          n: C,
          v: this.props.catagories[C].get('fields')
        }]
      })
    })
    cx = cx.map(function(E) {
      if (E.name && E.name == "networkAttributes") {
        E.consistencyGroup++
      }
      return E
    })
    this.props.onSave(cx)
  }

  render() {
    const style = this.props.style
    const navStyle = {
      height: '6%',
      width: '100%',
      margin: 0
    }
    const catagoriesStyle = {
      height: '94%',
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
              <FlatButton label="Save" onClick={this.onSave.bind(this)} />
            }
          />
          <Catagories {...this.props} />
        </div>
      </MuiThemeProvider>
    )
  }

}
