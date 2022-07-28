"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[11656],{3905:function(e,r,a){a.d(r,{Zo:function(){return p},kt:function(){return m}});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function d(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=t.createContext({}),_=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):d(d({},r),e)),a},p=function(e){var r=_(e.components);return t.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},l=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=_(a),m=n,v=l["".concat(c,".").concat(m)]||l[m]||s[m]||o;return a?t.createElement(v,d(d({ref:r},p),{},{components:a})):t.createElement(v,d({ref:r},p))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,d=new Array(o);d[0]=l;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,d[1]=i;for(var _=2;_<o;_++)d[_]=a[_];return t.createElement.apply(null,d)}return t.createElement.apply(null,a)}l.displayName="MDXCreateElement"},2201:function(e,r,a){a.r(r),a.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return _},toc:function(){return s}});var t=a(87462),n=a(63366),o=(a(67294),a(3905)),d=["components"],i={id:"reaction-aggregate-order-by",title:"reaction_aggregate_order_by",hide_table_of_contents:!1},c=void 0,_={unversionedId:"graphql/inputs/reaction-aggregate-order-by",id:"graphql/inputs/reaction-aggregate-order-by",title:"reaction_aggregate_order_by",description:'order by aggregate values of table "reaction"',source:"@site/docs/07-graphql/inputs/reaction-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/reaction-aggregate-order-by",permalink:"/next/graphql/inputs/reaction-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/reaction-aggregate-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1659007892,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"reaction-aggregate-order-by",title:"reaction_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"profiles_params_order_by",permalink:"/next/graphql/inputs/profiles-params-order-by"},next:{title:"reaction_avg_order_by",permalink:"/next/graphql/inputs/reaction-avg-order-by"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>reaction_avg_order_by</code>)",id:"avg-reaction_avg_order_by",level:4},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>reaction_max_order_by</code>)",id:"max-reaction_max_order_by",level:4},{value:"<code>min</code> (<code>reaction_min_order_by</code>)",id:"min-reaction_min_order_by",level:4},{value:"<code>stddev</code> (<code>reaction_stddev_order_by</code>)",id:"stddev-reaction_stddev_order_by",level:4},{value:"<code>stddev_pop</code> (<code>reaction_stddev_pop_order_by</code>)",id:"stddev_pop-reaction_stddev_pop_order_by",level:4},{value:"<code>stddev_samp</code> (<code>reaction_stddev_samp_order_by</code>)",id:"stddev_samp-reaction_stddev_samp_order_by",level:4},{value:"<code>sum</code> (<code>reaction_sum_order_by</code>)",id:"sum-reaction_sum_order_by",level:4},{value:"<code>var_pop</code> (<code>reaction_var_pop_order_by</code>)",id:"var_pop-reaction_var_pop_order_by",level:4},{value:"<code>var_samp</code> (<code>reaction_var_samp_order_by</code>)",id:"var_samp-reaction_var_samp_order_by",level:4},{value:"<code>variance</code> (<code>reaction_variance_order_by</code>)",id:"variance-reaction_variance_order_by",level:4}],l={toc:s};function m(e){var r=e.components,a=(0,n.Z)(e,d);return(0,o.kt)("wrapper",(0,t.Z)({},l,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by aggregate values of table "reaction"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input reaction_aggregate_order_by {\n  avg: reaction_avg_order_by\n  count: order_by\n  max: reaction_max_order_by\n  min: reaction_min_order_by\n  stddev: reaction_stddev_order_by\n  stddev_pop: reaction_stddev_pop_order_by\n  stddev_samp: reaction_stddev_samp_order_by\n  sum: reaction_sum_order_by\n  var_pop: reaction_var_pop_order_by\n  var_samp: reaction_var_samp_order_by\n  variance: reaction_variance_order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"avg-reaction_avg_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/reaction-avg-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"reaction_avg_order_by")),")"),(0,o.kt)("h4",{id:"count-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"max-reaction_max_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/reaction-max-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"reaction_max_order_by")),")"),(0,o.kt)("h4",{id:"min-reaction_min_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/reaction-min-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"reaction_min_order_by")),")"),(0,o.kt)("h4",{id:"stddev-reaction_stddev_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/reaction-stddev-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"reaction_stddev_order_by")),")"),(0,o.kt)("h4",{id:"stddev_pop-reaction_stddev_pop_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/reaction-stddev-pop-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"reaction_stddev_pop_order_by")),")"),(0,o.kt)("h4",{id:"stddev_samp-reaction_stddev_samp_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/reaction-stddev-samp-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"reaction_stddev_samp_order_by")),")"),(0,o.kt)("h4",{id:"sum-reaction_sum_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/reaction-sum-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"reaction_sum_order_by")),")"),(0,o.kt)("h4",{id:"var_pop-reaction_var_pop_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/reaction-var-pop-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"reaction_var_pop_order_by")),")"),(0,o.kt)("h4",{id:"var_samp-reaction_var_samp_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/reaction-var-samp-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"reaction_var_samp_order_by")),")"),(0,o.kt)("h4",{id:"variance-reaction_variance_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/reaction-variance-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"reaction_variance_order_by")),")"))}m.isMDXComponent=!0}}]);