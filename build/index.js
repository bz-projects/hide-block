(window.webpackJsonp_hideblock=window.webpackJsonp_hideblock||[]).push([[1],{2:function(e,t,o){}}]),function(e){function t(t){for(var n,l,i=t[0],a=t[1],b=t[2],u=0,s=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&s.push(r[l][0]),r[l]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(d&&d(t);s.length;)s.shift()();return c.push.apply(c,b||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,i=1;i<o.length;i++){var a=o[i];0!==r[a]&&(n=!1)}n&&(c.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},r={0:0},c=[];function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp_hideblock=window.webpackJsonp_hideblock||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var d=a;c.push([1,1]),o()}([function(e,t){e.exports=window.wp.element},function(e,t,o){"use strict";o.r(t);var n=o(0);o(2);const{createHigherOrderComponent:r}=wp.compose,{Fragment:c}=wp.element,{InspectorAdvancedControls:l,BlockControls:i}=wp.blockEditor,{PanelRow:a,ToggleControl:b,ToolbarGroup:d,ToolbarItem:u,Button:s,Dashicon:p}=wp.components,{__:__}=wp.i18n;wp.hooks.addFilter("blocks.registerBlockType","hideblock/attr",(function(e){return e.hasOwnProperty("attributes")&&(e.attributes.hiddenblock={type:"boolean",default:!1}),e}));const h=r(e=>t=>Object(n.createElement)(c,null,Object(n.createElement)(i,null,Object(n.createElement)(d,{className:"hide-block__toolbar"},Object(n.createElement)(u,{as:s,onClick:()=>{!0===t.attributes.hiddenblock?t.setAttributes({hiddenblock:!1}):t.setAttributes({hiddenblock:!0})}},!0===t.attributes.hiddenblock?Object(n.createElement)(p,{icon:"hidden"}):Object(n.createElement)(p,{icon:"visibility"})))),Object(n.createElement)(l,null,Object(n.createElement)(a,null,Object(n.createElement)(b,{label:__("Hide Block","hideblock"),help:t.attributes.hiddenblock?__("Block is hidden","hide-block"):__("Block is visible","hide-block"),checked:t.attributes.hiddenblock,onChange:e=>{t.setAttributes({hiddenblock:e})}}))),"core/columns"===t.name||"core/column"===t.name?Object(n.createElement)(e,t):Object(n.createElement)("div",{className:t.attributes.hiddenblock?"hide-block hide-block--active":"hide-block"},Object(n.createElement)(e,t))),"withInspectorControl");wp.hooks.addFilter("editor.BlockEdit","hideblock/editor",h)}]);