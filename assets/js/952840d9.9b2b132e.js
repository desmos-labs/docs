"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[22834],{3905:(e,s,a)=>{a.d(s,{Zo:()=>_,kt:()=>l});var r=a(67294);function t(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}function p(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?p(Object(a),!0).forEach((function(s){t(e,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))}))}return e}function o(e,s){if(null==e)return{};var a,r,t=function(e,s){if(null==e)return{};var a,r,t={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],s.indexOf(a)>=0||(t[a]=e[a]);return t}(e,s);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var n=r.createContext({}),d=function(e){var s=r.useContext(n),a=s;return e&&(a="function"==typeof e?e(s):u(u({},s),e)),a},_=function(e){var s=d(e.components);return r.createElement(n.Provider,{value:s},e.children)},i={inlineCode:"code",wrapper:function(e){var s=e.children;return r.createElement(r.Fragment,{},s)}},c=r.forwardRef((function(e,s){var a=e.components,t=e.mdxType,p=e.originalType,n=e.parentName,_=o(e,["components","mdxType","originalType","parentName"]),c=d(a),l=t,g=c["".concat(n,".").concat(l)]||c[l]||i[l]||p;return a?r.createElement(g,u(u({ref:s},_),{},{components:a})):r.createElement(g,u({ref:s},_))}));function l(e,s){var a=arguments,t=s&&s.mdxType;if("string"==typeof e||t){var p=a.length,u=new Array(p);u[0]=c;var o={};for(var n in s)hasOwnProperty.call(s,n)&&(o[n]=s[n]);o.originalType=e,o.mdxType="string"==typeof e?e:t,u[1]=o;for(var d=2;d<p;d++)u[d]=a[d];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},14453:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>n,contentTitle:()=>u,default:()=>i,frontMatter:()=>p,metadata:()=>o,toc:()=>d});var r=a(87462),t=(a(67294),a(3905));const p={id:"subspace-user-group-aggregate-fields",title:"subspace_user_group_aggregate_fields",hide_table_of_contents:!1},u=void 0,o={unversionedId:"graphql/objects/subspace-user-group-aggregate-fields",id:"graphql/objects/subspace-user-group-aggregate-fields",title:"subspace_user_group_aggregate_fields",description:'aggregate fields of "subspaceusergroup"',source:"@site/docs/07-graphql/objects/subspace-user-group-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/subspace-user-group-aggregate-fields",permalink:"/next/graphql/objects/subspace-user-group-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/subspace-user-group-aggregate-fields.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"subspace-user-group-aggregate-fields",title:"subspace_user_group_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_sum_fields",permalink:"/next/graphql/objects/subspace-sum-fields"},next:{title:"subspace_user_group_aggregate",permalink:"/next/graphql/objects/subspace-user-group-aggregate"}},n={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>subspace_user_group_avg_fields</code>)",id:"avg-subspace_user_group_avg_fields",level:4},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>subspace_user_group_max_fields</code>)",id:"max-subspace_user_group_max_fields",level:4},{value:"<code>min</code> (<code>subspace_user_group_min_fields</code>)",id:"min-subspace_user_group_min_fields",level:4},{value:"<code>stddev</code> (<code>subspace_user_group_stddev_fields</code>)",id:"stddev-subspace_user_group_stddev_fields",level:4},{value:"<code>stddev_pop</code> (<code>subspace_user_group_stddev_pop_fields</code>)",id:"stddev_pop-subspace_user_group_stddev_pop_fields",level:4},{value:"<code>stddev_samp</code> (<code>subspace_user_group_stddev_samp_fields</code>)",id:"stddev_samp-subspace_user_group_stddev_samp_fields",level:4},{value:"<code>sum</code> (<code>subspace_user_group_sum_fields</code>)",id:"sum-subspace_user_group_sum_fields",level:4},{value:"<code>var_pop</code> (<code>subspace_user_group_var_pop_fields</code>)",id:"var_pop-subspace_user_group_var_pop_fields",level:4},{value:"<code>var_samp</code> (<code>subspace_user_group_var_samp_fields</code>)",id:"var_samp-subspace_user_group_var_samp_fields",level:4},{value:"<code>variance</code> (<code>subspace_user_group_variance_fields</code>)",id:"variance-subspace_user_group_variance_fields",level:4}],_={toc:d};function i(e){let{components:s,...a}=e;return(0,t.kt)("wrapper",(0,r.Z)({},_,a,{components:s,mdxType:"MDXLayout"}),(0,t.kt)("p",null,'aggregate fields of "subspace_user_group"'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-graphql"},"type subspace_user_group_aggregate_fields {\n  avg: subspace_user_group_avg_fields\n  count(columns: [subspace_user_group_select_column!], distinct: Boolean): Int!\n  max: subspace_user_group_max_fields\n  min: subspace_user_group_min_fields\n  stddev: subspace_user_group_stddev_fields\n  stddev_pop: subspace_user_group_stddev_pop_fields\n  stddev_samp: subspace_user_group_stddev_samp_fields\n  sum: subspace_user_group_sum_fields\n  var_pop: subspace_user_group_var_pop_fields\n  var_samp: subspace_user_group_var_samp_fields\n  variance: subspace_user_group_variance_fields\n}\n")),(0,t.kt)("h3",{id:"fields"},"Fields"),(0,t.kt)("h4",{id:"avg-subspace_user_group_avg_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-avg-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_avg_fields")),")"),(0,t.kt)("h4",{id:"count-int"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,t.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,t.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("h5",{parentName:"li",id:"columns-subspace_user_group_select_column"},(0,t.kt)("a",{parentName:"h5",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,t.kt)("a",{parentName:"h5",href:"../enums/subspace-user-group-select-column"},(0,t.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_select_column!]")),")")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,t.kt)("a",{parentName:"h5",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,t.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,t.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,t.kt)("h4",{id:"max-subspace_user_group_max_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-max-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_max_fields")),")"),(0,t.kt)("h4",{id:"min-subspace_user_group_min_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-min-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_min_fields")),")"),(0,t.kt)("h4",{id:"stddev-subspace_user_group_stddev_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-stddev-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_stddev_fields")),")"),(0,t.kt)("h4",{id:"stddev_pop-subspace_user_group_stddev_pop_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-stddev-pop-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_stddev_pop_fields")),")"),(0,t.kt)("h4",{id:"stddev_samp-subspace_user_group_stddev_samp_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-stddev-samp-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_stddev_samp_fields")),")"),(0,t.kt)("h4",{id:"sum-subspace_user_group_sum_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-sum-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_sum_fields")),")"),(0,t.kt)("h4",{id:"var_pop-subspace_user_group_var_pop_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-var-pop-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_var_pop_fields")),")"),(0,t.kt)("h4",{id:"var_samp-subspace_user_group_var_samp_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-var-samp-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_var_samp_fields")),")"),(0,t.kt)("h4",{id:"variance-subspace_user_group_variance_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-variance-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_variance_fields")),")"))}i.isMDXComponent=!0}}]);