"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[56437],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>_});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),_=a,m=d["".concat(p,".").concat(_)]||d[_]||u[_]||l;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function _(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},38630:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={id:"delete-application-link-oracle-request",title:"delete_application_link_oracle_request",hide_table_of_contents:!1},o=void 0,i={unversionedId:"graphql/mutations/delete-application-link-oracle-request",id:"graphql/mutations/delete-application-link-oracle-request",title:"delete_application_link_oracle_request",description:'delete data from the table: "applicationlinkoracle_request"',source:"@site/docs/07-graphql/mutations/delete-application-link-oracle-request.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/delete-application-link-oracle-request",permalink:"/next/graphql/mutations/delete-application-link-oracle-request",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/delete-application-link-oracle-request.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"delete-application-link-oracle-request",title:"delete_application_link_oracle_request",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"delete_application_link_oracle_request_by_pk",permalink:"/next/graphql/mutations/delete-application-link-oracle-request-by-pk"},next:{title:"delete_application_link",permalink:"/next/graphql/mutations/delete-application-link"}},p={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>where</code> (<code>application_link_oracle_request_bool_exp!</code>)",id:"where-application_link_oracle_request_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>application_link_oracle_request_mutation_response</code>",id:"application_link_oracle_request_mutation_response",level:4}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'delete data from the table: "application_link_oracle_request"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"delete_application_link_oracle_request(\n  where: application_link_oracle_request_bool_exp!\n): application_link_oracle_request_mutation_response\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"where-application_link_oracle_request_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_bool_exp!")),")"),(0,a.kt)("p",null,"filter the rows which have to be deleted"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"application_link_oracle_request_mutation_response"},(0,a.kt)("a",{parentName:"h4",href:"../objects/application-link-oracle-request-mutation-response"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_mutation_response"))),(0,a.kt)("p",null,'response of any mutation on the table "application_link_oracle_request"'))}u.isMDXComponent=!0}}]);