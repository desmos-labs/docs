"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[52246],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return _}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=i(a),_=o,h=m["".concat(p,".").concat(_)]||m[_]||l[_]||s;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function _(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=m;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var i=2;i<s;i++)r[i]=a[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},54949:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return _},frontMatter:function(){return d},metadata:function(){return i},toc:function(){return l}});var n=a(87462),o=a(63366),s=(a(67294),a(3905)),r=["components"],d={id:"post-attachment-aggregate-fields",title:"post_attachment_aggregate_fields",hide_table_of_contents:!1},p=void 0,i={unversionedId:"graphql/objects/post-attachment-aggregate-fields",id:"version-4.1.0/graphql/objects/post-attachment-aggregate-fields",title:"post_attachment_aggregate_fields",description:'aggregate fields of "post_attachment"',source:"@site/versioned_docs/version-4.1.0/07-graphql/objects/post-attachment-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/post-attachment-aggregate-fields",permalink:"/graphql/objects/post-attachment-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/objects/post-attachment-aggregate-fields.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659007892,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"post-attachment-aggregate-fields",title:"post_attachment_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_aggregate",permalink:"/graphql/objects/post-aggregate"},next:{title:"post_attachment_aggregate",permalink:"/graphql/objects/post-attachment-aggregate"}},c={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>post_attachment_avg_fields</code>)",id:"avg-post_attachment_avg_fields",level:4},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>post_attachment_max_fields</code>)",id:"max-post_attachment_max_fields",level:4},{value:"<code>min</code> (<code>post_attachment_min_fields</code>)",id:"min-post_attachment_min_fields",level:4},{value:"<code>stddev</code> (<code>post_attachment_stddev_fields</code>)",id:"stddev-post_attachment_stddev_fields",level:4},{value:"<code>stddev_pop</code> (<code>post_attachment_stddev_pop_fields</code>)",id:"stddev_pop-post_attachment_stddev_pop_fields",level:4},{value:"<code>stddev_samp</code> (<code>post_attachment_stddev_samp_fields</code>)",id:"stddev_samp-post_attachment_stddev_samp_fields",level:4},{value:"<code>sum</code> (<code>post_attachment_sum_fields</code>)",id:"sum-post_attachment_sum_fields",level:4},{value:"<code>var_pop</code> (<code>post_attachment_var_pop_fields</code>)",id:"var_pop-post_attachment_var_pop_fields",level:4},{value:"<code>var_samp</code> (<code>post_attachment_var_samp_fields</code>)",id:"var_samp-post_attachment_var_samp_fields",level:4},{value:"<code>variance</code> (<code>post_attachment_variance_fields</code>)",id:"variance-post_attachment_variance_fields",level:4}],m={toc:l};function _(e){var t=e.components,a=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'aggregate fields of "post_attachment"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type post_attachment_aggregate_fields {\n  avg: post_attachment_avg_fields\n  count(\n  columns: [post_attachment_select_column!]\n  distinct: Boolean\n): Int!\n  max: post_attachment_max_fields\n  min: post_attachment_min_fields\n  stddev: post_attachment_stddev_fields\n  stddev_pop: post_attachment_stddev_pop_fields\n  stddev_samp: post_attachment_stddev_samp_fields\n  sum: post_attachment_sum_fields\n  var_pop: post_attachment_var_pop_fields\n  var_samp: post_attachment_var_samp_fields\n  variance: post_attachment_variance_fields\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"avg-post_attachment_avg_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-attachment-avg-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_attachment_avg_fields")),")"),(0,s.kt)("h4",{id:"count-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"columns-post_attachment_select_column"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,s.kt)("a",{parentName:"h5",href:"../enums/post-attachment-select-column"},(0,s.kt)("inlineCode",{parentName:"a"},"[post_attachment_select_column!]")),")"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,s.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,s.kt)("h4",{id:"max-post_attachment_max_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-attachment-max-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_attachment_max_fields")),")"),(0,s.kt)("h4",{id:"min-post_attachment_min_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-attachment-min-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_attachment_min_fields")),")"),(0,s.kt)("h4",{id:"stddev-post_attachment_stddev_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-attachment-stddev-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_attachment_stddev_fields")),")"),(0,s.kt)("h4",{id:"stddev_pop-post_attachment_stddev_pop_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-attachment-stddev-pop-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_attachment_stddev_pop_fields")),")"),(0,s.kt)("h4",{id:"stddev_samp-post_attachment_stddev_samp_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-attachment-stddev-samp-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_attachment_stddev_samp_fields")),")"),(0,s.kt)("h4",{id:"sum-post_attachment_sum_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-attachment-sum-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_attachment_sum_fields")),")"),(0,s.kt)("h4",{id:"var_pop-post_attachment_var_pop_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-attachment-var-pop-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_attachment_var_pop_fields")),")"),(0,s.kt)("h4",{id:"var_samp-post_attachment_var_samp_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-attachment-var-samp-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_attachment_var_samp_fields")),")"),(0,s.kt)("h4",{id:"variance-post_attachment_variance_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-attachment-variance-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_attachment_variance_fields")),")"))}_.isMDXComponent=!0}}]);