/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Register from './Register';

const title = 'New User Registration';

export default {

  path: '/register',

  nameCn: '注册',

  action() {
    return {
      title,
      component: <Layout><Register title={title} /></Layout>,
    };
  },

};