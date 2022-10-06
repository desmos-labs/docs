"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[25023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>_});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=i(n),_=a,m=d["".concat(s,".").concat(_)]||d[_]||c[_]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={id:"update-poll-answer",title:"update_poll_answer",hide_table_of_contents:!1},l=void 0,p={unversionedId:"graphql/mutations/update-poll-answer",id:"graphql/mutations/update-poll-answer",title:"update_poll_answer",description:'update data of the table: "poll_answer"',source:"@site/docs/07-graphql/mutations/update-poll-answer.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-poll-answer",permalink:"/next/graphql/mutations/update-poll-answer",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-poll-answer.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"update-poll-answer",title:"update_poll_answer",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_poll_answer_by_pk",permalink:"/next/graphql/mutations/update-poll-answer-by-pk"},next:{title:"update_post_attachment_by_pk",permalink:"/next/graphql/mutations/update-post-attachment-by-pk"}},s={},i=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>poll_answer_inc_input</code>)",id:"_inc-poll_answer_inc_input",level:4},{value:"<code>_set</code> (<code>poll_answer_set_input</code>)",id:"_set-poll_answer_set_input",level:4},{value:"<code>where</code> (<code>poll_answer_bool_exp!</code>)",id:"where-poll_answer_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>poll_answer_mutation_response</code>",id:"poll_answer_mutation_response",level:4}],u={toc:i};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'update data of the table: "poll_answer"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"update_poll_answer(\n  _inc: poll_answer_inc_input\n  _set: poll_answer_set_input\n  where: poll_answer_bool_exp!\n): poll_answer_mutation_response\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"_inc-poll_answer_inc_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-inc-input"},(0,a.kt)("inlineCode",{parentName:"a"},"poll_answer_inc_input")),")"),(0,a.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,a.kt)("h4",{id:"_set-poll_answer_set_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-set-input"},(0,a.kt)("inlineCode",{parentName:"a"},"poll_answer_set_input")),")"),(0,a.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,a.kt)("h4",{id:"where-poll_answer_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"poll_answer_bool_exp!")),")"),(0,a.kt)("p",null,"filter the rows which have to be updated"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"poll_answer_mutation_response"},(0,a.kt)("a",{parentName:"h4",href:"../objects/poll-answer-mutation-response"},(0,a.kt)("inlineCode",{parentName:"a"},"poll_answer_mutation_response"))),(0,a.kt)("p",null,'response of any mutation on the table "poll_answer"'))}c.isMDXComponent=!0}}]);