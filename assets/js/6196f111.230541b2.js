"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[32003],{3905:(e,t,a)=>{a.d(t,{Zo:()=>_,kt:()=>u});var p=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,p)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,p,r=function(e,t){if(null==e)return{};var a,p,r={},n=Object.keys(e);for(p=0;p<n.length;p++)a=n[p],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(p=0;p<n.length;p++)a=n[p],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=p.createContext({}),s=function(e){var t=p.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},_=function(e){var t=s(e.components);return p.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},m=p.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,_=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,f=m["".concat(o,".").concat(u)]||m[u]||d[u]||n;return a?p.createElement(f,i(i({ref:t},_),{},{components:a})):p.createElement(f,i({ref:t},_))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<n;s++)i[s]=a[s];return p.createElement.apply(null,i)}return p.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2476:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var p=a(87462),r=(a(67294),a(3905));const n={id:"update-profiles-params",title:"update_profiles_params",hide_table_of_contents:!1},i=void 0,l={unversionedId:"graphql/mutations/update-profiles-params",id:"graphql/mutations/update-profiles-params",title:"update_profiles_params",description:'update data of the table: "profiles_params"',source:"@site/docs/07-graphql/mutations/update-profiles-params.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-profiles-params",permalink:"/next/graphql/mutations/update-profiles-params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-profiles-params.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"update-profiles-params",title:"update_profiles_params",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_profiles_params_by_pk",permalink:"/next/graphql/mutations/update-profiles-params-by-pk"},next:{title:"update_reaction_by_pk",permalink:"/next/graphql/mutations/update-reaction-by-pk"}},o={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_append</code> (<code>profiles_params_append_input</code>)",id:"_append-profiles_params_append_input",level:4},{value:"<code>_delete_at_path</code> (<code>profiles_params_delete_at_path_input</code>)",id:"_delete_at_path-profiles_params_delete_at_path_input",level:4},{value:"<code>_delete_elem</code> (<code>profiles_params_delete_elem_input</code>)",id:"_delete_elem-profiles_params_delete_elem_input",level:4},{value:"<code>_delete_key</code> (<code>profiles_params_delete_key_input</code>)",id:"_delete_key-profiles_params_delete_key_input",level:4},{value:"<code>_inc</code> (<code>profiles_params_inc_input</code>)",id:"_inc-profiles_params_inc_input",level:4},{value:"<code>_prepend</code> (<code>profiles_params_prepend_input</code>)",id:"_prepend-profiles_params_prepend_input",level:4},{value:"<code>_set</code> (<code>profiles_params_set_input</code>)",id:"_set-profiles_params_set_input",level:4},{value:"<code>where</code> (<code>profiles_params_bool_exp!</code>)",id:"where-profiles_params_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>profiles_params_mutation_response</code>",id:"profiles_params_mutation_response",level:4}],_={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,p.Z)({},_,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'update data of the table: "profiles_params"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"update_profiles_params(\n  _append: profiles_params_append_input\n  _delete_at_path: profiles_params_delete_at_path_input\n  _delete_elem: profiles_params_delete_elem_input\n  _delete_key: profiles_params_delete_key_input\n  _inc: profiles_params_inc_input\n  _prepend: profiles_params_prepend_input\n  _set: profiles_params_set_input\n  where: profiles_params_bool_exp!\n): profiles_params_mutation_response\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"_append-profiles_params_append_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_append"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-append-input"},(0,r.kt)("inlineCode",{parentName:"a"},"profiles_params_append_input")),")"),(0,r.kt)("p",null,"append existing jsonb value of filtered columns with new jsonb value"),(0,r.kt)("h4",{id:"_delete_at_path-profiles_params_delete_at_path_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_delete_at_path"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-delete-at-path-input"},(0,r.kt)("inlineCode",{parentName:"a"},"profiles_params_delete_at_path_input")),")"),(0,r.kt)("p",null,"delete the field or element with specified path (for JSON arrays, negative integers count from the end)"),(0,r.kt)("h4",{id:"_delete_elem-profiles_params_delete_elem_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_delete_elem"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-delete-elem-input"},(0,r.kt)("inlineCode",{parentName:"a"},"profiles_params_delete_elem_input")),")"),(0,r.kt)("p",null,"delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array"),(0,r.kt)("h4",{id:"_delete_key-profiles_params_delete_key_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_delete_key"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-delete-key-input"},(0,r.kt)("inlineCode",{parentName:"a"},"profiles_params_delete_key_input")),")"),(0,r.kt)("p",null,"delete key/value pair or string element. key/value pairs are matched based on their key value"),(0,r.kt)("h4",{id:"_inc-profiles_params_inc_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-inc-input"},(0,r.kt)("inlineCode",{parentName:"a"},"profiles_params_inc_input")),")"),(0,r.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,r.kt)("h4",{id:"_prepend-profiles_params_prepend_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_prepend"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-prepend-input"},(0,r.kt)("inlineCode",{parentName:"a"},"profiles_params_prepend_input")),")"),(0,r.kt)("p",null,"prepend existing jsonb value of filtered columns with new jsonb value"),(0,r.kt)("h4",{id:"_set-profiles_params_set_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-set-input"},(0,r.kt)("inlineCode",{parentName:"a"},"profiles_params_set_input")),")"),(0,r.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,r.kt)("h4",{id:"where-profiles_params_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"profiles_params_bool_exp!")),")"),(0,r.kt)("p",null,"filter the rows which have to be updated"),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"profiles_params_mutation_response"},(0,r.kt)("a",{parentName:"h4",href:"../objects/profiles-params-mutation-response"},(0,r.kt)("inlineCode",{parentName:"a"},"profiles_params_mutation_response"))),(0,r.kt)("p",null,'response of any mutation on the table "profiles_params"'))}d.isMDXComponent=!0}}]);