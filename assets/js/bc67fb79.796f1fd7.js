"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[10947],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(t),m=o,_=h["".concat(l,".").concat(m)]||h[m]||d[m]||r;return t?a.createElement(_,s(s({ref:n},p),{},{components:t})):a.createElement(_,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=h;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},15990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const r={id:"jsonb-comparison-exp",title:"jsonb_comparison_exp",hide_table_of_contents:!1},s=void 0,i={unversionedId:"graphql/inputs/jsonb-comparison-exp",id:"graphql/inputs/jsonb-comparison-exp",title:"jsonb_comparison_exp",description:"Boolean expression to compare columns of type \"jsonb\". All fields are combined with logical 'AND'.",source:"@site/docs/07-graphql/inputs/jsonb-comparison-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/jsonb-comparison-exp",permalink:"/next/graphql/inputs/jsonb-comparison-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/jsonb-comparison-exp.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"jsonb-comparison-exp",title:"jsonb_comparison_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Int_comparison_exp",permalink:"/next/graphql/inputs/int-comparison-exp"},next:{title:"poll_answer_bool_exp",permalink:"/next/graphql/inputs/poll-answer-bool-exp"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>_contained_in</code> (<code>jsonb</code>)",id:"_contained_in-jsonb",level:4},{value:"<code>_contains</code> (<code>jsonb</code>)",id:"_contains-jsonb",level:4},{value:"<code>_eq</code> (<code>jsonb</code>)",id:"_eq-jsonb",level:4},{value:"<code>_gt</code> (<code>jsonb</code>)",id:"_gt-jsonb",level:4},{value:"<code>_gte</code> (<code>jsonb</code>)",id:"_gte-jsonb",level:4},{value:"<code>_has_key</code> (<code>String</code>)",id:"_has_key-string",level:4},{value:"<code>_has_keys_all</code> (<code>[String!]</code>)",id:"_has_keys_all-string",level:4},{value:"<code>_has_keys_any</code> (<code>[String!]</code>)",id:"_has_keys_any-string",level:4},{value:"<code>_in</code> (<code>[jsonb!]</code>)",id:"_in-jsonb",level:4},{value:"<code>_is_null</code> (<code>Boolean</code>)",id:"_is_null-boolean",level:4},{value:"<code>_lt</code> (<code>jsonb</code>)",id:"_lt-jsonb",level:4},{value:"<code>_lte</code> (<code>jsonb</code>)",id:"_lte-jsonb",level:4},{value:"<code>_neq</code> (<code>jsonb</code>)",id:"_neq-jsonb",level:4},{value:"<code>_nin</code> (<code>[jsonb!]</code>)",id:"_nin-jsonb",level:4}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Boolean expression to compare columns of type \"jsonb\". All fields are combined with logical 'AND'."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input jsonb_comparison_exp {\n  _contained_in: jsonb\n  _contains: jsonb\n  _eq: jsonb\n  _gt: jsonb\n  _gte: jsonb\n  _has_key: String\n  _has_keys_all: [String!]\n  _has_keys_any: [String!]\n  _in: [jsonb!]\n  _is_null: Boolean\n  _lt: jsonb\n  _lte: jsonb\n  _neq: jsonb\n  _nin: [jsonb!]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"_contained_in-jsonb"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_contained_in"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,o.kt)("inlineCode",{parentName:"a"},"jsonb")),")"),(0,o.kt)("p",null,"is the column contained in the given json value"),(0,o.kt)("h4",{id:"_contains-jsonb"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_contains"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,o.kt)("inlineCode",{parentName:"a"},"jsonb")),")"),(0,o.kt)("p",null,"does the column contain the given json value at the top level"),(0,o.kt)("h4",{id:"_eq-jsonb"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_eq"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,o.kt)("inlineCode",{parentName:"a"},"jsonb")),")"),(0,o.kt)("h4",{id:"_gt-jsonb"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_gt"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,o.kt)("inlineCode",{parentName:"a"},"jsonb")),")"),(0,o.kt)("h4",{id:"_gte-jsonb"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_gte"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,o.kt)("inlineCode",{parentName:"a"},"jsonb")),")"),(0,o.kt)("h4",{id:"_has_key-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_has_key"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"does the string exist as a top-level key in the column"),(0,o.kt)("h4",{id:"_has_keys_all-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_has_keys_all"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String!]")),")"),(0,o.kt)("p",null,"do all of these strings exist as top-level keys in the column"),(0,o.kt)("h4",{id:"_has_keys_any-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_has_keys_any"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String!]")),")"),(0,o.kt)("p",null,"do any of these strings exist as top-level keys in the column"),(0,o.kt)("h4",{id:"_in-jsonb"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_in"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,o.kt)("inlineCode",{parentName:"a"},"[jsonb!]")),")"),(0,o.kt)("h4",{id:"_is_null-boolean"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_is_null"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"_lt-jsonb"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_lt"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,o.kt)("inlineCode",{parentName:"a"},"jsonb")),")"),(0,o.kt)("h4",{id:"_lte-jsonb"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_lte"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,o.kt)("inlineCode",{parentName:"a"},"jsonb")),")"),(0,o.kt)("h4",{id:"_neq-jsonb"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_neq"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,o.kt)("inlineCode",{parentName:"a"},"jsonb")),")"),(0,o.kt)("h4",{id:"_nin-jsonb"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_nin"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,o.kt)("inlineCode",{parentName:"a"},"[jsonb!]")),")"))}d.isMDXComponent=!0}}]);