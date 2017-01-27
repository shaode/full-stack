import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';
import routes from '../../routes';
import history from '../../core/history';
import Link from '../Link';
import antd from '!!isomorphic-style!css?modules=false!antd/dist/antd.min.css';
import {Menu, Breadcrumb, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      openKeys: [],
      current: '1',
      currentCn: '关于'
    };
    this.handleClick = this.handleClick.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
    this.getAncestorKeys = this.getAncestorKeys.bind(this);
  }

  componentDidMount() {
    let current = history.location.pathname.substr(1)
    this.setState({current})
  }

  handleClick(e) {
    let currentCn = routes.children.filter((i) => i.path.substr(1) === e.key)[0].nameCn || '未知';
    this.setState({current: e.key, currentCn});
  }

  onOpenChange(openKeys) {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));
    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({openKeys: nextOpenKeys});
  }

  getAncestorKeys(key) {
    const map = {
      sub3: ['sub2']
    };
    return map[key] || [];
  }

  render() {
    const collapse = this.state.collapse;
    const selectedMenu = this.state.selectedMenu;
    return (
      <div className={"layout-aside"}>
        <aside className="layout-sider">
          <div className="layout-logo"></div>
          <Menu theme='dark' mode="inline" openKeys={this.state.openKeys} selectedKeys={[this.state.current]} onOpenChange={this.onOpenChange} onClick={this.handleClick}>
            <Menu.Item key="about">
              <Link to="/about"><Icon type="laptop"/>
                <span>统计</span>
              </Link>
            </Menu.Item>
            <SubMenu key="sub1" title={< span > <Icon type="mail"/> < span > 板块 < /span></span >}>
              <Menu.Item key="about">
                <Link to="/about">关于</Link>
              </Menu.Item>
              <Menu.Item key="contact">
                <Link to="/contact">联系</Link>
              </Menu.Item>
              <Menu.Item key="login">
                <Link to="/login">登陆</Link>
              </Menu.Item>
              <Menu.Item key="register">
                <Link to="/register">注册
                </Link>
              </Menu.Item>
              <Menu.Item key="privacy">
                <Link to="/privacy">隐私</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={< span > <Icon type="appstore"/> < span > 菜单02 < /span></span >}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={< span > <Icon type="setting"/> < span > 菜单03 < /span></span >}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </aside>

        <div className="layout-main">
          <div className="layout-header"></div>
          <div className="layout-container">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">主页</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                {this.state.currentCn}
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className="layout-content">
              <div>
                {this.props.children}
              </div>
            </div>
          </div>
          <div className="layout-footer">
            Ant Design all rights reserved © 2015 Created by Ant UED
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s, antd)(Layout);
