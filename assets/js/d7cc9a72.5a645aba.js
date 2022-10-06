"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[11903],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>c});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function _(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},o=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,i=e.parentName,o=_(e,["components","mdxType","originalType","parentName"]),p=l(a),c=s,u=p["".concat(i,".").concat(c)]||p[c]||f[c]||n;return a?r.createElement(u,d(d({ref:t},o),{},{components:a})):r.createElement(u,d({ref:t},o))}));function c(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,d=new Array(n);d[0]=p;var _={};for(var i in t)hasOwnProperty.call(t,i)&&(_[i]=t[i]);_.originalType=e,_.mdxType="string"==typeof e?e:s,d[1]=_;for(var l=2;l<n;l++)d[l]=a[l];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58845:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>f,frontMatter:()=>n,metadata:()=>_,toc:()=>l});var r=a(87462),s=(a(67294),a(3905));const n={id:"dtag-transfer-requests-aggregate-fields",title:"dtag_transfer_requests_aggregate_fields",hide_table_of_contents:!1},d=void 0,_={unversionedId:"graphql/objects/dtag-transfer-requests-aggregate-fields",id:"graphql/objects/dtag-transfer-requests-aggregate-fields",title:"dtag_transfer_requests_aggregate_fields",description:'aggregate fields of "dtagtransferrequests"',source:"@site/docs/07-graphql/objects/dtag-transfer-requests-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/dtag-transfer-requests-aggregate-fields",permalink:"/next/graphql/objects/dtag-transfer-requests-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/dtag-transfer-requests-aggregate-fields.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"dtag-transfer-requests-aggregate-fields",title:"dtag_transfer_requests_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link",permalink:"/next/graphql/objects/chain-link"},next:{title:"dtag_transfer_requests_aggregate",permalink:"/next/graphql/objects/dtag-transfer-requests-aggregate"}},i={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>dtag_transfer_requests_avg_fields</code>)",id:"avg-dtag_transfer_requests_avg_fields",level:4},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>dtag_transfer_requests_max_fields</code>)",id:"max-dtag_transfer_requests_max_fields",level:4},{value:"<code>min</code> (<code>dtag_transfer_requests_min_fields</code>)",id:"min-dtag_transfer_requests_min_fields",level:4},{value:"<code>stddev</code> (<code>dtag_transfer_requests_stddev_fields</code>)",id:"stddev-dtag_transfer_requests_stddev_fields",level:4},{value:"<code>stddev_pop</code> (<code>dtag_transfer_requests_stddev_pop_fields</code>)",id:"stddev_pop-dtag_transfer_requests_stddev_pop_fields",level:4},{value:"<code>stddev_samp</code> (<code>dtag_transfer_requests_stddev_samp_fields</code>)",id:"stddev_samp-dtag_transfer_requests_stddev_samp_fields",level:4},{value:"<code>sum</code> (<code>dtag_transfer_requests_sum_fields</code>)",id:"sum-dtag_transfer_requests_sum_fields",level:4},{value:"<code>var_pop</code> (<code>dtag_transfer_requests_var_pop_fields</code>)",id:"var_pop-dtag_transfer_requests_var_pop_fields",level:4},{value:"<code>var_samp</code> (<code>dtag_transfer_requests_var_samp_fields</code>)",id:"var_samp-dtag_transfer_requests_var_samp_fields",level:4},{value:"<code>variance</code> (<code>dtag_transfer_requests_variance_fields</code>)",id:"variance-dtag_transfer_requests_variance_fields",level:4}],o={toc:l};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'aggregate fields of "dtag_transfer_requests"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type dtag_transfer_requests_aggregate_fields {\n  avg: dtag_transfer_requests_avg_fields\n  count(\n    columns: [dtag_transfer_requests_select_column!]\n    distinct: Boolean\n  ): Int!\n  max: dtag_transfer_requests_max_fields\n  min: dtag_transfer_requests_min_fields\n  stddev: dtag_transfer_requests_stddev_fields\n  stddev_pop: dtag_transfer_requests_stddev_pop_fields\n  stddev_samp: dtag_transfer_requests_stddev_samp_fields\n  sum: dtag_transfer_requests_sum_fields\n  var_pop: dtag_transfer_requests_var_pop_fields\n  var_samp: dtag_transfer_requests_var_samp_fields\n  variance: dtag_transfer_requests_variance_fields\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"avg-dtag_transfer_requests_avg_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/dtag-transfer-requests-avg-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_avg_fields")),")"),(0,s.kt)("h4",{id:"count-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"columns-dtag_transfer_requests_select_column"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,s.kt)("a",{parentName:"h5",href:"../enums/dtag-transfer-requests-select-column"},(0,s.kt)("inlineCode",{parentName:"a"},"[dtag_transfer_requests_select_column!]")),")")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,s.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,s.kt)("h4",{id:"max-dtag_transfer_requests_max_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/dtag-transfer-requests-max-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_max_fields")),")"),(0,s.kt)("h4",{id:"min-dtag_transfer_requests_min_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/dtag-transfer-requests-min-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_min_fields")),")"),(0,s.kt)("h4",{id:"stddev-dtag_transfer_requests_stddev_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/dtag-transfer-requests-stddev-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_stddev_fields")),")"),(0,s.kt)("h4",{id:"stddev_pop-dtag_transfer_requests_stddev_pop_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/dtag-transfer-requests-stddev-pop-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_stddev_pop_fields")),")"),(0,s.kt)("h4",{id:"stddev_samp-dtag_transfer_requests_stddev_samp_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/dtag-transfer-requests-stddev-samp-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_stddev_samp_fields")),")"),(0,s.kt)("h4",{id:"sum-dtag_transfer_requests_sum_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/dtag-transfer-requests-sum-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_sum_fields")),")"),(0,s.kt)("h4",{id:"var_pop-dtag_transfer_requests_var_pop_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/dtag-transfer-requests-var-pop-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_var_pop_fields")),")"),(0,s.kt)("h4",{id:"var_samp-dtag_transfer_requests_var_samp_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/dtag-transfer-requests-var-samp-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_var_samp_fields")),")"),(0,s.kt)("h4",{id:"variance-dtag_transfer_requests_variance_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/dtag-transfer-requests-variance-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_variance_fields")),")"))}f.isMDXComponent=!0}}]);