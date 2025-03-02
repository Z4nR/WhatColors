import{b as q}from"./react-CCjLKhKT.js";var c={exports:{}},f={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a;function w(){if(a)return f;a=1;var u=q();function d(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var p=typeof Object.is=="function"?Object.is:d,m=u.useState,v=u.useEffect,h=u.useLayoutEffect,l=u.useDebugValue;function x(e,t){var r=t(),o=m({inst:{value:r,getSnapshot:t}}),n=o[0].inst,s=o[1];return h(function(){n.value=r,n.getSnapshot=t,i(n)&&s({inst:n})},[e,r,t]),v(function(){return i(n)&&s({inst:n}),e(function(){i(n)&&s({inst:n})})},[e]),l(r),r}function i(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!p(e,r)}catch{return!0}}function y(e,t){return t()}var E=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?y:x;return f.useSyncExternalStore=u.useSyncExternalStore!==void 0?u.useSyncExternalStore:E,f}var S;function _(){return S||(S=1,c.exports=w()),c.exports}var R=_();export{R as s};
