"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[29864],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>b});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=p(t),b=a,m=u["".concat(i,".").concat(b)]||u[b]||l[b]||s;return t?n.createElement(m,o(o({ref:r},c),{},{components:t})):n.createElement(m,o({ref:r},c))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=u;var d={};for(var i in r)hasOwnProperty.call(r,i)&&(d[i]=r[i]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var p=2;p<s;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},36212:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const s={id:"subspace-registered-reaction-stddev-samp-order-by",title:"subspace_registered_reaction_stddev_samp_order_by",hide_table_of_contents:!1},o=void 0,d={unversionedId:"graphql/inputs/subspace-registered-reaction-stddev-samp-order-by",id:"graphql/inputs/subspace-registered-reaction-stddev-samp-order-by",title:"subspace_registered_reaction_stddev_samp_order_by",description:'order by stddevsamp() on columns of table "subspaceregistered_reaction"',source:"@site/docs/07-graphql/inputs/subspace-registered-reaction-stddev-samp-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-registered-reaction-stddev-samp-order-by",permalink:"/next/graphql/inputs/subspace-registered-reaction-stddev-samp-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-registered-reaction-stddev-samp-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"subspace-registered-reaction-stddev-samp-order-by",title:"subspace_registered_reaction_stddev_samp_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_registered_reaction_stddev_pop_order_by",permalink:"/next/graphql/inputs/subspace-registered-reaction-stddev-pop-order-by"},next:{title:"subspace_registered_reaction_sum_order_by",permalink:"/next/graphql/inputs/subspace-registered-reaction-sum-order-by"}},i={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4}],c={toc:p};function l(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'order by stddev_samp() on columns of table "subspace_registered_reaction"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_registered_reaction_stddev_samp_order_by {\n  id: order_by\n  subspace_id: order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"subspace_id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}l.isMDXComponent=!0}}]);