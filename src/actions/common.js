/* eslint-disable import/prefer-default-export */

import { LOADINGBAR, MENUTOGGLE, SUBMENUKEY } from '../constants';

export function loadingBarFn(play) {
  return {
    type: LOADINGBAR,
    play
  };
}

export function menuToggleFn() {
  return {
    type: MENUTOGGLE
  };
}

export function subMenuKeyFn(key) {
  return {
    type: SUBMENUKEY,
    key
  };
}
