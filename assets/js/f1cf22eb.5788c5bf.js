"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[49415],{3905:(e,o,t)=>{t.d(o,{Zo:()=>_,kt:()=>m});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function p(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),i=function(e){var o=n.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},_=function(e){var o=i(e.components);return n.createElement(s.Provider,{value:o},e.children)},c={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},d=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,_=p(e,["components","mdxType","originalType","parentName"]),d=i(t),m=r,u=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return t?n.createElement(u,l(l({ref:o},_),{},{components:t})):n.createElement(u,l({ref:o},_))}));function m(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var p={};for(var s in o)hasOwnProperty.call(o,s)&&(p[s]=o[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var i=2;i<a;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},23884:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var n=t(87462),r=(t(67294),t(3905));const a={id:"poll-answer-bool-exp",title:"poll_answer_bool_exp",hide_table_of_contents:!1},l=void 0,p={unversionedId:"graphql/inputs/poll-answer-bool-exp",id:"version-4.2.0/graphql/inputs/poll-answer-bool-exp",title:"poll_answer_bool_exp",description:"Boolean expression to filter rows from the table \"poll_answer\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/poll-answer-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/poll-answer-bool-exp",permalink:"/graphql/inputs/poll-answer-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/poll-answer-bool-exp.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"poll-answer-bool-exp",title:"poll_answer_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"jsonb_comparison_exp",permalink:"/graphql/inputs/jsonb-comparison-exp"},next:{title:"poll_answer_order_by",permalink:"/graphql/inputs/poll-answer-order-by"}},s={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[poll_answer_bool_exp!]</code>)",id:"_and-poll_answer_bool_exp",level:4},{value:"<code>_not</code> (<code>poll_answer_bool_exp</code>)",id:"_not-poll_answer_bool_exp",level:4},{value:"<code>_or</code> (<code>[poll_answer_bool_exp!]</code>)",id:"_or-poll_answer_bool_exp",level:4},{value:"<code>answers_indexes</code> (<code>_int8_comparison_exp</code>)",id:"answers_indexes-_int8_comparison_exp",level:4},{value:"<code>post_attachment</code> (<code>post_attachment_bool_exp</code>)",id:"post_attachment-post_attachment_bool_exp",level:4},{value:"<code>user_address</code> (<code>String_comparison_exp</code>)",id:"user_address-string_comparison_exp",level:4}],_={toc:i};function c(e){let{components:o,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},_,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Boolean expression to filter rows from the table \"poll_answer\". All fields are combined with a logical 'AND'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input poll_answer_bool_exp {\n  _and: [poll_answer_bool_exp!]\n  _not: poll_answer_bool_exp\n  _or: [poll_answer_bool_exp!]\n  answers_indexes: _int8_comparison_exp\n  post_attachment: post_attachment_bool_exp\n  user_address: String_comparison_exp\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"_and-poll_answer_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"[poll_answer_bool_exp!]")),")"),(0,r.kt)("h4",{id:"_not-poll_answer_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"poll_answer_bool_exp")),")"),(0,r.kt)("h4",{id:"_or-poll_answer_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"[poll_answer_bool_exp!]")),")"),(0,r.kt)("h4",{id:"answers_indexes-_int8_comparison_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"answers_indexes"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/int-8-comparison-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"_int8_comparison_exp")),")"),(0,r.kt)("h4",{id:"post_attachment-post_attachment_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"post_attachment"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_attachment_bool_exp")),")"),(0,r.kt)("h4",{id:"user_address-string_comparison_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}c.isMDXComponent=!0}}]);