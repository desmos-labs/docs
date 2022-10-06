"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[71244],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),_=p(n),d=a,f=_["".concat(c,".").concat(d)]||_[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=_;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},58918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"application-link-oracle-request-on-conflict",title:"application_link_oracle_request_on_conflict",hide_table_of_contents:!1},i=void 0,l={unversionedId:"graphql/inputs/application-link-oracle-request-on-conflict",id:"graphql/inputs/application-link-oracle-request-on-conflict",title:"application_link_oracle_request_on_conflict",description:'on conflict condition type for table "applicationlinkoracle_request"',source:"@site/docs/07-graphql/inputs/application-link-oracle-request-on-conflict.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/application-link-oracle-request-on-conflict",permalink:"/next/graphql/inputs/application-link-oracle-request-on-conflict",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/application-link-oracle-request-on-conflict.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"application-link-oracle-request-on-conflict",title:"application_link_oracle_request_on_conflict",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link_oracle_request_min_order_by",permalink:"/next/graphql/inputs/application-link-oracle-request-min-order-by"},next:{title:"application_link_oracle_request_order_by",permalink:"/next/graphql/inputs/application-link-oracle-request-order-by"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>constraint</code> (<code>application_link_oracle_request_constraint!</code>)",id:"constraint-application_link_oracle_request_constraint",level:4},{value:"<code>update_columns</code> (<code>[application_link_oracle_request_update_column!]!</code>)",id:"update_columns-application_link_oracle_request_update_column",level:4},{value:"<code>where</code> (<code>application_link_oracle_request_bool_exp</code>)",id:"where-application_link_oracle_request_bool_exp",level:4}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'on conflict condition type for table "application_link_oracle_request"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input application_link_oracle_request_on_conflict {\n  constraint: application_link_oracle_request_constraint!\n  update_columns: [application_link_oracle_request_update_column!]!\n  where: application_link_oracle_request_bool_exp\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"constraint-application_link_oracle_request_constraint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"constraint"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/application-link-oracle-request-constraint"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_constraint!")),")"),(0,a.kt)("h4",{id:"update_columns-application_link_oracle_request_update_column"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"update_columns"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/application-link-oracle-request-update-column"},(0,a.kt)("inlineCode",{parentName:"a"},"[application_link_oracle_request_update_column!]!")),")"),(0,a.kt)("h4",{id:"where-application_link_oracle_request_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_bool_exp")),")"))}u.isMDXComponent=!0}}]);