import React from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Breadcrumb.scss';
import Link from '../Link';
import { Breadcrumb, Icon } from 'antd';

class BreadcrumbDom extends React.Component {
  render() {
    return (
      <div className={s.breadcrumb + ' ' + s.clearfix + ' ' + (this.props.menuToggle ? s.menuClose : '')}>
        <Breadcrumb separator=">" className={s.breadcrumbInner}>
          <Breadcrumb.Item><a href="">主页</a></Breadcrumb.Item>
          <Breadcrumb.Item><a href="">模块</a></Breadcrumb.Item>
          <Breadcrumb.Item><a href="">关于</a></Breadcrumb.Item>
          <Breadcrumb.Item>编辑</Breadcrumb.Item>
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
  menuToggle: state.common.menuToggle
});

const mapDispatch = {

};

export default withStyles(s)(connect(mapState, mapDispatch)(BreadcrumbDom));
