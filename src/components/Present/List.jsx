import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import HalfCard from './HalfCard'
import FullCard from './FullCard'
import productReq from '@/network/home/product'

const styles = {
  list: {
    textAlign: 'left',
    '& > div:nth-child(odd)': {
      paddingRight: '10px'
    },
    '& > div:nth-child(even)': {
      paddingLeft: '10px'
    }
  }
}
@withStyles(styles)
export default class GiftsList extends Component {
  static propTypes = {
    full: PropTypes.bool.isRequired
  }

  static defaultProps = {
    full: false
  }

  render() {
    const {classes, full, dataSet} = this.props
    return (
      <div className={full ?  '' : classes.list}>
        {dataSet.map(
          (product, idx) => ( 
            full ? (<FullCard key={idx} data={product} />)
              : (<HalfCard key={ idx } data={product} />)
          )
        )}
      </div>
    )
  }
}
