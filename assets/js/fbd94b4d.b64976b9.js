"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[52863],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||r;return a?o.createElement(h,s(s({ref:t},d),{},{components:a})):o.createElement(h,s({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},74967:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=a(87462),n=(a(67294),a(3905));const r={id:"update",title:"Update",sidebar_label:"Update",slug:"update"},s="Upgrade your Desmos full node",i={unversionedId:"fullnode/update",id:"version-4.1.0/fullnode/update",title:"Update",description:"These instructions are for full nodes that are running on previous versions of Desmos and need to update to the latest version of the Desmos software.",source:"@site/versioned_docs/version-4.1.0/03-fullnode/04-update.md",sourceDirName:"03-fullnode",slug:"/fullnode/update",permalink:"/4.1.0/fullnode/update",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/03-fullnode/04-update.md",tags:[],version:"4.1.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:4,frontMatter:{id:"update",title:"Update",sidebar_label:"Update",slug:"update"},sidebar:"docs",previous:{title:"Use Cosmovisor",permalink:"/4.1.0/fullnode/cosmovisor"},next:{title:"Reset Data",permalink:"/4.1.0/fullnode/reset-data"}},l={},p=[{value:"Manual upgrade",id:"manual-upgrade",level:2},{value:"Cosmovisor",id:"cosmovisor",level:3},{value:"Automatic upgrade (with Cosmovisor)",id:"automatic-upgrade-with-cosmovisor",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"upgrade-your-desmos-full-node"},"Upgrade your Desmos full node"),(0,n.kt)("p",null,"These instructions are for full nodes that are running on previous versions of Desmos and need to update to the latest version of the Desmos software."),(0,n.kt)("h2",{id:"manual-upgrade"},"Manual upgrade"),(0,n.kt)("p",null,"The following instructions explain how to ",(0,n.kt)("strong",{parentName:"p"},"manually upgrade")," the node:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Stop your node:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"bash sudo systemctl stop desmosd"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Backup your validator files:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cp ~/.desmos/config/priv_validator_key.json ~/priv_validator_key.json\ncp ~/.desmos/config/node_key.json ~/node_key.json\ncp ~/.desmos/data/priv_validator_state.json ~/priv_validator_state.json\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go into the directory in which you have installed ",(0,n.kt)("inlineCode",{parentName:"p"},"desmos"),". If you have followed\nthe installation instructions and didn't change the path, it should be ",(0,n.kt)("inlineCode",{parentName:"p"},"~/desmos"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"```bash\ncd <installation-path> \n\n# e.g.\n# cd ~/desmos\n```\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now, update the ",(0,n.kt)("inlineCode",{parentName:"p"},"desmos")," software:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git fetch --tags\ngit checkout tags/$(git describe --tags `git rev-list --tags --max-count=1`)\nmake build && make install\n")))),(0,n.kt)("admonition",{title:"Select the version you need  ",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The above commands checks out the latest release that has been tagged on our repository. If you wish to check out a specific version instead, use the following commands:"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"List all the tags  ",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git tags --list\n"))),(0,n.kt)("li",{parentName:"ol"},"Checkout the tag you want ",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout tags/<tag>\n# Example: git checkout tags/v4.1.0\n"))))),(0,n.kt)("admonition",{title:"Note   ",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you have issues at this step, please check that you have the ",(0,n.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"latest stable version")," of Go installed.  ")),(0,n.kt)("h3",{id:"cosmovisor"},"Cosmovisor"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If your node is using cosmovisor, and you've followed the above procedure to manually upgrade, don't forget to move the upgraded binary inside the cosmovisor folder by typing the following command:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cp build/desmos ~/.desmos/cosmovisor/current/bin/desmos\n")),(0,n.kt)("p",{parentName:"admonition"},"Then check if the version of cosmovisor matches with the latest desmos version by running:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cosmovisor version\n"))),(0,n.kt)("h2",{id:"automatic-upgrade-with-cosmovisor"},"Automatic upgrade (with Cosmovisor)"),(0,n.kt)("p",null,"Here below it is explained how to prepare your node to be able to ",(0,n.kt)("strong",{parentName:"p"},"automatically upgrade")," itself."),(0,n.kt)("p",null,"1.Cosmovisor handles the automatic upgrades that happens after the ",(0,n.kt)("em",{parentName:"p"},"upgrade governance proposal")," passes.\nIf during an upgrade your node doesn't have enough space left or if the cosmovisor backup it is taking too much\ntime, you can do the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open your ",(0,n.kt)("inlineCode",{parentName:"li"},"desmosd")," editor:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl edit desmosd --full\n"))),(0,n.kt)("li",{parentName:"ol"},"Add the following line after the last ",(0,n.kt)("inlineCode",{parentName:"li"},"Environment")," line:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},' Environment="UNSAFE_SKIP_BACKUP=true"\n')))))}u.isMDXComponent=!0}}]);