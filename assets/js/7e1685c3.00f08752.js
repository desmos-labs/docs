"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[79670],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var i=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,i,l=function(e,a){if(null==e)return{};var t,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=i.createContext({}),_=function(e){var a=i.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=_(e.components);return i.createElement(p.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},d=i.forwardRef((function(e,a){var t=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=_(t),u=l,m=d["".concat(p,".").concat(u)]||d[u]||s[u]||n;return t?i.createElement(m,r(r({ref:a},c),{},{components:t})):i.createElement(m,r({ref:a},c))}));function u(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var n=t.length,r=new Array(n);r[0]=d;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var _=2;_<n;_++)r[_]=t[_];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},67514:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>n,metadata:()=>o,toc:()=>_});var i=t(87462),l=(t(67294),t(3905));const n={id:"application-link-oracle-request-aggregate-fields",title:"application_link_oracle_request_aggregate_fields",hide_table_of_contents:!1},r=void 0,o={unversionedId:"graphql/objects/application-link-oracle-request-aggregate-fields",id:"graphql/objects/application-link-oracle-request-aggregate-fields",title:"application_link_oracle_request_aggregate_fields",description:'aggregate fields of "applicationlinkoracle_request"',source:"@site/docs/07-graphql/objects/application-link-oracle-request-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/application-link-oracle-request-aggregate-fields",permalink:"/next/graphql/objects/application-link-oracle-request-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/application-link-oracle-request-aggregate-fields.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"application-link-oracle-request-aggregate-fields",title:"application_link_oracle_request_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link_mutation_response",permalink:"/next/graphql/objects/application-link-mutation-response"},next:{title:"application_link_oracle_request_aggregate",permalink:"/next/graphql/objects/application-link-oracle-request-aggregate"}},p={},_=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>application_link_oracle_request_avg_fields</code>)",id:"avg-application_link_oracle_request_avg_fields",level:4},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>application_link_oracle_request_max_fields</code>)",id:"max-application_link_oracle_request_max_fields",level:4},{value:"<code>min</code> (<code>application_link_oracle_request_min_fields</code>)",id:"min-application_link_oracle_request_min_fields",level:4},{value:"<code>stddev</code> (<code>application_link_oracle_request_stddev_fields</code>)",id:"stddev-application_link_oracle_request_stddev_fields",level:4},{value:"<code>stddev_pop</code> (<code>application_link_oracle_request_stddev_pop_fields</code>)",id:"stddev_pop-application_link_oracle_request_stddev_pop_fields",level:4},{value:"<code>stddev_samp</code> (<code>application_link_oracle_request_stddev_samp_fields</code>)",id:"stddev_samp-application_link_oracle_request_stddev_samp_fields",level:4},{value:"<code>sum</code> (<code>application_link_oracle_request_sum_fields</code>)",id:"sum-application_link_oracle_request_sum_fields",level:4},{value:"<code>var_pop</code> (<code>application_link_oracle_request_var_pop_fields</code>)",id:"var_pop-application_link_oracle_request_var_pop_fields",level:4},{value:"<code>var_samp</code> (<code>application_link_oracle_request_var_samp_fields</code>)",id:"var_samp-application_link_oracle_request_var_samp_fields",level:4},{value:"<code>variance</code> (<code>application_link_oracle_request_variance_fields</code>)",id:"variance-application_link_oracle_request_variance_fields",level:4}],c={toc:_};function s(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,i.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'aggregate fields of "application_link_oracle_request"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type application_link_oracle_request_aggregate_fields {\n  avg: application_link_oracle_request_avg_fields\n  count(\n    columns: [application_link_oracle_request_select_column!]\n    distinct: Boolean\n  ): Int!\n  max: application_link_oracle_request_max_fields\n  min: application_link_oracle_request_min_fields\n  stddev: application_link_oracle_request_stddev_fields\n  stddev_pop: application_link_oracle_request_stddev_pop_fields\n  stddev_samp: application_link_oracle_request_stddev_samp_fields\n  sum: application_link_oracle_request_sum_fields\n  var_pop: application_link_oracle_request_var_pop_fields\n  var_samp: application_link_oracle_request_var_samp_fields\n  variance: application_link_oracle_request_variance_fields\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"avg-application_link_oracle_request_avg_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/application-link-oracle-request-avg-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_avg_fields")),")"),(0,l.kt)("h4",{id:"count-int"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"columns-application_link_oracle_request_select_column"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,l.kt)("a",{parentName:"h5",href:"../enums/application-link-oracle-request-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[application_link_oracle_request_select_column!]")),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,l.kt)("h4",{id:"max-application_link_oracle_request_max_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/application-link-oracle-request-max-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_max_fields")),")"),(0,l.kt)("h4",{id:"min-application_link_oracle_request_min_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/application-link-oracle-request-min-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_min_fields")),")"),(0,l.kt)("h4",{id:"stddev-application_link_oracle_request_stddev_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/application-link-oracle-request-stddev-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_stddev_fields")),")"),(0,l.kt)("h4",{id:"stddev_pop-application_link_oracle_request_stddev_pop_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/application-link-oracle-request-stddev-pop-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_stddev_pop_fields")),")"),(0,l.kt)("h4",{id:"stddev_samp-application_link_oracle_request_stddev_samp_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/application-link-oracle-request-stddev-samp-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_stddev_samp_fields")),")"),(0,l.kt)("h4",{id:"sum-application_link_oracle_request_sum_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/application-link-oracle-request-sum-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_sum_fields")),")"),(0,l.kt)("h4",{id:"var_pop-application_link_oracle_request_var_pop_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/application-link-oracle-request-var-pop-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_var_pop_fields")),")"),(0,l.kt)("h4",{id:"var_samp-application_link_oracle_request_var_samp_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/application-link-oracle-request-var-samp-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_var_samp_fields")),")"),(0,l.kt)("h4",{id:"variance-application_link_oracle_request_variance_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/application-link-oracle-request-variance-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_variance_fields")),")"))}s.isMDXComponent=!0}}]);