"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[95477],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return b}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),l=p(t),b=o,f=l["".concat(i,".").concat(b)]||l[b]||u[b]||a;return t?n.createElement(f,s(s({ref:r},c),{},{components:t})):n.createElement(f,s({ref:r},c))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=l;var d={};for(var i in r)hasOwnProperty.call(r,i)&&(d[i]=r[i]);d.originalType=e,d.mdxType="string"==typeof e?e:o,s[1]=d;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},39369:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return u}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],d={id:"subspace-registered-reaction-stddev-pop-order-by",title:"subspace_registered_reaction_stddev_pop_order_by",hide_table_of_contents:!1},i=void 0,p={unversionedId:"graphql/inputs/subspace-registered-reaction-stddev-pop-order-by",id:"graphql/inputs/subspace-registered-reaction-stddev-pop-order-by",title:"subspace_registered_reaction_stddev_pop_order_by",description:'order by stddevpop() on columns of table "subspaceregistered_reaction"',source:"@site/docs/07-graphql/inputs/subspace-registered-reaction-stddev-pop-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-registered-reaction-stddev-pop-order-by",permalink:"/next/graphql/inputs/subspace-registered-reaction-stddev-pop-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-registered-reaction-stddev-pop-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace-registered-reaction-stddev-pop-order-by",title:"subspace_registered_reaction_stddev_pop_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_registered_reaction_stddev_order_by",permalink:"/next/graphql/inputs/subspace-registered-reaction-stddev-order-by"},next:{title:"subspace_registered_reaction_stddev_samp_order_by",permalink:"/next/graphql/inputs/subspace-registered-reaction-stddev-samp-order-by"}},c={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4}],l={toc:u};function b(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'order by stddev_pop() on columns of table "subspace_registered_reaction"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_registered_reaction_stddev_pop_order_by {\n  id: order_by\n  subspace_id: order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"subspace_id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}b.isMDXComponent=!0}}]);