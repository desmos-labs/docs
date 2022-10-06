"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[90010],{3905:(e,r,a)=>{a.d(r,{Zo:()=>_,kt:()=>h});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=t.createContext({}),p=function(e){var r=t.useContext(d),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},_=function(e){var r=p(e.components);return t.createElement(d.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,_=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,c=u["".concat(d,".").concat(h)]||u[h]||l[h]||o;return a?t.createElement(c,i(i({ref:r},_),{},{components:a})):t.createElement(c,i({ref:r},_))}));function h(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6896:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=a(87462),n=(a(67294),a(3905));const o={id:"user-relationship-aggregate-order-by",title:"user_relationship_aggregate_order_by",hide_table_of_contents:!1},i=void 0,s={unversionedId:"graphql/inputs/user-relationship-aggregate-order-by",id:"graphql/inputs/user-relationship-aggregate-order-by",title:"user_relationship_aggregate_order_by",description:'order by aggregate values of table "user_relationship"',source:"@site/docs/07-graphql/inputs/user-relationship-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/user-relationship-aggregate-order-by",permalink:"/next/graphql/inputs/user-relationship-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/user-relationship-aggregate-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"user-relationship-aggregate-order-by",title:"user_relationship_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"user_block_variance_order_by",permalink:"/next/graphql/inputs/user-block-variance-order-by"},next:{title:"user_relationship_arr_rel_insert_input",permalink:"/next/graphql/inputs/user-relationship-arr-rel-insert-input"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>user_relationship_avg_order_by</code>)",id:"avg-user_relationship_avg_order_by",level:4},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>user_relationship_max_order_by</code>)",id:"max-user_relationship_max_order_by",level:4},{value:"<code>min</code> (<code>user_relationship_min_order_by</code>)",id:"min-user_relationship_min_order_by",level:4},{value:"<code>stddev</code> (<code>user_relationship_stddev_order_by</code>)",id:"stddev-user_relationship_stddev_order_by",level:4},{value:"<code>stddev_pop</code> (<code>user_relationship_stddev_pop_order_by</code>)",id:"stddev_pop-user_relationship_stddev_pop_order_by",level:4},{value:"<code>stddev_samp</code> (<code>user_relationship_stddev_samp_order_by</code>)",id:"stddev_samp-user_relationship_stddev_samp_order_by",level:4},{value:"<code>sum</code> (<code>user_relationship_sum_order_by</code>)",id:"sum-user_relationship_sum_order_by",level:4},{value:"<code>var_pop</code> (<code>user_relationship_var_pop_order_by</code>)",id:"var_pop-user_relationship_var_pop_order_by",level:4},{value:"<code>var_samp</code> (<code>user_relationship_var_samp_order_by</code>)",id:"var_samp-user_relationship_var_samp_order_by",level:4},{value:"<code>variance</code> (<code>user_relationship_variance_order_by</code>)",id:"variance-user_relationship_variance_order_by",level:4}],_={toc:p};function l(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},_,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by aggregate values of table "user_relationship"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input user_relationship_aggregate_order_by {\n  avg: user_relationship_avg_order_by\n  count: order_by\n  max: user_relationship_max_order_by\n  min: user_relationship_min_order_by\n  stddev: user_relationship_stddev_order_by\n  stddev_pop: user_relationship_stddev_pop_order_by\n  stddev_samp: user_relationship_stddev_samp_order_by\n  sum: user_relationship_sum_order_by\n  var_pop: user_relationship_var_pop_order_by\n  var_samp: user_relationship_var_samp_order_by\n  variance: user_relationship_variance_order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"avg-user_relationship_avg_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/user-relationship-avg-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"user_relationship_avg_order_by")),")"),(0,n.kt)("h4",{id:"count-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"max-user_relationship_max_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/user-relationship-max-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"user_relationship_max_order_by")),")"),(0,n.kt)("h4",{id:"min-user_relationship_min_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/user-relationship-min-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"user_relationship_min_order_by")),")"),(0,n.kt)("h4",{id:"stddev-user_relationship_stddev_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/user-relationship-stddev-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"user_relationship_stddev_order_by")),")"),(0,n.kt)("h4",{id:"stddev_pop-user_relationship_stddev_pop_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/user-relationship-stddev-pop-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"user_relationship_stddev_pop_order_by")),")"),(0,n.kt)("h4",{id:"stddev_samp-user_relationship_stddev_samp_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/user-relationship-stddev-samp-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"user_relationship_stddev_samp_order_by")),")"),(0,n.kt)("h4",{id:"sum-user_relationship_sum_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/user-relationship-sum-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"user_relationship_sum_order_by")),")"),(0,n.kt)("h4",{id:"var_pop-user_relationship_var_pop_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/user-relationship-var-pop-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"user_relationship_var_pop_order_by")),")"),(0,n.kt)("h4",{id:"var_samp-user_relationship_var_samp_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/user-relationship-var-samp-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"user_relationship_var_samp_order_by")),")"),(0,n.kt)("h4",{id:"variance-user_relationship_variance_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/user-relationship-variance-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"user_relationship_variance_order_by")),")"))}l.isMDXComponent=!0}}]);