"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[62688],{3905:(e,a,l)=>{l.d(a,{Zo:()=>i,kt:()=>m});var t=l(67294);function n(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function r(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,t)}return l}function s(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?r(Object(l),!0).forEach((function(a){n(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}function o(e,a){if(null==e)return{};var l,t,n=function(e,a){if(null==e)return{};var l,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)l=r[t],a.indexOf(l)>=0||(n[l]=e[l]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)l=r[t],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var d=t.createContext({}),p=function(e){var a=t.useContext(d),l=a;return e&&(l="function"==typeof e?e(a):s(s({},a),e)),l},i=function(e){var a=p(e.components);return t.createElement(d.Provider,{value:a},e.children)},_={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var l=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),c=p(l),m=n,f=c["".concat(d,".").concat(m)]||c[m]||_[m]||r;return l?t.createElement(f,s(s({ref:a},i),{},{components:l})):t.createElement(f,s({ref:a},i))}));function m(e,a){var l=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=l.length,s=new Array(r);s[0]=c;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<r;p++)s[p]=l[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,l)}c.displayName="MDXCreateElement"},9304:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>_,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=l(87462),n=(l(67294),l(3905));const r={id:"poll-answer-aggregate-fields",title:"poll_answer_aggregate_fields",hide_table_of_contents:!1},s=void 0,o={unversionedId:"graphql/objects/poll-answer-aggregate-fields",id:"graphql/objects/poll-answer-aggregate-fields",title:"poll_answer_aggregate_fields",description:'aggregate fields of "poll_answer"',source:"@site/docs/07-graphql/objects/poll-answer-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/poll-answer-aggregate-fields",permalink:"/next/graphql/objects/poll-answer-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/poll-answer-aggregate-fields.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"poll-answer-aggregate-fields",title:"poll_answer_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"mutation_root",permalink:"/next/graphql/objects/mutation-root"},next:{title:"poll_answer_aggregate",permalink:"/next/graphql/objects/poll-answer-aggregate"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>poll_answer_avg_fields</code>)",id:"avg-poll_answer_avg_fields",level:4},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>poll_answer_max_fields</code>)",id:"max-poll_answer_max_fields",level:4},{value:"<code>min</code> (<code>poll_answer_min_fields</code>)",id:"min-poll_answer_min_fields",level:4},{value:"<code>stddev</code> (<code>poll_answer_stddev_fields</code>)",id:"stddev-poll_answer_stddev_fields",level:4},{value:"<code>stddev_pop</code> (<code>poll_answer_stddev_pop_fields</code>)",id:"stddev_pop-poll_answer_stddev_pop_fields",level:4},{value:"<code>stddev_samp</code> (<code>poll_answer_stddev_samp_fields</code>)",id:"stddev_samp-poll_answer_stddev_samp_fields",level:4},{value:"<code>sum</code> (<code>poll_answer_sum_fields</code>)",id:"sum-poll_answer_sum_fields",level:4},{value:"<code>var_pop</code> (<code>poll_answer_var_pop_fields</code>)",id:"var_pop-poll_answer_var_pop_fields",level:4},{value:"<code>var_samp</code> (<code>poll_answer_var_samp_fields</code>)",id:"var_samp-poll_answer_var_samp_fields",level:4},{value:"<code>variance</code> (<code>poll_answer_variance_fields</code>)",id:"variance-poll_answer_variance_fields",level:4}],i={toc:p};function _(e){let{components:a,...l}=e;return(0,n.kt)("wrapper",(0,t.Z)({},i,l,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'aggregate fields of "poll_answer"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type poll_answer_aggregate_fields {\n  avg: poll_answer_avg_fields\n  count(columns: [poll_answer_select_column!], distinct: Boolean): Int!\n  max: poll_answer_max_fields\n  min: poll_answer_min_fields\n  stddev: poll_answer_stddev_fields\n  stddev_pop: poll_answer_stddev_pop_fields\n  stddev_samp: poll_answer_stddev_samp_fields\n  sum: poll_answer_sum_fields\n  var_pop: poll_answer_var_pop_fields\n  var_samp: poll_answer_var_samp_fields\n  variance: poll_answer_variance_fields\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"avg-poll_answer_avg_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/poll-answer-avg-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"poll_answer_avg_fields")),")"),(0,n.kt)("h4",{id:"count-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"columns-poll_answer_select_column"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,n.kt)("a",{parentName:"h5",href:"../enums/poll-answer-select-column"},(0,n.kt)("inlineCode",{parentName:"a"},"[poll_answer_select_column!]")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,n.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,n.kt)("h4",{id:"max-poll_answer_max_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/poll-answer-max-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"poll_answer_max_fields")),")"),(0,n.kt)("h4",{id:"min-poll_answer_min_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/poll-answer-min-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"poll_answer_min_fields")),")"),(0,n.kt)("h4",{id:"stddev-poll_answer_stddev_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/poll-answer-stddev-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"poll_answer_stddev_fields")),")"),(0,n.kt)("h4",{id:"stddev_pop-poll_answer_stddev_pop_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/poll-answer-stddev-pop-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"poll_answer_stddev_pop_fields")),")"),(0,n.kt)("h4",{id:"stddev_samp-poll_answer_stddev_samp_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/poll-answer-stddev-samp-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"poll_answer_stddev_samp_fields")),")"),(0,n.kt)("h4",{id:"sum-poll_answer_sum_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/poll-answer-sum-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"poll_answer_sum_fields")),")"),(0,n.kt)("h4",{id:"var_pop-poll_answer_var_pop_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/poll-answer-var-pop-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"poll_answer_var_pop_fields")),")"),(0,n.kt)("h4",{id:"var_samp-poll_answer_var_samp_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/poll-answer-var-samp-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"poll_answer_var_samp_fields")),")"),(0,n.kt)("h4",{id:"variance-poll_answer_variance_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/poll-answer-variance-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"poll_answer_variance_fields")),")"))}_.isMDXComponent=!0}}]);