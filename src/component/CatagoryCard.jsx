import React from 'react'

import TextField from 'material-ui/TextField'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import FlatButton from 'material-ui/FlatButton'

export default class CatagoryCard extends React.Component {

  render() {
    return (
      <div>
        <AppBar
          title={<span>Catagory</span>}
          iconElementLeft={<IconButton><NavigationClose/></IconButton>}
          iconElementRight={<FlatButton label="4/6" />}
        />
        <div>
          <TextField
            style={{ marginTop: '4%' }}
            hintText="Property"
            fullWidth={true}
          />
        </div>
      </div>
    )
  }

}
