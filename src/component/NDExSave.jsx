import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Paper from 'material-ui/Paper'
import CatagoryList from './CatagoryList'
import CatagoryCard from './CatagoryCard'

export default class NDExSave extends React.Component {

  static defaultProps = {
    style: {
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    },
    theme: {}
  }


  render() {
    const listStyle = {
      height: '96%',
      width: '47%',
      margin: '2%',
      marginRight: '1%',
      float: 'left'
    }
    const cardStyle = {
      height: '96%',
      width: '47%',
      margin: '2%',
      marginLeft: '1%',
      float: 'right'
    }
    const theme = getMuiTheme(this.props.theme)
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div style={{ width: '100%', height: '100%' }}>
          <Paper
            zDepth={2}
            style={listStyle}
          >
            <CatagoryList
              catagories={this.props.catagories}
              catagoryActions={this.props.catagoryActions}
            />
          </Paper>
          <Paper
            zDepth={2}
            style={cardStyle}
          >
            <CatagoryCard/>
          </Paper>
        </div>
      </MuiThemeProvider>
    )
  }

}
