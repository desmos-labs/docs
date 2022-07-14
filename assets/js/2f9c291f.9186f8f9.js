"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[59770],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8245:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=n(87462),i=n(63366),s=(n(67294),n(3905)),o=["components"],a={id:"genesis-file",title:"Genesis File",sidebar_label:"Genesis File",slug:"genesis-file"},l="Genesis file",c={unversionedId:"testnets/join-public/genesis-file",id:"version-3/testnets/join-public/genesis-file",title:"Genesis File",description:"The following seed nodes are to be used when configuring a full node for the testnet. If you are looking for mainnet seed nodes, please refer to this instead.",source:"@site/versioned_docs/version-3/05-testnets/03-join-public/genesis-file.md",sourceDirName:"05-testnets/03-join-public",slug:"/testnets/join-public/genesis-file",permalink:"/3/testnets/join-public/genesis-file",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/05-testnets/03-join-public/genesis-file.md",tags:[],version:"3",lastUpdatedAt:1657817134,formattedLastUpdatedAt:"7/14/2022",frontMatter:{id:"genesis-file",title:"Genesis File",sidebar_label:"Genesis File",slug:"genesis-file"},sidebar:"version-3/docs",previous:{title:"Setup",permalink:"/3/testnets/join-public/setup"},next:{title:"Seeds",permalink:"/3/testnets/join-public/seeds"}},u={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"genesis-file"},"Genesis file"),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Testnet only   ")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The following seed nodes are to be used when configuring a full node for the ",(0,s.kt)("strong",{parentName:"p"},"testnet"),". If you are looking for mainnet seed nodes, please refer to ",(0,s.kt)("a",{parentName:"p",href:"/3/mainnet/genesis-file"},"this")," instead."))),(0,s.kt)("p",null,"To connect to the ",(0,s.kt)("inlineCode",{parentName:"p"},"morpheus")," testnets, you will need the corresponding genesis file of each testnet. Visit the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/morpheus"},"testnet repo")," and download the correct genesis file by running the following command."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Download the existing genesis file for the testnet\n# Replace <chain-id> with the id of the testnet you would like to join\ncurl https://raw.githubusercontent.com/desmos-labs/morpheus/master/<chain-id>/genesis.json > $HOME/.desmos/config/genesis.json\n")))}f.isMDXComponent=!0}}]);