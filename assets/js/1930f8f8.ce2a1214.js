"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[39278],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=i(t),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return t?n.createElement(f,p(p({ref:r},l),{},{components:t})):n.createElement(f,p({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var i=2;i<o;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},36640:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=t(87462),a=(t(67294),t(3905));const o={id:"reports-params-on-conflict",title:"reports_params_on_conflict",hide_table_of_contents:!1},p=void 0,s={unversionedId:"graphql/inputs/reports-params-on-conflict",id:"graphql/inputs/reports-params-on-conflict",title:"reports_params_on_conflict",description:'on conflict condition type for table "reports_params"',source:"@site/docs/07-graphql/inputs/reports-params-on-conflict.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/reports-params-on-conflict",permalink:"/next/graphql/inputs/reports-params-on-conflict",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/reports-params-on-conflict.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"reports-params-on-conflict",title:"reports_params_on_conflict",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"reports_params_insert_input",permalink:"/next/graphql/inputs/reports-params-insert-input"},next:{title:"reports_params_order_by",permalink:"/next/graphql/inputs/reports-params-order-by"}},c={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>constraint</code> (<code>reports_params_constraint!</code>)",id:"constraint-reports_params_constraint",level:4},{value:"<code>update_columns</code> (<code>[reports_params_update_column!]!</code>)",id:"update_columns-reports_params_update_column",level:4},{value:"<code>where</code> (<code>reports_params_bool_exp</code>)",id:"where-reports_params_bool_exp",level:4}],l={toc:i};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'on conflict condition type for table "reports_params"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input reports_params_on_conflict {\n  constraint: reports_params_constraint!\n  update_columns: [reports_params_update_column!]!\n  where: reports_params_bool_exp\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"constraint-reports_params_constraint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"constraint"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/reports-params-constraint"},(0,a.kt)("inlineCode",{parentName:"a"},"reports_params_constraint!")),")"),(0,a.kt)("h4",{id:"update_columns-reports_params_update_column"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"update_columns"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/reports-params-update-column"},(0,a.kt)("inlineCode",{parentName:"a"},"[reports_params_update_column!]!")),")"),(0,a.kt)("h4",{id:"where-reports_params_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/reports-params-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"reports_params_bool_exp")),")"))}m.isMDXComponent=!0}}]);