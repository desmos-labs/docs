"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[4172],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(n),p=o,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),o=n(9443);var r=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var d=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,d=e.values,f=e.groupId,p=e.className,m=r(),b=m.tabGroupChoices,k=m.setTabGroupChoices,v=(0,a.useState)(o),h=v[0],g=v[1],y=a.Children.toArray(e.children),w=[];if(null!=f){var D=b[f];null!=D&&D!==h&&d.some((function(e){return e.value===D}))&&g(D)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),a=d[n].value;g(a),null!=f&&(k(f,a),setTimeout((function(){var e,n,a,o,r,l,i,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,r=e.right,l=window,i=l.innerHeight,c=l.innerWidth,n>=0&&r<=c&&o<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case c:var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:O,onClick:O},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},926:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return f},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=n(5064),i=n(8215),s=["components"],c={id:"rocksdb-installation",title:"Use RocksDB",sidebar_position:4},u="Installing RocksDB",d={unversionedId:"fullnode/rocksdb-installation",id:"version-mainnet/fullnode/rocksdb-installation",isDocsHomePage:!1,title:"Use RocksDB",description:"By default, Desmos uses LevelDB as its database backend engine. However, since version",source:"@site/versioned_docs/version-mainnet/03-fullnode/04-rocksdb-installation.mdx",sourceDirName:"03-fullnode",slug:"/fullnode/rocksdb-installation",permalink:"/fullnode/rocksdb-installation",editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-mainnet/03-fullnode/04-rocksdb-installation.mdx",version:"mainnet",lastUpdatedAt:1630313787,formattedLastUpdatedAt:"8/30/2021",sidebarPosition:4,frontMatter:{id:"rocksdb-installation",title:"Use RocksDB",sidebar_position:4},sidebar:"version-mainnet/docs",previous:{title:"Update",permalink:"/fullnode/update"},next:{title:"Use Cosmovisor",permalink:"/fullnode/cosmovisor"}},f=[{value:"1. Install the dependencies",id:"1-install-the-dependencies",children:[]},{value:"2. Install RocksDB",id:"2-install-rocksdb",children:[]}],p={toc:f};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-rocksdb"},"Installing RocksDB"),(0,r.kt)("p",null,"By default, Desmos uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/leveldb"},"LevelDB")," as its database backend engine. However, since version\n",(0,r.kt)("inlineCode",{parentName:"p"},"v0.6.0")," we've also added the possibility of optionally using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb"},"Facebook's RocksDB"),",\nwhich, although still being experimental, is know to be faster and could lead to lower syncing times.\nIf you want to try out RocksDB (which we suggest you to do) you can take a look at our\n",(0,r.kt)("a",{parentName:"p",href:"/fullnode/rocksdb-installation"},"RocksDB installation guide")," before proceeding further."),(0,r.kt)("p",null,"The following guide allows you to install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb"},"Facebook's RocksDB")," inside your local machine,\nso that you will be able to use as Desmos' backend engine for better performances."),(0,r.kt)("h2",{id:"1-install-the-dependencies"},"1. Install the dependencies"),(0,r.kt)("p",null,"The first thing to do is to install all the dependencies for RocksDB.\nFollowing you will find the installation guide for both Ubuntu and MacOS. If you have a different operative system you can refer to the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb/blob/master/INSTALL.md"},"official installation guide")),(0,r.kt)(l.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y \\\n  libgflags-dev \\\n  libsnappy-dev \\\n  zlib1g-dev \\\n  libbz2-dev \\\n  libzstd-dev \\\n  liblz4-dev\n"))),(0,r.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Only needed if you are first time developing of your machine\nxcode-select --install\n\n# Install the dependencies\nbrew tap homebrew/versions; brew install gcc48 --use-llvm\n")))),(0,r.kt)("h2",{id:"2-install-rocksdb"},"2. Install RocksDB"),(0,r.kt)("p",null,"After having installed the dependencies, you need to install RocksDB. Again, following you will find the Linux and MacOS instructions.\nIf you are running another OS, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb/blob/master/INSTALL.md"},"official documentation"),"."),(0,r.kt)(l.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone RocksDB\ngit clone https://github.com/facebook/rocksdb.git && cd rocksdb\n\n# Build RocksDB\nDEBUG_LEVEL=0 make shared_lib\n\n# Install RocksDB so that Desmos can access it\nsudo make install-shared\n\n# Make sure the newly built library is linked correctly\nsudo ldconfig\n"))),(0,r.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install rocksdb\n")))),(0,r.kt)("p",null,"Once the installation has finished, you will be able to compile Desmos using the following command: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make install DB_BACKEND=rocksdb\n")))}m.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);