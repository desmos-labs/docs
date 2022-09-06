"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[10315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),s=n(7094),u=n(12466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:c,groupId:h,className:k}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,i.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[w,O]=(0,r.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==w&&f.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==w&&(T(t),O(a),null!=h&&N(h,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},k)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:I,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},47193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},s="Desmos fullnode overview",u={unversionedId:"fullnode/overview",id:"fullnode/overview",title:"Overview",description:"A full-node is a program that fully validates transactions and blocks of a blockchain. It is distinct from a light-node",source:"@site/docs/03-fullnode/01-overview.mdx",sourceDirName:"03-fullnode",slug:"/fullnode/overview",permalink:"/next/fullnode/overview",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/03-fullnode/01-overview.mdx",tags:[],version:"current",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},sidebar:"docs",previous:{title:"F.A.Q",permalink:"/next/developers/faq"},next:{title:"Setup",permalink:"/next/fullnode/setup"}},p={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Understanding pruning",id:"understanding-pruning",level:3},{value:"Hardware requirements",id:"hardware-requirements",level:3},{value:"1. Setup your environment",id:"1-setup-your-environment",level:2},{value:"2. Install the software",id:"2-install-the-software",level:2}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"desmos-fullnode-overview"},"Desmos fullnode overview"),(0,r.kt)("p",null,"A full-node is a program that fully validates transactions and blocks of a blockchain. It is distinct from a light-node\nthat only processes block headers and a small subset of transactions. Running a full-node requires more resources than a\nlight-node but is necessary in order to be a validator. In practice, running a full-node only implies running a\nnon-compromised and up-to-date version of the software with low network latency and without downtime."),(0,r.kt)("p",null,"Of course, it is possible and encouraged for users to run full-nodes even if they do not plan to be validators."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("h3",{id:"understanding-pruning"},"Understanding pruning"),(0,r.kt)("p",null,"In order to run a full node, different hardware requirements should be met based on the pruning strategy you would like\nto use."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Pruning")," is the term used to identify the periodic action that can be taken in order to free some disk space on your\nfull node. This is done by removing old blocks data from the disk, freeing up space."),(0,r.kt)("p",null,"Inside Desmos, there are various types of pruning strategies that can be applied. The main ones are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"default"),": the last 100 states are kept in addition to every 500th state; pruning at 10 block intervals;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"nothing"),": all historic states will be saved, nothing will be deleted (i.e. archiving node);")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"everything"),": all saved states will be deleted, storing only the current state; pruning at 10 block intervals\n(At the moment this option is not recommended as it can easily corrupt the database and the node will halt);")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"custom"),": allow pruning options to be manually specified through ",(0,r.kt)("inlineCode",{parentName:"p"},"pruning-keep-recent"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pruning-keep-every"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"pruning-interval"),"."))),(0,r.kt)("h3",{id:"hardware-requirements"},"Hardware requirements"),(0,r.kt)("p",null,"You can easily understand how using a pruning strategy of ",(0,r.kt)("inlineCode",{parentName:"p"},"nothing")," will use more disk space than ",(0,r.kt)("inlineCode",{parentName:"p"},"everything"),".\nFor this reason, there are different disk space that we recommend based on the pruning strategy you choose:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Pruning strategy"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Minimum disk space"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Recommended disk space"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"everything")),(0,r.kt)("td",{parentName:"tr",align:"center"},"20 GB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"60 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"default")),(0,r.kt)("td",{parentName:"tr",align:"center"},"80 GB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"160 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"nothing")),(0,r.kt)("td",{parentName:"tr",align:"center"},"120 GB"),(0,r.kt)("td",{parentName:"tr",align:"center"},">"," 300 GB")))),(0,r.kt)("p",null,"Apart from disk space, the following requirements should be met."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Minimum CPU cores"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Recommended CPU cores"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Minimum RAM"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Recommended RAM"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"4 GB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"8 GB")))),(0,r.kt)("h2",{id:"1-setup-your-environment"},"1. Setup your environment"),(0,r.kt)("p",null,"In order to run a fullnode, you need to build ",(0,r.kt)("inlineCode",{parentName:"p"},"desmos")," which requires ",(0,r.kt)("inlineCode",{parentName:"p"},"Go"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"git"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"gcc")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," installed."),(0,r.kt)("p",null,"This process depends on your working environment."),(0,r.kt)(l.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("p",null,"The following example is based on ",(0,r.kt)("strong",{parentName:"p"},"Ubuntu (Debian)")," and assumes you are using a terminal environment by default.\nPlease run the equivalent commands if you are running other Linux distributions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Update the system\nsudo apt update\nsudo apt upgrade\n\n# Install git, gcc and make\nsudo apt install git build-essential ufw curl jq snapd --yes\n\n# Install Go with Snap\nsudo snap install go --classic\n\n# Export environment variables\necho 'export GOPATH=\"$HOME/go\"' >> ~/.profile\necho 'export GOBIN=\"$GOPATH/bin\"' >> ~/.profile\necho 'export PATH=\"$GOBIN:$PATH\"' >> ~/.profile\nsource ~/.profile\n"))),(0,r.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("p",null,"To install the required build tools,\nsimple ",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/hk/app/xcode/id497799835?l=en&mt=12"},"install Xcode from the Mac App Store"),"."),(0,r.kt)("p",null,"To install ",(0,r.kt)("inlineCode",{parentName:"p"},"Go")," on ",(0,r.kt)("strong",{parentName:"p"},"MacOS"),", the best option is to install with ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},(0,r.kt)("strong",{parentName:"a"},"Homebrew")),". To do so, open\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminal")," application and run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Install Homebrew\n/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you don't know how to open a ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminal"),", you can search it by typing ",(0,r.kt)("inlineCode",{parentName:"p"},"terminal")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Spotlight"),"(to access spotlight press cmd + spacebar simultaneously).")),(0,r.kt)("p",null,"After ",(0,r.kt)("strong",{parentName:"p"},"Homebrew")," is installed, run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install software using Homebrew\nbrew install go git curl jq\n\n# Export environment variables\necho 'export GOPATH=\"$HOME/go\"' >> ~/.profile\necho 'export GOBIN=\"$GOPATH/bin\"' >> ~/.profile\necho 'export PATH=\"$GOBIN:$PATH\"' >> ~/.profile\nsource ~/.profile\n"))),(0,r.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("p",null,"The software has not been tested on ",(0,r.kt)("strong",{parentName:"p"},"Windows")," If you are currently running a ",(0,r.kt)("strong",{parentName:"p"},"Windows")," PC, the following options\nshould be considered:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Switch to a ",(0,r.kt)("strong",{parentName:"li"},"Mac")," \ud83d\udc68\u200d\ud83d\udcbb."),(0,r.kt)("li",{parentName:"ol"},"Wipe your hard drive and install a ",(0,r.kt)("strong",{parentName:"li"},"Linux")," system on your PC."),(0,r.kt)("li",{parentName:"ol"},"Install a separate ",(0,r.kt)("strong",{parentName:"li"},"Linux")," system using ",(0,r.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/wiki/Downloads"},"VirtualBox")),(0,r.kt)("li",{parentName:"ol"},"Run a ",(0,r.kt)("strong",{parentName:"li"},"Linux")," instance on a cloud provider.")),(0,r.kt)("p",null,"Note that is still possible to build and run the software on ",(0,r.kt)("strong",{parentName:"p"},"Windows")," but it may give you unexpected results and it\nmay require additional setup to be done. If you insist to build and run the software on ",(0,r.kt)("strong",{parentName:"p"},"Windows"),", the best bet would\nbe installing the ",(0,r.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"Chocolatey")," package manager."))),(0,r.kt)("h2",{id:"2-install-the-software"},"2. Install the software"),(0,r.kt)("p",null,"Once you have set up your environment correctly, you are now ready to install the Desmos software and start your full\nnode."),(0,r.kt)("p",null,"In order to do so, you can follow our ",(0,r.kt)("a",{parentName:"p",href:"/next/fullnode/setup"},"setup guide"),"."))}c.isMDXComponent=!0}}]);