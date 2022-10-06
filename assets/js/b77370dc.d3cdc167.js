"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[15091],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>l});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=a.createContext({}),o=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},_={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=o(r),l=s,m=d["".concat(c,".").concat(l)]||d[l]||_[l]||n;return r?a.createElement(m,p(p({ref:t},u),{},{components:r})):a.createElement(m,p({ref:t},u))}));function l(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,p=new Array(n);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,p[1]=i;for(var o=2;o<n;o++)p[o]=r[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40253:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>_,frontMatter:()=>n,metadata:()=>i,toc:()=>o});var a=r(87462),s=(r(67294),r(3905));const n={id:"update-subspace-registered-reaction-params-by-pk",title:"update_subspace_registered_reaction_params_by_pk",hide_table_of_contents:!1},p=void 0,i={unversionedId:"graphql/mutations/update-subspace-registered-reaction-params-by-pk",id:"graphql/mutations/update-subspace-registered-reaction-params-by-pk",title:"update_subspace_registered_reaction_params_by_pk",description:'update single row of the table: "subspaceregisteredreaction_params"',source:"@site/docs/07-graphql/mutations/update-subspace-registered-reaction-params-by-pk.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-subspace-registered-reaction-params-by-pk",permalink:"/next/graphql/mutations/update-subspace-registered-reaction-params-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-subspace-registered-reaction-params-by-pk.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"update-subspace-registered-reaction-params-by-pk",title:"update_subspace_registered_reaction_params_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_subspace_registered_reaction_by_pk",permalink:"/next/graphql/mutations/update-subspace-registered-reaction-by-pk"},next:{title:"update_subspace_registered_reaction_params",permalink:"/next/graphql/mutations/update-subspace-registered-reaction-params"}},c={},o=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>subspace_registered_reaction_params_inc_input</code>)",id:"_inc-subspace_registered_reaction_params_inc_input",level:4},{value:"<code>_set</code> (<code>subspace_registered_reaction_params_set_input</code>)",id:"_set-subspace_registered_reaction_params_set_input",level:4},{value:"<code>pk_columns</code> (<code>subspace_registered_reaction_params_pk_columns_input!</code>)",id:"pk_columns-subspace_registered_reaction_params_pk_columns_input",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_registered_reaction_params</code>",id:"subspace_registered_reaction_params",level:4}],u={toc:o};function _(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'update single row of the table: "subspace_registered_reaction_params"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"update_subspace_registered_reaction_params_by_pk(\n  _inc: subspace_registered_reaction_params_inc_input\n  _set: subspace_registered_reaction_params_set_input\n  pk_columns: subspace_registered_reaction_params_pk_columns_input!\n): subspace_registered_reaction_params\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"_inc-subspace_registered_reaction_params_inc_input"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-params-inc-input"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_params_inc_input")),")"),(0,s.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,s.kt)("h4",{id:"_set-subspace_registered_reaction_params_set_input"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-params-set-input"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_params_set_input")),")"),(0,s.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,s.kt)("h4",{id:"pk_columns-subspace_registered_reaction_params_pk_columns_input"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"pk_columns"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-params-pk-columns-input"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_params_pk_columns_input!")),")"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"subspace_registered_reaction_params"},(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-registered-reaction-params"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_params"))),(0,s.kt)("p",null,'columns and relationships of "subspace_registered_reaction_params"'))}_.isMDXComponent=!0}}]);