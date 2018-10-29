import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Projects from './projects'
import About from './about'
import {Grid, Icon, Responsive, Segment} from 'semantic-ui-react'
import {Parallax} from 'react-scroll-parallax'

const copy = 'LAW+RENC+ELIN.'.split('')

class Home extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <React.Fragment>
        <Segment.Group style={{border: 'none', height: '0px'}}>
          <Responsive as={Segment} minWidth={770}>
            <Grid>
              <Grid.Row id="home">
                <span className="homePage">
                  <Parallax offsetXMax={-105} offsetXMin={235}>
                    LAW+
                  </Parallax>
                </span>
                <span className="homePage">
                  <Parallax offsetXMax={0} offsetXMin={0}>
                    RENC
                  </Parallax>
                </span>
                <span className="homePage">
                  <Parallax offsetXMin={-100} offsetXMax={150}>
                    +ELIN<span className="period">.</span>
                  </Parallax>
                </span>
                <br />
                <br />
                <span
                  style={{color: '#f0e6dc', fontSize: '0.08em'}}
                  id="arrow"
                  className="vertical"
                >
                  <Icon name="angle double left" />
                  <span>SCROLL</span>
                </span>
              </Grid.Row>

              <About />
              <Projects />
            </Grid>
          </Responsive>
        </Segment.Group>
        <Segment.Group style={{border: 'none', height: '0px'}}>
          <Responsive as={Segment} maxWidth={770}>
            <Grid>
              <Grid.Row id="home">
                <span className="homePage">
                  <Parallax offsetXMax={-40} offsetXMin={105}>
                    LAW+
                  </Parallax>
                </span>
                <span className="homePage">
                  <Parallax offsetXMax={0} offsetXMin={0}>
                    RENC
                  </Parallax>
                </span>
                <span className="homePage">
                  <Parallax offsetXMin={-80} offsetXMax={50}>
                    +ELIN<span className="period">.</span>
                  </Parallax>
                </span>
                <br />
                <br />
                <span
                  style={{color: '#f0e6dc', fontSize: '0.08em'}}
                  id="arrow"
                  className="vertical"
                >
                  <Icon name="angle double left" />
                  <span>SCROLL</span>
                </span>
              </Grid.Row>

              <About />
              <Projects />
            </Grid>
          </Responsive>
        </Segment.Group>
      </React.Fragment>
    )
  }
}

export default Home
