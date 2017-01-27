import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import avatar from './avatar.png';
import { Menu, Dropdown, Icon, Tooltip, Badge } from 'antd';

const settingMenu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">菜单01</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">菜单02</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">菜单03</a>
    </Menu.Item>
  </Menu>
);

class Header extends React.Component {
  render() {
    return (
      <header className={s.header}>
          <div className={s.navbarInner}>
            <div className={s.container + ' ' + s.clearfix}>
              <div className={s.navbarLeft + ' ' + s.clearfix}>
                <span className={s.brand}>
                  Teahouse
                </span>
                <Dropdown overlay={settingMenu} trigger={['click']}>
                  <div className={s.navbarLeftBtn}>
                    <Icon type="setting"/>
                  </div>
                </Dropdown>
                <div className={s.navbarLeftBtn}>
                  <Tooltip placement="top" title={'刷新'}>
                    <Icon type="reload"/>
                  </Tooltip>
                </div>
              </div>
              <div className={s.searchbox}>
                <input type="text" className={s.inputSearch} placeholder="搜索关键词"/>
                <button className={s.btnSearch}>
                  <Icon type="search"/>
                </button>
              </div>
              <div className={s.navbarRight + ' ' + s.clearfix}>
                <Dropdown overlay={settingMenu} trigger={['click']}>
                  <div className={s.user + ' ' + s.clearfix}>
                    <div className={s.avatar}>
                      <img src={avatar} width="30" height="30" alt="avatar" />
                    </div>
                    <span className={s.caretDown}>
                      <Icon type="caret-down" />
                    </span>
                  </div>
                </Dropdown>
                <div className={s.link + ' ' + s.clearfix}>
                  <Dropdown overlay={settingMenu} trigger={['click']}>
                    <div className={s.item}>
                      <Badge dot>
                        <Icon type="message" />
                      </Badge>
                    </div>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
      </header>
    );
  }
}

export default withStyles(s)(Header);
