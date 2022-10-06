"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[45679],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),_=i(r),m=n,f=_["".concat(c,".").concat(m)]||_[m]||u[m]||s;return r?a.createElement(f,o(o({ref:t},l),{},{components:r})):a.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=_;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var i=2;i<s;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}_.displayName="MDXCreateElement"},99513:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const s={id:"insert-subspace-free-text-params-one",title:"insert_subspace_free_text_params_one",hide_table_of_contents:!1},o=void 0,p={unversionedId:"graphql/mutations/insert-subspace-free-text-params-one",id:"graphql/mutations/insert-subspace-free-text-params-one",title:"insert_subspace_free_text_params_one",description:'insert a single row into the table: "subspacefreetext_params"',source:"@site/docs/07-graphql/mutations/insert-subspace-free-text-params-one.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-subspace-free-text-params-one",permalink:"/next/graphql/mutations/insert-subspace-free-text-params-one",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-subspace-free-text-params-one.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"insert-subspace-free-text-params-one",title:"insert_subspace_free_text_params_one",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_reports_params",permalink:"/next/graphql/mutations/insert-reports-params"},next:{title:"insert_subspace_free_text_params",permalink:"/next/graphql/mutations/insert-subspace-free-text-params"}},c={},i=[{value:"Arguments",id:"arguments",level:3},{value:"<code>object</code> (<code>subspace_free_text_params_insert_input!</code>)",id:"object-subspace_free_text_params_insert_input",level:4},{value:"<code>on_conflict</code> (<code>subspace_free_text_params_on_conflict</code>)",id:"on_conflict-subspace_free_text_params_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_free_text_params</code>",id:"subspace_free_text_params",level:4}],l={toc:i};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'insert a single row into the table: "subspace_free_text_params"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_subspace_free_text_params_one(\n  object: subspace_free_text_params_insert_input!\n  on_conflict: subspace_free_text_params_on_conflict\n): subspace_free_text_params\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"object-subspace_free_text_params_insert_input"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"object"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-insert-input"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_insert_input!")),")"),(0,n.kt)("p",null,"the row to be inserted"),(0,n.kt)("h4",{id:"on_conflict-subspace_free_text_params_on_conflict"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-on-conflict"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_on_conflict")),")"),(0,n.kt)("p",null,"on conflict condition"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"subspace_free_text_params"},(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace-free-text-params"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params"))),(0,n.kt)("p",null,'columns and relationships of "subspace_free_text_params"'))}u.isMDXComponent=!0}}]);