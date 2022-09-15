"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[56623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),_=c(r),d=n,b=_["".concat(u,".").concat(d)]||_[d]||l[d]||o;return r?a.createElement(b,s(s({ref:t},i),{},{components:r})):a.createElement(b,s({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=_;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}_.displayName="MDXCreateElement"},44345:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={id:"update-subspace-report-reason",title:"update_subspace_report_reason",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/mutations/update-subspace-report-reason",id:"graphql/mutations/update-subspace-report-reason",title:"update_subspace_report_reason",description:'update data of the table: "subspacereportreason"',source:"@site/docs/07-graphql/mutations/update-subspace-report-reason.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-subspace-report-reason",permalink:"/next/graphql/mutations/update-subspace-report-reason",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-subspace-report-reason.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"update-subspace-report-reason",title:"update_subspace_report_reason",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_subspace_report_reason_by_pk",permalink:"/next/graphql/mutations/update-subspace-report-reason-by-pk"},next:{title:"update_subspace_section_by_pk",permalink:"/next/graphql/mutations/update-subspace-section-by-pk"}},u={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>subspace_report_reason_inc_input</code>)",id:"_inc-subspace_report_reason_inc_input",level:4},{value:"<code>_set</code> (<code>subspace_report_reason_set_input</code>)",id:"_set-subspace_report_reason_set_input",level:4},{value:"<code>where</code> (<code>subspace_report_reason_bool_exp!</code>)",id:"where-subspace_report_reason_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_report_reason_mutation_response</code>",id:"subspace_report_reason_mutation_response",level:4}],i={toc:c};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'update data of the table: "subspace_report_reason"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"update_subspace_report_reason(\n  _inc: subspace_report_reason_inc_input\n  _set: subspace_report_reason_set_input\n  where: subspace_report_reason_bool_exp!\n): subspace_report_reason_mutation_response\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"_inc-subspace_report_reason_inc_input"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-inc-input"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_inc_input")),")"),(0,n.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,n.kt)("h4",{id:"_set-subspace_report_reason_set_input"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-set-input"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_set_input")),")"),(0,n.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,n.kt)("h4",{id:"where-subspace_report_reason_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_bool_exp!")),")"),(0,n.kt)("p",null,"filter the rows which have to be updated"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"subspace_report_reason_mutation_response"},(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace-report-reason-mutation-response"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_mutation_response"))),(0,n.kt)("p",null,'response of any mutation on the table "subspace_report_reason"'))}l.isMDXComponent=!0}}]);