"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[76587],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var a=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,p=function(e,t){if(null==e)return{};var r,a,p={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=a.createContext({}),_=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=_(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,p=e.mdxType,n=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=_(r),u=p,c=m["".concat(i,".").concat(u)]||m[u]||d[u]||n;return r?a.createElement(c,o(o({ref:t},l),{},{components:r})):a.createElement(c,o({ref:t},l))}));function u(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=r.length,o=new Array(n);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:p,o[1]=s;for(var _=2;_<n;_++)o[_]=r[_];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74122:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>_});var a=r(87462),p=(r(67294),r(3905));const n={id:"update-reports-params",title:"update_reports_params",hide_table_of_contents:!1},o=void 0,s={unversionedId:"graphql/mutations/update-reports-params",id:"graphql/mutations/update-reports-params",title:"update_reports_params",description:'update data of the table: "reports_params"',source:"@site/docs/07-graphql/mutations/update-reports-params.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-reports-params",permalink:"/next/graphql/mutations/update-reports-params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-reports-params.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"update-reports-params",title:"update_reports_params",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_reports_params_by_pk",permalink:"/next/graphql/mutations/update-reports-params-by-pk"},next:{title:"update_subspace_by_pk",permalink:"/next/graphql/mutations/update-subspace-by-pk"}},i={},_=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_append</code> (<code>reports_params_append_input</code>)",id:"_append-reports_params_append_input",level:4},{value:"<code>_delete_at_path</code> (<code>reports_params_delete_at_path_input</code>)",id:"_delete_at_path-reports_params_delete_at_path_input",level:4},{value:"<code>_delete_elem</code> (<code>reports_params_delete_elem_input</code>)",id:"_delete_elem-reports_params_delete_elem_input",level:4},{value:"<code>_delete_key</code> (<code>reports_params_delete_key_input</code>)",id:"_delete_key-reports_params_delete_key_input",level:4},{value:"<code>_inc</code> (<code>reports_params_inc_input</code>)",id:"_inc-reports_params_inc_input",level:4},{value:"<code>_prepend</code> (<code>reports_params_prepend_input</code>)",id:"_prepend-reports_params_prepend_input",level:4},{value:"<code>_set</code> (<code>reports_params_set_input</code>)",id:"_set-reports_params_set_input",level:4},{value:"<code>where</code> (<code>reports_params_bool_exp!</code>)",id:"where-reports_params_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>reports_params_mutation_response</code>",id:"reports_params_mutation_response",level:4}],l={toc:_};function d(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,'update data of the table: "reports_params"'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"update_reports_params(\n  _append: reports_params_append_input\n  _delete_at_path: reports_params_delete_at_path_input\n  _delete_elem: reports_params_delete_elem_input\n  _delete_key: reports_params_delete_key_input\n  _inc: reports_params_inc_input\n  _prepend: reports_params_prepend_input\n  _set: reports_params_set_input\n  where: reports_params_bool_exp!\n): reports_params_mutation_response\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"_append-reports_params_append_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_append"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/reports-params-append-input"},(0,p.kt)("inlineCode",{parentName:"a"},"reports_params_append_input")),")"),(0,p.kt)("p",null,"append existing jsonb value of filtered columns with new jsonb value"),(0,p.kt)("h4",{id:"_delete_at_path-reports_params_delete_at_path_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_delete_at_path"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/reports-params-delete-at-path-input"},(0,p.kt)("inlineCode",{parentName:"a"},"reports_params_delete_at_path_input")),")"),(0,p.kt)("p",null,"delete the field or element with specified path (for JSON arrays, negative integers count from the end)"),(0,p.kt)("h4",{id:"_delete_elem-reports_params_delete_elem_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_delete_elem"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/reports-params-delete-elem-input"},(0,p.kt)("inlineCode",{parentName:"a"},"reports_params_delete_elem_input")),")"),(0,p.kt)("p",null,"delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array"),(0,p.kt)("h4",{id:"_delete_key-reports_params_delete_key_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_delete_key"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/reports-params-delete-key-input"},(0,p.kt)("inlineCode",{parentName:"a"},"reports_params_delete_key_input")),")"),(0,p.kt)("p",null,"delete key/value pair or string element. key/value pairs are matched based on their key value"),(0,p.kt)("h4",{id:"_inc-reports_params_inc_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/reports-params-inc-input"},(0,p.kt)("inlineCode",{parentName:"a"},"reports_params_inc_input")),")"),(0,p.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,p.kt)("h4",{id:"_prepend-reports_params_prepend_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_prepend"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/reports-params-prepend-input"},(0,p.kt)("inlineCode",{parentName:"a"},"reports_params_prepend_input")),")"),(0,p.kt)("p",null,"prepend existing jsonb value of filtered columns with new jsonb value"),(0,p.kt)("h4",{id:"_set-reports_params_set_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/reports-params-set-input"},(0,p.kt)("inlineCode",{parentName:"a"},"reports_params_set_input")),")"),(0,p.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,p.kt)("h4",{id:"where-reports_params_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/reports-params-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"reports_params_bool_exp!")),")"),(0,p.kt)("p",null,"filter the rows which have to be updated"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"reports_params_mutation_response"},(0,p.kt)("a",{parentName:"h4",href:"../objects/reports-params-mutation-response"},(0,p.kt)("inlineCode",{parentName:"a"},"reports_params_mutation_response"))),(0,p.kt)("p",null,'response of any mutation on the table "reports_params"'))}d.isMDXComponent=!0}}]);