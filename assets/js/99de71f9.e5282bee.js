"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[9507],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||s;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var d=2;d<s;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4730:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(7462),o=n(3366),s=(n(7294),n(3905)),i=["components"],r={id:"setup",title:"Setup",sidebar_position:2},l="Full node setup",d={unversionedId:"fullnode/setup",id:"version-mainnet/fullnode/setup",isDocsHomePage:!1,title:"Setup",description:"Following you will find the instructions on how to manually setup your Desmos full node.",source:"@site/versioned_docs/version-mainnet/03-fullnode/02-setup.md",sourceDirName:"03-fullnode",slug:"/fullnode/setup",permalink:"/fullnode/setup",editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-mainnet/03-fullnode/02-setup.md",version:"mainnet",lastUpdatedAt:1638520783,formattedLastUpdatedAt:"12/3/2021",sidebarPosition:2,frontMatter:{id:"setup",title:"Setup",sidebar_position:2},sidebar:"version-mainnet/docs",previous:{title:"Overview",permalink:"/fullnode/overview"},next:{title:"Update",permalink:"/fullnode/update"}},p=[{value:"1. Build the software",id:"1-build-the-software",children:[]},{value:"2. Initialize the Desmos working directory",id:"2-initialize-the-desmos-working-directory",children:[]},{value:"3. Get the genesis file",id:"3-get-the-genesis-file",children:[]},{value:"4. Setup seeds, peers and state sync",id:"4-setup-seeds-peers-and-state-sync",children:[{value:"Using state sync",id:"using-state-sync",children:[]}]},{value:"5. (Optional) Edit snapshot config",id:"5-optional-edit-snapshot-config",children:[]},{value:"6. (Optional) Change your database backend",id:"6-optional-change-your-database-backend",children:[]},{value:"7. Open the proper ports",id:"7-open-the-proper-ports",children:[]},{value:"8. Start the Desmos node",id:"8-start-the-desmos-node",children:[]},{value:"9. (Optional) Configure the background service",id:"9-optional-configure-the-background-service",children:[{value:"Service operations",id:"service-operations",children:[]}]},{value:"10. Cosmovisor",id:"10-cosmovisor",children:[]}],u={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"full-node-setup"},"Full node setup"),(0,s.kt)("p",null,"Following you will find the instructions on how to manually setup your Desmos full node."),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Requirements")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Before starting, make sure you read the ",(0,s.kt)("a",{parentName:"p",href:"/fullnode/overview"},"overview")," to make sure your hardware meets the needed\nrequirements."))),(0,s.kt)("h2",{id:"1-build-the-software"},"1. Build the software"),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Choose your DB backend")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Before installing the software, a consideration must be done."),(0,s.kt)("p",{parentName:"div"},"By default, Desmos uses ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/google/leveldb"},"LevelDB")," as its database backend engine. However, since\nversion ",(0,s.kt)("inlineCode",{parentName:"p"},"v0.6.0")," we've also added the possibility of optionally\nusing ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb"},"Facebook's RocksDB"),", which, although still being experimental, is known to\nbe faster and could lead to lower syncing times. If you want to try out RocksDB you can take a look at\nour ",(0,s.kt)("a",{parentName:"p",href:"/fullnode/rocksdb-installation"},"RocksDB installation guide")," before proceeding further."))),(0,s.kt)("p",null,"In your terminal, run the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Make sure we are inside the home directory\ncd $HOME\n\n# Clone the Desmos software\ngit clone https://github.com/desmos-labs/desmos.git && cd desmos\n\n# Checkout the correct tag\n# Please check on https://github.com/desmos-labs/mainnet to get\n# the tag to use based on the current mainnet version\ngit checkout tags/v2.3.0\n\n# Build the software\n# If you want to use the default database backend run\nmake install\n\n# If you want to use RocksDB run instead\nmake install DB_BACKEND=rocksdb\n")),(0,s.kt)("p",null,"If the software is built successfully, the ",(0,s.kt)("inlineCode",{parentName:"p"},"desmos")," executable will be located inside your ",(0,s.kt)("inlineCode",{parentName:"p"},"$GOBIN")," path. If you setup\nyour environment variables correctly in the previous step, you should also be able to run it properly. To check this,\ntry running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"desmos version --long\n")),(0,s.kt)("h2",{id:"2-initialize-the-desmos-working-directory"},"2. Initialize the Desmos working directory"),(0,s.kt)("p",null,"Configuration files and chain data will be stored inside the ",(0,s.kt)("inlineCode",{parentName:"p"},"$HOME/.desmos")," directory by default. In order to create\nthis folder and all the necessary data we need to initialize a new full node using the ",(0,s.kt)("inlineCode",{parentName:"p"},"desmos init")," command."),(0,s.kt)("p",null,"Starting from ",(0,s.kt)("inlineCode",{parentName:"p"},"v0.15.0"),", you are now able to provide a custom seed when initializing your node. This will be\nparticularly useful because, in the case that you want to reset your node, you will be able to re-generate the same\nprivate node key instead of having to create a new node."),(0,s.kt)("p",null,"In order to provide a custom seed to your private key, you can do as follows:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Get a new random seed by running"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'desmos keys add node --dry-run\n\n# Example\n# desmos keys add node --dry-run\n# - name: node\n#   type: local\n#   address: desmos126cw9j2wy099lttf2qx0qds6k7t4kdea5ualh9\n#   pubkey: desmospub1addwnpepqdpfv4lh0vqjvmu43spz4lq0l92qret9hv6007j4r28z05wuthw2jz3frd4\n#   mnemonic: ""\n#   threshold: 0\n#   pubkeys: []\n#\n#\n# **Important** write this mnemonic phrase in a safe place.\n# It is the only way to recover your account if you ever forget your password.\n#\n# sort curious village display voyage oppose dice idea mutual inquiry keep swim team direct tired pink clinic figure tiny december giant obvious clump chest\n')),(0,s.kt)("p",{parentName:"li"},"This will create a new key ",(0,s.kt)("strong",{parentName:"p"},"without")," adding it to your keystore, and output the underlying seed.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Run the ",(0,s.kt)("inlineCode",{parentName:"p"},"init")," command using the ",(0,s.kt)("inlineCode",{parentName:"p"},"--recover")," flag."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"desmos init <your_node_moniker> --recover\n")),(0,s.kt)("p",{parentName:"li"},"You can choose any ",(0,s.kt)("inlineCode",{parentName:"p"},"moniker")," value you like. It will be saved in the ",(0,s.kt)("inlineCode",{parentName:"p"},"config.toml")," under the ",(0,s.kt)("inlineCode",{parentName:"p"},".desmos")," working\ndirectory.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Insert the previously outputted secret recovery phrase (mnemonic phrase):"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"> Enter your bip39 mnemonic\nsort curious village display voyage oppose dice idea mutual inquiry keep swim team direct tired pink clinic figure tiny december giant obvious clump chest\n")),(0,s.kt)("p",{parentName:"li"},"This will generate the working files in ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.desmos")),(0,s.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"By default, running ",(0,s.kt)("inlineCode",{parentName:"p"},"desmos init <your_node_moniker>")," without the ",(0,s.kt)("inlineCode",{parentName:"p"},"--recover")," flag will randomly generate a ",(0,s.kt)("inlineCode",{parentName:"p"},"priv_validator_key.json"),". There is no way to regenerate this key if you lose it.\\\nWe recommend running this command with the ",(0,s.kt)("inlineCode",{parentName:"p"},"--recover")," so that you can regenerate the same ",(0,s.kt)("inlineCode",{parentName:"p"},"priv_validator_key.json")," from the secret recovery phrase (mnemonic phrase)."))))),(0,s.kt)("h2",{id:"3-get-the-genesis-file"},"3. Get the genesis file"),(0,s.kt)("p",null,"To connect to an existing network, or start a new one, a genesis file is required. The file contains all the settings\ntelling how the genesis block of the network should look like.  To connect to the ",(0,s.kt)("inlineCode",{parentName:"p"},"desmos-mainnet"),", you will need the\ncorresponding genesis file. Visit the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/mainnet"},"mainnet repo")," and\ndownload the correct genesis file by running the following command."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Download the existing genesis file for the testnet\n# Replace <chain-id> with the id of the testnet you would like to join\ncurl https://raw.githubusercontent.com/desmos-labs/mainnet/main/genesis.json > ~/.desmos/config/genesis.json\n")),(0,s.kt)("p",null,"After the download, ensure it's the correct one by checking that it has the same hashsum below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"jq -S -c -M '' /root/.desmos/config/genesis.json | shasum -a 256\n619c9462ccd9045522300c5ce9e7f4662cac096eed02ef0535cca2a6826074c4  -\n")),(0,s.kt)("h2",{id:"4-setup-seeds-peers-and-state-sync"},"4. Setup seeds, peers and state sync"),(0,s.kt)("p",null,"The next thing you have to do now is telling your node how to connect with other nodes that are already present on the\nnetwork. In order to do so, we will use the ",(0,s.kt)("inlineCode",{parentName:"p"},"seeds")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"persistent_peers")," values of the ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/config.toml"),"\nfile."),(0,s.kt)("p",null,"Seed nodes are a particular type of nodes present on the network. Your fullnode will connect to them, and they will\nprovide it with a list of other fullnodes that are present on the network. Then, your fullnode will automatically\nconnect to such nodes. Our team is running three seed nodes, and we advise you to use them by setting the\nfollowing ",(0,s.kt)("inlineCode",{parentName:"p"},"seeds")," value:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'seeds = "9bde6ab4e0e00f721cc3f5b4b35f3a0e8979fab5@seed-1.mainnet.desmos.network:26656,5c86915026093f9a2f81e5910107cf14676b48fc@seed-2.mainnet.desmos.network:26656,45105c7241068904bdf5a32c86ee45979794637f@seed-3.mainnet.desmos.network:26656"\n')),(0,s.kt)("h3",{id:"using-state-sync"},"Using state sync"),(0,s.kt)("p",null,"Starting from Desmos ",(0,s.kt)("inlineCode",{parentName:"p"},"v0.15.0"),", we've added the support for Tendermint'\ns ",(0,s.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/nodes/state-sync.html#configure-state-sync"},"state sync"),". This feature allows new nodes to\nsync with the chain extremely fast, by downloading snapshots created by other full nodes."),(0,s.kt)("p",null,"In order to use this feature, you will have to edit a couple of things inside your ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/config.toml")," file,\nunder the ",(0,s.kt)("inlineCode",{parentName:"p"},"statesync")," section:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Enable state sync by setting ",(0,s.kt)("inlineCode",{parentName:"p"},"enable = true"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Set the RPC addresses from where to get the snapshots using the ",(0,s.kt)("inlineCode",{parentName:"p"},"rpc_servers")," field\nand filling it with two RPCs that provides snapshots.",(0,s.kt)("br",{parentName:"p"}),"\n","(You can ask inside our ",(0,s.kt)("a",{parentName:"p",href:"https://discord.desmos.network/"},"discord")," for them).")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Get a trusted chain height, and the associated block hash. To do this, you will have to:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Get the current chain height by running:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -s <rpc-address>/commit  | jq "{height: .result.signed_header.header.height}"\n'))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Once you have the current chain height, get a height that is a little bit lower (200 blocks) than the current one. To\ndo this you can execute:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -s <rpc-address>/commit?height=<your-height> | jq "{height: .result.signed_header.header.height, hash: .result.signed_header.commit.block_id.hash}"\n\n# Example\n# curl -s https://rpc-desmos.itastakers.com/commit?height=100000 | jq "{height: .result.signed_header.header.height, hash: .result.signed_header.commit.block_id.hash}"\n'))))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Now that you have a trusted height and block hash, use those values as the ",(0,s.kt)("inlineCode",{parentName:"p"},"trust_height")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"trust_hash")," values. Also,\nmake sure they're the right values for the Desmos version you're starting to synchronize:  "),(0,s.kt)("table",{parentName:"li"},(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"th"},"State sync height range")),(0,s.kt)("th",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"th"},"Desmos version")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"0 - 1149679")),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"v1.0.1"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"1149680 - 1347304")),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"v2.3.0"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"> 1347305")),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"v2.3.1"))))))),(0,s.kt)("p",null,"Here is an example of what the ",(0,s.kt)("inlineCode",{parentName:"p"},"statesync")," section of your ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/config.toml")," file should look like in the\nend (the ",(0,s.kt)("inlineCode",{parentName:"p"},"trust_height")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"trust_hash")," should contain your values instead):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'enable = true\n\nrpc_servers = "rpc-desmos.itastakers.com:26657,135.181.60.250:26557"\ntrust_height = 139142\ntrust_hash = "F55CA4C56CAC348E453A38D6BEBD70B1CD92F7431214AE167B09EFDA478186BE"\ntrust_period = "336h0m0s"\n')),(0,s.kt)("h4",{id:"changing-state-sync-height"},"Changing state sync height"),(0,s.kt)("p",null,"If you change the state sync height, you will need to perform these actions before trying to sync again:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If you're running a ",(0,s.kt)("strong",{parentName:"li"},"validator node"),":",(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"Backup the ",(0,s.kt)("inlineCode",{parentName:"li"},"~/.desmos/data/priv_validator_state.json"),";"),(0,s.kt)("li",{parentName:"ol"},"Run ",(0,s.kt)("inlineCode",{parentName:"li"},"desmos unsafe-reset-all"),";"),(0,s.kt)("li",{parentName:"ol"},"Restore the ",(0,s.kt)("inlineCode",{parentName:"li"},"priv_validator_state.json")," file."),(0,s.kt)("li",{parentName:"ol"},"Restart the node."))),(0,s.kt)("li",{parentName:"ul"},"If you're running a ",(0,s.kt)("em",{parentName:"li"},"full node"),":",(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"Run ",(0,s.kt)("inlineCode",{parentName:"li"},"desmos unsafe-reset-all"),";"),(0,s.kt)("li",{parentName:"ol"},"Restart the node.")))),(0,s.kt)("h2",{id:"5-optional-edit-snapshot-config"},"5. (Optional) Edit snapshot config"),(0,s.kt)("p",null,"Currently, the ",(0,s.kt)("inlineCode",{parentName:"p"},"snapshot")," feature is enabled by the default. This means that your node will periodically create snapshots of the chain state and make them public, allowing other nodes to quickly join the network by syncing the application state at a given height."),(0,s.kt)("p",null,"By default, we have set Desmos to take snapshots every 500 blocks, and persist the last 2 snapshots, deleting older ones. If you want to provide other nodes with more (or less) frequent snapshots, you can do this by editing a couple of things inside your ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/app.toml")," file, under the ",(0,s.kt)("inlineCode",{parentName:"p"},"state-sync")," section:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},"# snapshot-interval specifies the block interval at which local state sync snapshots are\n# taken (0 to disable). Must be a multiple of pruning-keep-every.\nsnapshot-interval = 500\n\n# snapshot-keep-recent specifies the number of recent snapshots to keep and serve (0 to keep all).\nsnapshot-keep-recent = 2\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note: Make sure that snapshot-interval is a multiple of ",(0,s.kt)("inlineCode",{parentName:"strong"},"pruning-keep-every")," in the ",(0,s.kt)("inlineCode",{parentName:"strong"},"base")," section")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'pruning-keep-recent = "100"\npruning-keep-every = "500"\npruning-interval = "10"\n')),(0,s.kt)("p",null,"You can find out more about pruning ",(0,s.kt)("a",{parentName:"p",href:"/fullnode/overview#understanding-pruning"},"here"),"."),(0,s.kt)("h2",{id:"6-optional-change-your-database-backend"},"6. (Optional) Change your database backend"),(0,s.kt)("p",null,"If you would like to run your node using ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb"},"Facebook's RocksDB")," as the database\nbackend, and you have correctly built the Desmos binaries to work with it following the instructions\nat ",(0,s.kt)("a",{parentName:"p",href:"#1-build-the-software"},"point 1"),", there is one more thing you need to do."),(0,s.kt)("p",null,"In order to tell Tendermint to use RocksDB as its database backend engine, you are required to change the following like\ninside the ",(0,s.kt)("inlineCode",{parentName:"p"},"config.toml")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'db_backend = "goleveldb"\n')),(0,s.kt)("p",null,"To become"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'db_backend = "rocksdb"\n')),(0,s.kt)("h2",{id:"7-open-the-proper-ports"},"7. Open the proper ports"),(0,s.kt)("p",null,"Now that everything is in place to start the node, the last thing to do is to open up the proper ports."),(0,s.kt)("p",null,"Your node uses vary different ports to interact with the rest of the chain. Particularly, it relies on:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"port ",(0,s.kt)("inlineCode",{parentName:"li"},"26656")," to listen for incoming connections from other nodes;"),(0,s.kt)("li",{parentName:"ul"},"port ",(0,s.kt)("inlineCode",{parentName:"li"},"26657")," to expose the RPC service to clients.")),(0,s.kt)("p",null,"A part from those, it also uses:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"port ",(0,s.kt)("inlineCode",{parentName:"li"},"9090")," to expose the ",(0,s.kt)("a",{parentName:"li",href:"https://grpc.io/"},"gRPC")," service that allows clients to query the chain state;"),(0,s.kt)("li",{parentName:"ul"},"port ",(0,s.kt)("inlineCode",{parentName:"li"},"1317")," to expose the REST APIs service.")),(0,s.kt)("p",null,"While opening any ports are optional, it is beneficial to the whole network if\nyou open port ",(0,s.kt)("inlineCode",{parentName:"p"},"26656"),". This would allow new nodes to connect to you as a peer, making them sync faster and the connections more reliable."),(0,s.kt)("p",null,"For this reason, we will be opening port ",(0,s.kt)("inlineCode",{parentName:"p"},"26656")," using ",(0,s.kt)("inlineCode",{parentName:"p"},"ufw"),". \\\nBy default, ",(0,s.kt)("inlineCode",{parentName:"p"},"ufw")," is not enabled. In order to enable it please run the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# running this should show it is inactive\nsudo ufw status\n\n# Turn on ssh if you need it\nsudo ufw allow ssh\n\n# Accept connections to port 26656 from any address\nsudo ufw allow from any to any port 26656 proto tcp\n\n# enable ufw\nsudo ufw enable\n\n# check ufw is running\nsudo ufw status\n")),(0,s.kt)("p",null,"If you also want to run a gRPC server, RPC node or the REST APIs, you also need to remember to open the related ports as\nwell."),(0,s.kt)("h2",{id:"8-start-the-desmos-node"},"8. Start the Desmos node"),(0,s.kt)("p",null,"After setting up the binary and opening up ports, you are now finally ready to start your node:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Run Desmos full node\ndesmos start\n")),(0,s.kt)("p",null,"The full node will connect to the peers and start syncing. You can check the status of the node by executing:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Check status of the node\ndesmos status\n")),(0,s.kt)("p",null,"You should see an output like the following one:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "NodeInfo": {\n    "protocol_version": {\n      "p2p": "8",\n      "block": "11",\n      "app": "0"\n    },\n    "id": "84cc13d6acf22c32c209f4205d2693f70f458dde",\n    "listen_addr": "tcp://0.0.0.0:26656",\n    "network": "desmos-mainnet",\n    "version": "",\n    "channels": "40202122233038606100",\n    "moniker": "fullnode",\n    "other": {\n      "tx_index": "on",\n      "rpc_address": "tcp://0.0.0.0:26657"\n    }\n  },\n  "SyncInfo": {\n    "latest_block_hash": "9BA7801C0935C4E18B4E2F8C6E8A2FF4C598C8E5F71A94113D2F0595524FD4E3",\n    "latest_app_hash": "375C9F0E4E63B7ACAD497F8DEDF5E2382F469668DE671B2FF92A5D2B8B50C6D2",\n    "latest_block_height": "204393",\n    "latest_block_time": "2021-02-03T08:03:06.448549383Z",\n    "earliest_block_hash": "839FEB9ED0257B71116CE54618C7E3C15189239CB571066DDBE9E0F1C101DCC8",\n    "earliest_app_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",\n    "earliest_block_height": "1",\n    "earliest_block_time": "2021-01-20T07:00:00Z",\n    "catching_up": false\n  },\n  "ValidatorInfo": {\n    "Address": "E457913A98EC0F9251BB40008E6680A8EFF93F99",\n    "PubKey": {\n      "type": "tendermint/PubKeyEd25519",\n      "value": "BLT8jjQ+ODKa0ERcrhHfOVFVVrJDq7hxyXx6bLXnCdw="\n    },\n    "VotingPower": "0"\n  }\n}\n')),(0,s.kt)("p",null,"If you see that the ",(0,s.kt)("inlineCode",{parentName:"p"},"catching_up")," value is ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," under the ",(0,s.kt)("inlineCode",{parentName:"p"},"sync_info"),", it means that you are fully synced. If it\nis ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),", it means your node is still syncing. You can get the ",(0,s.kt)("inlineCode",{parentName:"p"},"catching_up")," value by simply running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'desmos status 2>&1 | jq "{catching_up: .SyncInfo.catching_up}"\n\n# Example\n# $ desmos status 2>&1 | jq "{catching_up: .SyncInfo.catching_up}"\n# {\n#   "catching_up": false\n# }\n')),(0,s.kt)("p",null,"After your node is fully synced, you can consider running your full node as a ",(0,s.kt)("a",{parentName:"p",href:"/validators/setup"},"validator node"),"."),(0,s.kt)("h2",{id:"9-optional-configure-the-background-service"},"9. (Optional) Configure the background service"),(0,s.kt)("p",null,"To allow your ",(0,s.kt)("inlineCode",{parentName:"p"},"desmos")," instance to run in the background as a service you need to execute the following command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"tee /etc/systemd/system/desmosd.service > /dev/null <<EOF\n[Unit]\nDescription=Desmos Full Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$GOBIN/desmos start\nRestart=always\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,s.kt)("p",null,"Once you have successfully created the service, you need to enable it. You can do so by running"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable desmosd\n")),(0,s.kt)("p",null,"After this, you can run it by executing"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start desmosd\n")),(0,s.kt)("h3",{id:"service-operations"},"Service operations"),(0,s.kt)("h4",{id:"check-the-service-status"},"Check the service status"),(0,s.kt)("p",null,"If you want to see if the service is running properly, you can execute"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status desmosd\n")),(0,s.kt)("p",null,"If everything is running smoothly you should see something like"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ systemctl status desmosd\n\u25cf desmos.service - Desmos Node\n   Loaded: loaded (/etc/systemd/system/desmosd.service; enabled; vendor preset:\n   Active: active (running) since Fri 2020-01-17 10:23:12 CET; 2min 3s ago\n Main PID: 11318 (desmos)\n    Tasks: 10 (limit: 4419)\n   CGroup: /system.slice/desmosd.service\n           \u2514\u250011318 /root/go/bin/desmos start\n")),(0,s.kt)("h4",{id:"check-the-node-status"},"Check the node status"),(0,s.kt)("p",null,"If you want to see the current status of the node, you can do so by running"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -u desmosd -f\n")),(0,s.kt)("h4",{id:"stopping-the-service"},"Stopping the service"),(0,s.kt)("p",null,"If you wish to stop the service from running, you can do so by running"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop desmosd\n")),(0,s.kt)("p",null,"To check the successful stop, execute ",(0,s.kt)("inlineCode",{parentName:"p"},"systemctl status desmos"),". This should return"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ systemctl status desmosd\n\u25cf desmos.service - Desmos Node\n   Loaded: loaded (/etc/systemd/system/desmosd.service; enabled; vendor preset: enabled)\n   Active: failed (Result: exit-code) since Fri 2020-01-17 10:28:04 CET; 3s ago\n  Process: 11318 ExecStart=/root/go/bin/desmos start (code=exited, status=143)\n Main PID: 11318 (code=exited, status=143)\n")),(0,s.kt)("h2",{id:"10-cosmovisor"},"10. Cosmovisor"),(0,s.kt)("p",null,"In order to do automatic on-chain upgrades we will be using cosmovisor. Please check out ",(0,s.kt)("a",{parentName:"p",href:"/fullnode/cosmovisor"},"Using Cosmovisor")," for information on how to set this up."))}c.isMDXComponent=!0}}]);