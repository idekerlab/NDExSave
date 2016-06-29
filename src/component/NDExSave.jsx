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
    properties: {},
    networkName: "NDExSave",
    onSave: function(newProperties, pub) {
      console.log("Save called with")
      console.log(pub)
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      properties: this.loadProps(this.props.properties)
    }
  }

  loadProps(properties) {
    for (var prop in properties) {
      var catagory = prop.split(':')
      if (catagory[0] == "CyCatagory") {
        this.props.catagoryActions.select(catagory[1])
        this.props.catagoryActions.updateField(catagory[1], catagory[2], [properties[prop]])
        delete properties[prop]
      }
    }
    return properties
  }

  saveProps() {
    var newProperties = {}
    console.log(this.props.catagories)
    for (var catagoryName in this.props.catagories) {
      var catagory = this.props.catagories[catagoryName]
      if (catagory.get('selected') == true) {
        console.log("Selected catagory")
        for (var field in catagory.get('fields')) {
          console.log("Iterating field")
          console.log(field)
          newProperties['CyCatagory' + ':' + catagoryName + ':' + field] = catagory.get('fields')[field]
        }
      }
    }
    return newProperties
  }

  onSave(pub) {
    this.props.onSave(Object.assign(this.state.properties, this.saveProps()), pub)
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
          <Catagories {...this.props} properties={this.state.proprties} />
        </div>
      </MuiThemeProvider>
    )
  }

}
