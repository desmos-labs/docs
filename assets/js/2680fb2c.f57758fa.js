"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[94740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"state-sync",title:"State Sync",sidebar_label:"State Sync",slug:"state-sync"},o="State sync mainnet",s={unversionedId:"mainnet/state-sync",id:"version-2.3/mainnet/state-sync",title:"State Sync",description:"The following seed nodes are to be used when configuring a full node for the mainnet. If you are looking for testnet seed nodes, please refer to this instead.",source:"@site/versioned_docs/version-2.3/06-mainnet/state-sync.md",sourceDirName:"06-mainnet",slug:"/mainnet/state-sync",permalink:"/2.3/mainnet/state-sync",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/06-mainnet/state-sync.md",tags:[],version:"2.3",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"state-sync",title:"State Sync",sidebar_label:"State Sync",slug:"state-sync"},sidebar:"version-2.3/docs",previous:{title:"Seeds",permalink:"/2.3/mainnet/seeds"},next:{title:"Full Sync",permalink:"/2.3/mainnet/full-sync"}},l={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"state-sync-mainnet"},"State sync mainnet"),(0,r.kt)("admonition",{title:"Mainnet only   ",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The following seed nodes are to be used when configuring a full node for the ",(0,r.kt)("strong",{parentName:"p"},"mainnet"),". If you are looking for testnet seed nodes, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/2.3/testnets/join-public/state-sync"},"this")," instead.  ")),(0,r.kt)("p",null,"In order to use this feature, you will have to edit a couple of things inside your ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/config.toml")," file,\nunder the ",(0,r.kt)("inlineCode",{parentName:"p"},"statesync")," section:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enable state sync by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"enable = true"),";")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the RPC addresses from where to get the snapshots using the ",(0,r.kt)("inlineCode",{parentName:"p"},"rpc_servers")," field.",(0,r.kt)("br",{parentName:"p"}),"\n","You can ask inside our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.desmos.network/"},"discord")," for them.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get a trusted chain height, and the associated block hash. To do this, you will have to:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get the current chain height by running:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -s <rpc-address>/commit  | jq "{height: .result.signed_header.header.height}"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once you have the current chain height, get a height that is a little bit lower (200 blocks) than the current one.",(0,r.kt)("br",{parentName:"p"}),"\n","To do this you can execute:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -s <rpc-address>/commit?height=<your-height> | jq "{height: .result.signed_header.header.height, hash: .result.signed_header.commit.block_id.hash}"\n\n# Example\n# curl -s https://rpc-desmos.itastakers.com/commit?height=100000 | jq "{height: .result.signed_header.header.height, hash: .result.signed_header.commit.block_id.hash}"\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now that you have a trusted height and block hash, use those values as the ",(0,r.kt)("inlineCode",{parentName:"p"},"trust_height")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"trust_hash")," values. Also,\nmake sure they're the right values for the Desmos version you're starting to synchronize:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"State sync height range")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Desmos version")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"0 - 1149679")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"v1.0.1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1149680 - 1347304")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"v2.3.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"> 1347305")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"v2.3.1"))))))),(0,r.kt)("p",null,"Here is an example of what the ",(0,r.kt)("inlineCode",{parentName:"p"},"statesync")," section of your ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/config.toml")," file should look like in the end (the ",(0,r.kt)("inlineCode",{parentName:"p"},"trust_height")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"trust_hash")," should contain your values instead):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'enable = true\n\nrpc_servers = "rpc-desmos.itastakers.com:26657,135.181.60.250:26557"\ntrust_height = 139142\ntrust_hash = "F55CA4C56CAC348E453A38D6BEBD70B1CD92F7431214AE167B09EFDA478186BE"\ntrust_period = "336h0m0s"\n')))}d.isMDXComponent=!0}}]);