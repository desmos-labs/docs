"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[42433],{3905:(e,r,a)=>{a.d(r,{Zo:()=>n,kt:()=>i});var s=a(67294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function p(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,s)}return a}function t(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?p(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function u(e,r){if(null==e)return{};var a,s,o=function(e,r){if(null==e)return{};var a,s,o={},p=Object.keys(e);for(s=0;s<p.length;s++)a=p[s],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(s=0;s<p.length;s++)a=p[s],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var _=s.createContext({}),d=function(e){var r=s.useContext(_),a=r;return e&&(a="function"==typeof e?e(r):t(t({},r),e)),a},n=function(e){var r=d(e.components);return s.createElement(_.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},b=s.forwardRef((function(e,r){var a=e.components,o=e.mdxType,p=e.originalType,_=e.parentName,n=u(e,["components","mdxType","originalType","parentName"]),b=d(a),i=o,g=b["".concat(_,".").concat(i)]||b[i]||c[i]||p;return a?s.createElement(g,t(t({ref:r},n),{},{components:a})):s.createElement(g,t({ref:r},n))}));function i(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=a.length,t=new Array(p);t[0]=b;var u={};for(var _ in r)hasOwnProperty.call(r,_)&&(u[_]=r[_]);u.originalType=e,u.mdxType="string"==typeof e?e:o,t[1]=u;for(var d=2;d<p;d++)t[d]=a[d];return s.createElement.apply(null,t)}return s.createElement.apply(null,a)}b.displayName="MDXCreateElement"},81468:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>_,contentTitle:()=>t,default:()=>c,frontMatter:()=>p,metadata:()=>u,toc:()=>d});var s=a(87462),o=(a(67294),a(3905));const p={id:"subspace-user-group-aggregate-order-by",title:"subspace_user_group_aggregate_order_by",hide_table_of_contents:!1},t=void 0,u={unversionedId:"graphql/inputs/subspace-user-group-aggregate-order-by",id:"graphql/inputs/subspace-user-group-aggregate-order-by",title:"subspace_user_group_aggregate_order_by",description:'order by aggregate values of table "subspaceusergroup"',source:"@site/docs/07-graphql/inputs/subspace-user-group-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-group-aggregate-order-by",permalink:"/next/graphql/inputs/subspace-user-group-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-user-group-aggregate-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"subspace-user-group-aggregate-order-by",title:"subspace_user_group_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_section_variance_order_by",permalink:"/next/graphql/inputs/subspace-section-variance-order-by"},next:{title:"subspace_user_group_avg_order_by",permalink:"/next/graphql/inputs/subspace-user-group-avg-order-by"}},_={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>subspace_user_group_avg_order_by</code>)",id:"avg-subspace_user_group_avg_order_by",level:4},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>subspace_user_group_max_order_by</code>)",id:"max-subspace_user_group_max_order_by",level:4},{value:"<code>min</code> (<code>subspace_user_group_min_order_by</code>)",id:"min-subspace_user_group_min_order_by",level:4},{value:"<code>stddev</code> (<code>subspace_user_group_stddev_order_by</code>)",id:"stddev-subspace_user_group_stddev_order_by",level:4},{value:"<code>stddev_pop</code> (<code>subspace_user_group_stddev_pop_order_by</code>)",id:"stddev_pop-subspace_user_group_stddev_pop_order_by",level:4},{value:"<code>stddev_samp</code> (<code>subspace_user_group_stddev_samp_order_by</code>)",id:"stddev_samp-subspace_user_group_stddev_samp_order_by",level:4},{value:"<code>sum</code> (<code>subspace_user_group_sum_order_by</code>)",id:"sum-subspace_user_group_sum_order_by",level:4},{value:"<code>var_pop</code> (<code>subspace_user_group_var_pop_order_by</code>)",id:"var_pop-subspace_user_group_var_pop_order_by",level:4},{value:"<code>var_samp</code> (<code>subspace_user_group_var_samp_order_by</code>)",id:"var_samp-subspace_user_group_var_samp_order_by",level:4},{value:"<code>variance</code> (<code>subspace_user_group_variance_order_by</code>)",id:"variance-subspace_user_group_variance_order_by",level:4}],n={toc:d};function c(e){let{components:r,...a}=e;return(0,o.kt)("wrapper",(0,s.Z)({},n,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by aggregate values of table "subspace_user_group"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_group_aggregate_order_by {\n  avg: subspace_user_group_avg_order_by\n  count: order_by\n  max: subspace_user_group_max_order_by\n  min: subspace_user_group_min_order_by\n  stddev: subspace_user_group_stddev_order_by\n  stddev_pop: subspace_user_group_stddev_pop_order_by\n  stddev_samp: subspace_user_group_stddev_samp_order_by\n  sum: subspace_user_group_sum_order_by\n  var_pop: subspace_user_group_var_pop_order_by\n  var_samp: subspace_user_group_var_samp_order_by\n  variance: subspace_user_group_variance_order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"avg-subspace_user_group_avg_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-avg-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_avg_order_by")),")"),(0,o.kt)("h4",{id:"count-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"max-subspace_user_group_max_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-max-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_max_order_by")),")"),(0,o.kt)("h4",{id:"min-subspace_user_group_min_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-min-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_min_order_by")),")"),(0,o.kt)("h4",{id:"stddev-subspace_user_group_stddev_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-stddev-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_stddev_order_by")),")"),(0,o.kt)("h4",{id:"stddev_pop-subspace_user_group_stddev_pop_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-stddev-pop-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_stddev_pop_order_by")),")"),(0,o.kt)("h4",{id:"stddev_samp-subspace_user_group_stddev_samp_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-stddev-samp-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_stddev_samp_order_by")),")"),(0,o.kt)("h4",{id:"sum-subspace_user_group_sum_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-sum-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_sum_order_by")),")"),(0,o.kt)("h4",{id:"var_pop-subspace_user_group_var_pop_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-var-pop-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_var_pop_order_by")),")"),(0,o.kt)("h4",{id:"var_samp-subspace_user_group_var_samp_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-var-samp-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_var_samp_order_by")),")"),(0,o.kt)("h4",{id:"variance-subspace_user_group_variance_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-variance-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_variance_order_by")),")"))}c.isMDXComponent=!0}}]);