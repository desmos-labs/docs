"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[22845],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>h});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(t),h=o,y=u["".concat(p,".").concat(h)]||u[h]||s[h]||i;return t?n.createElement(y,a(a({ref:r},c),{},{components:t})):n.createElement(y,a({ref:r},c))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var d={};for(var p in r)hasOwnProperty.call(r,p)&&(d[p]=r[p]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},16552:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const i={id:"chain-link-stddev-pop-order-by",title:"chain_link_stddev_pop_order_by",hide_table_of_contents:!1},a=void 0,d={unversionedId:"graphql/inputs/chain-link-stddev-pop-order-by",id:"graphql/inputs/chain-link-stddev-pop-order-by",title:"chain_link_stddev_pop_order_by",description:'order by stddevpop() on columns of table "chainlink"',source:"@site/docs/07-graphql/inputs/chain-link-stddev-pop-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/chain-link-stddev-pop-order-by",permalink:"/next/graphql/inputs/chain-link-stddev-pop-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/chain-link-stddev-pop-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"chain-link-stddev-pop-order-by",title:"chain_link_stddev_pop_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_stddev_order_by",permalink:"/next/graphql/inputs/chain-link-stddev-order-by"},next:{title:"chain_link_stddev_samp_order_by",permalink:"/next/graphql/inputs/chain-link-stddev-samp-order-by"}},p={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>chain_config_id</code> (<code>order_by</code>)",id:"chain_config_id-order_by",level:4},{value:"<code>height</code> (<code>order_by</code>)",id:"height-order_by",level:4},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4}],c={toc:l};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by stddev_pop() on columns of table "chain_link"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input chain_link_stddev_pop_order_by {\n  chain_config_id: order_by\n  height: order_by\n  id: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"chain_config_id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_config_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"height-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}s.isMDXComponent=!0}}]);