/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_DRAWER_STATE = 'UPDATE_DRAWER_STATE';

export const navigate = (path) => (dispatch) => {
  // Extract the page name from hash
  let page;
  switch(path) {
    case '/':
    case '':
    case '#':
      page = 'overview';
      // dispatch(updateDrawerState(false));
      break;
    default:
      page = path.slice(1);
      // dispatch(updateDrawerState(true));
  }
  // dynamically load page
  dispatch(loadPage(page));
};

const loadPage = (page) => async (dispatch) => {

  switch(page) {
    case "overview":
        await import('../pages/overview-page.js');
        break;
    case "tablet":
        await import('../pages/tablet-page.js');
        break;
    case "tablet-library":
        await import('../pages/tablet-library-page.js');
        break;
    case "pan":
        await import('../pages/pan-page.js');
        break;
    case "pan-library":
        await import('../pages/pan-library-page.js');
        break;
    case "coating":
        await import('../pages/coating-page.js');
        break;
    case "coating-library":
        await import('../pages/coating-library-page.js');
        break;
    case "coating-amount":
        await import('../pages/coating-amount-page.js');
        break;
    case "batch":
        await import('../pages/batch-page.js');
        break;
    case "dispersion":
        await import('../pages/dispersion-page.js');
        break;
    default:
      page = 404;
      await import('../pages/page-404.js');
  }
  window.scrollTo(0,0);
  dispatch(updatePage(page));
}

const updatePage = (page) => {
  return {
    type: UPDATE_PAGE,
    page
  };
}

// export const updateDrawerState = (opened) => (dispatch, getState) => {
//   if (getState().app.drawerOpened !== opened) {
//     dispatch({
//       type: UPDATE_DRAWER_STATE,
//       opened
//     });
//   }
// }
