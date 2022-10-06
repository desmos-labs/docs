"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[40853],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var _=n.createContext({}),l=function(e){var t=n.useContext(_),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(_.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,p=e.mdxType,o=e.originalType,_=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(a),m=p,u=c["".concat(_,".").concat(m)]||c[m]||s[m]||o;return a?n.createElement(u,r(r({ref:t},d),{},{components:a})):n.createElement(u,r({ref:t},d))}));function m(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=a.length,r=new Array(o);r[0]=c;var i={};for(var _ in t)hasOwnProperty.call(t,_)&&(i[_]=t[_]);i.originalType=e,i.mdxType="string"==typeof e?e:p,r[1]=i;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},50843:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>_,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(87462),p=(a(67294),a(3905));const o={id:"update-post-attachment",title:"update_post_attachment",hide_table_of_contents:!1},r=void 0,i={unversionedId:"graphql/mutations/update-post-attachment",id:"graphql/mutations/update-post-attachment",title:"update_post_attachment",description:'update data of the table: "post_attachment"',source:"@site/docs/07-graphql/mutations/update-post-attachment.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-post-attachment",permalink:"/next/graphql/mutations/update-post-attachment",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-post-attachment.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"update-post-attachment",title:"update_post_attachment",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_post_attachment_by_pk",permalink:"/next/graphql/mutations/update-post-attachment-by-pk"},next:{title:"update_post_by_pk",permalink:"/next/graphql/mutations/update-post-by-pk"}},_={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_append</code> (<code>post_attachment_append_input</code>)",id:"_append-post_attachment_append_input",level:4},{value:"<code>_delete_at_path</code> (<code>post_attachment_delete_at_path_input</code>)",id:"_delete_at_path-post_attachment_delete_at_path_input",level:4},{value:"<code>_delete_elem</code> (<code>post_attachment_delete_elem_input</code>)",id:"_delete_elem-post_attachment_delete_elem_input",level:4},{value:"<code>_delete_key</code> (<code>post_attachment_delete_key_input</code>)",id:"_delete_key-post_attachment_delete_key_input",level:4},{value:"<code>_inc</code> (<code>post_attachment_inc_input</code>)",id:"_inc-post_attachment_inc_input",level:4},{value:"<code>_prepend</code> (<code>post_attachment_prepend_input</code>)",id:"_prepend-post_attachment_prepend_input",level:4},{value:"<code>_set</code> (<code>post_attachment_set_input</code>)",id:"_set-post_attachment_set_input",level:4},{value:"<code>where</code> (<code>post_attachment_bool_exp!</code>)",id:"where-post_attachment_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_attachment_mutation_response</code>",id:"post_attachment_mutation_response",level:4}],d={toc:l};function s(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,'update data of the table: "post_attachment"'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"update_post_attachment(\n  _append: post_attachment_append_input\n  _delete_at_path: post_attachment_delete_at_path_input\n  _delete_elem: post_attachment_delete_elem_input\n  _delete_key: post_attachment_delete_key_input\n  _inc: post_attachment_inc_input\n  _prepend: post_attachment_prepend_input\n  _set: post_attachment_set_input\n  where: post_attachment_bool_exp!\n): post_attachment_mutation_response\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"_append-post_attachment_append_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_append"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-append-input"},(0,p.kt)("inlineCode",{parentName:"a"},"post_attachment_append_input")),")"),(0,p.kt)("p",null,"append existing jsonb value of filtered columns with new jsonb value"),(0,p.kt)("h4",{id:"_delete_at_path-post_attachment_delete_at_path_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_delete_at_path"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-delete-at-path-input"},(0,p.kt)("inlineCode",{parentName:"a"},"post_attachment_delete_at_path_input")),")"),(0,p.kt)("p",null,"delete the field or element with specified path (for JSON arrays, negative integers count from the end)"),(0,p.kt)("h4",{id:"_delete_elem-post_attachment_delete_elem_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_delete_elem"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-delete-elem-input"},(0,p.kt)("inlineCode",{parentName:"a"},"post_attachment_delete_elem_input")),")"),(0,p.kt)("p",null,"delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array"),(0,p.kt)("h4",{id:"_delete_key-post_attachment_delete_key_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_delete_key"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-delete-key-input"},(0,p.kt)("inlineCode",{parentName:"a"},"post_attachment_delete_key_input")),")"),(0,p.kt)("p",null,"delete key/value pair or string element. key/value pairs are matched based on their key value"),(0,p.kt)("h4",{id:"_inc-post_attachment_inc_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-inc-input"},(0,p.kt)("inlineCode",{parentName:"a"},"post_attachment_inc_input")),")"),(0,p.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,p.kt)("h4",{id:"_prepend-post_attachment_prepend_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_prepend"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-prepend-input"},(0,p.kt)("inlineCode",{parentName:"a"},"post_attachment_prepend_input")),")"),(0,p.kt)("p",null,"prepend existing jsonb value of filtered columns with new jsonb value"),(0,p.kt)("h4",{id:"_set-post_attachment_set_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-set-input"},(0,p.kt)("inlineCode",{parentName:"a"},"post_attachment_set_input")),")"),(0,p.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,p.kt)("h4",{id:"where-post_attachment_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"post_attachment_bool_exp!")),")"),(0,p.kt)("p",null,"filter the rows which have to be updated"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"post_attachment_mutation_response"},(0,p.kt)("a",{parentName:"h4",href:"../objects/post-attachment-mutation-response"},(0,p.kt)("inlineCode",{parentName:"a"},"post_attachment_mutation_response"))),(0,p.kt)("p",null,'response of any mutation on the table "post_attachment"'))}s.isMDXComponent=!0}}]);