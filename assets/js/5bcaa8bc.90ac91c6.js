"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[22154],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>s});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),_=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=_(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=_(a),s=i,k=d["".concat(o,".").concat(s)]||d[s]||u[s]||l;return a?n.createElement(k,p(p({ref:t},c),{},{components:a})):n.createElement(k,p({ref:t},c))}));function s(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,p=new Array(l);p[0]=d;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,p[1]=r;for(var _=2;_<l;_++)p[_]=a[_];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58095:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>_});var n=a(87462),i=(a(67294),a(3905));const l={id:"update-application-link-oracle-request",title:"update_application_link_oracle_request",hide_table_of_contents:!1},p=void 0,r={unversionedId:"graphql/mutations/update-application-link-oracle-request",id:"graphql/mutations/update-application-link-oracle-request",title:"update_application_link_oracle_request",description:'update data of the table: "applicationlinkoracle_request"',source:"@site/docs/07-graphql/mutations/update-application-link-oracle-request.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-application-link-oracle-request",permalink:"/next/graphql/mutations/update-application-link-oracle-request",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-application-link-oracle-request.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"update-application-link-oracle-request",title:"update_application_link_oracle_request",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_application_link_oracle_request_by_pk",permalink:"/next/graphql/mutations/update-application-link-oracle-request-by-pk"},next:{title:"update_application_link",permalink:"/next/graphql/mutations/update-application-link"}},o={},_=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_append</code> (<code>application_link_oracle_request_append_input</code>)",id:"_append-application_link_oracle_request_append_input",level:4},{value:"<code>_delete_at_path</code> (<code>application_link_oracle_request_delete_at_path_input</code>)",id:"_delete_at_path-application_link_oracle_request_delete_at_path_input",level:4},{value:"<code>_delete_elem</code> (<code>application_link_oracle_request_delete_elem_input</code>)",id:"_delete_elem-application_link_oracle_request_delete_elem_input",level:4},{value:"<code>_delete_key</code> (<code>application_link_oracle_request_delete_key_input</code>)",id:"_delete_key-application_link_oracle_request_delete_key_input",level:4},{value:"<code>_inc</code> (<code>application_link_oracle_request_inc_input</code>)",id:"_inc-application_link_oracle_request_inc_input",level:4},{value:"<code>_prepend</code> (<code>application_link_oracle_request_prepend_input</code>)",id:"_prepend-application_link_oracle_request_prepend_input",level:4},{value:"<code>_set</code> (<code>application_link_oracle_request_set_input</code>)",id:"_set-application_link_oracle_request_set_input",level:4},{value:"<code>where</code> (<code>application_link_oracle_request_bool_exp!</code>)",id:"where-application_link_oracle_request_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>application_link_oracle_request_mutation_response</code>",id:"application_link_oracle_request_mutation_response",level:4}],c={toc:_};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'update data of the table: "application_link_oracle_request"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"update_application_link_oracle_request(\n  _append: application_link_oracle_request_append_input\n  _delete_at_path: application_link_oracle_request_delete_at_path_input\n  _delete_elem: application_link_oracle_request_delete_elem_input\n  _delete_key: application_link_oracle_request_delete_key_input\n  _inc: application_link_oracle_request_inc_input\n  _prepend: application_link_oracle_request_prepend_input\n  _set: application_link_oracle_request_set_input\n  where: application_link_oracle_request_bool_exp!\n): application_link_oracle_request_mutation_response\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"_append-application_link_oracle_request_append_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_append"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-append-input"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_append_input")),")"),(0,i.kt)("p",null,"append existing jsonb value of filtered columns with new jsonb value"),(0,i.kt)("h4",{id:"_delete_at_path-application_link_oracle_request_delete_at_path_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_delete_at_path"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-delete-at-path-input"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_delete_at_path_input")),")"),(0,i.kt)("p",null,"delete the field or element with specified path (for JSON arrays, negative integers count from the end)"),(0,i.kt)("h4",{id:"_delete_elem-application_link_oracle_request_delete_elem_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_delete_elem"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-delete-elem-input"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_delete_elem_input")),")"),(0,i.kt)("p",null,"delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array"),(0,i.kt)("h4",{id:"_delete_key-application_link_oracle_request_delete_key_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_delete_key"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-delete-key-input"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_delete_key_input")),")"),(0,i.kt)("p",null,"delete key/value pair or string element. key/value pairs are matched based on their key value"),(0,i.kt)("h4",{id:"_inc-application_link_oracle_request_inc_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-inc-input"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_inc_input")),")"),(0,i.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,i.kt)("h4",{id:"_prepend-application_link_oracle_request_prepend_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_prepend"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-prepend-input"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_prepend_input")),")"),(0,i.kt)("p",null,"prepend existing jsonb value of filtered columns with new jsonb value"),(0,i.kt)("h4",{id:"_set-application_link_oracle_request_set_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-set-input"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_set_input")),")"),(0,i.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,i.kt)("h4",{id:"where-application_link_oracle_request_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_bool_exp!")),")"),(0,i.kt)("p",null,"filter the rows which have to be updated"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"application_link_oracle_request_mutation_response"},(0,i.kt)("a",{parentName:"h4",href:"../objects/application-link-oracle-request-mutation-response"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_mutation_response"))),(0,i.kt)("p",null,'response of any mutation on the table "application_link_oracle_request"'))}u.isMDXComponent=!0}}]);