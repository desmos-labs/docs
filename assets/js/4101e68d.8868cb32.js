"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[96702],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return _}});var o=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),i=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=i(e.components);return o.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(t),_=a,u=d["".concat(l,".").concat(_)]||d[_]||m[_]||n;return t?o.createElement(u,p(p({ref:r},c),{},{components:t})):o.createElement(u,p({ref:r},c))}));function _(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,p=new Array(n);p[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var i=2;i<n;i++)p[i]=t[i];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70197:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return _},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return m}});var o=t(87462),a=t(63366),n=(t(67294),t(3905)),p=["components"],s={id:"reports-params-bool-exp",title:"reports_params_bool_exp",hide_table_of_contents:!1},l=void 0,i={unversionedId:"graphql/inputs/reports-params-bool-exp",id:"graphql/inputs/reports-params-bool-exp",title:"reports_params_bool_exp",description:"Boolean expression to filter rows from the table \"reports_params\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/reports-params-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/reports-params-bool-exp",permalink:"/next/graphql/inputs/reports-params-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/reports-params-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1659007892,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"reports-params-bool-exp",title:"reports_params_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report_variance_order_by",permalink:"/next/graphql/inputs/report-variance-order-by"},next:{title:"reports_params_order_by",permalink:"/next/graphql/inputs/reports-params-order-by"}},c={},m=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[reports_params_bool_exp!]</code>)",id:"_and-reports_params_bool_exp",level:4},{value:"<code>_not</code> (<code>reports_params_bool_exp</code>)",id:"_not-reports_params_bool_exp",level:4},{value:"<code>_or</code> (<code>[reports_params_bool_exp!]</code>)",id:"_or-reports_params_bool_exp",level:4},{value:"<code>params</code> (<code>jsonb_comparison_exp</code>)",id:"params-jsonb_comparison_exp",level:4}],d={toc:m};function _(e){var r=e.components,t=(0,a.Z)(e,p);return(0,n.kt)("wrapper",(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Boolean expression to filter rows from the table \"reports_params\". All fields are combined with a logical 'AND'."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input reports_params_bool_exp {\n  _and: [reports_params_bool_exp!]\n  _not: reports_params_bool_exp\n  _or: [reports_params_bool_exp!]\n  params: jsonb_comparison_exp\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"_and-reports_params_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/reports-params-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"[reports_params_bool_exp!]")),")"),(0,n.kt)("h4",{id:"_not-reports_params_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/reports-params-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"reports_params_bool_exp")),")"),(0,n.kt)("h4",{id:"_or-reports_params_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/reports-params-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"[reports_params_bool_exp!]")),")"),(0,n.kt)("h4",{id:"params-jsonb_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"params"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/jsonb-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"jsonb_comparison_exp")),")"))}_.isMDXComponent=!0}}]);