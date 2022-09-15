"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[48460],{3905:(e,n,t)=>{t.d(n,{Zo:()=>_,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},_=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,_=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,u=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return t?i.createElement(u,r(r({ref:n},_),{},{components:t})):i.createElement(u,r({ref:n},_))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},78932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var i=t(87462),a=(t(67294),t(3905));const o={id:"application-link-oracle-request-bool-exp",title:"application_link_oracle_request_bool_exp",hide_table_of_contents:!1},r=void 0,p={unversionedId:"graphql/inputs/application-link-oracle-request-bool-exp",id:"graphql/inputs/application-link-oracle-request-bool-exp",title:"application_link_oracle_request_bool_exp",description:"Boolean expression to filter rows from the table \"applicationlinkoracle_request\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/application-link-oracle-request-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/application-link-oracle-request-bool-exp",permalink:"/next/graphql/inputs/application-link-oracle-request-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/application-link-oracle-request-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"application-link-oracle-request-bool-exp",title:"application_link_oracle_request_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link_oracle_request_avg_order_by",permalink:"/next/graphql/inputs/application-link-oracle-request-avg-order-by"},next:{title:"application_link_oracle_request_delete_at_path_input",permalink:"/next/graphql/inputs/application-link-oracle-request-delete-at-path-input"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[application_link_oracle_request_bool_exp!]</code>)",id:"_and-application_link_oracle_request_bool_exp",level:4},{value:"<code>_not</code> (<code>application_link_oracle_request_bool_exp</code>)",id:"_not-application_link_oracle_request_bool_exp",level:4},{value:"<code>_or</code> (<code>[application_link_oracle_request_bool_exp!]</code>)",id:"_or-application_link_oracle_request_bool_exp",level:4},{value:"<code>application_link</code> (<code>application_link_bool_exp</code>)",id:"application_link-application_link_bool_exp",level:4},{value:"<code>application_link_id</code> (<code>bigint_comparison_exp</code>)",id:"application_link_id-bigint_comparison_exp",level:4},{value:"<code>call_data</code> (<code>jsonb_comparison_exp</code>)",id:"call_data-jsonb_comparison_exp",level:4},{value:"<code>client_id</code> (<code>String_comparison_exp</code>)",id:"client_id-string_comparison_exp",level:4},{value:"<code>height</code> (<code>bigint_comparison_exp</code>)",id:"height-bigint_comparison_exp",level:4},{value:"<code>id</code> (<code>Int_comparison_exp</code>)",id:"id-int_comparison_exp",level:4},{value:"<code>request_id</code> (<code>String_comparison_exp</code>)",id:"request_id-string_comparison_exp",level:4},{value:"<code>script_id</code> (<code>String_comparison_exp</code>)",id:"script_id-string_comparison_exp",level:4}],_={toc:c};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Boolean expression to filter rows from the table \"application_link_oracle_request\". All fields are combined with a logical 'AND'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input application_link_oracle_request_bool_exp {\n  _and: [application_link_oracle_request_bool_exp!]\n  _not: application_link_oracle_request_bool_exp\n  _or: [application_link_oracle_request_bool_exp!]\n  application_link: application_link_bool_exp\n  application_link_id: bigint_comparison_exp\n  call_data: jsonb_comparison_exp\n  client_id: String_comparison_exp\n  height: bigint_comparison_exp\n  id: Int_comparison_exp\n  request_id: String_comparison_exp\n  script_id: String_comparison_exp\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"_and-application_link_oracle_request_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[application_link_oracle_request_bool_exp!]")),")"),(0,a.kt)("h4",{id:"_not-application_link_oracle_request_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_bool_exp")),")"),(0,a.kt)("h4",{id:"_or-application_link_oracle_request_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[application_link_oracle_request_bool_exp!]")),")"),(0,a.kt)("h4",{id:"application_link-application_link_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_bool_exp")),")"),(0,a.kt)("h4",{id:"application_link_id-bigint_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,a.kt)("h4",{id:"call_data-jsonb_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"call_data"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/jsonb-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"jsonb_comparison_exp")),")"),(0,a.kt)("h4",{id:"client_id-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"client_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"height-bigint_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,a.kt)("h4",{id:"id-int_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/int-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"Int_comparison_exp")),")"),(0,a.kt)("h4",{id:"request_id-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"request_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"script_id-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"script_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}s.isMDXComponent=!0}}]);