"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[64414],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>_});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),_=o,m=d["".concat(i,".").concat(_)]||d[_]||c[_]||a;return r?n.createElement(m,p(p({ref:t},u),{},{components:r})):n.createElement(m,p({ref:t},u))}));function _(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={id:"update-report-reason",title:"update_report_reason",hide_table_of_contents:!1},p=void 0,s={unversionedId:"graphql/mutations/update-report-reason",id:"graphql/mutations/update-report-reason",title:"update_report_reason",description:'update data of the table: "report_reason"',source:"@site/docs/07-graphql/mutations/update-report-reason.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-report-reason",permalink:"/next/graphql/mutations/update-report-reason",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-report-reason.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"update-report-reason",title:"update_report_reason",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_report_by_pk",permalink:"/next/graphql/mutations/update-report-by-pk"},next:{title:"update_report",permalink:"/next/graphql/mutations/update-report"}},i={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>report_reason_inc_input</code>)",id:"_inc-report_reason_inc_input",level:4},{value:"<code>_set</code> (<code>report_reason_set_input</code>)",id:"_set-report_reason_set_input",level:4},{value:"<code>where</code> (<code>report_reason_bool_exp!</code>)",id:"where-report_reason_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>report_reason_mutation_response</code>",id:"report_reason_mutation_response",level:4}],u={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'update data of the table: "report_reason"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"update_report_reason(\n  _inc: report_reason_inc_input\n  _set: report_reason_set_input\n  where: report_reason_bool_exp!\n): report_reason_mutation_response\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"_inc-report_reason_inc_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/report-reason-inc-input"},(0,o.kt)("inlineCode",{parentName:"a"},"report_reason_inc_input")),")"),(0,o.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,o.kt)("h4",{id:"_set-report_reason_set_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/report-reason-set-input"},(0,o.kt)("inlineCode",{parentName:"a"},"report_reason_set_input")),")"),(0,o.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,o.kt)("h4",{id:"where-report_reason_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/report-reason-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"report_reason_bool_exp!")),")"),(0,o.kt)("p",null,"filter the rows which have to be updated"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"report_reason_mutation_response"},(0,o.kt)("a",{parentName:"h4",href:"../objects/report-reason-mutation-response"},(0,o.kt)("inlineCode",{parentName:"a"},"report_reason_mutation_response"))),(0,o.kt)("p",null,'response of any mutation on the table "report_reason"'))}c.isMDXComponent=!0}}]);