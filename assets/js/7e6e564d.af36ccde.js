"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[37222],{3905:(e,t,a)=>{a.d(t,{Zo:()=>_,kt:()=>m});var r=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,p=function(e,t){if(null==e)return{};var a,r,p={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},_=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var a=e.components,p=e.mdxType,s=e.originalType,c=e.parentName,_=u(e,["components","mdxType","originalType","parentName"]),l=o(a),m=p,f=l["".concat(c,".").concat(m)]||l[m]||i[m]||s;return a?r.createElement(f,n(n({ref:t},_),{},{components:a})):r.createElement(f,n({ref:t},_))}));function m(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var s=a.length,n=new Array(s);n[0]=l;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:p,n[1]=u;for(var o=2;o<s;o++)n[o]=a[o];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}l.displayName="MDXCreateElement"},71457:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>i,frontMatter:()=>s,metadata:()=>u,toc:()=>o});var r=a(87462),p=(a(67294),a(3905));const s={id:"update-subspace-free-text-params-by-pk",title:"update_subspace_free_text_params_by_pk",hide_table_of_contents:!1},n=void 0,u={unversionedId:"graphql/mutations/update-subspace-free-text-params-by-pk",id:"graphql/mutations/update-subspace-free-text-params-by-pk",title:"update_subspace_free_text_params_by_pk",description:'update single row of the table: "subspacefreetext_params"',source:"@site/docs/07-graphql/mutations/update-subspace-free-text-params-by-pk.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-subspace-free-text-params-by-pk",permalink:"/next/graphql/mutations/update-subspace-free-text-params-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-subspace-free-text-params-by-pk.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"update-subspace-free-text-params-by-pk",title:"update_subspace_free_text_params_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_subspace_by_pk",permalink:"/next/graphql/mutations/update-subspace-by-pk"},next:{title:"update_subspace_free_text_params",permalink:"/next/graphql/mutations/update-subspace-free-text-params"}},c={},o=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>subspace_free_text_params_inc_input</code>)",id:"_inc-subspace_free_text_params_inc_input",level:4},{value:"<code>_set</code> (<code>subspace_free_text_params_set_input</code>)",id:"_set-subspace_free_text_params_set_input",level:4},{value:"<code>pk_columns</code> (<code>subspace_free_text_params_pk_columns_input!</code>)",id:"pk_columns-subspace_free_text_params_pk_columns_input",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_free_text_params</code>",id:"subspace_free_text_params",level:4}],_={toc:o};function i(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,r.Z)({},_,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,'update single row of the table: "subspace_free_text_params"'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"update_subspace_free_text_params_by_pk(\n  _inc: subspace_free_text_params_inc_input\n  _set: subspace_free_text_params_set_input\n  pk_columns: subspace_free_text_params_pk_columns_input!\n): subspace_free_text_params\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"_inc-subspace_free_text_params_inc_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-inc-input"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_inc_input")),")"),(0,p.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,p.kt)("h4",{id:"_set-subspace_free_text_params_set_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-set-input"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_set_input")),")"),(0,p.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,p.kt)("h4",{id:"pk_columns-subspace_free_text_params_pk_columns_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"pk_columns"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-pk-columns-input"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_pk_columns_input!")),")"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"subspace_free_text_params"},(0,p.kt)("a",{parentName:"h4",href:"../objects/subspace-free-text-params"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params"))),(0,p.kt)("p",null,'columns and relationships of "subspace_free_text_params"'))}i.isMDXComponent=!0}}]);