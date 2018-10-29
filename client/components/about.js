import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import {Parallax} from 'react-scroll-parallax'

class About extends Component {
  componentDidMount() {}

  render() {
    return (
      <Parallax offsetYMax={0} offsetYMin={-5}>
        <Grid stackable columns={2}>
          <Grid.Row id="about">
            <Grid.Column>
              <Parallax offsetYMax={30} offsetYMin={-10}>
                <div>About Me:</div>
                <br />
                <div className="aboutDesc">
                  I'm a Fullstack Academy alumni. I made the change to software
                  development because I wanted to create solutions instead of
                  defining problems. I'm interested in the entire full-stack
                  with an emphasis on clear code and aesthetic design.
                </div>
                <br />
                <div>Contact me at:</div>
                <br />
                <div style={{fontSize: '1.2vw'}}>lawrence.y.lin@gmail.com</div>
                <a
                  href="https://www.linkedin.com/in/lawrence-lin-690/"
                  target="_blank"
                >
                  <div style={{fontSize: '1.2vw', color: 'black'}}>
                    LinkedIn
                  </div>
                </a>
                <a href="https://github.com/LawrenceLin690" target="_blank">
                  <div style={{fontSize: '1.2vw', color: 'black'}}>Github</div>
                </a>
                <a
                  href="https://medium.com/@lawrence.y.lin/from-javascript-to-python-69bc321f79ea"
                  target="_blank"
                >
                  <div style={{fontSize: '1.2vw', color: 'black'}}>Medium</div>
                </a>

                <div style={{fontSize: '1.2vw'}}>NYC</div>
              </Parallax>
            </Grid.Column>

            <Grid.Column style={{overflow: 'hidden'}}>
              <Parallax offsetXMax={-10} offsetXMin={10}>
                <img src="centerleft.jpg" />
              </Parallax>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Parallax>
    )
  }
}

export default About
