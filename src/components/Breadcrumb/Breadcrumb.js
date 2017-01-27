import React from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Breadcrumb.scss';
import Link from '../Link';
import { Breadcrumb, Icon } from 'antd';
import { mainMenu } from '../Aside';

class BreadcrumbDom extends React.Component {
  render() {
    let _menu = [];
    mainMenu.forEach((a, b) => a.subMenu.forEach((c, d) => {
      if (c.key === this.props.subMenuKey[1]) {
        _menu.push({
          key: a.key,
          title: a.title,
          to: a.subMenu[0].to
        }, {
          key: c.key,
          title: c.title,
          to: c.to
        });
        return
      }
    }))
    return (
      <div className={s.breadcrumb + ' ' + s.clearfix + ' ' + (this.props.menuToggle ? s.menuClose : '')}>
        <Breadcrumb separator=">" className={s.breadcrumbInner}>
          <Breadcrumb.Item><Link to='/'>主页</Link></Breadcrumb.Item>
          {
            _menu.map((i, k) =>
              <Breadcrumb.Item key={i.key}>
                { k === _menu.length - 1 ? i.title : <Link to={i.to}>{i.title}</Link> }
              </Breadcrumb.Item>
            )
          }
        </Breadcrumb>
        <span className={s.calendar}>
          <Icon type="calendar" />
          <span className={s.time}>2017年01月20分</span>
        </span>
      </div>
    );
  }
}

const mapState = (state) => ({
  menuToggle: state.common.menuToggle,
  subMenuKey: state.common.subMenuKey
});

const mapDispatch = {

};

export default withStyles(s)(connect(mapState, mapDispatch)(BreadcrumbDom));
