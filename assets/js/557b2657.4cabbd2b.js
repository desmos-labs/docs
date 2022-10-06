"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[27737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(n),d=s,m=b["".concat(c,".").concat(d)]||b[d]||l[d]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},91034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const a={id:"insert-subspace",title:"insert_subspace",hide_table_of_contents:!1},o=void 0,i={unversionedId:"graphql/mutations/insert-subspace",id:"graphql/mutations/insert-subspace",title:"insert_subspace",description:'insert data into the table: "subspace"',source:"@site/docs/07-graphql/mutations/insert-subspace.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-subspace",permalink:"/next/graphql/mutations/insert-subspace",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-subspace.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"insert-subspace",title:"insert_subspace",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_subspace_user_permission",permalink:"/next/graphql/mutations/insert-subspace-user-permission"},next:{title:"insert_user_block_one",permalink:"/next/graphql/mutations/insert-user-block-one"}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>objects</code> (<code>[subspace_insert_input!]!</code>)",id:"objects-subspace_insert_input",level:4},{value:"<code>on_conflict</code> (<code>subspace_on_conflict</code>)",id:"on_conflict-subspace_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_mutation_response</code>",id:"subspace_mutation_response",level:4}],u={toc:p};function l(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'insert data into the table: "subspace"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_subspace(\n  objects: [subspace_insert_input!]!\n  on_conflict: subspace_on_conflict\n): subspace_mutation_response\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"objects-subspace_insert_input"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"objects"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-insert-input"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_insert_input!]!")),")"),(0,s.kt)("p",null,"the rows to be inserted"),(0,s.kt)("h4",{id:"on_conflict-subspace_on_conflict"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-on-conflict"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_on_conflict")),")"),(0,s.kt)("p",null,"on conflict condition"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"subspace_mutation_response"},(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-mutation-response"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_mutation_response"))),(0,s.kt)("p",null,'response of any mutation on the table "subspace"'))}l.isMDXComponent=!0}}]);