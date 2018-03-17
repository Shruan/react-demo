import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd-mobile'
import './style.less'

class HomeHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      index: 0
    }
  }
  render () {
    return (
      <div>
        <Carousel
          autoplay={false}
          infinite
          selectedIndex={this.state.index}
          beforeChange={(from, to) => this.setState({ index: to })}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'))
                  this.setState({ imgHeight: 'auto' })
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    )
  }
}

HomeHeader.propTypes = {
}

export default HomeHeader
