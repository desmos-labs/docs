"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[43196],{3905:(e,t,o)=>{o.d(t,{Zo:()=>_,kt:()=>u});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},_=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,_=l(e,["components","mdxType","originalType","parentName"]),d=c(o),u=a,m=d["".concat(p,".").concat(u)]||d[u]||s[u]||i;return o?n.createElement(m,r(r({ref:t},_),{},{components:o})):n.createElement(m,r({ref:t},_))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},64258:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=o(87462),a=(o(67294),o(3905));const i={id:"application-link-oracle-request-bool-exp",title:"application_link_oracle_request_bool_exp",hide_table_of_contents:!1},r=void 0,l={unversionedId:"graphql/inputs/application-link-oracle-request-bool-exp",id:"version-4.2.0/graphql/inputs/application-link-oracle-request-bool-exp",title:"application_link_oracle_request_bool_exp",description:"Boolean expression to filter rows from the table \"applicationlinkoracle_request\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/application-link-oracle-request-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/application-link-oracle-request-bool-exp",permalink:"/graphql/inputs/application-link-oracle-request-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/application-link-oracle-request-bool-exp.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"application-link-oracle-request-bool-exp",title:"application_link_oracle_request_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link_oracle_request_avg_order_by",permalink:"/graphql/inputs/application-link-oracle-request-avg-order-by"},next:{title:"application_link_oracle_request_max_order_by",permalink:"/graphql/inputs/application-link-oracle-request-max-order-by"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[application_link_oracle_request_bool_exp!]</code>)",id:"_and-application_link_oracle_request_bool_exp",level:4},{value:"<code>_not</code> (<code>application_link_oracle_request_bool_exp</code>)",id:"_not-application_link_oracle_request_bool_exp",level:4},{value:"<code>_or</code> (<code>[application_link_oracle_request_bool_exp!]</code>)",id:"_or-application_link_oracle_request_bool_exp",level:4},{value:"<code>application_link</code> (<code>application_link_bool_exp</code>)",id:"application_link-application_link_bool_exp",level:4},{value:"<code>call_data</code> (<code>jsonb_comparison_exp</code>)",id:"call_data-jsonb_comparison_exp",level:4},{value:"<code>client_id</code> (<code>String_comparison_exp</code>)",id:"client_id-string_comparison_exp",level:4},{value:"<code>request_id</code> (<code>bigint_comparison_exp</code>)",id:"request_id-bigint_comparison_exp",level:4},{value:"<code>script_id</code> (<code>bigint_comparison_exp</code>)",id:"script_id-bigint_comparison_exp",level:4}],_={toc:c};function s(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},_,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Boolean expression to filter rows from the table \"application_link_oracle_request\". All fields are combined with a logical 'AND'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input application_link_oracle_request_bool_exp {\n  _and: [application_link_oracle_request_bool_exp!]\n  _not: application_link_oracle_request_bool_exp\n  _or: [application_link_oracle_request_bool_exp!]\n  application_link: application_link_bool_exp\n  call_data: jsonb_comparison_exp\n  client_id: String_comparison_exp\n  request_id: bigint_comparison_exp\n  script_id: bigint_comparison_exp\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"_and-application_link_oracle_request_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[application_link_oracle_request_bool_exp!]")),")"),(0,a.kt)("h4",{id:"_not-application_link_oracle_request_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_bool_exp")),")"),(0,a.kt)("h4",{id:"_or-application_link_oracle_request_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[application_link_oracle_request_bool_exp!]")),")"),(0,a.kt)("h4",{id:"application_link-application_link_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_bool_exp")),")"),(0,a.kt)("h4",{id:"call_data-jsonb_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"call_data"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/jsonb-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"jsonb_comparison_exp")),")"),(0,a.kt)("h4",{id:"client_id-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"client_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"request_id-bigint_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"request_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,a.kt)("h4",{id:"script_id-bigint_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"script_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"))}s.isMDXComponent=!0}}]);