"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[65754],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),_=p(r),d=n,m=_["".concat(c,".").concat(d)]||_[d]||l[d]||s;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=_;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}_.displayName="MDXCreateElement"},56744:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={id:"insert-subspace-registered-reaction-params",title:"insert_subspace_registered_reaction_params",hide_table_of_contents:!1},i=void 0,o={unversionedId:"graphql/mutations/insert-subspace-registered-reaction-params",id:"graphql/mutations/insert-subspace-registered-reaction-params",title:"insert_subspace_registered_reaction_params",description:'insert data into the table: "subspaceregisteredreaction_params"',source:"@site/docs/07-graphql/mutations/insert-subspace-registered-reaction-params.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-subspace-registered-reaction-params",permalink:"/next/graphql/mutations/insert-subspace-registered-reaction-params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-subspace-registered-reaction-params.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"insert-subspace-registered-reaction-params",title:"insert_subspace_registered_reaction_params",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_subspace_registered_reaction_params_one",permalink:"/next/graphql/mutations/insert-subspace-registered-reaction-params-one"},next:{title:"insert_subspace_registered_reaction",permalink:"/next/graphql/mutations/insert-subspace-registered-reaction"}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>objects</code> (<code>[subspace_registered_reaction_params_insert_input!]!</code>)",id:"objects-subspace_registered_reaction_params_insert_input",level:4},{value:"<code>on_conflict</code> (<code>subspace_registered_reaction_params_on_conflict</code>)",id:"on_conflict-subspace_registered_reaction_params_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_registered_reaction_params_mutation_response</code>",id:"subspace_registered_reaction_params_mutation_response",level:4}],u={toc:p};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'insert data into the table: "subspace_registered_reaction_params"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_subspace_registered_reaction_params(\n  objects: [subspace_registered_reaction_params_insert_input!]!\n  on_conflict: subspace_registered_reaction_params_on_conflict\n): subspace_registered_reaction_params_mutation_response\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"objects-subspace_registered_reaction_params_insert_input"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"objects"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-params-insert-input"},(0,n.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_params_insert_input!]!")),")"),(0,n.kt)("p",null,"the rows to be inserted"),(0,n.kt)("h4",{id:"on_conflict-subspace_registered_reaction_params_on_conflict"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-params-on-conflict"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_params_on_conflict")),")"),(0,n.kt)("p",null,"on conflict condition"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"subspace_registered_reaction_params_mutation_response"},(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace-registered-reaction-params-mutation-response"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_params_mutation_response"))),(0,n.kt)("p",null,'response of any mutation on the table "subspace_registered_reaction_params"'))}l.isMDXComponent=!0}}]);