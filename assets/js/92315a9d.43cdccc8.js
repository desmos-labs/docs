"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[25846],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var u=r.createContext({}),c=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},i=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},_={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),l=c(a),m=s,d=l["".concat(u,".").concat(m)]||l[m]||_[m]||n;return a?r.createElement(d,p(p({ref:t},i),{},{components:a})):r.createElement(d,p({ref:t},i))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,p=new Array(n);p[0]=l;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:s,p[1]=o;for(var c=2;c<n;c++)p[c]=a[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}l.displayName="MDXCreateElement"},22923:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>_,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(87462),s=(a(67294),a(3905));const n={id:"update-subspace-free-text-params",title:"update_subspace_free_text_params",hide_table_of_contents:!1},p=void 0,o={unversionedId:"graphql/mutations/update-subspace-free-text-params",id:"graphql/mutations/update-subspace-free-text-params",title:"update_subspace_free_text_params",description:'update data of the table: "subspacefreetext_params"',source:"@site/docs/07-graphql/mutations/update-subspace-free-text-params.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-subspace-free-text-params",permalink:"/next/graphql/mutations/update-subspace-free-text-params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-subspace-free-text-params.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"update-subspace-free-text-params",title:"update_subspace_free_text_params",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_subspace_free_text_params_by_pk",permalink:"/next/graphql/mutations/update-subspace-free-text-params-by-pk"},next:{title:"update_subspace_registered_reaction_by_pk",permalink:"/next/graphql/mutations/update-subspace-registered-reaction-by-pk"}},u={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>subspace_free_text_params_inc_input</code>)",id:"_inc-subspace_free_text_params_inc_input",level:4},{value:"<code>_set</code> (<code>subspace_free_text_params_set_input</code>)",id:"_set-subspace_free_text_params_set_input",level:4},{value:"<code>where</code> (<code>subspace_free_text_params_bool_exp!</code>)",id:"where-subspace_free_text_params_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_free_text_params_mutation_response</code>",id:"subspace_free_text_params_mutation_response",level:4}],i={toc:c};function _(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'update data of the table: "subspace_free_text_params"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"update_subspace_free_text_params(\n  _inc: subspace_free_text_params_inc_input\n  _set: subspace_free_text_params_set_input\n  where: subspace_free_text_params_bool_exp!\n): subspace_free_text_params_mutation_response\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"_inc-subspace_free_text_params_inc_input"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-inc-input"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_inc_input")),")"),(0,s.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,s.kt)("h4",{id:"_set-subspace_free_text_params_set_input"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-set-input"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_set_input")),")"),(0,s.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,s.kt)("h4",{id:"where-subspace_free_text_params_bool_exp"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-bool-exp"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_bool_exp!")),")"),(0,s.kt)("p",null,"filter the rows which have to be updated"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"subspace_free_text_params_mutation_response"},(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-free-text-params-mutation-response"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_mutation_response"))),(0,s.kt)("p",null,'response of any mutation on the table "subspace_free_text_params"'))}_.isMDXComponent=!0}}]);