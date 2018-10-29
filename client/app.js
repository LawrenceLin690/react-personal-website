import React from 'react'
import {Navbar, Menubar, Contactbar} from './components'
import Routes from './routes'
import {Grid, Responsive, Segment, Container} from 'semantic-ui-react'

const App = () => {
  return (
    <Grid padded stackable columns={2}>
      {/* <Segment.Group style={{border: 'none', height: '0px'}}>
        <Responsive as={Segment} minWidth={700}> */}
      <Grid.Row style={{height: '4vh'}}>
        <Navbar />
      </Grid.Row>
      {/* </Responsive>
      </Segment.Group> */}
      <Grid.Row>
        <Grid.Column style={{width: '96%', margin: '0px', padding: '0px'}}>
          <Menubar />
          <Routes />
        </Grid.Column>
        <Grid.Column style={{width: '4%'}}>
          <Contactbar />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default App
