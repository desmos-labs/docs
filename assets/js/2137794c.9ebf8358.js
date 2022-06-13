"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[2356],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5110:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Installing Desmos",c={unversionedId:"install",id:"version-3/install",title:"Installing Desmos",description:"Desmos is represented by the executable named desmos.",source:"@site/versioned_docs/version-3/install.md",sourceDirName:".",slug:"/install",permalink:"/install",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/install.md",tags:[],version:"3",lastUpdatedAt:1655125428,formattedLastUpdatedAt:"6/13/2022",frontMatter:{}},p={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Installation procedure",id:"installation-procedure",level:2},{value:"Verify the installation",id:"verify-the-installation",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-desmos"},"Installing Desmos"),(0,o.kt)("p",null,"Desmos is represented by the executable named ",(0,o.kt)("inlineCode",{parentName:"p"},"desmos"),"."),(0,o.kt)("p",null,"It contains the Command Line Interface (CLI) that you can use to interface with the Desmos blockchain, as well as the\ndaemon that allows you take part to a Desmos blockchain either as a full node or\na ",(0,o.kt)("a",{parentName:"p",href:"/validators/overview"},"validator node"),"."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"The requirements you must satisfy before attempting to install Desmos are the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Having Go 1.15 or later installed.",(0,o.kt)("br",{parentName:"p"}),"\n","If you dont have it, you can download it ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"here"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Having Git installed.",(0,o.kt)("br",{parentName:"p"}),"\n","If you need to install it, you can download the installer on the ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"official website"),"."))),(0,o.kt)("h2",{id:"installation-procedure"},"Installation procedure"),(0,o.kt)("p",null,"To install ",(0,o.kt)("inlineCode",{parentName:"p"},"desmos")," execute the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /home/$USER\ngit clone https://github.com/desmos-labs/desmos && cd desmos\nmake install\n")),(0,o.kt)("h3",{id:"verify-the-installation"},"Verify the installation"),(0,o.kt)("p",null,"To verify you have correctly ",(0,o.kt)("inlineCode",{parentName:"p"},"desmos"),", try running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"desmos version\n")),(0,o.kt)("p",null,"If you get an error like ",(0,o.kt)("inlineCode",{parentName:"p"},"No command found"),", please make sure you have appended your ",(0,o.kt)("inlineCode",{parentName:"p"},"GOBIN")," folder path to your\nsystem's ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environmental variable value."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Congratulations!   ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You have successfully installed ",(0,o.kt)("inlineCode",{parentName:"p"},"desmos"),"!  "))))}d.isMDXComponent=!0}}]);