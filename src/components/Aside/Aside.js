import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Aside.scss';
import Link from '../Link';
import { Menu, Icon, Badge } from 'antd';

const mainMenu = [
  {
    key: 'mainMenu01',
    title: '菜单01',
    icon: 'pie-chart',
    subMenu:[
      {
        key: 'subMenu01',
        to:'/privacy',
        title: '子菜单01',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu02',
        to:'/about',
        title: '子菜单02',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu03',
        to:'/privacy',
        title: '子菜单03',
        des: 'subMenu01',
        icon: 'pie-chart',
      },
      {
        key: 'subMenu04',
        to:'/privacy',
        title: '子菜单04',
        des: 'subMenu01',
        icon: 'pie-chart',
      }
    ]
  },
  {
    key: 'mainMenu02',
    title: '菜单02',
    icon: 'pie-chart'
  },
  {
    key: 'mainMenu03',
    title: '菜单03',
    icon: 'pie-chart'
  },
  {
    key: 'mainMenu04',
    title: '菜单04',
    icon: 'pie-chart'
  }
]

class Aside extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuCurrent: 'mainMenu01',
      subMenuCurrent: 'subMenu01'
    };
  }

  render() {
    return (
      <aside className={s.aside + ' ' + s.clearfix}>
        <div className={s.mainMenu}>
          <div className={s.menuToggle}><span></span><span></span><span></span></div>
          {
            mainMenu.map((item, index) =>
              <div key={item.key} className={s.mainMenuItem}>
                <Icon type={item.icon} />
                <div className={s.mainMenuName}>{item.title}</div>
              </div>
            )
          }
        </div>
        <div className={s.subMenu}>
          {
            mainMenu.filter((item, index) =>
              item.key === this.state.menuCurrent
            )[0].subMenu.map((item, index) =>
              <Link key={item.key} to={item.to} className={s.clearfix}>
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

export default withStyles(s)(Aside);
