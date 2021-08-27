"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[2900],{3905:function(e,n,o){o.d(n,{Zo:function(){return d},kt:function(){return c}});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),u=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},d=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=u(o),c=r,h=m["".concat(l,".").concat(c)]||m[c]||p[c]||i;return o?t.createElement(h,s(s({ref:n},d),{},{components:o})):t.createElement(h,s({ref:n},d))}));function c(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var u=2;u<i;u++)s[u]=o[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1789:function(e,n,o){o.r(n),o.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var t=o(7462),r=o(3366),i=(o(7294),o(3905)),s=["components"],a={id:"cosmovisor",title:"Use Cosmovisor",sidebar_position:5},l="Cosmovisor",u={unversionedId:"running-a-full-node/cosmovisor",id:"version-mainnet/running-a-full-node/cosmovisor",isDocsHomePage:!1,title:"Use Cosmovisor",description:"The Cosmos team provides a tool named Cosmovisor that allows your node to perform some automatic operations when needed. This is particularly useful when dealing with on-chain upgrades, because Cosmovisor can help you by taking care of downloading the updated binary and restarting the node for you.",source:"@site/versioned_docs/version-mainnet/03-running-a-full-node/05-cosmovisor.md",sourceDirName:"03-running-a-full-node",slug:"/running-a-full-node/cosmovisor",permalink:"/running-a-full-node/cosmovisor",editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-mainnet/03-running-a-full-node/05-cosmovisor.md",version:"mainnet",lastUpdatedAt:1630057329,formattedLastUpdatedAt:"8/27/2021",sidebarPosition:5,frontMatter:{id:"cosmovisor",title:"Use Cosmovisor",sidebar_position:5},sidebar:"version-mainnet/docs",previous:{title:"Use RocksDB",permalink:"/running-a-full-node/rocksdb-installation"},next:{title:"Overview",permalink:"/validators/overview"}},d=[{value:"Setup",id:"setup",children:[{value:"1. Downloading Cosmovisor",id:"1-downloading-cosmovisor",children:[]},{value:"2. Setting up environmental variables",id:"2-setting-up-environmental-variables",children:[]},{value:"3. Copying Desmos files in the proper folders",id:"3-copying-desmos-files-in-the-proper-folders",children:[]},{value:"4. Restarting your node",id:"4-restarting-your-node",children:[]}]}],p={toc:d};function m(e){var n=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cosmovisor"},"Cosmovisor"),(0,i.kt)("p",null,"The Cosmos team provides a tool named ",(0,i.kt)("em",{parentName:"p"},"Cosmovisor")," that allows your node to perform some automatic operations when needed. This is particularly useful when dealing with on-chain upgrades, because Cosmovisor can help you by taking care of downloading the updated binary and restarting the node for you.  "),(0,i.kt)("p",null,"If you want to learn how to setup Cosmovisor inside your full or validator node, please follow the guide below. "),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("h3",{id:"1-downloading-cosmovisor"},"1. Downloading Cosmovisor"),(0,i.kt)("p",null,"The first thing you have to do is downloading the ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmovisor")," binary file. To do this you can execute the following command: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"go get github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor\n")),(0,i.kt)("p",null,"This will download all the dependencies and build ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmovisor")," for your machine. Once that's done, you can execute the following command to make sure that ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmovisor")," is installed: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cosmovisor version\n")),(0,i.kt)("p",null,"It should print ",(0,i.kt)("inlineCode",{parentName:"p"},"DAEMON_NAME is not set"),". If that's the case, you have installed ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmovisor")," successfully."),(0,i.kt)("h3",{id:"2-setting-up-environmental-variables"},"2. Setting up environmental variables"),(0,i.kt)("p",null,"Cosmovisor relies on the following environmental variables to work properly:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DAEMON_HOME")," is the location where upgrade binaries should be kept (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"$HOME/.desmos"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DAEMON_NAME")," is the name of the binary itself (eg. ",(0,i.kt)("inlineCode",{parentName:"li"},"desmos"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DAEMON_ALLOW_DOWNLOAD_BINARIES")," (",(0,i.kt)("em",{parentName:"li"},"optional"),") if set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," will enable auto-downloading of new binaries\n(for security reasons, this is intended for full nodes rather than validators)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DAEMON_RESTART_AFTER_UPGRADE")," (",(0,i.kt)("em",{parentName:"li"},"optional"),") if set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," it will restart the sub-process with the same\ncommand line arguments and flags (but new binary) after a successful upgrade. By default, ",(0,i.kt)("inlineCode",{parentName:"li"},"cosmovisor")," dies\nafterwards and allows the supervisor to restart it if needed. Note that this will not auto-restart the child\nif there was an error.")),(0,i.kt)("p",null,"To properly set those variables, we suggest you to edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.profile")," file so that they are loaded when you log into your machine. To edit this file you can simply run "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo nano ~/.profile\n")),(0,i.kt)("p",null,"Once you're in, we suggest you to set the following values: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export DAEMON_HOME=$HOME/.desmos\nexport DAEMON_NAME=desmos\nexport DAEMON_ALLOW_DOWNLOAD_BINARIES=true\nexport DAEMON_RESTART_AFTER_UPGRADE=true\n")),(0,i.kt)("p",null,"Once you're done, please reload the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.profile")," file by running "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"source ~/.profile\n")),(0,i.kt)("p",null,"You can verify the values set by running "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"echo $DAEMON_NAME\n")),(0,i.kt)("p",null,"If this outputs ",(0,i.kt)("inlineCode",{parentName:"p"},"desmos")," you are ready to go."),(0,i.kt)("h3",{id:"3-copying-desmos-files-in-the-proper-folders"},"3. Copying Desmos files in the proper folders"),(0,i.kt)("p",null,"In order to work properly, Cosmovisor needs the ",(0,i.kt)("inlineCode",{parentName:"p"},"desmos")," binary to be placed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.desmos/cosmovisor/genesis/bin")," folder. To do this you can simply run the following command: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ~/.desmos/cosmovisor/genesis/bin/\ncp $(which desmos) ~/.desmos/cosmovisor/genesis/bin/\n")),(0,i.kt)("p",null,"To verify that you have setup everything correctly, you can run the following command: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cosmovisor version\n")),(0,i.kt)("p",null,"This should output the Desmos version."),(0,i.kt)("h3",{id:"4-restarting-your-node"},"4. Restarting your node"),(0,i.kt)("p",null,"Finally, if you've setup everything correctly you can now restart your node. To do this you can simply stop the running ",(0,i.kt)("inlineCode",{parentName:"p"},"desmos start")," and re-start your Desmos node using the following command: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cosmovisor start\n")),(0,i.kt)("h4",{id:"updating-the-service-file"},"Updating the service file"),(0,i.kt)("p",null,"If you are running your node using a service, you need to update your service file to use ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmovisor")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"desmos"),". To do this you can simply run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'sudo tee /etc/systemd/system/desmosd.service > /dev/null <<EOF  \n[Unit]\nDescription=Desmos Full Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which cosmovisor) start\nRestart=always\nRestartSec=3\nLimitNOFILE=4096\n\nEnvironment="DAEMON_HOME=$HOME/.desmos"\nEnvironment="DAEMON_NAME=desmos"\nEnvironment="DAEMON_ALLOW_DOWNLOAD_BINARIES=true"\nEnvironment="DAEMON_RESTART_AFTER_UPGRADE=true"\n\n[Install]\nWantedBy=multi-user.target\nEOF\n')),(0,i.kt)("p",null,"Once you have edited your system file, you need to reload it using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl daemon-reload\n")),(0,i.kt)("p",null,"Finally, you can restart is as follows: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl restart desmosd\n")))}m.isMDXComponent=!0}}]);