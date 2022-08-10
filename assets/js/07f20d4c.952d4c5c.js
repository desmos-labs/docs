"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[53298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=s,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:s,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const o={id:"subspace-section",title:"subspace_section",hide_table_of_contents:!1},a=void 0,c={unversionedId:"graphql/subscriptions/subspace-section",id:"version-4.2.0/graphql/subscriptions/subspace-section",title:"subspace_section",description:'fetch data from the table: "subspace_section"',source:"@site/versioned_docs/version-4.2.0/07-graphql/subscriptions/subspace-section.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/subspace-section",permalink:"/graphql/subscriptions/subspace-section",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/subscriptions/subspace-section.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"subspace-section",title:"subspace_section",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_report_reason",permalink:"/graphql/subscriptions/subspace-report-reason"},next:{title:"subspace_user_group_aggregate",permalink:"/graphql/subscriptions/subspace-user-group-aggregate"}},i={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[subspace_section_select_column!]</code>)",id:"distinct_on-subspace_section_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[subspace_section_order_by!]</code>)",id:"order_by-subspace_section_order_by",level:4},{value:"<code>where</code> (<code>subspace_section_bool_exp</code>)",id:"where-subspace_section_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_section</code>",id:"subspace_section",level:4}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'fetch data from the table: "subspace_section"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_section(\n  distinct_on: [subspace_section_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_section_order_by!]\n  where: subspace_section_bool_exp\n): [subspace_section!]!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"distinct_on-subspace_section_select_column"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,s.kt)("a",{parentName:"h4",href:"../enums/subspace-section-select-column"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_section_select_column!]")),")"),(0,s.kt)("p",null,"distinct select on columns"),(0,s.kt)("h4",{id:"limit-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"limit the number of rows returned"),(0,s.kt)("h4",{id:"offset-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,s.kt)("h4",{id:"order_by-subspace_section_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_section_order_by!]")),")"),(0,s.kt)("p",null,"sort the rows by one or more columns"),(0,s.kt)("h4",{id:"where-subspace_section_bool_exp"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-bool-exp"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_section_bool_exp")),")"),(0,s.kt)("p",null,"filter the rows returned"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"subspace_section"},(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-section"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_section"))),(0,s.kt)("p",null,'columns and relationships of "subspace_section"'))}u.isMDXComponent=!0}}]);