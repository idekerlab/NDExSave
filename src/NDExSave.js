import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NDExSave from './component/NDExSave'

import catagories, * as catagoryActions from './store/catagories'

require("./style/component.scss")

function mapStateToProps(state) {
  return {
    catagories: state.ndex_save.catagories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    catagoryActions: bindActionCreators(catagoryActions, dispatch)
  }
}

const component = connect(
    mapStateToProps,
    mapDispatchToProps
  )(NDExSave)

const storeName = 'ndex_save'
const store = { catagories }

export {
  component,
  storeName,
  store,
  catagoryActions
}
