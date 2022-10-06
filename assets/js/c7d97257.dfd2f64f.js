"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[24431],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),_=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=_(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=_(t),u=i,f=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return t?a.createElement(f,r(r({ref:n},c),{},{components:t})):a.createElement(f,r({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=h;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var _=2;_<o;_++)r[_]=t[_];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},17847:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>_});var a=t(87462),i=(t(67294),t(3905));const o={id:"update-chain-link-proof",title:"update_chain_link_proof",hide_table_of_contents:!1},r=void 0,p={unversionedId:"graphql/mutations/update-chain-link-proof",id:"graphql/mutations/update-chain-link-proof",title:"update_chain_link_proof",description:'update data of the table: "chainlinkproof"',source:"@site/docs/07-graphql/mutations/update-chain-link-proof.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-chain-link-proof",permalink:"/next/graphql/mutations/update-chain-link-proof",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-chain-link-proof.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"update-chain-link-proof",title:"update_chain_link_proof",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_chain_link_chain_config",permalink:"/next/graphql/mutations/update-chain-link-chain-config"},next:{title:"update_chain_link",permalink:"/next/graphql/mutations/update-chain-link"}},l={},_=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_append</code> (<code>chain_link_proof_append_input</code>)",id:"_append-chain_link_proof_append_input",level:4},{value:"<code>_delete_at_path</code> (<code>chain_link_proof_delete_at_path_input</code>)",id:"_delete_at_path-chain_link_proof_delete_at_path_input",level:4},{value:"<code>_delete_elem</code> (<code>chain_link_proof_delete_elem_input</code>)",id:"_delete_elem-chain_link_proof_delete_elem_input",level:4},{value:"<code>_delete_key</code> (<code>chain_link_proof_delete_key_input</code>)",id:"_delete_key-chain_link_proof_delete_key_input",level:4},{value:"<code>_inc</code> (<code>chain_link_proof_inc_input</code>)",id:"_inc-chain_link_proof_inc_input",level:4},{value:"<code>_prepend</code> (<code>chain_link_proof_prepend_input</code>)",id:"_prepend-chain_link_proof_prepend_input",level:4},{value:"<code>_set</code> (<code>chain_link_proof_set_input</code>)",id:"_set-chain_link_proof_set_input",level:4},{value:"<code>where</code> (<code>chain_link_proof_bool_exp!</code>)",id:"where-chain_link_proof_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>chain_link_proof_mutation_response</code>",id:"chain_link_proof_mutation_response",level:4}],c={toc:_};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'update data of the table: "chain_link_proof"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"update_chain_link_proof(\n  _append: chain_link_proof_append_input\n  _delete_at_path: chain_link_proof_delete_at_path_input\n  _delete_elem: chain_link_proof_delete_elem_input\n  _delete_key: chain_link_proof_delete_key_input\n  _inc: chain_link_proof_inc_input\n  _prepend: chain_link_proof_prepend_input\n  _set: chain_link_proof_set_input\n  where: chain_link_proof_bool_exp!\n): chain_link_proof_mutation_response\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"_append-chain_link_proof_append_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_append"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-append-input"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_proof_append_input")),")"),(0,i.kt)("p",null,"append existing jsonb value of filtered columns with new jsonb value"),(0,i.kt)("h4",{id:"_delete_at_path-chain_link_proof_delete_at_path_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_delete_at_path"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-delete-at-path-input"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_proof_delete_at_path_input")),")"),(0,i.kt)("p",null,"delete the field or element with specified path (for JSON arrays, negative integers count from the end)"),(0,i.kt)("h4",{id:"_delete_elem-chain_link_proof_delete_elem_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_delete_elem"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-delete-elem-input"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_proof_delete_elem_input")),")"),(0,i.kt)("p",null,"delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array"),(0,i.kt)("h4",{id:"_delete_key-chain_link_proof_delete_key_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_delete_key"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-delete-key-input"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_proof_delete_key_input")),")"),(0,i.kt)("p",null,"delete key/value pair or string element. key/value pairs are matched based on their key value"),(0,i.kt)("h4",{id:"_inc-chain_link_proof_inc_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-inc-input"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_proof_inc_input")),")"),(0,i.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,i.kt)("h4",{id:"_prepend-chain_link_proof_prepend_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_prepend"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-prepend-input"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_proof_prepend_input")),")"),(0,i.kt)("p",null,"prepend existing jsonb value of filtered columns with new jsonb value"),(0,i.kt)("h4",{id:"_set-chain_link_proof_set_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-set-input"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_proof_set_input")),")"),(0,i.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,i.kt)("h4",{id:"where-chain_link_proof_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_proof_bool_exp!")),")"),(0,i.kt)("p",null,"filter the rows which have to be updated"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"chain_link_proof_mutation_response"},(0,i.kt)("a",{parentName:"h4",href:"../objects/chain-link-proof-mutation-response"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_proof_mutation_response"))),(0,i.kt)("p",null,'response of any mutation on the table "chain_link_proof"'))}d.isMDXComponent=!0}}]);