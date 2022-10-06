"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[93201],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>_});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=p(r),_=n,b=l["".concat(c,".").concat(_)]||l[_]||d[_]||s;return r?a.createElement(b,i(i({ref:t},u),{},{components:r})):a.createElement(b,i({ref:t},u))}));function _(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=l;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},1750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={id:"update-subspace-registered-reaction",title:"update_subspace_registered_reaction",hide_table_of_contents:!1},i=void 0,o={unversionedId:"graphql/mutations/update-subspace-registered-reaction",id:"graphql/mutations/update-subspace-registered-reaction",title:"update_subspace_registered_reaction",description:'update data of the table: "subspaceregisteredreaction"',source:"@site/docs/07-graphql/mutations/update-subspace-registered-reaction.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-subspace-registered-reaction",permalink:"/next/graphql/mutations/update-subspace-registered-reaction",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-subspace-registered-reaction.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"update-subspace-registered-reaction",title:"update_subspace_registered_reaction",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_subspace_registered_reaction_params",permalink:"/next/graphql/mutations/update-subspace-registered-reaction-params"},next:{title:"update_subspace_report_reason_by_pk",permalink:"/next/graphql/mutations/update-subspace-report-reason-by-pk"}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>subspace_registered_reaction_inc_input</code>)",id:"_inc-subspace_registered_reaction_inc_input",level:4},{value:"<code>_set</code> (<code>subspace_registered_reaction_set_input</code>)",id:"_set-subspace_registered_reaction_set_input",level:4},{value:"<code>where</code> (<code>subspace_registered_reaction_bool_exp!</code>)",id:"where-subspace_registered_reaction_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_registered_reaction_mutation_response</code>",id:"subspace_registered_reaction_mutation_response",level:4}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'update data of the table: "subspace_registered_reaction"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"update_subspace_registered_reaction(\n  _inc: subspace_registered_reaction_inc_input\n  _set: subspace_registered_reaction_set_input\n  where: subspace_registered_reaction_bool_exp!\n): subspace_registered_reaction_mutation_response\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"_inc-subspace_registered_reaction_inc_input"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-inc-input"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_inc_input")),")"),(0,n.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,n.kt)("h4",{id:"_set-subspace_registered_reaction_set_input"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-set-input"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_set_input")),")"),(0,n.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,n.kt)("h4",{id:"where-subspace_registered_reaction_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_bool_exp!")),")"),(0,n.kt)("p",null,"filter the rows which have to be updated"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"subspace_registered_reaction_mutation_response"},(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace-registered-reaction-mutation-response"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_mutation_response"))),(0,n.kt)("p",null,'response of any mutation on the table "subspace_registered_reaction"'))}d.isMDXComponent=!0}}]);