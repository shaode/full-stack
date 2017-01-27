/* eslint-disable import/prefer-default-export */

import { LOADINGBAR, MENUTOGGLE } from '../constants';

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
