import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Aside.scss';
import Link from '../Link';
import { Menu, Icon, Badge } from 'antd';

class Aside extends React.Component {
  render() {
    return (
      <aside className={s.aside + ' ' + s.clearfix}>
        <div className={s.mainMenu}>
          <div className={s.menuToggle}><span></span><span></span><span></span></div>
          <div className={s.mainMenuItem}>
            <Icon type="pie-chart" />
            <div className={s.mainMenuName}>总览</div>
          </div>
          <div className={s.mainMenuItem}>
            <Icon type="pie-chart" />
            <div className={s.mainMenuName}>模块</div>
          </div>
          <div className={s.mainMenuItem}>
            <Icon type="pie-chart" />
            <div className={s.mainMenuName}>设置</div>
          </div>
        </div>
        <div className={s.subMenu}>
          <Link to="/privacy" className={s.clearfix}>
            <div className={s.subMenuIcon}>
              <Icon type="laptop"/>
            </div>
            <div className={s.subMenuText}>
              <div className={s.subMenuTitle}>隐私</div>
              <div className={s.subMenuDis}>fermentum</div>
            </div>
          </Link>
          <Link to="/about" className={s.clearfix}>
            <div className={s.subMenuIcon}>
              <Icon type="laptop"/>
            </div>
            <div className={s.subMenuText}>
              <div className={s.subMenuTitle}>关于</div>
              <div className={s.subMenuDis}>fermentum</div>
            </div>
          </Link>
          <Link to="/about" className={s.clearfix}>
            <div className={s.subMenuIcon}>
              <Icon type="laptop"/>
            </div>
            <div className={s.subMenuText}>
              <div className={s.subMenuTitle}>统计</div>
              <div className={s.subMenuDis}>fermentum</div>
            </div>
          </Link>
          <Link to="/about" className={s.clearfix}>
            <div className={s.subMenuIcon}>
              <Icon type="laptop"/>
            </div>
            <div className={s.subMenuText}>
              <div className={s.subMenuTitle}>统计</div>
              <div className={s.subMenuDis}>fermentum</div>
            </div>
          </Link>
          <Link to="/about" className={s.clearfix}>
            <div className={s.subMenuIcon}>
              <Icon type="laptop"/>
            </div>
            <div className={s.subMenuText}>
              <div className={s.subMenuTitle}>统计</div>
              <div className={s.subMenuDis}>fermentum</div>
            </div>
          </Link>
        </div>
      </aside>
    );
  }
}

export default withStyles(s)(Aside);
