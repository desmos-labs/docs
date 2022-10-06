"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[76157],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var u=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);t&&(u=u.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,u)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,u,s=function(e,t){if(null==e)return{};var r,u,s={},n=Object.keys(e);for(u=0;u<n.length;u++)r=n[u],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(u=0;u<n.length;u++)r=n[u],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=u.createContext({}),c=function(e){var t=u.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=c(e.components);return u.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return u.createElement(u.Fragment,{},t)}},_=u.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,o=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),_=c(r),d=s,b=_["".concat(o,".").concat(d)]||_[d]||l[d]||n;return r?u.createElement(b,p(p({ref:t},i),{},{components:r})):u.createElement(b,p({ref:t},i))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,p=new Array(n);p[0]=_;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:s,p[1]=a;for(var c=2;c<n;c++)p[c]=r[c];return u.createElement.apply(null,p)}return u.createElement.apply(null,r)}_.displayName="MDXCreateElement"},83456:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>l,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var u=r(87462),s=(r(67294),r(3905));const n={id:"update-subspace-user-group-by-pk",title:"update_subspace_user_group_by_pk",hide_table_of_contents:!1},p=void 0,a={unversionedId:"graphql/mutations/update-subspace-user-group-by-pk",id:"graphql/mutations/update-subspace-user-group-by-pk",title:"update_subspace_user_group_by_pk",description:'update single row of the table: "subspaceusergroup"',source:"@site/docs/07-graphql/mutations/update-subspace-user-group-by-pk.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-subspace-user-group-by-pk",permalink:"/next/graphql/mutations/update-subspace-user-group-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-subspace-user-group-by-pk.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"update-subspace-user-group-by-pk",title:"update_subspace_user_group_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_subspace_section",permalink:"/next/graphql/mutations/update-subspace-section"},next:{title:"update_subspace_user_group_member",permalink:"/next/graphql/mutations/update-subspace-user-group-member"}},o={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>subspace_user_group_inc_input</code>)",id:"_inc-subspace_user_group_inc_input",level:4},{value:"<code>_set</code> (<code>subspace_user_group_set_input</code>)",id:"_set-subspace_user_group_set_input",level:4},{value:"<code>pk_columns</code> (<code>subspace_user_group_pk_columns_input!</code>)",id:"pk_columns-subspace_user_group_pk_columns_input",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_user_group</code>",id:"subspace_user_group",level:4}],i={toc:c};function l(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,u.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'update single row of the table: "subspace_user_group"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"update_subspace_user_group_by_pk(\n  _inc: subspace_user_group_inc_input\n  _set: subspace_user_group_set_input\n  pk_columns: subspace_user_group_pk_columns_input!\n): subspace_user_group\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"_inc-subspace_user_group_inc_input"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-inc-input"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_inc_input")),")"),(0,s.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,s.kt)("h4",{id:"_set-subspace_user_group_set_input"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-set-input"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_set_input")),")"),(0,s.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,s.kt)("h4",{id:"pk_columns-subspace_user_group_pk_columns_input"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"pk_columns"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-pk-columns-input"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_pk_columns_input!")),")"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"subspace_user_group"},(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group"))),(0,s.kt)("p",null,'columns and relationships of "subspace_user_group"'))}l.isMDXComponent=!0}}]);