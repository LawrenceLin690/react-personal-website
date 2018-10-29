import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Icon, Responsive, Segment} from 'semantic-ui-react'

const Contactbar = () => {
  return (
    <Segment.Group style={{border: 'none', height: '0px'}}>
      <Responsive as={Segment} minWidth={770}>
        <Grid id="contactbar">
          <Grid.Row>
            <Icon
              name="chevron down"
              style={{height: '1.5em', color: 'black'}}
            />
            <a
              href="https://www.linkedin.com/in/lawrence-lin-690/"
              target="_blank"
            >
              <Icon name="linkedin" style={{height: '1.5em', color: 'black'}} />
            </a>
            <a href="https://github.com/LawrenceLin690" target="_blank">
              <Icon
                name="github square"
                style={{height: '1.5em', color: 'black'}}
              />
            </a>
            <a
              href="https://medium.com/@lawrence.y.lin/from-javascript-to-python-69bc321f79ea"
              target="_blank"
            >
              <Icon name="medium" style={{height: '1.5em', color: 'black'}} />
            </a>
            <Icon name="chevron up" style={{height: '1.5em', color: 'black'}} />
          </Grid.Row>
        </Grid>
      </Responsive>
    </Segment.Group>
  )
}

export default Contactbar
