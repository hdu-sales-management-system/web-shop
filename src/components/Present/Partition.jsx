import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import List from './List'
import splitLine from '@/jss/components/Gifts/Partition'
import {recommend} from '@/network/presents'

@withStyles({ splitLine})
export default class Partition extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
  }
  state = {
    recommendList: []
  }
  async componentDidMount(){
    const resp = await recommend()
    this.setState({recommendList: resp.data.presents})
  }
  render() {
    const {label, classes} = this.props
    const {recommendList} = this.state
    return (
      <div >
        <h1 className={classes.splitLine} style={{ color: '#c279d0'}}>{label}</h1>
        <List dataSet={recommendList}/>
      </div>
    )
  }
}
