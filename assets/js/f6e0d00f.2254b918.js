"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[3314],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=p(n),h=l,f=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6171:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var o=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],a={},s="Poll",p={unversionedId:"developers/types/staging/posts/poll",id:"developers/types/staging/posts/poll",isDocsHomePage:!1,title:"Poll",description:"The Poll object allows to specify the details of a poll that should be associated to a post. Please note that it",source:"@site/docs/02-developers/02-types/staging/posts/poll.md",sourceDirName:"02-developers/02-types/staging/posts",slug:"/developers/types/staging/posts/poll",permalink:"/next/developers/types/staging/posts/poll",editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-types/staging/posts/poll.md",version:"current",lastUpdatedAt:1637233457,formattedLastUpdatedAt:"11/18/2021",frontMatter:{}},d=[{value:"<code>Question</code>",id:"question",children:[]},{value:"<code>ProvidedAnswers</code>",id:"providedanswers",children:[]},{value:"<code>EndDate</code>",id:"enddate",children:[]},{value:"<code>Open</code>",id:"open",children:[]},{value:"<code>AllowsMultipleAnswers</code>",id:"allowsmultipleanswers",children:[]},{value:"<code>AllowsAnswerEdits</code>",id:"allowsansweredits",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"poll"},"Poll"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Poll")," object allows to specify the details of a poll that should be associated to a post. Please note that it\nis ",(0,r.kt)("strong",{parentName:"p"},"not")," necessary to associate a poll to each post. Instead, if you want to create a ",(0,r.kt)("a",{parentName:"p",href:"/next/developers/types/staging/posts/post"},(0,r.kt)("inlineCode",{parentName:"a"},"Post"))," without any\npoll associated to it, you simply have to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"nil")," value for this field."),(0,r.kt)("p",null,"Following you will find a description for all the contained field of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Poll")," object."),(0,r.kt)("h2",{id:"question"},(0,r.kt)("inlineCode",{parentName:"h2"},"Question")),(0,r.kt)("p",null,"This field contains the question that should be associated with the poll. It currently has no checks associated to it a part from the non-empty check. "),(0,r.kt)("h2",{id:"providedanswers"},(0,r.kt)("inlineCode",{parentName:"h2"},"ProvidedAnswers")),(0,r.kt)("p",null,"This field allows to specify a list of answers that are provided to the users willing to answer the  poll."),(0,r.kt)("p",null,"Each answer should be composed of two attributes: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ID"),", which identifies uniquely inside the answers' list that answer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Text"),", which contains the text of the answer itself. ")),(0,r.kt)("p",null,"The minimum number of answers that a poll must have is 2. "),(0,r.kt)("h2",{id:"enddate"},(0,r.kt)("inlineCode",{parentName:"h2"},"EndDate")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"EndDate")," field allows you to specify the date after which the poll should be considered closed and no longer accepting the answers. "),(0,r.kt)("h2",{id:"open"},(0,r.kt)("inlineCode",{parentName:"h2"},"Open")),(0,r.kt)("p",null,"This field tells whether the poll is still open and accepting new answers from users or not. Please note that the default value for this field is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and trying to create a poll with it set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," will result in an error. "),(0,r.kt)("p",null,"During the chain execution, this field will be automatically changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," when the ",(0,r.kt)("inlineCode",{parentName:"p"},"EndDate")," is passed."),(0,r.kt)("h2",{id:"allowsmultipleanswers"},(0,r.kt)("inlineCode",{parentName:"h2"},"AllowsMultipleAnswers")),(0,r.kt)("p",null,"This field allows to specify whether or not the poll allows multiple answers from the same user. If set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the users will be able to specify more than one answer to the same poll. Otherwise, if set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", each user will be allowed to answer with only one option to the poll. "),(0,r.kt)("h2",{id:"allowsansweredits"},(0,r.kt)("inlineCode",{parentName:"h2"},"AllowsAnswerEdits")),(0,r.kt)("p",null,"By setting this field to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", you will allow users to change their mind while the poll is still open, allowing them to change their answer(s). If set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", they will not be able to do so and their final answer(s) will be the first one they give."))}u.isMDXComponent=!0}}]);