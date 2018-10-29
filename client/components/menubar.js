import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Grid, Responsive, Segment} from 'semantic-ui-react'
import ScrollButton from './scrollbutton'

class Menubar extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Segment.Group style={{border: 'none', height: '0px'}}>
        <Responsive as={Segment} minWidth={770}>
          <Grid>
            <ScrollButton scrollStepInPx="150" delayInMs="16.5" />
          </Grid>
        </Responsive>
      </Segment.Group>
    )
  }
}

export default Menubar
