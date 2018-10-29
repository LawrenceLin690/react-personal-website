import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Grid} from 'semantic-ui-react'
import {Parallax} from 'react-scroll-parallax'

class Projects extends Component {
  componentDidMount() {}

  render() {
    return (
      <Parallax offsetYMax={0} offsetYMin={-12}>
        <Grid stackable columns={2}>
          <Grid.Row id="projectHeader">
            <Grid.Column>
              <div>Projects:</div>
              <br />
              <div className="projectDesc">
                Below are some of my presentations at Fullstack Academy. Check
                out my github for other recent projects!
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row id="projects1">
            <Grid.Column>
              <Parallax offsetYMax={30} offsetYMin={-20}>
                <div className="video-responsive">
                  <iframe
                    width="510"
                    height="315"
                    src="https://www.youtube.com/embed/RWBnPsqvQy8"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              </Parallax>
            </Grid.Column>
            <Grid.Column>
              <div>okurrr.</div>
              <br />
              <div className="projectDesc">
                okurrr. is a reimagination of Urban Dictionary. Instead of
                providing example of current usage, it goes straight to Twitter
                via the Twitter API and Twitch to get tweets showcasing how the
                word or phrase is presently being used. Chart.js along with some
                data amalgamation displays frequency of word/phrase use over the
                past few weeks so a user is immediately aware if it on the rise
                or decline. In addition, calls to the Genius API provide
                background on references to the word/phrase in popular music.{' '}
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row id="projects2">
            <Grid.Column style={{margin: '0px', padding: '0px'}}>
              <div>REACTO-R</div>
              <div style={{fontSize: '1.5vw'}}>(video starts at 1:33:14)</div>
              <br />
              <div className="projectDesc">
                REACTO-R is an educational platform built on Fullstack's REACTO
                method for practicing technical coding interview questions.
                Promising developers can choose from an array of questions and
                practice the Repeat, Example, Approach, Code, Test, and
                Optimization steps, as beginners or intermediate/advanced
                coders. The application also allows collaborative interactions
                through video conference and screen share. REACTO-R is
                constructed using React/Redux, evaluated with an IDE using ACE
                editor and built-in tests utilizing Chai, and video capabilities
                are enabled with Twilio and a self-made Chrome extension.
                Created along with Filadelfo Braz, Brandon Lao, and Eli
                Mauskopf.
              </div>
            </Grid.Column>
            <Grid.Column>
              <Parallax offsetYMax={10} offsetYMin={-8}>
                <div className="video-responsive">
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FFullstackAcademy%2Fvideos%2F1824109204332956%2F&show_text=0&width=560"
                    width="510"
                    height="315"
                    style={{border: 'none', overflow: 'hidden'}}
                    scrolling="no"
                    frameBorder="0"
                  />
                </div>
              </Parallax>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Parallax>
    )
  }
}

export default Projects
