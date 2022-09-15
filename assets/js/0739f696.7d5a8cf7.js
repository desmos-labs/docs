"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[50649],{3905:(e,a,s)=>{s.d(a,{Zo:()=>l,kt:()=>m});var t=s(67294);function n(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function r(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,t)}return s}function d(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?r(Object(s),!0).forEach((function(a){n(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}function p(e,a){if(null==e)return{};var s,t,n=function(e,a){if(null==e)return{};var s,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)s=r[t],a.indexOf(s)>=0||(n[s]=e[s]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)s=r[t],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var i=t.createContext({}),c=function(e){var a=t.useContext(i),s=a;return e&&(s="function"==typeof e?e(a):d(d({},a),e)),s},l=function(e){var a=c(e.components);return t.createElement(i.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var s=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(s),m=n,_=u["".concat(i,".").concat(m)]||u[m]||o[m]||r;return s?t.createElement(_,d(d({ref:a},l),{},{components:s})):t.createElement(_,d({ref:a},l))}));function m(e,a){var s=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=s.length,d=new Array(r);d[0]=u;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,d[1]=p;for(var c=2;c<r;c++)d[c]=s[c];return t.createElement.apply(null,d)}return t.createElement.apply(null,s)}u.displayName="MDXCreateElement"},12338:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>i,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var t=s(87462),n=(s(67294),s(3905));const r={id:"subspace-aggregate-fields",title:"subspace_aggregate_fields",hide_table_of_contents:!1},d=void 0,p={unversionedId:"graphql/objects/subspace-aggregate-fields",id:"graphql/objects/subspace-aggregate-fields",title:"subspace_aggregate_fields",description:'aggregate fields of "subspace"',source:"@site/docs/07-graphql/objects/subspace-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/subspace-aggregate-fields",permalink:"/next/graphql/objects/subspace-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/subspace-aggregate-fields.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"subspace-aggregate-fields",title:"subspace_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subscription_root",permalink:"/next/graphql/objects/subscription-root"},next:{title:"subspace_aggregate",permalink:"/next/graphql/objects/subspace-aggregate"}},i={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>subspace_avg_fields</code>)",id:"avg-subspace_avg_fields",level:4},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>subspace_max_fields</code>)",id:"max-subspace_max_fields",level:4},{value:"<code>min</code> (<code>subspace_min_fields</code>)",id:"min-subspace_min_fields",level:4},{value:"<code>stddev</code> (<code>subspace_stddev_fields</code>)",id:"stddev-subspace_stddev_fields",level:4},{value:"<code>stddev_pop</code> (<code>subspace_stddev_pop_fields</code>)",id:"stddev_pop-subspace_stddev_pop_fields",level:4},{value:"<code>stddev_samp</code> (<code>subspace_stddev_samp_fields</code>)",id:"stddev_samp-subspace_stddev_samp_fields",level:4},{value:"<code>sum</code> (<code>subspace_sum_fields</code>)",id:"sum-subspace_sum_fields",level:4},{value:"<code>var_pop</code> (<code>subspace_var_pop_fields</code>)",id:"var_pop-subspace_var_pop_fields",level:4},{value:"<code>var_samp</code> (<code>subspace_var_samp_fields</code>)",id:"var_samp-subspace_var_samp_fields",level:4},{value:"<code>variance</code> (<code>subspace_variance_fields</code>)",id:"variance-subspace_variance_fields",level:4}],l={toc:c};function o(e){let{components:a,...s}=e;return(0,n.kt)("wrapper",(0,t.Z)({},l,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'aggregate fields of "subspace"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type subspace_aggregate_fields {\n  avg: subspace_avg_fields\n  count(columns: [subspace_select_column!], distinct: Boolean): Int!\n  max: subspace_max_fields\n  min: subspace_min_fields\n  stddev: subspace_stddev_fields\n  stddev_pop: subspace_stddev_pop_fields\n  stddev_samp: subspace_stddev_samp_fields\n  sum: subspace_sum_fields\n  var_pop: subspace_var_pop_fields\n  var_samp: subspace_var_samp_fields\n  variance: subspace_variance_fields\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"avg-subspace_avg_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace-avg-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_avg_fields")),")"),(0,n.kt)("h4",{id:"count-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"columns-subspace_select_column"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,n.kt)("a",{parentName:"h5",href:"../enums/subspace-select-column"},(0,n.kt)("inlineCode",{parentName:"a"},"[subspace_select_column!]")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,n.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,n.kt)("h4",{id:"max-subspace_max_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace-max-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_max_fields")),")"),(0,n.kt)("h4",{id:"min-subspace_min_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace-min-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_min_fields")),")"),(0,n.kt)("h4",{id:"stddev-subspace_stddev_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace-stddev-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_stddev_fields")),")"),(0,n.kt)("h4",{id:"stddev_pop-subspace_stddev_pop_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace-stddev-pop-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_stddev_pop_fields")),")"),(0,n.kt)("h4",{id:"stddev_samp-subspace_stddev_samp_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace-stddev-samp-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_stddev_samp_fields")),")"),(0,n.kt)("h4",{id:"sum-subspace_sum_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace-sum-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_sum_fields")),")"),(0,n.kt)("h4",{id:"var_pop-subspace_var_pop_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace-var-pop-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_var_pop_fields")),")"),(0,n.kt)("h4",{id:"var_samp-subspace_var_samp_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace-var-samp-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_var_samp_fields")),")"),(0,n.kt)("h4",{id:"variance-subspace_variance_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace-variance-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_variance_fields")),")"))}o.isMDXComponent=!0}}]);