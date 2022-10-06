"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[38522],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>c});var r=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),d=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},p=function(e){var a=d(e.components);return r.createElement(o.Provider,{value:a},e.children)},_={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),c=i,h=u["".concat(o,".").concat(c)]||u[c]||_[c]||s;return t?r.createElement(h,n(n({ref:a},p),{},{components:t})):r.createElement(h,n({ref:a},p))}));function c(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var s=t.length,n=new Array(s);n[0]=u;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var d=2;d<s;d++)n[d]=t[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},27533:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>_,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(87462),i=(t(67294),t(3905));const s={id:"user-relationship-aggregate-fields",title:"user_relationship_aggregate_fields",hide_table_of_contents:!1},n=void 0,l={unversionedId:"graphql/objects/user-relationship-aggregate-fields",id:"graphql/objects/user-relationship-aggregate-fields",title:"user_relationship_aggregate_fields",description:'aggregate fields of "user_relationship"',source:"@site/docs/07-graphql/objects/user-relationship-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/user-relationship-aggregate-fields",permalink:"/next/graphql/objects/user-relationship-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/user-relationship-aggregate-fields.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"user-relationship-aggregate-fields",title:"user_relationship_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"user_block",permalink:"/next/graphql/objects/user-block"},next:{title:"user_relationship_aggregate",permalink:"/next/graphql/objects/user-relationship-aggregate"}},o={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>user_relationship_avg_fields</code>)",id:"avg-user_relationship_avg_fields",level:4},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>user_relationship_max_fields</code>)",id:"max-user_relationship_max_fields",level:4},{value:"<code>min</code> (<code>user_relationship_min_fields</code>)",id:"min-user_relationship_min_fields",level:4},{value:"<code>stddev</code> (<code>user_relationship_stddev_fields</code>)",id:"stddev-user_relationship_stddev_fields",level:4},{value:"<code>stddev_pop</code> (<code>user_relationship_stddev_pop_fields</code>)",id:"stddev_pop-user_relationship_stddev_pop_fields",level:4},{value:"<code>stddev_samp</code> (<code>user_relationship_stddev_samp_fields</code>)",id:"stddev_samp-user_relationship_stddev_samp_fields",level:4},{value:"<code>sum</code> (<code>user_relationship_sum_fields</code>)",id:"sum-user_relationship_sum_fields",level:4},{value:"<code>var_pop</code> (<code>user_relationship_var_pop_fields</code>)",id:"var_pop-user_relationship_var_pop_fields",level:4},{value:"<code>var_samp</code> (<code>user_relationship_var_samp_fields</code>)",id:"var_samp-user_relationship_var_samp_fields",level:4},{value:"<code>variance</code> (<code>user_relationship_variance_fields</code>)",id:"variance-user_relationship_variance_fields",level:4}],p={toc:d};function _(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'aggregate fields of "user_relationship"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type user_relationship_aggregate_fields {\n  avg: user_relationship_avg_fields\n  count(columns: [user_relationship_select_column!], distinct: Boolean): Int!\n  max: user_relationship_max_fields\n  min: user_relationship_min_fields\n  stddev: user_relationship_stddev_fields\n  stddev_pop: user_relationship_stddev_pop_fields\n  stddev_samp: user_relationship_stddev_samp_fields\n  sum: user_relationship_sum_fields\n  var_pop: user_relationship_var_pop_fields\n  var_samp: user_relationship_var_samp_fields\n  variance: user_relationship_variance_fields\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"avg-user_relationship_avg_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/user-relationship-avg-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"user_relationship_avg_fields")),")"),(0,i.kt)("h4",{id:"count-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"columns-user_relationship_select_column"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,i.kt)("a",{parentName:"h5",href:"../enums/user-relationship-select-column"},(0,i.kt)("inlineCode",{parentName:"a"},"[user_relationship_select_column!]")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,i.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,i.kt)("h4",{id:"max-user_relationship_max_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/user-relationship-max-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"user_relationship_max_fields")),")"),(0,i.kt)("h4",{id:"min-user_relationship_min_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/user-relationship-min-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"user_relationship_min_fields")),")"),(0,i.kt)("h4",{id:"stddev-user_relationship_stddev_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/user-relationship-stddev-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"user_relationship_stddev_fields")),")"),(0,i.kt)("h4",{id:"stddev_pop-user_relationship_stddev_pop_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/user-relationship-stddev-pop-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"user_relationship_stddev_pop_fields")),")"),(0,i.kt)("h4",{id:"stddev_samp-user_relationship_stddev_samp_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/user-relationship-stddev-samp-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"user_relationship_stddev_samp_fields")),")"),(0,i.kt)("h4",{id:"sum-user_relationship_sum_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/user-relationship-sum-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"user_relationship_sum_fields")),")"),(0,i.kt)("h4",{id:"var_pop-user_relationship_var_pop_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/user-relationship-var-pop-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"user_relationship_var_pop_fields")),")"),(0,i.kt)("h4",{id:"var_samp-user_relationship_var_samp_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/user-relationship-var-samp-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"user_relationship_var_samp_fields")),")"),(0,i.kt)("h4",{id:"variance-user_relationship_variance_fields"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/user-relationship-variance-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"user_relationship_variance_fields")),")"))}_.isMDXComponent=!0}}]);