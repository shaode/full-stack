import React from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Aside.scss';
import Link from '../Link';
import { Menu, Icon, Badge } from 'antd';
import { menuToggleFn } from '../../actions/common';

const mainMenu = [
  {
    key: 'mainMenu01',
    title: '菜单01',
    icon: 'pie-chart',
    subMenu:[
      {
        key: 'subMenu1-1',
        to:'/privacy',
        title: '1-1',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu1-2',
        to:'/about',
        title: '1-2',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu1-3',
        to:'/privacy',
        title: '1-3',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu1-4',
        to:'/privacy',
        title: '1-4',
        des: 'subMenu01',
        icon: 'pie-chart',
      }
    ]
  },
  {
    key: 'mainMenu02',
    title: '菜单02',
    icon: 'pie-chart',
    subMenu: [
      {
        key: 'subMenu2-1',
        to:'/about',
        title: '2-1',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu2-2',
        to:'/about',
        title: '2-2',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu2-3',
        to:'/privacy',
        title: '2-3',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu2-4',
        to:'/privacy',
        title: '2-4',
        des: 'subMenu01',
        icon: 'pie-chart',
      }
    ]
  },
  {
    key: 'mainMenu03',
    title: '菜单03',
    icon: 'pie-chart',
    subMenu: [
      {
        key: 'subMenu3-1',
        to:'/privacy',
        title: '3-1',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu3-2',
        to:'/about',
        title: '3-2',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu3-3',
        to:'/privacy',
        title: '3-3',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu3-4',
        to:'/privacy',
        title: '3-4',
        des: 'subMenu01',
        icon: 'pie-chart',
      }
    ]
  },
  {
    key: 'mainMenu04',
    title: '菜单04',
    icon: 'pie-chart',
    subMenu: [
      {
        key: 'subMenu4-1',
        to:'/privacy',
        title: '4-1',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu4-2',
        to:'/about',
        title: '4-2',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu4-3',
        to:'/privacy',
        title: '4-3',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu4-4',
        to:'/privacy',
        title: '4-4',
        des: 'subMenu01',
        icon: 'pie-chart',
      }
    ]
  }
]

class Aside extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuCurrent: mainMenu[0].key,
      subMenuCurrent: mainMenu[0].subMenu[0].key
    };
    this.onMainMenu = this.onMainMenu.bind(this);
    this.onSubMenu = this.onSubMenu.bind(this);
    this.onMenuToggle = this.onMenuToggle.bind(this);
  }

  onMainMenu(key, sub) {
    this.setState({menuCurrent: key, subMenuCurrent: sub});
  }

  onSubMenu(key) {
    this.setState({subMenuCurrent: key});
  }

  onMenuToggle() {
    this.props.menuToggleFn()
  }

  render() {
    return (
      <aside className={s.aside + ' ' + s.clearfix + ' ' + (this.props.menuToggle ? s.menuClose : '')}>
        <div className={s.mainMenu}>
          <div onClick={this.onMenuToggle} className={s.menuToggle}>
            <span></span><span></span><span></span>
          </div>
          {
            mainMenu.map((item, index) =>
              <Link to={item.subMenu[0].to}
                    onClick={this.onMainMenu.bind(item, item.key, item.subMenu[0].key)}
                    key={item.key}
                    className={s.mainMenuItem + " " + (this.state.menuCurrent === item.key ? s.current : '')}
              >
                <Icon type={item.icon} />
                <div className={s.mainMenuName}>{item.title}</div>
              </Link>
            )
          }
        </div>
        <div className={s.subMenu}>
          {
            mainMenu.filter((item, index) =>
              item.key === this.state.menuCurrent
            )[0].subMenu.map((item, index) =>
              <Link onClick={this.onSubMenu.bind(item, item.key)}
                    key={item.key} to={item.to}
                    className={s.clearfix + " " + (this.state.subMenuCurrent === item.key ? s.current : '')}
              >
                <div className={s.subMenuIcon}>
                  <Icon type={item.icon}/>
                </div>
                <div className={s.subMenuText}>
                  <div className={s.subMenuTitle}>{item.title}</div>
                  <div className={s.subMenuDis}>{item.des}</div>
                </div>
              </Link>
            )
          }
        </div>
      </aside>
    );
  }
}

const mapState = (state) => ({
  menuToggle: state.common.menuToggle
});

const mapDispatch = {
  menuToggleFn
};

export default withStyles(s)(connect(mapState, mapDispatch)(Aside));
