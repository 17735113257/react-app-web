import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../node_modules/antd-mobile/dist/antd-mobile.css'
import Login from './components/login'
import Home from './components/home'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App

// 如果不写对应的链接也是可以的。地址栏中的其实也是相当于页面的跳转
// 这个只是显示一个标签
