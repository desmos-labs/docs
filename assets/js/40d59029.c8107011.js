"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[15879],{3905:(e,t,s)=>{s.d(t,{Zo:()=>d,kt:()=>m});var n=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)s=l[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)s=l[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(s),m=a,k=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return s?n.createElement(k,r(r({ref:t},d),{},{components:s})):n.createElement(k,r({ref:t},d))}));function m(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=s.length,r=new Array(l);r[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=s[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,s)}c.displayName="MDXCreateElement"},79881:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=s(87462),a=(s(67294),s(3905));const l={id:"client",title:"Client",sidebar_label:"Client",slug:"client"},r="Client",o={unversionedId:"developers/modules/relationships/client",id:"version-4.2.0/developers/modules/relationships/client",title:"Client",description:"CLI",source:"@site/versioned_docs/version-4.2.0/02-developers/02-modules/relationships/06-client.md",sourceDirName:"02-developers/02-modules/relationships",slug:"/developers/modules/relationships/client",permalink:"/developers/modules/relationships/client",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/02-developers/02-modules/relationships/06-client.md",tags:[],version:"4.2.0",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",sidebarPosition:6,frontMatter:{id:"client",title:"Client",sidebar_label:"Client",slug:"client"},sidebar:"docs",previous:{title:"Events",permalink:"/developers/modules/relationships/events"},next:{title:"Overview",permalink:"/developers/modules/subspaces/overview"}},i={},p=[{value:"CLI",id:"cli",level:2},{value:"Query",id:"query",level:3},{value:"relationships",id:"relationships",level:4},{value:"blocks",id:"blocks",level:4},{value:"Transactions",id:"transactions",level:3},{value:"create-relationship",id:"create-relationship",level:4},{value:"delete-relationship",id:"delete-relationship",level:4},{value:"block",id:"block",level:4},{value:"unblock",id:"unblock",level:4},{value:"gRPC",id:"grpc",level:2},{value:"Relationships",id:"relationships-1",level:3},{value:"Blocks",id:"blocks-1",level:3},{value:"REST",id:"rest",level:2},{value:"Relationships",id:"relationships-2",level:2},{value:"Blocks",id:"blocks-2",level:2}],d={toc:p};function u(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"client"},"Client"),(0,a.kt)("h2",{id:"cli"},"CLI"),(0,a.kt)("p",null,"A user can query and interact with the ",(0,a.kt)("inlineCode",{parentName:"p"},"relationships")," module using the CLI. "),(0,a.kt)("h3",{id:"query"},"Query"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," commands allow users to query the ",(0,a.kt)("inlineCode",{parentName:"p"},"relationships")," state. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query relationships --help\n")),(0,a.kt)("h4",{id:"relationships"},"relationships"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"relationships")," command allows user to query the relationships inside a subspace having a specific id, providing an optional creator and counterparty. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query relationships [subspace-id] [[creator]] [[counterparty]] [flags]\n")),(0,a.kt)("p",null,"Example: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query relationships relationships 1 desmos1... desmos1...\n")),(0,a.kt)("p",null,"Example Output: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'pagination:\n  next_key: null\n  total: "0"\nrelationships:\n- counterparty: desmos1tamzg6rfj9wlmqhthgfmn9awq0d8ssgfr8fjns\n  creator: desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu\n  subspace_id: "1"\n')),(0,a.kt)("h4",{id:"blocks"},"blocks"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"blocks")," command allows to query the user blocks stored inside a subspace having a given id, providing an optional blocker and blocked addresses."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query relationships blocks [subspace-id] [[blocker]] [[blocked]] [flags]\n")),(0,a.kt)("p",null,"Example: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query relationships blocks 1 desmos1... desmos1...\n")),(0,a.kt)("p",null,"Example Output: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'blocks:\n  - blocked: desmos1tamzg6rfj9wlmqhthgfmn9awq0d8ssgfr8fjns\n    blocker: desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu\n    reason: ""\n    subspace_id: "1"\npagination:\n  next_key: null\n  total: "0"\n')),(0,a.kt)("h3",{id:"transactions"},"Transactions"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tx")," commands allow users to interact with the ",(0,a.kt)("inlineCode",{parentName:"p"},"relationships")," module. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx relationships --help\n")),(0,a.kt)("h4",{id:"create-relationship"},"create-relationship"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"create-relationship")," allows users to create a relationship with another user inside a specific subspace."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx relationships create-relationship [counterparty] [subspace-id] [flags]\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx relationships create-relationship desmos1... 1\n")),(0,a.kt)("h4",{id:"delete-relationship"},"delete-relationship"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"delete-relationship")," allows users to delete an existing relationship. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx relationships delete-relationship [counterparty] [subspace-id] [flags]\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx relationships delete-relationship desmos1... 1\n")),(0,a.kt)("h4",{id:"block"},"block"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"block")," command allows users to block another user inside a specific subspace, optionally providing a reason. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx relationships block [address] [subspace] [[reason]] [flags]\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'desmos tx relationships block desmos1... 1 "My reason"\n')),(0,a.kt)("h4",{id:"unblock"},"unblock"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"unblock")," command allows users to unblock a previously blocked user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx relationships unblock [address] [subspace] [flags]\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx relationships unblock desmos1... 1\n")),(0,a.kt)("h2",{id:"grpc"},"gRPC"),(0,a.kt)("p",null,"A user can query the ",(0,a.kt)("inlineCode",{parentName:"p"},"relationships")," module gRPC endpoints."),(0,a.kt)("h3",{id:"relationships-1"},"Relationships"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Relationships")," endpoint allows users to query for the relationships inside a subspace having a given id, optionally providing user and counterparty addresses."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.relationships.v1.Query/Relationships\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n  -d \'{"subspace_id": "1"}\' localhost:9090 desmos.relationships.v1.Query/Relationships\n')),(0,a.kt)("p",null,"Example Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "relationships": [\n    {\n      "creator": "desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu",\n      "counterparty": "desmos1tamzg6rfj9wlmqhthgfmn9awq0d8ssgfr8fjns",\n      "subspaceId": "1"\n    }\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n')),(0,a.kt)("h3",{id:"blocks-1"},"Blocks"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Blocks")," endpoint allows users to query for the user blocks inside a subspace having a given id, optionally providing user and counterparty addresses."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.relationships.v1.Query/Blocks\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n  -d \'{"subspace_id": "1"}\' localhost:9090 desmos.relationships.v1.Query/Blocks\n')),(0,a.kt)("p",null,"Example Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "blocks": [\n    {\n      "blocker": "desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu",\n      "blocked": "desmos1tamzg6rfj9wlmqhthgfmn9awq0d8ssgfr8fjns",\n      "subspaceId": "1"\n    }\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n')),(0,a.kt)("h2",{id:"rest"},"REST"),(0,a.kt)("p",null,"A user can query the ",(0,a.kt)("inlineCode",{parentName:"p"},"relationships")," module using REST endpoints. "),(0,a.kt)("h2",{id:"relationships-2"},"Relationships"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"relationships")," endpoint allows users to query for the relationships inside a subspace having a given id, optionally providing user and counterparty addresses."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/desmos/relationships/v1/relationships?subspace_id={subspaceID}&user={userAddress}&counterparty={counterpartyAddress}\n")),(0,a.kt)("h2",{id:"blocks-2"},"Blocks"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"blocks")," endpoint allows users to query for the user blocks inside a subspace having a given id, optionally providing user and counterparty addresses."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/desmos/relationships/v1/blocks?subspace_id={subspaceID}&blocker={blockerAddress}&blocked={blockedAddress}\n")))}u.isMDXComponent=!0}}]);