"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[70776],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var _=n.createContext({}),i=function(e){var t=n.useContext(_),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(_.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,_=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=i(r),c=o,v=l["".concat(_,".").concat(c)]||l[c]||m[c]||a;return r?n.createElement(v,d(d({ref:t},s),{},{components:r})):n.createElement(v,d({ref:t},s))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,d=new Array(a);d[0]=l;var p={};for(var _ in t)hasOwnProperty.call(t,_)&&(p[_]=t[_]);p.originalType=e,p.mdxType="string"==typeof e?e:o,d[1]=p;for(var i=2;i<a;i++)d[i]=r[i];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},51724:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>_,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={id:"post-mention-aggregate-order-by",title:"post_mention_aggregate_order_by",hide_table_of_contents:!1},d=void 0,p={unversionedId:"graphql/inputs/post-mention-aggregate-order-by",id:"graphql/inputs/post-mention-aggregate-order-by",title:"post_mention_aggregate_order_by",description:'order by aggregate values of table "post_mention"',source:"@site/docs/07-graphql/inputs/post-mention-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-mention-aggregate-order-by",permalink:"/next/graphql/inputs/post-mention-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-mention-aggregate-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"post-mention-aggregate-order-by",title:"post_mention_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_max_order_by",permalink:"/next/graphql/inputs/post-max-order-by"},next:{title:"post_mention_arr_rel_insert_input",permalink:"/next/graphql/inputs/post-mention-arr-rel-insert-input"}},_={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>post_mention_avg_order_by</code>)",id:"avg-post_mention_avg_order_by",level:4},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>post_mention_max_order_by</code>)",id:"max-post_mention_max_order_by",level:4},{value:"<code>min</code> (<code>post_mention_min_order_by</code>)",id:"min-post_mention_min_order_by",level:4},{value:"<code>stddev</code> (<code>post_mention_stddev_order_by</code>)",id:"stddev-post_mention_stddev_order_by",level:4},{value:"<code>stddev_pop</code> (<code>post_mention_stddev_pop_order_by</code>)",id:"stddev_pop-post_mention_stddev_pop_order_by",level:4},{value:"<code>stddev_samp</code> (<code>post_mention_stddev_samp_order_by</code>)",id:"stddev_samp-post_mention_stddev_samp_order_by",level:4},{value:"<code>sum</code> (<code>post_mention_sum_order_by</code>)",id:"sum-post_mention_sum_order_by",level:4},{value:"<code>var_pop</code> (<code>post_mention_var_pop_order_by</code>)",id:"var_pop-post_mention_var_pop_order_by",level:4},{value:"<code>var_samp</code> (<code>post_mention_var_samp_order_by</code>)",id:"var_samp-post_mention_var_samp_order_by",level:4},{value:"<code>variance</code> (<code>post_mention_variance_order_by</code>)",id:"variance-post_mention_variance_order_by",level:4}],s={toc:i};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by aggregate values of table "post_mention"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_mention_aggregate_order_by {\n  avg: post_mention_avg_order_by\n  count: order_by\n  max: post_mention_max_order_by\n  min: post_mention_min_order_by\n  stddev: post_mention_stddev_order_by\n  stddev_pop: post_mention_stddev_pop_order_by\n  stddev_samp: post_mention_stddev_samp_order_by\n  sum: post_mention_sum_order_by\n  var_pop: post_mention_var_pop_order_by\n  var_samp: post_mention_var_samp_order_by\n  variance: post_mention_variance_order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"avg-post_mention_avg_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-mention-avg-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_avg_order_by")),")"),(0,o.kt)("h4",{id:"count-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"max-post_mention_max_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-mention-max-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_max_order_by")),")"),(0,o.kt)("h4",{id:"min-post_mention_min_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-mention-min-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_min_order_by")),")"),(0,o.kt)("h4",{id:"stddev-post_mention_stddev_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-mention-stddev-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_stddev_order_by")),")"),(0,o.kt)("h4",{id:"stddev_pop-post_mention_stddev_pop_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-mention-stddev-pop-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_stddev_pop_order_by")),")"),(0,o.kt)("h4",{id:"stddev_samp-post_mention_stddev_samp_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-mention-stddev-samp-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_stddev_samp_order_by")),")"),(0,o.kt)("h4",{id:"sum-post_mention_sum_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-mention-sum-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_sum_order_by")),")"),(0,o.kt)("h4",{id:"var_pop-post_mention_var_pop_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-mention-var-pop-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_var_pop_order_by")),")"),(0,o.kt)("h4",{id:"var_samp-post_mention_var_samp_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-mention-var-samp-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_var_samp_order_by")),")"),(0,o.kt)("h4",{id:"variance-post_mention_variance_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-mention-variance-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_variance_order_by")),")"))}m.isMDXComponent=!0}}]);