"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[34819],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),_=i(r),b=o,d=_["".concat(c,".").concat(b)]||_[b]||l[b]||s;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=_;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var i=2;i<s;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}_.displayName="MDXCreateElement"},82686:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const s={id:"insert-subspace-report-reason",title:"insert_subspace_report_reason",hide_table_of_contents:!1},a=void 0,p={unversionedId:"graphql/mutations/insert-subspace-report-reason",id:"graphql/mutations/insert-subspace-report-reason",title:"insert_subspace_report_reason",description:'insert data into the table: "subspacereportreason"',source:"@site/docs/07-graphql/mutations/insert-subspace-report-reason.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-subspace-report-reason",permalink:"/next/graphql/mutations/insert-subspace-report-reason",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-subspace-report-reason.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"insert-subspace-report-reason",title:"insert_subspace_report_reason",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_subspace_report_reason_one",permalink:"/next/graphql/mutations/insert-subspace-report-reason-one"},next:{title:"insert_subspace_section_one",permalink:"/next/graphql/mutations/insert-subspace-section-one"}},c={},i=[{value:"Arguments",id:"arguments",level:3},{value:"<code>objects</code> (<code>[subspace_report_reason_insert_input!]!</code>)",id:"objects-subspace_report_reason_insert_input",level:4},{value:"<code>on_conflict</code> (<code>subspace_report_reason_on_conflict</code>)",id:"on_conflict-subspace_report_reason_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_report_reason_mutation_response</code>",id:"subspace_report_reason_mutation_response",level:4}],u={toc:i};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'insert data into the table: "subspace_report_reason"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_subspace_report_reason(\n  objects: [subspace_report_reason_insert_input!]!\n  on_conflict: subspace_report_reason_on_conflict\n): subspace_report_reason_mutation_response\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"objects-subspace_report_reason_insert_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"objects"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-insert-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_report_reason_insert_input!]!")),")"),(0,o.kt)("p",null,"the rows to be inserted"),(0,o.kt)("h4",{id:"on_conflict-subspace_report_reason_on_conflict"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-on-conflict"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_on_conflict")),")"),(0,o.kt)("p",null,"on conflict condition"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"subspace_report_reason_mutation_response"},(0,o.kt)("a",{parentName:"h4",href:"../objects/subspace-report-reason-mutation-response"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_mutation_response"))),(0,o.kt)("p",null,'response of any mutation on the table "subspace_report_reason"'))}l.isMDXComponent=!0}}]);