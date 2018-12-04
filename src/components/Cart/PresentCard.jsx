import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'antd-mobile'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Image from '@/components/base/Image'
import Price from '@/components/base/Price'
import Title from '@/components/base/Title'
import InputNumber from '@/components/base/InputNumber'

class FullCard extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    data: PropTypes.shape({
      cover: PropTypes.string,
      price: PropTypes.number,
      description: PropTypes.string,
      // commentCount: PropTypes.number,
    }).isRequired,
  }

  state = {
    count: 1
  }

  handleChange = (count) => {
    // request to update cart present count
    this.setState({ count })
  }

  render() {
    const { data, className } = this.props
    const { count } = this.state
    return (
      <Flex row="true" className={className}>
        <div>
          <Image src={data.cover} />
        </div>
        <div>
          <Title>{`${data.title}-${data.description}`}</Title>
          {/* TODO may display the tags */}
          <Flex justify="between">
            <Price>{data.price}</Price>
            {/* TODO max limit could come from config */}
            <InputNumber
              max={20}
              min={1}
              value={count}
              onChange={this.handleChange}
            />
          </Flex>
          <span>{data.commentCount} 评论</span>
        </div>
      </Flex>
    )
  }
}
const styledFullCard = styled(FullCard)`
  height: 90px;
  margin: 5px 0 2px 0;
  align-items: flex-end;
  & > :first-child {
    width: 25%;
  }
  & > :last-child {
    padding: 10px;
    height: 100%;
    width: 75%;
    box-sizing: border-box;
    padding: 0 10px 10px 10px;
    border-bottom: solid 1px #d2d2d2;
  }
  & p {
    margin: 0;
  }
  & span {
    font-size: 0.7em;
  }
`
export default styledFullCard