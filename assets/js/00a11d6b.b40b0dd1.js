"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[29757],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),s=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,_=u["".concat(o,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(_,p(p({ref:t},c),{},{components:n})):i.createElement(_,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var s=2;s<r;s++)p[s]=n[s];return i.createElement.apply(null,p)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={id:"application-link-insert-input",title:"application_link_insert_input",hide_table_of_contents:!1},p=void 0,l={unversionedId:"graphql/inputs/application-link-insert-input",id:"graphql/inputs/application-link-insert-input",title:"application_link_insert_input",description:'input type for inserting data into table "application_link"',source:"@site/docs/07-graphql/inputs/application-link-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/application-link-insert-input",permalink:"/next/graphql/inputs/application-link-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/application-link-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"application-link-insert-input",title:"application_link_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link_inc_input",permalink:"/next/graphql/inputs/application-link-inc-input"},next:{title:"application_link_max_order_by",permalink:"/next/graphql/inputs/application-link-max-order-by"}},o={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>application</code> (<code>String</code>)",id:"application-string",level:4},{value:"<code>application_link_oracle_requests</code> (<code>application_link_oracle_request_arr_rel_insert_input</code>)",id:"application_link_oracle_requests-application_link_oracle_request_arr_rel_insert_input",level:4},{value:"<code>creation_time</code> (<code>timestamp</code>)",id:"creation_time-timestamp",level:4},{value:"<code>expiration_time</code> (<code>timestamp</code>)",id:"expiration_time-timestamp",level:4},{value:"<code>height</code> (<code>bigint</code>)",id:"height-bigint",level:4},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>profile</code> (<code>profile_obj_rel_insert_input</code>)",id:"profile-profile_obj_rel_insert_input",level:4},{value:"<code>result</code> (<code>jsonb</code>)",id:"result-jsonb",level:4},{value:"<code>state</code> (<code>String</code>)",id:"state-string",level:4},{value:"<code>user_address</code> (<code>String</code>)",id:"user_address-string",level:4},{value:"<code>username</code> (<code>String</code>)",id:"username-string",level:4}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'input type for inserting data into table "application_link"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input application_link_insert_input {\n  application: String\n  application_link_oracle_requests: application_link_oracle_request_arr_rel_insert_input\n  creation_time: timestamp\n  expiration_time: timestamp\n  height: bigint\n  id: Int\n  profile: profile_obj_rel_insert_input\n  result: jsonb\n  state: String\n  user_address: String\n  username: String\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"application-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"application"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"application_link_oracle_requests-application_link_oracle_request_arr_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_oracle_requests"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-arr-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_arr_rel_insert_input")),")"),(0,a.kt)("h4",{id:"creation_time-timestamp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,a.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,a.kt)("h4",{id:"expiration_time-timestamp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"expiration_time"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,a.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,a.kt)("h4",{id:"height-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"profile-profile_obj_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"profile"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-obj-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_obj_rel_insert_input")),")"),(0,a.kt)("h4",{id:"result-jsonb"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"result"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,a.kt)("inlineCode",{parentName:"a"},"jsonb")),")"),(0,a.kt)("h4",{id:"state-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"state"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"user_address-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"username-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"username"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"))}d.isMDXComponent=!0}}]);