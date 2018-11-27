import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Button, List, Toast, NavBar, Icon,InputItem} from 'antd-mobile'
import withStyles from 'react-jss'
import {connect} from 'react-redux'

import {login, loginSuccess} from '@/redux/actions'
import styles from '@/jss/components/login'


@connect( store => ({state: store.login}), {login,loginSuccess})
@withStyles(styles)
export default class Login extends Component {
  static propTypes = {
  }
  state = {
    username: 'test',
    password: '123456'
  }

  UNSAFE_componentWillReceiveProps() {
    this.toast(this.props.state.loginState)
  }

  handleChange = (term) => {
    this.setState(term)
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const state = this.props.login(this.state)
    console.log(state)
  }
  toast(type) {
    switch(type) {
    case 'failed': 
      Toast.fail('用户名或密码错误')
      break
    case 'success': 
      Toast.info('登陆成功！')
      break
    }
  }
  render() {
    const {classes, state} = this.props
    const {username, password} = this.state

    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
        >密码登陆</NavBar>
        <List>
          <InputItem
            className={classes.input}
            placeholder="请输入帐号"
            updatePlaceholder
            value={username}
            onChange={(text) =>this.handleChange({username: text}) }
          />
          <InputItem
            className={classes.input}
            placeholder="请输入密码"
            type="password"
            updatePlaceholder
            value={password}
            onChange={(text) => this.handleChange({ password: text })}
          />
        </List>
        <Button onClick={this.handleSubmit} type="warning" className={classes.button}>登陆</Button>
        
      </div>
    )
  }
}
