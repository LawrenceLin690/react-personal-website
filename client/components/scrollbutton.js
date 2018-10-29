import React, {Component} from 'react'
import {Grid, Icon} from 'semantic-ui-react'

class ScrollButton extends Component {
  constructor() {
    super()
    this.state = {
      intervalId: 0
    }
    // this.scrollStep = this.scrollStep.bind(this)
    this.scrollToTop = this.scrollToTop.bind(this)
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId)
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx)
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    )
    this.setState({intervalId: intervalId})
  }

  render() {
    return (
      <button
        type="button"
        onClick={() => {
          this.scrollToTop()
        }}
        id="scroll"
      >
        <div className="vertical">
          <Icon name="angle double down" className="vertical" />
          <div />
          <span className="vert">TOP</span>
        </div>
      </button>
    )
  }
}

export default ScrollButton
