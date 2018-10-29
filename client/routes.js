import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {Home} from './components'
import {Grid, Icon, Responsive, Segment} from 'semantic-ui-react'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    // this.props.loadInitialData()
  }

  render() {
    return (
      <div className="ui fluid container">
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route component={Home} />
        </Switch>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes))
export default Routes
