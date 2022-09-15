"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[15361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},p=Object.keys(e);for(i=0;i<p.length;i++)n=p[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)n=p[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=i.createContext({}),_=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=_(e.components);return i.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=_(n),k=a,s=u["".concat(r,".").concat(k)]||u[k]||d[k]||p;return n?i.createElement(s,l(l({ref:t},c),{},{components:n})):i.createElement(s,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=u;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var _=2;_<p;_++)l[_]=n[_];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>_});var i=n(87462),a=(n(67294),n(3905));const p={id:"update-application-link-by-pk",title:"update_application_link_by_pk",hide_table_of_contents:!1},l=void 0,o={unversionedId:"graphql/mutations/update-application-link-by-pk",id:"graphql/mutations/update-application-link-by-pk",title:"update_application_link_by_pk",description:'update single row of the table: "application_link"',source:"@site/docs/07-graphql/mutations/update-application-link-by-pk.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-application-link-by-pk",permalink:"/next/graphql/mutations/update-application-link-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-application-link-by-pk.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"update-application-link-by-pk",title:"update_application_link_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_user_relationship",permalink:"/next/graphql/mutations/insert-user-relationship"},next:{title:"update_application_link_oracle_request_by_pk",permalink:"/next/graphql/mutations/update-application-link-oracle-request-by-pk"}},r={},_=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_append</code> (<code>application_link_append_input</code>)",id:"_append-application_link_append_input",level:4},{value:"<code>_delete_at_path</code> (<code>application_link_delete_at_path_input</code>)",id:"_delete_at_path-application_link_delete_at_path_input",level:4},{value:"<code>_delete_elem</code> (<code>application_link_delete_elem_input</code>)",id:"_delete_elem-application_link_delete_elem_input",level:4},{value:"<code>_delete_key</code> (<code>application_link_delete_key_input</code>)",id:"_delete_key-application_link_delete_key_input",level:4},{value:"<code>_inc</code> (<code>application_link_inc_input</code>)",id:"_inc-application_link_inc_input",level:4},{value:"<code>_prepend</code> (<code>application_link_prepend_input</code>)",id:"_prepend-application_link_prepend_input",level:4},{value:"<code>_set</code> (<code>application_link_set_input</code>)",id:"_set-application_link_set_input",level:4},{value:"<code>pk_columns</code> (<code>application_link_pk_columns_input!</code>)",id:"pk_columns-application_link_pk_columns_input",level:4},{value:"Type",id:"type",level:3},{value:"<code>application_link</code>",id:"application_link",level:4}],c={toc:_};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'update single row of the table: "application_link"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"update_application_link_by_pk(\n  _append: application_link_append_input\n  _delete_at_path: application_link_delete_at_path_input\n  _delete_elem: application_link_delete_elem_input\n  _delete_key: application_link_delete_key_input\n  _inc: application_link_inc_input\n  _prepend: application_link_prepend_input\n  _set: application_link_set_input\n  pk_columns: application_link_pk_columns_input!\n): application_link\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"_append-application_link_append_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_append"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-append-input"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_append_input")),")"),(0,a.kt)("p",null,"append existing jsonb value of filtered columns with new jsonb value"),(0,a.kt)("h4",{id:"_delete_at_path-application_link_delete_at_path_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_delete_at_path"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-delete-at-path-input"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_delete_at_path_input")),")"),(0,a.kt)("p",null,"delete the field or element with specified path (for JSON arrays, negative integers count from the end)"),(0,a.kt)("h4",{id:"_delete_elem-application_link_delete_elem_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_delete_elem"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-delete-elem-input"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_delete_elem_input")),")"),(0,a.kt)("p",null,"delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array"),(0,a.kt)("h4",{id:"_delete_key-application_link_delete_key_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_delete_key"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-delete-key-input"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_delete_key_input")),")"),(0,a.kt)("p",null,"delete key/value pair or string element. key/value pairs are matched based on their key value"),(0,a.kt)("h4",{id:"_inc-application_link_inc_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-inc-input"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_inc_input")),")"),(0,a.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,a.kt)("h4",{id:"_prepend-application_link_prepend_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_prepend"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-prepend-input"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_prepend_input")),")"),(0,a.kt)("p",null,"prepend existing jsonb value of filtered columns with new jsonb value"),(0,a.kt)("h4",{id:"_set-application_link_set_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-set-input"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_set_input")),")"),(0,a.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,a.kt)("h4",{id:"pk_columns-application_link_pk_columns_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"pk_columns"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-pk-columns-input"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_pk_columns_input!")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"application_link"},(0,a.kt)("a",{parentName:"h4",href:"../objects/application-link"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link"))),(0,a.kt)("p",null,'columns and relationships of "application_link"'))}d.isMDXComponent=!0}}]);