"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[90752],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),_=c(r),d=a,b=_["".concat(u,".").concat(d)]||_[d]||l[d]||s;return r?n.createElement(b,p(p({ref:t},i),{},{components:r})):n.createElement(b,p({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,p=new Array(s);p[0]=_;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<s;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}_.displayName="MDXCreateElement"},29990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={id:"update-subspace-report-reason-by-pk",title:"update_subspace_report_reason_by_pk",hide_table_of_contents:!1},p=void 0,o={unversionedId:"graphql/mutations/update-subspace-report-reason-by-pk",id:"graphql/mutations/update-subspace-report-reason-by-pk",title:"update_subspace_report_reason_by_pk",description:'update single row of the table: "subspacereportreason"',source:"@site/docs/07-graphql/mutations/update-subspace-report-reason-by-pk.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-subspace-report-reason-by-pk",permalink:"/next/graphql/mutations/update-subspace-report-reason-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-subspace-report-reason-by-pk.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"update-subspace-report-reason-by-pk",title:"update_subspace_report_reason_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_subspace_registered_reaction",permalink:"/next/graphql/mutations/update-subspace-registered-reaction"},next:{title:"update_subspace_report_reason",permalink:"/next/graphql/mutations/update-subspace-report-reason"}},u={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>subspace_report_reason_inc_input</code>)",id:"_inc-subspace_report_reason_inc_input",level:4},{value:"<code>_set</code> (<code>subspace_report_reason_set_input</code>)",id:"_set-subspace_report_reason_set_input",level:4},{value:"<code>pk_columns</code> (<code>subspace_report_reason_pk_columns_input!</code>)",id:"pk_columns-subspace_report_reason_pk_columns_input",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_report_reason</code>",id:"subspace_report_reason",level:4}],i={toc:c};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'update single row of the table: "subspace_report_reason"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"update_subspace_report_reason_by_pk(\n  _inc: subspace_report_reason_inc_input\n  _set: subspace_report_reason_set_input\n  pk_columns: subspace_report_reason_pk_columns_input!\n): subspace_report_reason\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"_inc-subspace_report_reason_inc_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-inc-input"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_inc_input")),")"),(0,a.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,a.kt)("h4",{id:"_set-subspace_report_reason_set_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-set-input"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_set_input")),")"),(0,a.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,a.kt)("h4",{id:"pk_columns-subspace_report_reason_pk_columns_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"pk_columns"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-pk-columns-input"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_pk_columns_input!")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"subspace_report_reason"},(0,a.kt)("a",{parentName:"h4",href:"../objects/subspace-report-reason"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_report_reason"))),(0,a.kt)("p",null,'columns and relationships of "subspace_report_reason"'))}l.isMDXComponent=!0}}]);