// import React, { Component } from 'react'
import React from 'react'
import {
  Button,
  Flex,
  List,
  InputItem,
  WhiteSpace,
  WingBlank
} from 'antd-mobile'
import './login.css'

function Login(params) {
  return (
    <WingBlank>
      <Flex direction="column">
        <Flex.Item>
          <Button type="primary">登录</Button>
        </Flex.Item>
        <WhiteSpace size="lg" />
        <Flex.Item>
          <List>
            <InputItem>姓名</InputItem>
            <InputItem>密码</InputItem>
          </List>
        </Flex.Item>
        <WhiteSpace size="lg" />
        <Flex.Item>
          <Button type="primary">登录</Button>
        </Flex.Item>
      </Flex>
    </WingBlank>
  )
}
export default Login
