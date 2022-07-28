"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[99288],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=u(t),m=s,b=l["".concat(p,".").concat(m)]||l[m]||d[m]||a;return t?n.createElement(b,o(o({ref:r},c),{},{components:t})):n.createElement(b,o({ref:r},c))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=l;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},94430:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var n=t(87462),s=t(63366),a=(t(67294),t(3905)),o=["components"],i={id:"subspace-user-permission-aggregate-order-by",title:"subspace_user_permission_aggregate_order_by",hide_table_of_contents:!1},p=void 0,u={unversionedId:"graphql/inputs/subspace-user-permission-aggregate-order-by",id:"graphql/inputs/subspace-user-permission-aggregate-order-by",title:"subspace_user_permission_aggregate_order_by",description:'order by aggregate values of table "subspaceuserpermission"',source:"@site/docs/07-graphql/inputs/subspace-user-permission-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-permission-aggregate-order-by",permalink:"/next/graphql/inputs/subspace-user-permission-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-user-permission-aggregate-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace-user-permission-aggregate-order-by",title:"subspace_user_permission_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_variance_order_by",permalink:"/next/graphql/inputs/subspace-user-group-variance-order-by"},next:{title:"subspace_user_permission_bool_exp",permalink:"/next/graphql/inputs/subspace-user-permission-bool-exp"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>subspace_user_permission_max_order_by</code>)",id:"max-subspace_user_permission_max_order_by",level:4},{value:"<code>min</code> (<code>subspace_user_permission_min_order_by</code>)",id:"min-subspace_user_permission_min_order_by",level:4}],l={toc:d};function m(e){var r=e.components,t=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'order by aggregate values of table "subspace_user_permission"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_permission_aggregate_order_by {\n  count: order_by\n  max: subspace_user_permission_max_order_by\n  min: subspace_user_permission_min_order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"count-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"max-subspace_user_permission_max_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-max-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_max_order_by")),")"),(0,a.kt)("h4",{id:"min-subspace_user_permission_min_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-min-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_min_order_by")),")"))}m.isMDXComponent=!0}}]);