!function(){"use strict";var e,c,a,f,d,b={},t={};function n(e){var c=t[e];if(void 0!==c)return c.exports;var a=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=b,n.c=t,e=[],n.O=function(c,a,f,d){if(!a){var b=1/0;for(u=0;u<e.length;u++){a=e[u][0],f=e[u][1],d=e[u][2];for(var t=!0,r=0;r<a.length;r++)(!1&d||b>=d)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(t=!1,d<b&&(b=d));if(t){e.splice(u--,1);var o=f();void 0!==o&&(c=o)}}return c}d=d||0;for(var u=e.length;u>0&&e[u-1][2]>d;u--)e[u]=e[u-1];e[u]=[a,f,d]},n.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(c,{a:c}),c},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var d=Object.create(null);n.r(d);var b={};c=c||[null,a({}),a([]),a(a)];for(var t=2&f&&e;"object"==typeof t&&!~c.indexOf(t);t=a(t))Object.getOwnPropertyNames(t).forEach((function(c){b[c]=function(){return e[c]}}));return b.default=function(){return e},n.d(d,b),d},n.d=function(e,c){for(var a in c)n.o(c,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:c[a]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(c,a){return n.f[a](e,c),c}),[]))},n.u=function(e){return"assets/js/"+({50:"8af2d2ec",53:"935f2afb",78:"92743e13",110:"176fd069",131:"034a3081",189:"6b126e50",210:"da048cf5",315:"a23dfa7e",481:"ef3424f1",571:"a21e9000",573:"3121b3f3",593:"4d2ac767",684:"6c0bbf3c",731:"5de74936",934:"7bcd96f0",967:"287449f0",1057:"a8fcc873",1093:"705b4718",1105:"7f74471f",1153:"4b0f5fcd",1219:"685d0607",1227:"4202eb09",1238:"3ad7c797",1274:"55523a0d",1307:"f917f2db",1402:"a7ca34ae",1520:"5bd9fcb8",1532:"2f1e02a6",1556:"42a8b318",1568:"004a1304",1752:"6cf46506",1826:"8ce4be74",1848:"21978a80",1856:"dbb9fa31",1997:"ead636ca",2058:"09684e22",2139:"ce73c4ac",2173:"123bc61a",2305:"450bc822",2356:"2137794c",2629:"5fc39124",2697:"27989633",2710:"6f64ba4d",2809:"4b205717",2880:"7a45d4aa",2886:"8acde33a",2904:"01185848",2938:"0202f4b8",2950:"7a5626d8",2957:"68bda3bb",3007:"18578866",3087:"8ce70487",3183:"103b7162",3303:"fb5ecbb3",3308:"03a9d8ae",3334:"b314cdff",3393:"0460ed33",3474:"ce21674d",3491:"da284782",3518:"3d86e7fc",3537:"0bb05e93",3610:"54396446",3617:"2e1c873c",3628:"915126b1",3708:"321256d0",3736:"1b5c17ea",3777:"7d75befa",3794:"3707bc9a",3820:"2a0793c0",3831:"ff192367",3885:"c29f8931",3985:"72c46a3e",4034:"2c24a5dd",4059:"0cea9b55",4088:"80f36555",4156:"22febb5a",4165:"8980eb38",4236:"09f471eb",4280:"5078215f",4284:"d4783976",4302:"ea98c3e9",4305:"178ab2cc",4333:"18b06227",4443:"665d924a",4482:"cac7bc20",4681:"8989e7fa",4728:"e0505d01",4740:"2680fb2c",4767:"e0ffe5be",4805:"4259930d",4848:"a084a7b4",4855:"c33fa0af",4894:"c8965f6e",4900:"e22b38c0",4906:"01207076",4926:"79ad5bd3",4981:"21932483",5001:"94dce4f3",5004:"a14f3c98",5053:"788bdd42",5173:"9059af5a",5223:"8e4262c2",5332:"4eeabde5",5338:"438b3ff8",5340:"d0e1044f",5382:"856fc864",5473:"3199f6c3",5576:"45a287a5",5610:"da3149dd",5675:"56c2b243",5680:"a48cecd3",5698:"3217a9ce",5709:"0b6114c5",5773:"2032b30f",5828:"e645361b",5870:"3fd57b0b",5958:"4ba7d39a",5984:"9aa2d57c",6107:"ce332c81",6115:"76d0c0f0",6118:"83d58209",6120:"df9c7204",6138:"569455d2",6171:"8dac5cf4",6241:"fed7d42c",6291:"50f04aa5",6370:"518c8d3c",6385:"59b068d1",6393:"6b86b78c",6421:"4cff2759",6452:"4a72b355",6474:"b7cafa29",6480:"9bc405e7",6505:"f5dcc402",6566:"2dd8059b",6574:"1e507670",6635:"ddea6c44",6684:"a402fc4b",6685:"4871d79d",6793:"6abf9c6c",6794:"27f24204",6833:"06b04159",6855:"1b22ebae",6886:"bc542611",7062:"66f4c46a",7103:"7a787edc",7114:"d8d3179d",7165:"734c0087",7169:"e64b94d9",7203:"8b010282",7237:"681e75a2",7262:"fe7b9f2d",7311:"4f976eb1",7386:"c5cfa935",7402:"628f851d",7468:"c7e5e603",7494:"43b7b05a",7623:"da01f2be",7728:"dc0e4927",7743:"cc8046c8",7790:"822fadb1",7824:"4b5cb227",7840:"20f4b29d",7918:"17896441",7920:"1a4e3797",7943:"c4de80f8",7944:"09730473",7973:"1b86131d",8031:"501734c2",8062:"1cfbca9f",8157:"8d4983b8",8175:"7f341adb",8344:"14edfa64",8357:"615fc720",8419:"d9b650f5",8423:"49ce69e1",8427:"db29c564",8429:"9cdbe46e",8509:"e0b919ff",8641:"80bec368",8648:"8e9fe0eb",8731:"d29b8514",8806:"68d5957d",8823:"64e2d71a",8828:"18343f9d",8895:"9a2eeab7",8910:"f8791519",9019:"16c26e8c",9031:"73cce169",9073:"dbc234a0",9074:"f6e56c7d",9107:"4d78ac60",9204:"758a6214",9245:"76ec3164",9287:"fecf6363",9295:"62303570",9318:"c2aebcf8",9334:"247783bb",9351:"000bb25b",9389:"0742044d",9404:"ee993665",9459:"89769407",9514:"1be78505",9520:"b1e90db8",9535:"43cd42d7",9629:"0d201367",9659:"ee48d912",9733:"01e1513e",9740:"d088ecfd",9758:"3e222aad",9770:"2f9c291f",9786:"2ae29c5f",9823:"e7a1e5ed",9871:"e5bf1645",9894:"e29e6665",9944:"b758bbfe",9949:"c446aaf4",9956:"15bf43f3",9966:"0a83555c",9977:"d96ea9e6"}[e]||e)+"."+{50:"16beb379",53:"61f03e9f",78:"2875ac49",110:"762580fa",131:"2c9f4d63",189:"ff277ae7",210:"6b085031",315:"e31e847d",481:"6f93c994",571:"a77a755c",573:"f4a38f2f",593:"d92eeeae",684:"7683fda6",731:"a2a31d78",934:"6d86f3ce",967:"f8b9302e",1057:"2797fdce",1093:"e6dff9d8",1105:"a75c3cc9",1153:"9f2f01e6",1219:"0f673eb0",1227:"e54b4d00",1238:"ca29b0a4",1274:"af7daa8d",1307:"49702660",1402:"e022d951",1520:"f751b08c",1532:"e5c5f54b",1556:"cedbb407",1568:"d22077ab",1752:"8b2fec05",1826:"84ee82f1",1848:"8bc0a1d3",1856:"ec14a26b",1997:"f47b2c9d",2058:"5e839fe2",2139:"fb437f30",2173:"d5676725",2305:"225d59b8",2356:"9ebf8358",2629:"52109431",2697:"f8b056c0",2710:"80b1312c",2809:"2d6ddd0c",2880:"85455daf",2886:"2e9f1c41",2904:"10b061cd",2938:"0009b5cb",2950:"028e18c3",2957:"28ab3d98",3007:"4f9ef439",3087:"d7287c34",3183:"e515eab2",3303:"6812c899",3308:"0b7af426",3334:"112e6e4e",3393:"86169032",3474:"21156095",3491:"24b66543",3518:"a9d7ff2a",3537:"7658df32",3610:"87ceea67",3617:"e717206a",3628:"2f8de30c",3708:"1e03d514",3736:"86b2c6b7",3777:"4346660b",3794:"01be6b29",3820:"c0f58ffc",3831:"63f1af84",3885:"d94eb487",3985:"9866fd4b",4034:"11886c28",4059:"d7856dfd",4088:"1187ec6e",4156:"dcb10cad",4165:"b3889192",4236:"7aedfed4",4280:"a50ccd0c",4284:"8d5a4736",4302:"ec35726d",4305:"ff291200",4333:"b10f71b9",4443:"7a09b3cb",4482:"e88bbdf6",4681:"ee2a48cc",4728:"58e6384d",4740:"b5b11ecb",4767:"a513505a",4805:"d9aa8a79",4848:"8891f5db",4855:"7bdbb224",4894:"14b3d8f2",4900:"cf869eaa",4906:"01080962",4926:"ff448279",4972:"9be3d996",4981:"ff349c48",5001:"fcaba120",5004:"be2739de",5053:"db7b96c8",5173:"b8e962da",5223:"24b3cadb",5332:"d234da58",5338:"9a9876e2",5340:"73f77608",5382:"4ad6192d",5473:"16e239f5",5576:"ebeae413",5610:"c36184bc",5675:"0984aecc",5680:"6cf4007f",5698:"8c60cd42",5709:"3b2002d6",5773:"5e361df9",5828:"ddc85caf",5870:"bbca90c2",5958:"65f598da",5984:"f7b242a3",6107:"cb8b4658",6115:"19a42442",6118:"86e7a888",6120:"aa72a0d7",6138:"9b645637",6171:"2aff61ff",6241:"33c5e723",6291:"faa19dc1",6370:"d353dc4a",6385:"c0210ef7",6393:"abde8543",6421:"553257fd",6452:"6bb76047",6474:"89b9d708",6480:"5bcc556f",6505:"eb682a0f",6566:"6fe738ca",6574:"387f5fdb",6635:"920cac08",6684:"880e0120",6685:"25978258",6780:"89a0832a",6793:"10136232",6794:"2bcc8ebf",6833:"61b67c0f",6855:"e8856284",6886:"1e773798",6945:"ee4acd52",7062:"6d1959b9",7103:"de44db04",7114:"c57d25aa",7165:"2076186a",7169:"924feeaa",7203:"df90e8c7",7237:"58726f58",7262:"f2ce8072",7311:"b605774a",7386:"44379022",7402:"1c32dcd2",7468:"9391fe25",7494:"747bdec2",7623:"f12aa3df",7728:"37ba6536",7743:"5a5748eb",7790:"5a9ece51",7824:"9c814218",7840:"6fce8c54",7918:"b899feeb",7920:"f3b31b75",7943:"57880fd2",7944:"d0439962",7973:"bcf40af5",8031:"053c1fd6",8062:"d6f55369",8157:"1ae76079",8175:"2a69c8c2",8344:"a74f808e",8357:"9cf18162",8419:"36685682",8423:"08ec0921",8427:"4fee5267",8429:"1cec940c",8509:"26fdb499",8641:"683ba90f",8648:"67eeb971",8731:"2996cccf",8806:"21124311",8823:"f3485d59",8828:"0eee7116",8894:"ebb4c124",8895:"2fba6f5b",8910:"a301f70c",9019:"49fd7a6c",9031:"73d9b203",9073:"8c88da6f",9074:"e0345368",9107:"3664c002",9204:"6c74a59d",9245:"86b995f6",9287:"83a19fd3",9295:"2c0e3b3d",9318:"166e8e29",9334:"1cd3a83d",9351:"f2479869",9389:"5c29236d",9404:"b4c3042a",9459:"4d5b1022",9514:"5186836c",9520:"0f1c2faf",9535:"618afa98",9629:"a1849063",9659:"cdf86f14",9733:"44325db8",9740:"1ea8120d",9758:"adc287b7",9770:"17518d51",9786:"2d65bde3",9823:"94787f8c",9871:"19257f3d",9894:"ca395db3",9944:"5b2b9c6a",9949:"8b7d7a74",9956:"6701924e",9966:"f910a4f5",9977:"496df908"}[e]+".js"},n.miniCssF=function(e){},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},f={},d="desmos-docs:",n.l=function(e,c,a,b){if(f[e])f[e].push(c);else{var t,r;if(void 0!==a)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==d+a){t=i;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",d+a),t.src=e),f[e]=[c];var s=function(c,a){t.onerror=t.onload=null,clearTimeout(l);var d=f[e];if(delete f[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((function(e){return e(a)})),c)return c(a)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=s.bind(null,t.onerror),t.onload=s.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.gca=function(e){return e={17896441:"7918",18578866:"3007",21932483:"4981",27989633:"2697",54396446:"3610",62303570:"9295",89769407:"9459","8af2d2ec":"50","935f2afb":"53","92743e13":"78","176fd069":"110","034a3081":"131","6b126e50":"189",da048cf5:"210",a23dfa7e:"315",ef3424f1:"481",a21e9000:"571","3121b3f3":"573","4d2ac767":"593","6c0bbf3c":"684","5de74936":"731","7bcd96f0":"934","287449f0":"967",a8fcc873:"1057","705b4718":"1093","7f74471f":"1105","4b0f5fcd":"1153","685d0607":"1219","4202eb09":"1227","3ad7c797":"1238","55523a0d":"1274",f917f2db:"1307",a7ca34ae:"1402","5bd9fcb8":"1520","2f1e02a6":"1532","42a8b318":"1556","004a1304":"1568","6cf46506":"1752","8ce4be74":"1826","21978a80":"1848",dbb9fa31:"1856",ead636ca:"1997","09684e22":"2058",ce73c4ac:"2139","123bc61a":"2173","450bc822":"2305","2137794c":"2356","5fc39124":"2629","6f64ba4d":"2710","4b205717":"2809","7a45d4aa":"2880","8acde33a":"2886","01185848":"2904","0202f4b8":"2938","7a5626d8":"2950","68bda3bb":"2957","8ce70487":"3087","103b7162":"3183",fb5ecbb3:"3303","03a9d8ae":"3308",b314cdff:"3334","0460ed33":"3393",ce21674d:"3474",da284782:"3491","3d86e7fc":"3518","0bb05e93":"3537","2e1c873c":"3617","915126b1":"3628","321256d0":"3708","1b5c17ea":"3736","7d75befa":"3777","3707bc9a":"3794","2a0793c0":"3820",ff192367:"3831",c29f8931:"3885","72c46a3e":"3985","2c24a5dd":"4034","0cea9b55":"4059","80f36555":"4088","22febb5a":"4156","8980eb38":"4165","09f471eb":"4236","5078215f":"4280",d4783976:"4284",ea98c3e9:"4302","178ab2cc":"4305","18b06227":"4333","665d924a":"4443",cac7bc20:"4482","8989e7fa":"4681",e0505d01:"4728","2680fb2c":"4740",e0ffe5be:"4767","4259930d":"4805",a084a7b4:"4848",c33fa0af:"4855",c8965f6e:"4894",e22b38c0:"4900","01207076":"4906","79ad5bd3":"4926","94dce4f3":"5001",a14f3c98:"5004","788bdd42":"5053","9059af5a":"5173","8e4262c2":"5223","4eeabde5":"5332","438b3ff8":"5338",d0e1044f:"5340","856fc864":"5382","3199f6c3":"5473","45a287a5":"5576",da3149dd:"5610","56c2b243":"5675",a48cecd3:"5680","3217a9ce":"5698","0b6114c5":"5709","2032b30f":"5773",e645361b:"5828","3fd57b0b":"5870","4ba7d39a":"5958","9aa2d57c":"5984",ce332c81:"6107","76d0c0f0":"6115","83d58209":"6118",df9c7204:"6120","569455d2":"6138","8dac5cf4":"6171",fed7d42c:"6241","50f04aa5":"6291","518c8d3c":"6370","59b068d1":"6385","6b86b78c":"6393","4cff2759":"6421","4a72b355":"6452",b7cafa29:"6474","9bc405e7":"6480",f5dcc402:"6505","2dd8059b":"6566","1e507670":"6574",ddea6c44:"6635",a402fc4b:"6684","4871d79d":"6685","6abf9c6c":"6793","27f24204":"6794","06b04159":"6833","1b22ebae":"6855",bc542611:"6886","66f4c46a":"7062","7a787edc":"7103",d8d3179d:"7114","734c0087":"7165",e64b94d9:"7169","8b010282":"7203","681e75a2":"7237",fe7b9f2d:"7262","4f976eb1":"7311",c5cfa935:"7386","628f851d":"7402",c7e5e603:"7468","43b7b05a":"7494",da01f2be:"7623",dc0e4927:"7728",cc8046c8:"7743","822fadb1":"7790","4b5cb227":"7824","20f4b29d":"7840","1a4e3797":"7920",c4de80f8:"7943","09730473":"7944","1b86131d":"7973","501734c2":"8031","1cfbca9f":"8062","8d4983b8":"8157","7f341adb":"8175","14edfa64":"8344","615fc720":"8357",d9b650f5:"8419","49ce69e1":"8423",db29c564:"8427","9cdbe46e":"8429",e0b919ff:"8509","80bec368":"8641","8e9fe0eb":"8648",d29b8514:"8731","68d5957d":"8806","64e2d71a":"8823","18343f9d":"8828","9a2eeab7":"8895",f8791519:"8910","16c26e8c":"9019","73cce169":"9031",dbc234a0:"9073",f6e56c7d:"9074","4d78ac60":"9107","758a6214":"9204","76ec3164":"9245",fecf6363:"9287",c2aebcf8:"9318","247783bb":"9334","000bb25b":"9351","0742044d":"9389",ee993665:"9404","1be78505":"9514",b1e90db8:"9520","43cd42d7":"9535","0d201367":"9629",ee48d912:"9659","01e1513e":"9733",d088ecfd:"9740","3e222aad":"9758","2f9c291f":"9770","2ae29c5f":"9786",e7a1e5ed:"9823",e5bf1645:"9871",e29e6665:"9894",b758bbfe:"9944",c446aaf4:"9949","15bf43f3":"9956","0a83555c":"9966",d96ea9e6:"9977"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(c,a){var f=n.o(e,c)?e[c]:void 0;if(0!==f)if(f)a.push(f[2]);else if(/^(1303|532)$/.test(c))e[c]=0;else{var d=new Promise((function(a,d){f=e[c]=[a,d]}));a.push(f[2]=d);var b=n.p+n.u(c),t=new Error;n.l(b,(function(a){if(n.o(e,c)&&(0!==(f=e[c])&&(e[c]=void 0),f)){var d=a&&("load"===a.type?"missing":a.type),b=a&&a.target&&a.target.src;t.message="Loading chunk "+c+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,f[1](t)}}),"chunk-"+c,c)}},n.O.j=function(c){return 0===e[c]};var c=function(c,a){var f,d,b=a[0],t=a[1],r=a[2],o=0;if(b.some((function(c){return 0!==e[c]}))){for(f in t)n.o(t,f)&&(n.m[f]=t[f]);if(r)var u=r(n)}for(c&&c(a);o<b.length;o++)d=b[o],n.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return n.O(u)},a=self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[];a.forEach(c.bind(null,0)),a.push=c.bind(null,a.push.bind(a))}()}();