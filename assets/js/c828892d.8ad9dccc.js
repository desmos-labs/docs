"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[97710],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>_});var a=n(67294);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,p=function(t,e){if(null==t)return{};var n,a,p={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(p[n]=t[n]);return p}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(p[n]=t[n])}return p}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},l=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,p=t.mdxType,o=t.originalType,i=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),d=u(n),_=p,m=d["".concat(i,".").concat(_)]||d[_]||c[_]||o;return n?a.createElement(m,r(r({ref:e},l),{},{components:n})):a.createElement(m,r({ref:e},l))}));function _(t,e){var n=arguments,p=e&&e.mdxType;if("string"==typeof t||p){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:p,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45238:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),p=(n(67294),n(3905));const o={id:"update-post-tag-by-pk",title:"update_post_tag_by_pk",hide_table_of_contents:!1},r=void 0,s={unversionedId:"graphql/mutations/update-post-tag-by-pk",id:"graphql/mutations/update-post-tag-by-pk",title:"update_post_tag_by_pk",description:'update single row of the table: "post_tag"',source:"@site/docs/07-graphql/mutations/update-post-tag-by-pk.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-post-tag-by-pk",permalink:"/next/graphql/mutations/update-post-tag-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-post-tag-by-pk.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"update-post-tag-by-pk",title:"update_post_tag_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_post_reference",permalink:"/next/graphql/mutations/update-post-reference"},next:{title:"update_post_tag",permalink:"/next/graphql/mutations/update-post-tag"}},i={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>post_tag_inc_input</code>)",id:"_inc-post_tag_inc_input",level:4},{value:"<code>_set</code> (<code>post_tag_set_input</code>)",id:"_set-post_tag_set_input",level:4},{value:"<code>pk_columns</code> (<code>post_tag_pk_columns_input!</code>)",id:"pk_columns-post_tag_pk_columns_input",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_tag</code>",id:"post_tag",level:4}],l={toc:u};function c(t){let{components:e,...n}=t;return(0,p.kt)("wrapper",(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,'update single row of the table: "post_tag"'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"update_post_tag_by_pk(\n  _inc: post_tag_inc_input\n  _set: post_tag_set_input\n  pk_columns: post_tag_pk_columns_input!\n): post_tag\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"_inc-post_tag_inc_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-tag-inc-input"},(0,p.kt)("inlineCode",{parentName:"a"},"post_tag_inc_input")),")"),(0,p.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,p.kt)("h4",{id:"_set-post_tag_set_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-tag-set-input"},(0,p.kt)("inlineCode",{parentName:"a"},"post_tag_set_input")),")"),(0,p.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,p.kt)("h4",{id:"pk_columns-post_tag_pk_columns_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"pk_columns"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-tag-pk-columns-input"},(0,p.kt)("inlineCode",{parentName:"a"},"post_tag_pk_columns_input!")),")"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"post_tag"},(0,p.kt)("a",{parentName:"h4",href:"../objects/post-tag"},(0,p.kt)("inlineCode",{parentName:"a"},"post_tag"))),(0,p.kt)("p",null,'columns and relationships of "post_tag"'))}c.isMDXComponent=!0}}]);