"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[92192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||s;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={id:"insert-subspace-one",title:"insert_subspace_one",hide_table_of_contents:!1},o=void 0,c={unversionedId:"graphql/mutations/insert-subspace-one",id:"graphql/mutations/insert-subspace-one",title:"insert_subspace_one",description:'insert a single row into the table: "subspace"',source:"@site/docs/07-graphql/mutations/insert-subspace-one.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-subspace-one",permalink:"/next/graphql/mutations/insert-subspace-one",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-subspace-one.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"insert-subspace-one",title:"insert_subspace_one",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_subspace_free_text_params",permalink:"/next/graphql/mutations/insert-subspace-free-text-params"},next:{title:"insert_subspace_registered_reaction_one",permalink:"/next/graphql/mutations/insert-subspace-registered-reaction-one"}},i={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>object</code> (<code>subspace_insert_input!</code>)",id:"object-subspace_insert_input",level:4},{value:"<code>on_conflict</code> (<code>subspace_on_conflict</code>)",id:"on_conflict-subspace_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace</code>",id:"subspace",level:4}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'insert a single row into the table: "subspace"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_subspace_one(\n  object: subspace_insert_input!\n  on_conflict: subspace_on_conflict\n): subspace\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"object-subspace_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"object"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_insert_input!")),")"),(0,a.kt)("p",null,"the row to be inserted"),(0,a.kt)("h4",{id:"on_conflict-subspace_on_conflict"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-on-conflict"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_on_conflict")),")"),(0,a.kt)("p",null,"on conflict condition"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"subspace"},(0,a.kt)("a",{parentName:"h4",href:"../objects/subspace"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace"))),(0,a.kt)("p",null,'columns and relationships of "subspace"'))}u.isMDXComponent=!0}}]);