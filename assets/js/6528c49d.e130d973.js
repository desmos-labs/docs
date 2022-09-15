"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[56282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(n),b=r,m=d["".concat(u,".").concat(b)]||d[b]||l[b]||s;return n?a.createElement(m,p(p({ref:t},c),{},{components:n})):a.createElement(m,p({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,p=new Array(s);p[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var i=2;i<s;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const s={id:"update-subspace",title:"update_subspace",hide_table_of_contents:!1},p=void 0,o={unversionedId:"graphql/mutations/update-subspace",id:"graphql/mutations/update-subspace",title:"update_subspace",description:'update data of the table: "subspace"',source:"@site/docs/07-graphql/mutations/update-subspace.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-subspace",permalink:"/next/graphql/mutations/update-subspace",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-subspace.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"update-subspace",title:"update_subspace",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_subspace_user_permission",permalink:"/next/graphql/mutations/update-subspace-user-permission"},next:{title:"update_user_block",permalink:"/next/graphql/mutations/update-user-block"}},u={},i=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>subspace_inc_input</code>)",id:"_inc-subspace_inc_input",level:4},{value:"<code>_set</code> (<code>subspace_set_input</code>)",id:"_set-subspace_set_input",level:4},{value:"<code>where</code> (<code>subspace_bool_exp!</code>)",id:"where-subspace_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_mutation_response</code>",id:"subspace_mutation_response",level:4}],c={toc:i};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'update data of the table: "subspace"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"update_subspace(\n  _inc: subspace_inc_input\n  _set: subspace_set_input\n  where: subspace_bool_exp!\n): subspace_mutation_response\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"_inc-subspace_inc_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/subspace-inc-input"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_inc_input")),")"),(0,r.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,r.kt)("h4",{id:"_set-subspace_set_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/subspace-set-input"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_set_input")),")"),(0,r.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,r.kt)("h4",{id:"where-subspace_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/subspace-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_bool_exp!")),")"),(0,r.kt)("p",null,"filter the rows which have to be updated"),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"subspace_mutation_response"},(0,r.kt)("a",{parentName:"h4",href:"../objects/subspace-mutation-response"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_mutation_response"))),(0,r.kt)("p",null,'response of any mutation on the table "subspace"'))}l.isMDXComponent=!0}}]);