"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[22697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={id:"update",title:"Update",sidebar_position:3},i="Updating your Desmos fullnode",s={unversionedId:"fullnode/update",id:"version-2.3/fullnode/update",title:"Update",description:"These instructions are for fullnodes that are running on previous versions of Desmos and would like to update to the",source:"@site/versioned_docs/version-2.3/03-fullnode/03-update.md",sourceDirName:"03-fullnode",slug:"/fullnode/update",permalink:"/2.3/fullnode/update",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/03-fullnode/03-update.md",tags:[],version:"2.3",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:3,frontMatter:{id:"update",title:"Update",sidebar_position:3},sidebar:"version-2.3/docs",previous:{title:"Setup",permalink:"/2.3/fullnode/setup"},next:{title:"Use RocksDB",permalink:"/2.3/fullnode/rocksdb-installation"}},l={},d=[{value:"1. Reset the data",id:"1-reset-the-data",level:2},{value:"2. Upgrade the software",id:"2-upgrade-the-software",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"updating-your-desmos-fullnode"},"Updating your Desmos fullnode"),(0,o.kt)("p",null,"These instructions are for fullnodes that are running on previous versions of Desmos and would like to update to the\nlatest testnet."),(0,o.kt)("h2",{id:"1-reset-the-data"},"1. Reset the data"),(0,o.kt)("p",null,"First, remove the outdated files and reset the data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm $HOME/.desmos/config/addrbook.json $HOME/.desmos/config/genesis.json\ndesmos unsafe-reset-all\n")),(0,o.kt)("p",null,"Your node is now in a pristine state while keeping the original ",(0,o.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml"),". If you had any sentry nodes or full nodes setup before, your node will still try to connect to them, but may fail if they haven't also been upgraded."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Make sure that every node has a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"priv_validator.json"),". Do not copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," from an old node to multiple new nodes. Running two nodes with the same ",(0,o.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," will cause you to ",(0,o.kt)("strong",{parentName:"p"},"double sign"),".  ")),(0,o.kt)("h2",{id:"2-upgrade-the-software"},"2. Upgrade the software"),(0,o.kt)("p",null,"Now it is time to upgrade the software."),(0,o.kt)("p",null,"Go into the directory in which you have installed ",(0,o.kt)("inlineCode",{parentName:"p"},"desmos"),". If you have followed\nthe ",(0,o.kt)("a",{parentName:"p",href:"/2.3/fullnode/setup"},"installation instructions")," and didn't change the path, it should be ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/$USER/desmos"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd <installation-path> \n\n# E.g\n# cd /home/$USER/desmos\n")),(0,o.kt)("p",null,"Now, update the ",(0,o.kt)("inlineCode",{parentName:"p"},"desmos")," software:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git fetch --all\ngit checkout tags/$(git describe --tags `git rev-list --tags --max-count=1`)\nmake install\n")),(0,o.kt)("admonition",{title:"Select another version  ",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The above commands checks out the latest release that has been tagged on our repository. If you wish to check out a\nspecific version instead, use the following commands:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"List all the tags  ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git tags --list\n"))),(0,o.kt)("li",{parentName:"ol"},"Checkout the tag you want ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout tags/<tag>\n# Example: git checkout tags/v2.3.1\n"))))),(0,o.kt)("admonition",{title:"Note   ",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you have issues at this step, please check that you have the ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"latest stable version")," of Go installed.  ")),(0,o.kt)("p",null,"Your full node has been cleanly updated!"))}u.isMDXComponent=!0}}]);