"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[95446],{3905:(e,r,o)=>{o.d(r,{Zo:()=>s,kt:()=>u});var t=o(67294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function d(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function l(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=t.createContext({}),c=function(e){var r=t.useContext(i),o=r;return e&&(o="function"==typeof e?e(r):d(d({},r),e)),o},s=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},b=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=c(o),u=n,y=b["".concat(i,".").concat(u)]||b[u]||p[u]||a;return o?t.createElement(y,d(d({ref:r},s),{},{components:o})):t.createElement(y,d({ref:r},s))}));function u(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,d=new Array(a);d[0]=b;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,d[1]=l;for(var c=2;c<a;c++)d[c]=o[c];return t.createElement.apply(null,d)}return t.createElement.apply(null,o)}b.displayName="MDXCreateElement"},55557:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=o(87462),n=(o(67294),o(3905));const a={id:"user-block-order-by",title:"user_block_order_by",hide_table_of_contents:!1},d=void 0,l={unversionedId:"graphql/inputs/user-block-order-by",id:"version-4.1.0/graphql/inputs/user-block-order-by",title:"user_block_order_by",description:'Ordering options when selecting data from "user_block".',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/user-block-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/user-block-order-by",permalink:"/4.1.0/graphql/inputs/user-block-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/user-block-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"user-block-order-by",title:"user_block_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"user_block_min_order_by",permalink:"/4.1.0/graphql/inputs/user-block-min-order-by"},next:{title:"application_link_oracle_request",permalink:"/4.1.0/graphql/objects/application-link-oracle-request"}},i={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>blocked</code> (<code>profile_order_by</code>)",id:"blocked-profile_order_by",level:4},{value:"<code>blocked_user_address</code> (<code>order_by</code>)",id:"blocked_user_address-order_by",level:4},{value:"<code>blocker</code> (<code>profile_order_by</code>)",id:"blocker-profile_order_by",level:4},{value:"<code>blocker_address</code> (<code>order_by</code>)",id:"blocker_address-order_by",level:4},{value:"<code>reason</code> (<code>order_by</code>)",id:"reason-order_by",level:4},{value:"<code>subspace</code> (<code>order_by</code>)",id:"subspace-order_by",level:4}],s={toc:c};function p(e){let{components:r,...o}=e;return(0,n.kt)("wrapper",(0,t.Z)({},s,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Ordering options when selecting data from "user_block".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input user_block_order_by {\n  blocked: profile_order_by\n  blocked_user_address: order_by\n  blocker: profile_order_by\n  blocker_address: order_by\n  reason: order_by\n  subspace: order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"blocked-profile_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"blocked"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/profile-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"profile_order_by")),")"),(0,n.kt)("h4",{id:"blocked_user_address-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"blocked_user_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"blocker-profile_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"blocker"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/profile-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"profile_order_by")),")"),(0,n.kt)("h4",{id:"blocker_address-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"blocker_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"reason-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"reason"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"subspace-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}p.isMDXComponent=!0}}]);