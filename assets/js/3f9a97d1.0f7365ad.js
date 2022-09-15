"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[32849],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,_=u["".concat(c,".").concat(d)]||u[d]||f[d]||i;return t?n.createElement(_,a(a({ref:r},l),{},{components:t})):n.createElement(_,a({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},38871:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const i={id:"post-reference-arr-rel-insert-input",title:"post_reference_arr_rel_insert_input",hide_table_of_contents:!1},a=void 0,p={unversionedId:"graphql/inputs/post-reference-arr-rel-insert-input",id:"graphql/inputs/post-reference-arr-rel-insert-input",title:"post_reference_arr_rel_insert_input",description:'input type for inserting array relation for remote table "post_reference"',source:"@site/docs/07-graphql/inputs/post-reference-arr-rel-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-reference-arr-rel-insert-input",permalink:"/next/graphql/inputs/post-reference-arr-rel-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-reference-arr-rel-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"post-reference-arr-rel-insert-input",title:"post_reference_arr_rel_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_reference_aggregate_order_by",permalink:"/next/graphql/inputs/post-reference-aggregate-order-by"},next:{title:"post_reference_avg_order_by",permalink:"/next/graphql/inputs/post-reference-avg-order-by"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>data</code> (<code>[post_reference_insert_input!]!</code>)",id:"data-post_reference_insert_input",level:4},{value:"<code>on_conflict</code> (<code>post_reference_on_conflict</code>)",id:"on_conflict-post_reference_on_conflict",level:4}],l={toc:s};function f(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'input type for inserting array relation for remote table "post_reference"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_reference_arr_rel_insert_input {\n  data: [post_reference_insert_input!]!\n  on_conflict: post_reference_on_conflict\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"data-post_reference_insert_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"data"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-reference-insert-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[post_reference_insert_input!]!")),")"),(0,o.kt)("h4",{id:"on_conflict-post_reference_on_conflict"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-reference-on-conflict"},(0,o.kt)("inlineCode",{parentName:"a"},"post_reference_on_conflict")),")"),(0,o.kt)("p",null,"on conflict condition"))}f.isMDXComponent=!0}}]);