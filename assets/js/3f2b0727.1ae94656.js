"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[35883],{3905:(e,s,t)=>{t.d(s,{Zo:()=>c,kt:()=>_});var n=t(67294);function r(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function i(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?i(Object(t),!0).forEach((function(s){r(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function a(e,s){if(null==e)return{};var t,n,r=function(e,s){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],s.indexOf(t)>=0||(r[t]=e[t]);return r}(e,s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),u=function(e){var s=n.useContext(p),t=s;return e&&(t="function"==typeof e?e(s):o(o({},s),e)),t},c=function(e){var s=u(e.components);return n.createElement(p.Provider,{value:s},e.children)},l={inlineCode:"code",wrapper:function(e){var s=e.children;return n.createElement(n.Fragment,{},s)}},m=n.forwardRef((function(e,s){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(t),_=r,b=m["".concat(p,".").concat(_)]||m[_]||l[_]||i;return t?n.createElement(b,o(o({ref:s},c),{},{components:t})):n.createElement(b,o({ref:s},c))}));function _(e,s){var t=arguments,r=s&&s.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var a={};for(var p in s)hasOwnProperty.call(s,p)&&(a[p]=s[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78436:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=t(87462),r=(t(67294),t(3905));const i={id:"insert-subspace-user-permission-one",title:"insert_subspace_user_permission_one",hide_table_of_contents:!1},o=void 0,a={unversionedId:"graphql/mutations/insert-subspace-user-permission-one",id:"graphql/mutations/insert-subspace-user-permission-one",title:"insert_subspace_user_permission_one",description:'insert a single row into the table: "subspaceuserpermission"',source:"@site/docs/07-graphql/mutations/insert-subspace-user-permission-one.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-subspace-user-permission-one",permalink:"/next/graphql/mutations/insert-subspace-user-permission-one",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-subspace-user-permission-one.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"insert-subspace-user-permission-one",title:"insert_subspace_user_permission_one",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_subspace_user_group",permalink:"/next/graphql/mutations/insert-subspace-user-group"},next:{title:"insert_subspace_user_permission",permalink:"/next/graphql/mutations/insert-subspace-user-permission"}},p={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>object</code> (<code>subspace_user_permission_insert_input!</code>)",id:"object-subspace_user_permission_insert_input",level:4},{value:"<code>on_conflict</code> (<code>subspace_user_permission_on_conflict</code>)",id:"on_conflict-subspace_user_permission_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_user_permission</code>",id:"subspace_user_permission",level:4}],c={toc:u};function l(e){let{components:s,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'insert a single row into the table: "subspace_user_permission"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_subspace_user_permission_one(\n  object: subspace_user_permission_insert_input!\n  on_conflict: subspace_user_permission_on_conflict\n): subspace_user_permission\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"object-subspace_user_permission_insert_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"object"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-insert-input"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_insert_input!")),")"),(0,r.kt)("p",null,"the row to be inserted"),(0,r.kt)("h4",{id:"on_conflict-subspace_user_permission_on_conflict"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-on-conflict"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_on_conflict")),")"),(0,r.kt)("p",null,"on conflict condition"),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"subspace_user_permission"},(0,r.kt)("a",{parentName:"h4",href:"../objects/subspace-user-permission"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_user_permission"))),(0,r.kt)("p",null,'columns and relationships of "subspace_user_permission"'))}l.isMDXComponent=!0}}]);