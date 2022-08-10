"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[34046],{3905:(e,n,a)=>{a.d(n,{Zo:()=>_,kt:()=>m});var o=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=o.createContext({}),c=function(e){var n=o.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},_=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,_=r(e,["components","mdxType","originalType","parentName"]),d=c(a),m=t,u=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return a?o.createElement(u,p(p({ref:n},_),{},{components:a})):o.createElement(u,p({ref:n},_))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,p=new Array(i);p[0]=d;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:t,p[1]=r;for(var c=2;c<i;c++)p[c]=a[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},24577:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=a(87462),t=(a(67294),a(3905));const i={id:"application-link-bool-exp",title:"application_link_bool_exp",hide_table_of_contents:!1},p=void 0,r={unversionedId:"graphql/inputs/application-link-bool-exp",id:"graphql/inputs/application-link-bool-exp",title:"application_link_bool_exp",description:"Boolean expression to filter rows from the table \"application_link\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/application-link-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/application-link-bool-exp",permalink:"/next/graphql/inputs/application-link-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/application-link-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"application-link-bool-exp",title:"application_link_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link_aggregate_order_by",permalink:"/next/graphql/inputs/application-link-aggregate-order-by"},next:{title:"application_link_max_order_by",permalink:"/next/graphql/inputs/application-link-max-order-by"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[application_link_bool_exp!]</code>)",id:"_and-application_link_bool_exp",level:4},{value:"<code>_not</code> (<code>application_link_bool_exp</code>)",id:"_not-application_link_bool_exp",level:4},{value:"<code>_or</code> (<code>[application_link_bool_exp!]</code>)",id:"_or-application_link_bool_exp",level:4},{value:"<code>application</code> (<code>String_comparison_exp</code>)",id:"application-string_comparison_exp",level:4},{value:"<code>application_link_oracle_requests</code> (<code>application_link_oracle_request_bool_exp</code>)",id:"application_link_oracle_requests-application_link_oracle_request_bool_exp",level:4},{value:"<code>creation_time</code> (<code>timestamp_comparison_exp</code>)",id:"creation_time-timestamp_comparison_exp",level:4},{value:"<code>profile</code> (<code>profile_bool_exp</code>)",id:"profile-profile_bool_exp",level:4},{value:"<code>result</code> (<code>jsonb_comparison_exp</code>)",id:"result-jsonb_comparison_exp",level:4},{value:"<code>state</code> (<code>String_comparison_exp</code>)",id:"state-string_comparison_exp",level:4},{value:"<code>user_address</code> (<code>String_comparison_exp</code>)",id:"user_address-string_comparison_exp",level:4},{value:"<code>username</code> (<code>String_comparison_exp</code>)",id:"username-string_comparison_exp",level:4}],_={toc:c};function s(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,o.Z)({},_,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Boolean expression to filter rows from the table \"application_link\". All fields are combined with a logical 'AND'."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-graphql"},"input application_link_bool_exp {\n  _and: [application_link_bool_exp!]\n  _not: application_link_bool_exp\n  _or: [application_link_bool_exp!]\n  application: String_comparison_exp\n  application_link_oracle_requests: application_link_oracle_request_bool_exp\n  creation_time: timestamp_comparison_exp\n  profile: profile_bool_exp\n  result: jsonb_comparison_exp\n  state: String_comparison_exp\n  user_address: String_comparison_exp\n  username: String_comparison_exp\n}\n")),(0,t.kt)("h3",{id:"fields"},"Fields"),(0,t.kt)("h4",{id:"_and-application_link_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/application-link-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"[application_link_bool_exp!]")),")"),(0,t.kt)("h4",{id:"_not-application_link_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/application-link-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"application_link_bool_exp")),")"),(0,t.kt)("h4",{id:"_or-application_link_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/application-link-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"[application_link_bool_exp!]")),")"),(0,t.kt)("h4",{id:"application-string_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"application"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,t.kt)("h4",{id:"application_link_oracle_requests-application_link_oracle_request_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"application_link_oracle_requests"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_bool_exp")),")"),(0,t.kt)("h4",{id:"creation_time-timestamp_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/timestamp-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"timestamp_comparison_exp")),")"),(0,t.kt)("h4",{id:"profile-profile_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"profile"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"profile_bool_exp")),")"),(0,t.kt)("h4",{id:"result-jsonb_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"result"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/jsonb-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"jsonb_comparison_exp")),")"),(0,t.kt)("h4",{id:"state-string_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"state"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,t.kt)("h4",{id:"user_address-string_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,t.kt)("h4",{id:"username-string_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"username"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}s.isMDXComponent=!0}}]);