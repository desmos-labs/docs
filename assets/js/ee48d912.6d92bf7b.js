"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[9659],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=d(a),c=o,h=m["".concat(l,".").concat(c)]||m[c]||p[c]||i;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5833:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const i={id:"setup",title:"Setup",sidebar_label:"Setup",slug:"setup"},r="Become a Desmos validator",s={unversionedId:"validators/setup",id:"validators/setup",title:"Setup",description:"Validators are responsible for committing new blocks to the blockchain through voting.",source:"@site/docs/04-validators/02-setup.md",sourceDirName:"04-validators",slug:"/validators/setup",permalink:"/next/validators/setup",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/04-validators/02-setup.md",tags:[],version:"current",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:2,frontMatter:{id:"setup",title:"Setup",sidebar_label:"Setup",slug:"setup"},sidebar:"docs",previous:{title:"Overview",permalink:"/next/validators/overview"},next:{title:"Halting",permalink:"/next/validators/halting"}},l={},d=[{value:"1. Run a fullnode",id:"1-run-a-fullnode",level:2},{value:"2. Create your validator",id:"2-create-your-validator",level:2},{value:"Testnet:",id:"testnet",level:4},{value:"Mainnet:",id:"mainnet",level:4},{value:"3. Edit the validator description",id:"3-edit-the-validator-description",level:2},{value:"View the validator description",id:"view-the-validator-description",level:3},{value:"4. Confirm your validator is running",id:"4-confirm-your-validator-is-running",level:2}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"become-a-desmos-validator"},"Become a Desmos validator"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/next/validators/overview"},"Validators")," are responsible for committing new blocks to the blockchain through voting.\nA validator's stake is slashed if they become unavailable or sign blocks at the same height. Please read about\n",(0,o.kt)("a",{parentName:"p",href:"/next/validators/validator-faq#how-can-validators-protect-themselves-from-denial-of-service-attacks"},"Sentry Node Architecture")," to protect your node from DDOS attacks and to ensure high-availability."),(0,o.kt)("admonition",{title:"Warning",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"If you want to become a validator for the ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet"),", you should ",(0,o.kt)("a",{parentName:"p",href:"/next/mainnet/security"},"research security"),".")),(0,o.kt)("h2",{id:"1-run-a-fullnode"},"1. Run a fullnode"),(0,o.kt)("p",null,"To become a validator, you must first have ",(0,o.kt)("inlineCode",{parentName:"p"},"desmos")," installed and be able to run a fullnode. You can\nfirst ",(0,o.kt)("a",{parentName:"p",href:"/next/fullnode/overview"},"setup your fullnode")," if you haven't yet."),(0,o.kt)("p",null,"The rest of the documentation will assume you have followed our instructions and have successfully set up a fullnode."),(0,o.kt)("admonition",{title:"Not enough funds? Google Cloud can help you",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Running a validator node should be done on a separate machine, not your local computer. This is due to the fact that\nvalidators need to be constantly running to avoid getting slashed (and thus loosing funds). We highly recommend setting\nup a local machine that can run 24/7, even a Raspberry can do the job."),(0,o.kt)("p",{parentName:"admonition"},"If you do not have the possibility of using a local machine, even an hosted server can be perfect. If you wish to get\nstarted for free, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/free/docs/gcp-free-tier"},"300$ Google Cloud bonus"),". This\nshould be enough to run a validator for 5-6 months.")),(0,o.kt)("h2",{id:"2-create-your-validator"},"2. Create your validator"),(0,o.kt)("p",null,"In order to create a validator, you need to have to create a local wallet first. This will be used in order to hold the\ntokens that you will later delegate to your validator node, allowing him to properly work. In order to create this\nwallet, please run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"desmos keys add <key_name>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"or")," use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--recover")," flag if you already have a secret recovery phrase (mnemonic phase) you'd want to use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"desmos keys add <key_name> --recover\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"or")," use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--ledger")," flag if you want to import your ledger wallet account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"desmos keys add <key_name> --ledger\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In order to use ledger you will need to use the Desmos app. You can download it from the ledger live store.")),(0,o.kt)("admonition",{title:"Key name",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please select a key name that you will easily remember and be able to type fast. This name will be used all over the\nplaces inside other commands later.")),(0,o.kt)("p",null,"Once that you have created your local wallet, it's time to get some tokens to be used as the initial validator stake so\nthat it can run properly. If you are setting up a validator inside one of our testnets, you can request some testnet\ntokens inside our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/yxPRGdq"},"Discord"),". Once you have joined, go inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"#ask-tokens")," channel and\nrun the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"!send <your_address>\n")),(0,o.kt)("p",null,"You can get your address by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"desmos keys show <key_name> -a\n")),(0,o.kt)("p",null,"To run a validator node you need to first get your current validator public key that was created when you\nran ",(0,o.kt)("inlineCode",{parentName:"p"},"desmod init"),". Your ",(0,o.kt)("inlineCode",{parentName:"p"},"desmosvalconspub")," (Desmos Validator Consensus Pubkey) can be used to create a new validator by\nstaking tokens. You can find your validator pubkey by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tendermint show-validator\n")),(0,o.kt)("p",null,"To create your validator, just use the following command:"),(0,o.kt)("admonition",{title:"Don't use more staking token than you have!",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"On Morpheus testnet, we are using ",(0,o.kt)("inlineCode",{parentName:"p"},"udaric")," as the staking token and it will be the example below."),(0,o.kt)("p",{parentName:"admonition"},"We are using ",(0,o.kt)("inlineCode",{parentName:"p"},"udsm")," as the staking token on Mainnet.  ")),(0,o.kt)("h4",{id:"testnet"},"Testnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'desmos tx staking create-validator \\\n  --amount=1000000udaric \\\n  --pubkey=$(desmos tendermint show-validator) \\\n  --moniker="<Your moniker here>" \\\n  --chain-id=<chain_id> \\\n  --commission-rate="0.10" \\\n  --commission-max-rate="0.20" \\\n  --commission-max-change-rate="0.01" \\\n  --min-self-delegation="1" \\\n  --gas="auto" \\\n  --gas-adjustment=1.2 \\\n  --gas-prices="0.025udaric" \\\n  --from=<key_name>\n')),(0,o.kt)("h4",{id:"mainnet"},"Mainnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'desmos tx staking create-validator \\\n  --amount=1000000udsm \\\n  --pubkey=$(desmos tendermint show-validator) \\\n  --moniker="<Your moniker here>" \\\n  --chain-id=<chain_id> \\\n  --commission-rate="0.10" \\\n  --commission-max-rate="0.20" \\\n  --commission-max-change-rate="0.01" \\\n  --min-self-delegation="1" \\\n  --gas="auto" \\\n  --gas-adjustment=1.2 \\\n  --gas-prices="0.025udsm" \\\n  --from=<key_name>\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When specifying the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"moniker")," flag, please keep in mind this is going to be the public name associated to your validator. For this reason, it should represent your company name or something else that can easily identify you among all the other validators.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When specifying commission parameters, the ",(0,o.kt)("inlineCode",{parentName:"p"},"commission-max-change-rate")," is used to measure % ",(0,o.kt)("em",{parentName:"p"},"point")," change over the ",(0,o.kt)("inlineCode",{parentName:"p"},"commission-rate"),". E.g. 1% to 2% is a 100% rate increase, but only 1 percentage point.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Min-self-delegation")," is a strictly positive integer that represents the minimum amount of self-delegated staking token your validator must always have. A ",(0,o.kt)("inlineCode",{parentName:"p"},"min-self-delegation")," of 1 means your validator will never have a self-delegation lower than ",(0,o.kt)("inlineCode",{parentName:"p"},"1udaric")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"1udsm")," in mainnet). A validator with a self delegation lower than this number will automatically be unbonded.")),(0,o.kt)("p",null,"You can confirm that you are in the validator set by using a block explorer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Testnet:  ",(0,o.kt)("a",{parentName:"li",href:"https://morpheus.desmos.network"},"Big Dipper")),(0,o.kt)("li",{parentName:"ul"},"Mainnet: ",(0,o.kt)("a",{parentName:"li",href:"https://explorer.desmos.network"},"Big Dipper"),".")),(0,o.kt)("h2",{id:"3-edit-the-validator-description"},"3. Edit the validator description"),(0,o.kt)("p",null,"You can edit your validator's public description. This info is to identify your validator, and will be relied on by delegators to decide which validators to stake to. Make sure to provide input for every flag below. If a flag is not included in the command the field will default to empty (",(0,o.kt)("inlineCode",{parentName:"p"},"--moniker")," defaults to the machine name) if the field has never been set or remain the same if it has been set in the past."),(0,o.kt)("p",null,"The <key_name> specifies which validator you are editing. If you choose to not include certain flags, remember that the --from flag must be included to identify the validator to update."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--identity")," can be used as to verify identity with systems like Keybase or UPort. When using with Keybase ",(0,o.kt)("inlineCode",{parentName:"p"},"--identity")," should be populated with a 16-digit string that is generated with a ",(0,o.kt)("a",{parentName:"p",href:"https://keybase.io"},"keybase.io")," account. It's a cryptographically secure method of verifying your identity across multiple online networks. The Keybase API allows some block explorers to retrieve your Keybase avatar. This is how you can add a logo to your validator profile."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'desmos tx staking edit-validator \\\n  --moniker="choose a moniker" \\\n  --website="https://desmos.network" \\\n  --identity=6A0D65E29A4CBC8E \\\n  --details="To infinity and beyond!" \\\n  --commission-rate="0.10" \\\n  --chain-id=<chain_id> \\\n  --from=<key_name>\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": The ",(0,o.kt)("inlineCode",{parentName:"p"},"commission-rate")," value must adhere to the following invariants:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Must be between 0 and the validator's ",(0,o.kt)("inlineCode",{parentName:"li"},"commission-max-rate")),(0,o.kt)("li",{parentName:"ul"},"Must not exceed the validator's ",(0,o.kt)("inlineCode",{parentName:"li"},"commission-max-change-rate")," which is maximum\n% point change rate ",(0,o.kt)("strong",{parentName:"li"},"per day"),". In other words, a validator can only change\nits commission once per day and within ",(0,o.kt)("inlineCode",{parentName:"li"},"commission-max-change-rate")," bounds.")),(0,o.kt)("h3",{id:"view-the-validator-description"},"View the validator description"),(0,o.kt)("p",null,"View the validator's information with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query staking validator <account_desmos>\n")),(0,o.kt)("h2",{id:"4-confirm-your-validator-is-running"},"4. Confirm your validator is running"),(0,o.kt)("p",null,"Your validator is active if the following command returns anything:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query tendermint-validator-set | grep $(desmos status 2>&1 | jq '.ValidatorInfo.PubKey.value')\n")),(0,o.kt)("p",null,"When you query the node status with ",(0,o.kt)("inlineCode",{parentName:"p"},"desmos status"),", it includes the validator pubkey in base64 encoding. If your node is an active validator, the validator pubkey will be shown when you query the validator set."),(0,o.kt)("p",null,"You should now see your validator in one of the Desmos explorers. You are looking for the ",(0,o.kt)("inlineCode",{parentName:"p"},"bech32")," encoded ",(0,o.kt)("inlineCode",{parentName:"p"},"operator address")," starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"desmosvaloper"),". It is another representation of your ",(0,o.kt)("inlineCode",{parentName:"p"},"<key_name>")," that you have used to create this validator."),(0,o.kt)("p",null,"To show the ",(0,o.kt)("inlineCode",{parentName:"p"},"operator address"),", you can run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"desmos keys show <key_name> -a --bech val\n")),(0,o.kt)("admonition",{title:"Note ",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To be in the validator set, you need to have more total voting power than the last validator.")))}p.isMDXComponent=!0}}]);