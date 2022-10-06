"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[86980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),_=c(n),s=r,m=_["".concat(l,".").concat(s)]||_[s]||u[s]||i;return n?a.createElement(m,p(p({ref:t},d),{},{components:n})):a.createElement(m,p({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=_;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var c=2;c<i;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},52191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={id:"update-reaction-by-pk",title:"update_reaction_by_pk",hide_table_of_contents:!1},p=void 0,o={unversionedId:"graphql/mutations/update-reaction-by-pk",id:"graphql/mutations/update-reaction-by-pk",title:"update_reaction_by_pk",description:'update single row of the table: "reaction"',source:"@site/docs/07-graphql/mutations/update-reaction-by-pk.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-reaction-by-pk",permalink:"/next/graphql/mutations/update-reaction-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-reaction-by-pk.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"update-reaction-by-pk",title:"update_reaction_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_profiles_params",permalink:"/next/graphql/mutations/update-profiles-params"},next:{title:"update_reaction",permalink:"/next/graphql/mutations/update-reaction"}},l={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_append</code> (<code>reaction_append_input</code>)",id:"_append-reaction_append_input",level:4},{value:"<code>_delete_at_path</code> (<code>reaction_delete_at_path_input</code>)",id:"_delete_at_path-reaction_delete_at_path_input",level:4},{value:"<code>_delete_elem</code> (<code>reaction_delete_elem_input</code>)",id:"_delete_elem-reaction_delete_elem_input",level:4},{value:"<code>_delete_key</code> (<code>reaction_delete_key_input</code>)",id:"_delete_key-reaction_delete_key_input",level:4},{value:"<code>_inc</code> (<code>reaction_inc_input</code>)",id:"_inc-reaction_inc_input",level:4},{value:"<code>_prepend</code> (<code>reaction_prepend_input</code>)",id:"_prepend-reaction_prepend_input",level:4},{value:"<code>_set</code> (<code>reaction_set_input</code>)",id:"_set-reaction_set_input",level:4},{value:"<code>pk_columns</code> (<code>reaction_pk_columns_input!</code>)",id:"pk_columns-reaction_pk_columns_input",level:4},{value:"Type",id:"type",level:3},{value:"<code>reaction</code>",id:"reaction",level:4}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'update single row of the table: "reaction"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"update_reaction_by_pk(\n  _append: reaction_append_input\n  _delete_at_path: reaction_delete_at_path_input\n  _delete_elem: reaction_delete_elem_input\n  _delete_key: reaction_delete_key_input\n  _inc: reaction_inc_input\n  _prepend: reaction_prepend_input\n  _set: reaction_set_input\n  pk_columns: reaction_pk_columns_input!\n): reaction\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"_append-reaction_append_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_append"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/reaction-append-input"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_append_input")),")"),(0,r.kt)("p",null,"append existing jsonb value of filtered columns with new jsonb value"),(0,r.kt)("h4",{id:"_delete_at_path-reaction_delete_at_path_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_delete_at_path"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/reaction-delete-at-path-input"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_delete_at_path_input")),")"),(0,r.kt)("p",null,"delete the field or element with specified path (for JSON arrays, negative integers count from the end)"),(0,r.kt)("h4",{id:"_delete_elem-reaction_delete_elem_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_delete_elem"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/reaction-delete-elem-input"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_delete_elem_input")),")"),(0,r.kt)("p",null,"delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array"),(0,r.kt)("h4",{id:"_delete_key-reaction_delete_key_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_delete_key"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/reaction-delete-key-input"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_delete_key_input")),")"),(0,r.kt)("p",null,"delete key/value pair or string element. key/value pairs are matched based on their key value"),(0,r.kt)("h4",{id:"_inc-reaction_inc_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/reaction-inc-input"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_inc_input")),")"),(0,r.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,r.kt)("h4",{id:"_prepend-reaction_prepend_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_prepend"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/reaction-prepend-input"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_prepend_input")),")"),(0,r.kt)("p",null,"prepend existing jsonb value of filtered columns with new jsonb value"),(0,r.kt)("h4",{id:"_set-reaction_set_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/reaction-set-input"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_set_input")),")"),(0,r.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,r.kt)("h4",{id:"pk_columns-reaction_pk_columns_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"pk_columns"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/reaction-pk-columns-input"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_pk_columns_input!")),")"),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"reaction"},(0,r.kt)("a",{parentName:"h4",href:"../objects/reaction"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction"))),(0,r.kt)("p",null,'columns and relationships of "reaction"'))}u.isMDXComponent=!0}}]);