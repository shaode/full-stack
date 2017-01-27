import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import avatar from './avatar.png';
import {Button, Menu, Dropdown, Icon, Tooltip, Badge, Popover, Switch} from 'antd';

//快捷设置
const content = (
  <div className={s.settingBox}>
    <div className={s.item + ' ' + s.clearfix}>
      <div className={s.itemName}>
        设置条目01
      </div>
      <div className={s.itemSwitch}>
        <Switch checkedChildren={'开'} unCheckedChildren={'关'} />
      </div>
    </div>
    <div className={s.item + ' ' + s.clearfix}>
      <div className={s.itemName}>
        设置条目02
      </div>
      <div className={s.itemSwitch}>
        <Switch checkedChildren={'开'} unCheckedChildren={'关'} />
      </div>
    </div>
    <div className={s.item + ' ' + s.clearfix}>
      <div className={s.itemName}>
        设置条目03
      </div>
      <div className={s.itemSwitch}>
        <Switch checkedChildren={'开'} unCheckedChildren={'关'} />
      </div>
    </div>
    <Button type="ghost" style={{marginRight:25}}>取消</Button>
    <Button type="primary">确认</Button>
  </div>
);

//搜索
const searchContent = (
  <div className={s.searchResult}>
    <p><Link to="/">消息消息消息消息消息消息消息消息</Link></p>
    <p><Link to="/">消息消息消息消息消息消息消息消息</Link></p>
  </div>
);

//通知
const noticeContent = (
  <div className={s.noticeBox}>
    <p><Link to="/">消息消息消息消息消息消息消息消息</Link></p>
    <p><Link to="/">消息消息消息消息消息消息消息消息</Link></p>
  </div>
);

//个人中心
const profileContent = (
  <div className={s.profileBox}>
    <p><Link to="/">修改信息</Link></p>
    <p><Link to="/">登出</Link></p>
  </div>
);

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSetting = this.onSetting.bind(this);
  }

  onSetting() {
    console.log(1);
  }

  render() {
    return (
      <header className={s.header}>
        <div className={s.navbarInner}>
          <div className={s.container + ' ' + s.clearfix}>
            <div className={s.navbarLeft + ' ' + s.clearfix}>
              <span className={s.brand}>
                <Link to="/">Teahouse</Link>
              </span>
              <Popover placement="bottom" title={'快捷设置'} content={content} trigger="click">
                <div className={s.navbarLeftBtn}>
                  <Icon type="setting"/>
                </div>
              </Popover>
            </div>
            <div className={s.searchbox}>
              <Popover placement="bottom" title={'搜索结果'} content={searchContent} trigger="click">
                <div className={s.searchboxInner}>
                  <input type="text" className={s.inputSearch} placeholder="搜索关键词"/>
                  <button className={s.btnSearch}>
                    <Icon type="search"/>
                  </button>
                </div>
              </Popover>
            </div>
            <div className={s.navbarRight + ' ' + s.clearfix}>
              <Popover placement="bottomLeft" title={'个人中心'} content={profileContent} trigger="click">
                <div className={s.user + ' ' + s.clearfix}>
                  <div className={s.avatar}>
                    <img src={avatar} width="30" height="30" alt="avatar"/>
                  </div>
                  <span className={s.caretDown}>
                    <Icon type="caret-down"/>
                  </span>
                </div>
              </Popover>
              <div className={s.link + ' ' + s.clearfix}>
                <Popover placement="bottom" title={'通知'} content={noticeContent} trigger="click">
                  <div className={s.item}>
                    <Badge dot>
                      <Icon type="message"/>
                    </Badge>
                  </div>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withStyles(s)(Header);
