"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[76921],{3905:function(e,n,o){o.d(n,{Zo:function(){return _},kt:function(){return m}});var t=o(67294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function p(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},_=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,_=p(e,["components","mdxType","originalType","parentName"]),d=c(o),m=a,u=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return o?t.createElement(u,r(r({ref:n},_),{},{components:o})):t.createElement(u,r({ref:n},_))}));function m(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var c=2;c<i;c++)r[c]=o[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},57170:function(e,n,o){o.r(n),o.d(n,{assets:function(){return _},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var t=o(87462),a=o(63366),i=(o(67294),o(3905)),r=["components"],p={id:"application-link-bool-exp",title:"application_link_bool_exp",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql/inputs/application-link-bool-exp",id:"version-4.1.0/graphql/inputs/application-link-bool-exp",title:"application_link_bool_exp",description:"Boolean expression to filter rows from the table \"application_link\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/application-link-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/application-link-bool-exp",permalink:"/graphql/inputs/application-link-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/application-link-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"application-link-bool-exp",title:"application_link_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link_aggregate_order_by",permalink:"/graphql/inputs/application-link-aggregate-order-by"},next:{title:"application_link_max_order_by",permalink:"/graphql/inputs/application-link-max-order-by"}},_={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[application_link_bool_exp!]</code>)",id:"_and-application_link_bool_exp",level:4},{value:"<code>_not</code> (<code>application_link_bool_exp</code>)",id:"_not-application_link_bool_exp",level:4},{value:"<code>_or</code> (<code>[application_link_bool_exp!]</code>)",id:"_or-application_link_bool_exp",level:4},{value:"<code>application</code> (<code>String_comparison_exp</code>)",id:"application-string_comparison_exp",level:4},{value:"<code>application_link_oracle_requests</code> (<code>application_link_oracle_request_bool_exp</code>)",id:"application_link_oracle_requests-application_link_oracle_request_bool_exp",level:4},{value:"<code>creation_time</code> (<code>timestamp_comparison_exp</code>)",id:"creation_time-timestamp_comparison_exp",level:4},{value:"<code>profile</code> (<code>profile_bool_exp</code>)",id:"profile-profile_bool_exp",level:4},{value:"<code>result</code> (<code>jsonb_comparison_exp</code>)",id:"result-jsonb_comparison_exp",level:4},{value:"<code>state</code> (<code>String_comparison_exp</code>)",id:"state-string_comparison_exp",level:4},{value:"<code>user_address</code> (<code>String_comparison_exp</code>)",id:"user_address-string_comparison_exp",level:4},{value:"<code>username</code> (<code>String_comparison_exp</code>)",id:"username-string_comparison_exp",level:4}],d={toc:s};function m(e){var n=e.components,o=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Boolean expression to filter rows from the table \"application_link\". All fields are combined with a logical 'AND'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input application_link_bool_exp {\n  _and: [application_link_bool_exp!]\n  _not: application_link_bool_exp\n  _or: [application_link_bool_exp!]\n  application: String_comparison_exp\n  application_link_oracle_requests: application_link_oracle_request_bool_exp\n  creation_time: timestamp_comparison_exp\n  profile: profile_bool_exp\n  result: jsonb_comparison_exp\n  state: String_comparison_exp\n  user_address: String_comparison_exp\n  username: String_comparison_exp\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"_and-application_link_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"[application_link_bool_exp!]")),")"),(0,i.kt)("h4",{id:"_not-application_link_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_bool_exp")),")"),(0,i.kt)("h4",{id:"_or-application_link_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"[application_link_bool_exp!]")),")"),(0,i.kt)("h4",{id:"application-string_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"application"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,i.kt)("h4",{id:"application_link_oracle_requests-application_link_oracle_request_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_oracle_requests"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_bool_exp")),")"),(0,i.kt)("h4",{id:"creation_time-timestamp_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/timestamp-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"timestamp_comparison_exp")),")"),(0,i.kt)("h4",{id:"profile-profile_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"profile"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"profile_bool_exp")),")"),(0,i.kt)("h4",{id:"result-jsonb_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"result"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/jsonb-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"jsonb_comparison_exp")),")"),(0,i.kt)("h4",{id:"state-string_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"state"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,i.kt)("h4",{id:"user_address-string_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,i.kt)("h4",{id:"username-string_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"username"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}m.isMDXComponent=!0}}]);