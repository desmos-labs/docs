"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[88175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},60528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={},o="Setting up Tendermint KMS + Ledger",l={unversionedId:"mainnet/kms/kms_ledger",id:"mainnet/kms/kms_ledger",title:"Setting up Tendermint KMS + Ledger",description:"The following instructions are a brief walkthrough and not a comprehensive guideline.",source:"@site/docs/06-mainnet/kms/kms_ledger.md",sourceDirName:"06-mainnet/kms",slug:"/mainnet/kms/kms_ledger",permalink:"/next/mainnet/kms/kms_ledger",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/06-mainnet/kms/kms_ledger.md",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{}},s={},d=[{value:"Tendermint Validator app (for Ledger devices)",id:"tendermint-validator-app-for-ledger-devices",level:2},{value:"KMS configuration",id:"kms-configuration",level:2},{value:"Config file",id:"config-file",level:3},{value:"Generate secret key",id:"generate-secret-key",level:3},{value:"Retrieve validator key",id:"retrieve-validator-key",level:3},{value:"Desmos configuration",id:"desmos-configuration",level:2}],p={toc:d};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-tendermint-kms--ledger"},"Setting up Tendermint KMS + Ledger"),(0,a.kt)("p",null,"::: danger Warning\nThe following instructions are a brief walkthrough and not a comprehensive guideline.\nYou should consider and ",(0,a.kt)("a",{parentName:"p",href:"/next/mainnet/security"},"research more about the security implications")," of activating an external KMS.\n:::"),(0,a.kt)("p",null,"::: danger Warning\nKMS and Ledger Tendermint app are currently work in progress. Details may vary. Use with care under your own risk.\n:::"),(0,a.kt)("h2",{id:"tendermint-validator-app-for-ledger-devices"},"Tendermint Validator app (for Ledger devices)"),(0,a.kt)("p",null,"You should be able to find the Tendermint app in Ledger Live."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: at the moment, you might need to enable ",(0,a.kt)("inlineCode",{parentName:"em"},"developer mode")," in Ledger Live settings")),(0,a.kt)("h2",{id:"kms-configuration"},"KMS configuration"),(0,a.kt)("p",null,"In this section, we will configure a KMS to use a Ledger device running the Tendermint Validator App. "),(0,a.kt)("h3",{id:"config-file"},"Config file"),(0,a.kt)("p",null,"You can find other configuration examples ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iqlusioninc/tmkms/blob/main/tmkms.toml.example"},"here")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.tmkms/tmkms.toml")," file with the following content (use an adequate ",(0,a.kt)("inlineCode",{parentName:"p"},"chain_id"),")"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'# Example KMS configuration file\n[[validator]]\naddr = "tcp://localhost:26658"    # or "unix:///path/to/socket"\nchain_id = "desmos-mainnet-1"\nreconnect = true # true is the default\nsecret_key = "~/.tmkms/secret_connection.key"\n\n[[providers.ledgertm]]\nchain_ids = ["desmos-mainnet-1"]\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Edit ",(0,a.kt)("inlineCode",{parentName:"p"},"addr")," to point to your ",(0,a.kt)("inlineCode",{parentName:"p"},"desmos")," instance.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Adjust ",(0,a.kt)("inlineCode",{parentName:"p"},"chain-id")," to match your ",(0,a.kt)("inlineCode",{parentName:"p"},".desmos/config/config.toml")," settings.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"provider.ledgertm")," has not additional parameters at the moment, however, it is important that you keep that header to enable the feature."))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Plug your Ledger device and open the Tendermint validator app.")),(0,a.kt)("h3",{id:"generate-secret-key"},"Generate secret key"),(0,a.kt)("p",null,"Now you need to generate secret_key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tmkms keygen ~/.tmkms/secret_connection.key\n")),(0,a.kt)("h3",{id:"retrieve-validator-key"},"Retrieve validator key"),(0,a.kt)("p",null,"The last step is to retrieve the validator key that you will use in ",(0,a.kt)("inlineCode",{parentName:"p"},"desmos"),"."),(0,a.kt)("p",null,"Start the KMS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tmkms start -c ~/.tmkms/tmkms.toml\n")),(0,a.kt)("p",null,"The output should look similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"07:28:24 [INFO] tmkms 0.3.0 starting up...\n07:28:24 [INFO] [keyring:ledgertm:ledgertm] added validator key desmosvalconspub1zcjduepqepu8acj4qua576zzquvcly2un0xkzhwh0ehvgmx8gxgl34zhkceskthfp6\n07:28:24 [INFO] KMS node ID: 1BC12314E2E1C29015B66017A397F170C6ECDE4A\n")),(0,a.kt)("p",null,"The KMS may complain that it cannot connect to desmos. That is fine, we will fix it in the next section."),(0,a.kt)("p",null,"This output indicates the validator key linked to this particular device is: ",(0,a.kt)("inlineCode",{parentName:"p"},"desmosvalconspub1zcjduepqepu8acj4qua576zzquvcly2un0xkzhwh0ehvgmx8gxgl34zhkceskthfp6")),(0,a.kt)("p",null,"Take note of the validator pubkey that appears in your screen. ",(0,a.kt)("em",{parentName:"p"},"We will use it in the next section.")),(0,a.kt)("h2",{id:"desmos-configuration"},"Desmos configuration"),(0,a.kt)("p",null,"You need to enable KMS access by editing ",(0,a.kt)("inlineCode",{parentName:"p"},".desmos/config/config.toml"),". In this file, modify ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_validator_laddr"),"\nto create a listening address/port or a unix socket in ",(0,a.kt)("inlineCode",{parentName:"p"},"desmos"),"."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'...\n# TCP or UNIX socket address for Tendermint to listen on for\n# connections from an external PrivValidator process\npriv_validator_laddr = "tcp://127.0.0.1:26658"\n...\n')),(0,a.kt)("p",null,"Let's assume that you have set up your validator account and called it ",(0,a.kt)("inlineCode",{parentName:"p"},"kmsval"),". You can tell desmos the key that we've got in the previous section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos gentx --name kmsval --pubkey {.ValidatorKey} \n")),(0,a.kt)("p",null,"Now start ",(0,a.kt)("inlineCode",{parentName:"p"},"desmos"),". You should see that the KMS connects and receives a signature request."),(0,a.kt)("p",null,"Once the ledger receives the first message, it will ask for confirmation that the values are adequate."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(28178).Z,width:"300",height:"150"})),(0,a.kt)("p",null,"Click the right button, if the height and round are correct."),(0,a.kt)("p",null,"After that, you will see that the KMS will start forwarding all signature requests to the ledger:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(97924).Z,width:"313",height:"150"})),(0,a.kt)("p",null,"::: danger Warning\nThe word TEST in the second picture, second line appears because they were taken on a pre-release version."),(0,a.kt)("p",null,"Once the app as been released in Ledger's app store, this word should NOT appear.\n:::"))}m.isMDXComponent=!0},28178:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ledger_1-333b5a02b13138ef329933950ec162af.jpg"},97924:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ledger_2-0fe258512b66899f1a60ffb8986ebb48.jpg"}}]);