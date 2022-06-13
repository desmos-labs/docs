"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[2697],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6650:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"update",title:"Update",sidebar_position:3},l="Updating your Desmos fullnode",d={unversionedId:"fullnode/update",id:"version-2.3/fullnode/update",title:"Update",description:"These instructions are for fullnodes that are running on previous versions of Desmos and would like to update to the",source:"@site/versioned_docs/version-2.3/03-fullnode/03-update.md",sourceDirName:"03-fullnode",slug:"/fullnode/update",permalink:"/2.3/fullnode/update",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/03-fullnode/03-update.md",tags:[],version:"2.3",lastUpdatedAt:1655125428,formattedLastUpdatedAt:"6/13/2022",sidebarPosition:3,frontMatter:{id:"update",title:"Update",sidebar_position:3},sidebar:"version-2.3/docs",previous:{title:"Setup",permalink:"/2.3/fullnode/setup"},next:{title:"Use RocksDB",permalink:"/2.3/fullnode/rocksdb-installation"}},p={},u=[{value:"1. Reset the data",id:"1-reset-the-data",level:2},{value:"2. Upgrade the software",id:"2-upgrade-the-software",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"updating-your-desmos-fullnode"},"Updating your Desmos fullnode"),(0,r.kt)("p",null,"These instructions are for fullnodes that are running on previous versions of Desmos and would like to update to the\nlatest testnet."),(0,r.kt)("h2",{id:"1-reset-the-data"},"1. Reset the data"),(0,r.kt)("p",null,"First, remove the outdated files and reset the data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm $HOME/.desmos/config/addrbook.json $HOME/.desmos/config/genesis.json\ndesmos unsafe-reset-all\n")),(0,r.kt)("p",null,"Your node is now in a pristine state while keeping the original ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml"),". If you had any sentry nodes or full nodes setup before, your node will still try to connect to them, but may fail if they haven't also been upgraded."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure that every node has a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator.json"),". Do not copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," from an old node to multiple new nodes. Running two nodes with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," will cause you to ",(0,r.kt)("strong",{parentName:"p"},"double sign"),".  "))),(0,r.kt)("h2",{id:"2-upgrade-the-software"},"2. Upgrade the software"),(0,r.kt)("p",null,"Now it is time to upgrade the software."),(0,r.kt)("p",null,"Go into the directory in which you have installed ",(0,r.kt)("inlineCode",{parentName:"p"},"desmos"),". If you have followed\nthe ",(0,r.kt)("a",{parentName:"p",href:"/2.3/fullnode/setup"},"installation instructions")," and didn't change the path, it should be ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/$USER/desmos"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd <installation-path> \n\n# E.g\n# cd /home/$USER/desmos\n")),(0,r.kt)("p",null,"Now, update the ",(0,r.kt)("inlineCode",{parentName:"p"},"desmos")," software:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git fetch --all\ngit checkout tags/$(git describe --tags `git rev-list --tags --max-count=1`)\nmake install\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Select another version  ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The above commands checks out the latest release that has been tagged on our repository. If you wish to check out a\nspecific version instead, use the following commands:"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"List all the tags  ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git tags --list\n"))),(0,r.kt)("li",{parentName:"ol"},"Checkout the tag you want ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout tags/<tag>\n# Example: git checkout tags/v2.3.1\n")))))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note   ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you have issues at this step, please check that you have the ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"latest stable version")," of Go installed.  "))),(0,r.kt)("p",null,"Your full node has been cleanly updated!"))}m.isMDXComponent=!0}}]);