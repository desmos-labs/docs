"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[45637],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>l});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),_=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=_(e.components);return n.createElement(o.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=_(t),l=a,m=u["".concat(o,".").concat(l)]||u[l]||d[l]||i;return t?n.createElement(m,s(s({ref:r},c),{},{components:t})):n.createElement(m,s({ref:r},c))}));function l(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var _=2;_<i;_++)s[_]=t[_];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},97413:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>_});var n=t(87462),a=(t(67294),t(3905));const i={id:"subspace-insert-input",title:"subspace_insert_input",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/inputs/subspace-insert-input",id:"graphql/inputs/subspace-insert-input",title:"subspace_insert_input",description:'input type for inserting data into table "subspace"',source:"@site/docs/07-graphql/inputs/subspace-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-insert-input",permalink:"/next/graphql/inputs/subspace-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"subspace-insert-input",title:"subspace_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_inc_input",permalink:"/next/graphql/inputs/subspace-inc-input"},next:{title:"subspace_obj_rel_insert_input",permalink:"/next/graphql/inputs/subspace-obj-rel-insert-input"}},o={},_=[{value:"Fields",id:"fields",level:3},{value:"<code>creation_time</code> (<code>timestamp</code>)",id:"creation_time-timestamp",level:4},{value:"<code>creator_address</code> (<code>String</code>)",id:"creator_address-string",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>free_text_reactions_params</code> (<code>subspace_free_text_params_obj_rel_insert_input</code>)",id:"free_text_reactions_params-subspace_free_text_params_obj_rel_insert_input",level:4},{value:"<code>height</code> (<code>bigint</code>)",id:"height-bigint",level:4},{value:"<code>id</code> (<code>bigint</code>)",id:"id-bigint",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>owner_address</code> (<code>String</code>)",id:"owner_address-string",level:4},{value:"<code>posts</code> (<code>post_arr_rel_insert_input</code>)",id:"posts-post_arr_rel_insert_input",level:4},{value:"<code>registered_reactions</code> (<code>subspace_registered_reaction_arr_rel_insert_input</code>)",id:"registered_reactions-subspace_registered_reaction_arr_rel_insert_input",level:4},{value:"<code>registered_reactions_params</code> (<code>subspace_registered_reaction_params_obj_rel_insert_input</code>)",id:"registered_reactions_params-subspace_registered_reaction_params_obj_rel_insert_input",level:4},{value:"<code>report_reasons</code> (<code>subspace_report_reason_arr_rel_insert_input</code>)",id:"report_reasons-subspace_report_reason_arr_rel_insert_input",level:4},{value:"<code>reports</code> (<code>report_arr_rel_insert_input</code>)",id:"reports-report_arr_rel_insert_input",level:4},{value:"<code>sections</code> (<code>subspace_section_arr_rel_insert_input</code>)",id:"sections-subspace_section_arr_rel_insert_input",level:4},{value:"<code>treasury_address</code> (<code>String</code>)",id:"treasury_address-string",level:4},{value:"<code>user_groups</code> (<code>subspace_user_group_arr_rel_insert_input</code>)",id:"user_groups-subspace_user_group_arr_rel_insert_input",level:4}],c={toc:_};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'input type for inserting data into table "subspace"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_insert_input {\n  creation_time: timestamp\n  creator_address: String\n  description: String\n  free_text_reactions_params: subspace_free_text_params_obj_rel_insert_input\n  height: bigint\n  id: bigint\n  name: String\n  owner_address: String\n  posts: post_arr_rel_insert_input\n  registered_reactions: subspace_registered_reaction_arr_rel_insert_input\n  registered_reactions_params: subspace_registered_reaction_params_obj_rel_insert_input\n  report_reasons: subspace_report_reason_arr_rel_insert_input\n  reports: report_arr_rel_insert_input\n  sections: subspace_section_arr_rel_insert_input\n  treasury_address: String\n  user_groups: subspace_user_group_arr_rel_insert_input\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"creation_time-timestamp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,a.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,a.kt)("h4",{id:"creator_address-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"creator_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"description-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"free_text_reactions_params-subspace_free_text_params_obj_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"free_text_reactions_params"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-obj-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_obj_rel_insert_input")),")"),(0,a.kt)("h4",{id:"height-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,a.kt)("h4",{id:"id-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"owner_address-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"owner_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"posts-post_arr_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"posts"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-arr-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"post_arr_rel_insert_input")),")"),(0,a.kt)("h4",{id:"registered_reactions-subspace_registered_reaction_arr_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"registered_reactions"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-arr-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_arr_rel_insert_input")),")"),(0,a.kt)("h4",{id:"registered_reactions_params-subspace_registered_reaction_params_obj_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"registered_reactions_params"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-params-obj-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_params_obj_rel_insert_input")),")"),(0,a.kt)("h4",{id:"report_reasons-subspace_report_reason_arr_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"report_reasons"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-arr-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_arr_rel_insert_input")),")"),(0,a.kt)("h4",{id:"reports-report_arr_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"reports"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/report-arr-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"report_arr_rel_insert_input")),")"),(0,a.kt)("h4",{id:"sections-subspace_section_arr_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"sections"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-arr-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_section_arr_rel_insert_input")),")"),(0,a.kt)("h4",{id:"treasury_address-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"treasury_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"user_groups-subspace_user_group_arr_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"user_groups"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-arr-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_user_group_arr_rel_insert_input")),")"))}d.isMDXComponent=!0}}]);