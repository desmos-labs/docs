"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[36818],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=s(t),u=o,y=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return t?r.createElement(y,a(a({ref:n},l),{},{components:t})):r.createElement(y,a({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89036:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return c}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],d={id:"post-mention-min-order-by",title:"post_mention_min_order_by",hide_table_of_contents:!1},p=void 0,s={unversionedId:"graphql/inputs/post-mention-min-order-by",id:"graphql/inputs/post-mention-min-order-by",title:"post_mention_min_order_by",description:'order by min() on columns of table "post_mention"',source:"@site/docs/07-graphql/inputs/post-mention-min-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-mention-min-order-by",permalink:"/next/graphql/inputs/post-mention-min-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-mention-min-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1657817134,formattedLastUpdatedAt:"7/14/2022",frontMatter:{id:"post-mention-min-order-by",title:"post_mention_min_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_mention_max_order_by",permalink:"/next/graphql/inputs/post-mention-max-order-by"},next:{title:"post_mention_order_by",permalink:"/next/graphql/inputs/post-mention-order-by"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>end_index</code> (<code>order_by</code>)",id:"end_index-order_by",level:4},{value:"<code>mention_address</code> (<code>order_by</code>)",id:"mention_address-order_by",level:4},{value:"<code>start_index</code> (<code>order_by</code>)",id:"start_index-order_by",level:4}],m={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'order by min() on columns of table "post_mention"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_mention_min_order_by {\n  end_index: order_by\n  mention_address: order_by\n  start_index: order_by\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"end_index-order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"end_index"))," (",(0,i.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,i.kt)("h4",{id:"mention_address-order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"mention_address"))," (",(0,i.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,i.kt)("h4",{id:"start_index-order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"start_index"))," (",(0,i.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}u.isMDXComponent=!0}}]);