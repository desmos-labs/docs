"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[66133],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=i(t),f=l,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||s;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var s=t.length,a=new Array(s);a[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var i=2;i<s;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},97511:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return d}});var r=t(87462),l=t(63366),s=(t(67294),t(3905)),a=["components"],o={id:"order-by",title:"order_by",hide_table_of_contents:!1},c=void 0,i={unversionedId:"graphql/enums/order-by",id:"version-4.1.0/graphql/enums/order-by",title:"order_by",description:"column ordering options",source:"@site/versioned_docs/version-4.1.0/07-graphql/enums/order-by.mdx",sourceDirName:"07-graphql/enums",slug:"/graphql/enums/order-by",permalink:"/graphql/enums/order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/enums/order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659007892,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"order-by",title:"order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"dtag_transfer_requests_select_column",permalink:"/graphql/enums/dtag-transfer-requests-select-column"},next:{title:"poll_answer_select_column",permalink:"/graphql/enums/poll-answer-select-column"}},u={},d=[{value:"Values",id:"values",level:3},{value:"<code>asc</code>",id:"asc",level:4},{value:"<code>asc_nulls_first</code>",id:"asc_nulls_first",level:4},{value:"<code>asc_nulls_last</code>",id:"asc_nulls_last",level:4},{value:"<code>desc</code>",id:"desc",level:4},{value:"<code>desc_nulls_first</code>",id:"desc_nulls_first",level:4},{value:"<code>desc_nulls_last</code>",id:"desc_nulls_last",level:4}],p={toc:d};function f(e){var n=e.components,t=(0,l.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"column ordering options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"enum order_by {\n  asc\n  asc_nulls_first\n  asc_nulls_last\n  desc\n  desc_nulls_first\n  desc_nulls_last\n}\n")),(0,s.kt)("h3",{id:"values"},"Values"),(0,s.kt)("h4",{id:"asc"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"asc"))),(0,s.kt)("p",null,"in ascending order, nulls last"),(0,s.kt)("h4",{id:"asc_nulls_first"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"asc_nulls_first"))),(0,s.kt)("p",null,"in ascending order, nulls first"),(0,s.kt)("h4",{id:"asc_nulls_last"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"asc_nulls_last"))),(0,s.kt)("p",null,"in ascending order, nulls last"),(0,s.kt)("h4",{id:"desc"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"desc"))),(0,s.kt)("p",null,"in descending order, nulls first"),(0,s.kt)("h4",{id:"desc_nulls_first"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"desc_nulls_first"))),(0,s.kt)("p",null,"in descending order, nulls first"),(0,s.kt)("h4",{id:"desc_nulls_last"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"desc_nulls_last"))),(0,s.kt)("p",null,"in descending order, nulls last"))}f.isMDXComponent=!0}}]);