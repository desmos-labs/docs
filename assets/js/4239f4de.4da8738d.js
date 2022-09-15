"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[60642],{3905:(e,s,a)=>{a.d(s,{Zo:()=>_,kt:()=>l});var r=a(67294);function i(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}function t(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?t(Object(a),!0).forEach((function(s){i(e,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))}))}return e}function p(e,s){if(null==e)return{};var a,r,i=function(e,s){if(null==e)return{};var a,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],s.indexOf(a)>=0||(i[a]=e[a]);return i}(e,s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),d=function(e){var s=r.useContext(o),a=s;return e&&(a="function"==typeof e?e(s):n(n({},s),e)),a},_=function(e){var s=d(e.components);return r.createElement(o.Provider,{value:s},e.children)},u={inlineCode:"code",wrapper:function(e){var s=e.children;return r.createElement(r.Fragment,{},s)}},c=r.forwardRef((function(e,s){var a=e.components,i=e.mdxType,t=e.originalType,o=e.parentName,_=p(e,["components","mdxType","originalType","parentName"]),c=d(a),l=i,m=c["".concat(o,".").concat(l)]||c[l]||u[l]||t;return a?r.createElement(m,n(n({ref:s},_),{},{components:a})):r.createElement(m,n({ref:s},_))}));function l(e,s){var a=arguments,i=s&&s.mdxType;if("string"==typeof e||i){var t=a.length,n=new Array(t);n[0]=c;var p={};for(var o in s)hasOwnProperty.call(s,o)&&(p[o]=s[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,n[1]=p;for(var d=2;d<t;d++)n[d]=a[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},74076:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>n,default:()=>u,frontMatter:()=>t,metadata:()=>p,toc:()=>d});var r=a(87462),i=(a(67294),a(3905));const t={id:"subspace-user-permission-aggregate-fields",title:"subspace_user_permission_aggregate_fields",hide_table_of_contents:!1},n=void 0,p={unversionedId:"graphql/objects/subspace-user-permission-aggregate-fields",id:"graphql/objects/subspace-user-permission-aggregate-fields",title:"subspace_user_permission_aggregate_fields",description:'aggregate fields of "subspaceuserpermission"',source:"@site/docs/07-graphql/objects/subspace-user-permission-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/subspace-user-permission-aggregate-fields",permalink:"/next/graphql/objects/subspace-user-permission-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/subspace-user-permission-aggregate-fields.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"subspace-user-permission-aggregate-fields",title:"subspace_user_permission_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group",permalink:"/next/graphql/objects/subspace-user-group"},next:{title:"subspace_user_permission_aggregate",permalink:"/next/graphql/objects/subspace-user-permission-aggregate"}},o={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>subspace_user_permission_avg_fields</code>)",id:"avg-subspace_user_permission_avg_fields",level:4},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>subspace_user_permission_max_fields</code>)",id:"max-subspace_user_permission_max_fields",level:4},{value:"<code>min</code> (<code>subspace_user_permission_min_fields</code>)",id:"min-subspace_user_permission_min_fields",level:4},{value:"<code>stddev</code> (<code>subspace_user_permission_stddev_fields</code>)",id:"stddev-subspace_user_permission_stddev_fields",level:4},{value:"<code>stddev_pop</code> (<code>subspace_user_permission_stddev_pop_fields</code>)",id:"stddev_pop-subspace_user_permission_stddev_pop_fields",level:4},{value:"<code>stddev_samp</code> (<code>subspace_user_permission_stddev_samp_fields</code>)",id:"stddev_samp-subspace_user_permission_stddev_samp_fields",level:4},{value:"<code>sum</code> (<code>subspace_user_permission_sum_fields</code>)",id:"sum-subspace_user_permission_sum_fields",level:4},{value:"<code>var_pop</code> (<code>subspace_user_permission_var_pop_fields</code>)",id:"var_pop-subspace_user_permission_var_pop_fields",level:4},{value:"<code>var_samp</code> (<code>subspace_user_permission_var_samp_fields</code>)",id:"var_samp-subspace_user_permission_var_samp_fields",level:4},{value:"<code>variance</code> (<code>subspace_user_permission_variance_fields</code>)",id:"variance-subspace_user_permission_variance_fields",level:4}],_={toc:d};function u(e){let{components:s,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},_,a,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'aggregate fields of "subspace_user_permission"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type subspace_user_permission_aggregate_fields {\n  avg: subspace_user_permission_avg_fields\n  count(\n    columns: [subspace_user_permission_select_column!]\n    distinct: Boolean\n  ): Int!\n  max: subspace_user_permission_max_fields\n  min: subspace_user_permission_min_fields\n  stddev: subspace_user_permission_stddev_fields\n  stddev_pop: subspace_user_permission_stddev_pop_fields\n  stddev_samp: subspace_user_permission_stddev_samp_fields\n  sum: subspace_user_permission_sum_fields\n  var_pop: subspace_user_permission_var_pop_fields\n  var_samp: subspace_user_permission_var_samp_fields\n  variance: subspace_user_permission_variance_fields\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"avg-subspace_user_permission_avg_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/subspace-user-permission-avg-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_avg_fields")),")"),(0,i.kt)("h4",{id:"count-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"columns-subspace_user_permission_select_column"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,i.kt)("a",{parentName:"h5",href:"../enums/subspace-user-permission-select-column"},(0,i.kt)("inlineCode",{parentName:"a"},"[subspace_user_permission_select_column!]")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,i.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,i.kt)("h4",{id:"max-subspace_user_permission_max_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/subspace-user-permission-max-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_max_fields")),")"),(0,i.kt)("h4",{id:"min-subspace_user_permission_min_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/subspace-user-permission-min-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_min_fields")),")"),(0,i.kt)("h4",{id:"stddev-subspace_user_permission_stddev_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/subspace-user-permission-stddev-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_stddev_fields")),")"),(0,i.kt)("h4",{id:"stddev_pop-subspace_user_permission_stddev_pop_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/subspace-user-permission-stddev-pop-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_stddev_pop_fields")),")"),(0,i.kt)("h4",{id:"stddev_samp-subspace_user_permission_stddev_samp_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/subspace-user-permission-stddev-samp-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_stddev_samp_fields")),")"),(0,i.kt)("h4",{id:"sum-subspace_user_permission_sum_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/subspace-user-permission-sum-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_sum_fields")),")"),(0,i.kt)("h4",{id:"var_pop-subspace_user_permission_var_pop_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/subspace-user-permission-var-pop-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_var_pop_fields")),")"),(0,i.kt)("h4",{id:"var_samp-subspace_user_permission_var_samp_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/subspace-user-permission-var-samp-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_var_samp_fields")),")"),(0,i.kt)("h4",{id:"variance-subspace_user_permission_variance_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/subspace-user-permission-variance-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_variance_fields")),")"))}u.isMDXComponent=!0}}]);