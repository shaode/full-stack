import React from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Aside.scss';
import Link from '../Link';
import { Menu, Icon, Badge } from 'antd';
import { menuToggleFn, subMenuKeyFn } from '../../actions/common';

export const mainMenu = [
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
        to:'/1',
        title: '1-3',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu1-4',
        to:'/2',
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
        to:'/3',
        title: '2-1',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu2-2',
        to:'/4',
        title: '2-2',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu2-3',
        to:'/5',
        title: '2-3',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu2-4',
        to:'/6',
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
        to:'/7',
        title: '3-1',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu3-2',
        to:'/8',
        title: '3-2',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu3-3',
        to:'/9',
        title: '3-3',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu3-4',
        to:'/10',
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
        to:'/11',
        title: '4-1',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu4-2',
        to:'/12',
        title: '4-2',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu4-3',
        to:'/13',
        title: '4-3',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu4-4',
        to:'/14',
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
    this.state = {};
    this.onMenuToggle = this.onMenuToggle.bind(this);
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
                    key={item.key}
                    className={s.mainMenuItem + ' ' + (this.props.subMenuKey[0] === item.key ? s.current : '')}
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
              item.key === this.props.subMenuKey[0]
            )[0].subMenu.map((item, index) =>
              <Link key={item.key}
                    to={item.to}
                    className={s.clearfix + ' ' + (this.props.subMenuKey[1] === item.key ? s.current : '')}
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
  menuToggle: state.common.menuToggle,
  subMenuKey: state.common.subMenuKey
});

const mapDispatch = {
  menuToggleFn,
  subMenuKeyFn
};

export default withStyles(s)(connect(mapState, mapDispatch)(Aside));
