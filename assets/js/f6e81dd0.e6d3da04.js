"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[58152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||s;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const s={id:"insert-post-reference",title:"insert_post_reference",hide_table_of_contents:!1},a=void 0,i={unversionedId:"graphql/mutations/insert-post-reference",id:"graphql/mutations/insert-post-reference",title:"insert_post_reference",description:'insert data into the table: "post_reference"',source:"@site/docs/07-graphql/mutations/insert-post-reference.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-post-reference",permalink:"/next/graphql/mutations/insert-post-reference",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-post-reference.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"insert-post-reference",title:"insert_post_reference",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_post_reference_one",permalink:"/next/graphql/mutations/insert-post-reference-one"},next:{title:"insert_post_tag_one",permalink:"/next/graphql/mutations/insert-post-tag-one"}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>objects</code> (<code>[post_reference_insert_input!]!</code>)",id:"objects-post_reference_insert_input",level:4},{value:"<code>on_conflict</code> (<code>post_reference_on_conflict</code>)",id:"on_conflict-post_reference_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_reference_mutation_response</code>",id:"post_reference_mutation_response",level:4}],l={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'insert data into the table: "post_reference"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_post_reference(\n  objects: [post_reference_insert_input!]!\n  on_conflict: post_reference_on_conflict\n): post_reference_mutation_response\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"objects-post_reference_insert_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"objects"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-reference-insert-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[post_reference_insert_input!]!")),")"),(0,o.kt)("p",null,"the rows to be inserted"),(0,o.kt)("h4",{id:"on_conflict-post_reference_on_conflict"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-reference-on-conflict"},(0,o.kt)("inlineCode",{parentName:"a"},"post_reference_on_conflict")),")"),(0,o.kt)("p",null,"on conflict condition"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"post_reference_mutation_response"},(0,o.kt)("a",{parentName:"h4",href:"../objects/post-reference-mutation-response"},(0,o.kt)("inlineCode",{parentName:"a"},"post_reference_mutation_response"))),(0,o.kt)("p",null,'response of any mutation on the table "post_reference"'))}f.isMDXComponent=!0}}]);