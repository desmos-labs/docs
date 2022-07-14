"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[63991],{3905:function(e,t,s){s.d(t,{Zo:function(){return u},kt:function(){return c}});var n=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function p(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)s=l[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)s=l[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var r=n.createContext({}),i=function(e){var t=n.useContext(r),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},u=function(e){var t=i(e.components);return n.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=i(s),c=a,h=m["".concat(r,".").concat(c)]||m[c]||d[c]||l;return s?n.createElement(h,o(o({ref:t},u),{},{components:s})):n.createElement(h,o({ref:t},u))}));function c(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=s.length,o=new Array(l);o[0]=m;var p={};for(var r in t)hasOwnProperty.call(t,r)&&(p[r]=t[r]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=s[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}m.displayName="MDXCreateElement"},63972:function(e,t,s){s.r(t),s.d(t,{assets:function(){return u},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return d}});var n=s(87462),a=s(63366),l=(s(67294),s(3905)),o=["components"],p={id:"client",title:"Client",sidebar_label:"Client",slug:"client"},r="Client",i={unversionedId:"developers/modules/posts/client",id:"version-4.1.0/developers/modules/posts/client",title:"Client",description:"CLI",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/posts/08-client.md",sourceDirName:"02-developers/02-modules/posts",slug:"/developers/modules/posts/client",permalink:"/developers/modules/posts/client",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/posts/08-client.md",tags:[],version:"4.1.0",lastUpdatedAt:1657817134,formattedLastUpdatedAt:"7/14/2022",sidebarPosition:8,frontMatter:{id:"client",title:"Client",sidebar_label:"Client",slug:"client"},sidebar:"docs",previous:{title:"Parameters",permalink:"/developers/modules/posts/params"},next:{title:"Overview",permalink:"/developers/modules/reactions/overview"}},u={},d=[{value:"CLI",id:"cli",level:2},{value:"Query",id:"query",level:3},{value:"post",id:"post",level:4},{value:"posts",id:"posts",level:4},{value:"attachments",id:"attachments",level:4},{value:"answers",id:"answers",level:4},{value:"params",id:"params",level:4},{value:"gRPC",id:"grpc",level:2},{value:"Post",id:"post-1",level:3},{value:"SubspacePosts",id:"subspaceposts",level:3},{value:"SectionPosts",id:"sectionposts",level:3},{value:"PostAttachments",id:"postattachments",level:3},{value:"PollAnswers",id:"pollanswers",level:3},{value:"Params",id:"params-1",level:3},{value:"REST",id:"rest",level:2},{value:"Post",id:"post-2",level:3},{value:"SubspacePosts",id:"subspaceposts-1",level:3},{value:"SectionPosts",id:"sectionposts-1",level:3},{value:"PostAttachments",id:"postattachments-1",level:3},{value:"PollAnswers",id:"pollanswers-1",level:3},{value:"Params",id:"params-2",level:3}],m={toc:d};function c(e){var t=e.components,s=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"client"},"Client"),(0,l.kt)("h2",{id:"cli"},"CLI"),(0,l.kt)("p",null,"A user can query and interact with the ",(0,l.kt)("inlineCode",{parentName:"p"},"posts")," module using the CLI."),(0,l.kt)("h3",{id:"query"},"Query"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"query")," commands allow users to query the ",(0,l.kt)("inlineCode",{parentName:"p"},"posts")," state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"desmos query posts --help\n")),(0,l.kt)("h4",{id:"post"},"post"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"post")," query command allows users to query a post with the given id inside a subspace with the given id."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query posts post [subspace-id] [post-id] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query posts post 1 1\n")),(0,l.kt)("p",null,"Example output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'post:\n  author: desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3\n  conversation_id: "0"\n  creation_date: "2022-06-20T15:13:10.751262Z"\n  entities:\n    hashtags: []\n    mentions: []\n    urls:\n    - display_url: This\n      end: "3"\n      start: "0"\n      url: https://example.com\n  external_id: This is my external id\n  id: "1"\n  last_edited_date: null\n  referenced_posts: []\n  reply_settings: REPLY_SETTING_EVERYONE\n  section_id: 1\n  subspace_id: "1"\n  text: This is my post text\n')),(0,l.kt)("h4",{id:"posts"},"posts"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"posts")," query command allows users to query all the posts for a given subspace id optionally specifying also a section id."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query posts posts [subspace-id] [[section-id]] [flags]\n")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query posts posts 1 --page=1 --limit=100\ndesmos query posts posts 1 1 --page=1 --limit=100\n")),(0,l.kt)("p",null,"Example output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'pagination:\n  next_key: null\n  total: "0"\nposts:\n- author: desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3\n  conversation_id: "0"\n  creation_date: "2022-06-20T15:13:10.751262Z"\n  entities:\n    hashtags: []\n    mentions: []\n    urls:\n    - display_url: This\n      end: "3"\n      start: "0"\n      url: https://example.com\n  external_id: This is my external id\n  id: "1"\n  last_edited_date: null\n  referenced_posts: []\n  reply_settings: REPLY_SETTING_EVERYONE\n  section_id: 1\n  subspace_id: "1"\n  text: This is my post text\n- author: desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3\n  conversation_id: "0"\n  creation_date: "2022-06-21T09:19:12.343428Z"\n  entities:\n    hashtags: []\n    mentions: []\n    urls:\n    - display_url: This\n      end: "3"\n      start: "0"\n      url: https://example.com\n  external_id: This is my external id\n  id: "2"\n  last_edited_date: null\n  referenced_posts: []\n  reply_settings: REPLY_SETTING_EVERYONE\n  section_id: 1\n  subspace_id: "1"\n  text: This is my second post text\n')),(0,l.kt)("h4",{id:"attachments"},"attachments"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"attachments")," query command allow users to query all the attachments for the post with the given id inside the subspace with the\ngiven id."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query posts attachments [subspace-id] [post-id] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query posts attachments 1 1 --page=1 --limit=100\n")),(0,l.kt)("p",null,"Example output: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'attachments:\n- content:\n    \'@type\': /desmos.posts.v2.media\n    mime_type: image/png\n    uri: ftp://user:password@example.com/image.png\n  id: 1\n  post_id: "1"\n  section_id: 0\n  subspace_id: "1"\npagination:\n  next_key: null\n  total: "0"\n')),(0,l.kt)("h4",{id:"answers"},"answers"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"answers")," query command allows users to query all the answers for a given poll attached to the given post living on the given subspace.\nIt is also possible to specify an optional user."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query posts answers [subspace-id] [post-id] [poll-id] [[user]] [flags]\n")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query posts answers 1 1 1\ndesmos query posts answers 1 1 1 desmos1mc0mrx23aawryc6gztvdyrupph00yz8lk42v40 --page=1 --limit=100\n")),(0,l.kt)("p",null,"Examples output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'answers:\n- answers_indexes:\n  - 0\n  - 1\n  poll_id: 1\n  post_id: "1"\n  section_id: 0\n  subspace_id: "1"\n  user: desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3\npagination:\n  next_key: null\n  total: "0"\n')),(0,l.kt)("h4",{id:"params"},"params"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"params")," query command allows users to get the currently set parameters. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query posts params [flags]\n")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query posts params\n")),(0,l.kt)("p",null,"Example output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"params:\n  max_text_length: 500\n")),(0,l.kt)("h2",{id:"grpc"},"gRPC"),(0,l.kt)("p",null,"A user can query the ",(0,l.kt)("inlineCode",{parentName:"p"},"posts")," module gRPC endpoints. "),(0,l.kt)("h3",{id:"post-1"},"Post"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Post")," endpoint allows users to query a post with the given id inside a subspace with the given id."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.posts.v2.Query/Post\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n-d \'{"subspace_id":1, "post_id":1}\' localhost:9090 desmos.posts.v2.Query/Post\n')),(0,l.kt)("p",null,"Example output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "post": {\n    "subspaceId": "1",\n    "sectionId": 1,\n    "id": "1",\n    "externalId": "This is my external id",\n    "text": "This is my post text",\n    "entities": {\n      "urls": [\n        {\n          "end": "3",\n          "url": "https://example.com",\n          "displayUrl": "This"\n        }\n      ]\n    },\n    "author": "desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3",\n    "replySettings": "REPLY_SETTING_EVERYONE",\n    "creationDate": "2022-06-20T15:13:10.751262Z",\n    "lastEditedDate": "2022-06-21T15:04:05.722967Z"\n  }\n}\n')),(0,l.kt)("h3",{id:"subspaceposts"},"SubspacePosts"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"SubspacePosts")," endpoint allows users to query all the posts of the subspace with the given id."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.posts.v2.Query/SubspacePosts\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext \\\n-d '{\"subspace_id\":1}' localhost:9090 desmos.posts.v2.Query/SubspacePosts\n")),(0,l.kt)("p",null,"Example output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "posts": [\n    {\n      "subspaceId": "1",\n      "sectionId": 1,\n      "id": "1",\n      "externalId": "This is my external id",\n      "text": "This is my post text",\n      "entities": {\n        "urls": [\n          {\n            "end": "3",\n            "url": "https://example.com",\n            "displayUrl": "This"\n          }\n        ]\n      },\n      "author": "desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3",\n      "replySettings": "REPLY_SETTING_EVERYONE",\n      "creationDate": "2022-06-20T15:13:10.751262Z",\n      "lastEditedDate": "2022-06-21T15:04:05.722967Z"\n    },\n    {\n      "subspaceId": "1",\n      "sectionId": 1,\n      "id": "2",\n      "externalId": "This is my external id",\n      "text": "This is my second post text",\n      "entities": {\n        "urls": [\n          {\n            "end": "3",\n            "url": "https://example.com",\n            "displayUrl": "This"\n          }\n        ]\n      },\n      "author": "desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3",\n      "replySettings": "REPLY_SETTING_EVERYONE",\n      "creationDate": "2022-06-21T09:19:12.343428Z"\n    }\n  ],\n  "pagination": {\n    "total": "2"\n  }\n}\n')),(0,l.kt)("h3",{id:"sectionposts"},"SectionPosts"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"SectionPosts")," endpoint allows users to return all the posts associated with the section with the given id."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.posts.v2.Query/SectionPosts\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n-d \'{"subspace_id":1, "section_id":1}\' localhost:9090 desmos.posts.v2.Query/SectionPosts\n')),(0,l.kt)("p",null,"Example output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "posts": [\n    {\n      "subspaceId": "1",\n      "sectionId": 1,\n      "id": "1",\n      "externalId": "This is my external id",\n      "text": "This is my post text",\n      "entities": {\n        "urls": [\n          {\n            "end": "3",\n            "url": "https://example.com",\n            "displayUrl": "This"\n          }\n        ]\n      },\n      "author": "desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3",\n      "replySettings": "REPLY_SETTING_EVERYONE",\n      "creationDate": "2022-06-20T15:13:10.751262Z",\n      "lastEditedDate": "2022-06-21T15:04:05.722967Z"\n    },\n    {\n      "subspaceId": "1",\n      "sectionId": 1,\n      "id": "2",\n      "externalId": "This is my external id",\n      "text": "This is my second post text",\n      "entities": {\n        "urls": [\n          {\n            "end": "3",\n            "url": "https://example.com",\n            "displayUrl": "This"\n          }\n        ]\n      },\n      "author": "desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3",\n      "replySettings": "REPLY_SETTING_EVERYONE",\n      "creationDate": "2022-06-21T09:19:12.343428Z"\n    }\n  ],\n  "pagination": {\n    "total": "2"\n  }\n}\n')),(0,l.kt)("h3",{id:"postattachments"},"PostAttachments"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"PostAttachments")," endpoint allows users to query all the attachment associated with the post id given."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.posts.v2.Query/PostAttachments\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n-d \'{"subspace_id":1, "post_id":1}\' localhost:9090 desmos.posts.v2.Query/PostAttachments\n')),(0,l.kt)("p",null,"Example output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attachments": [\n    {\n      "subspaceId": "1",\n      "postId": "1",\n      "id": 1,\n      "content": {"@type":"/desmos.posts.v2.media","mimeType":"image/png","uri":"ftp://user:password@example.com/image.png"}\n    },\n    {\n      "subspaceId": "1",\n      "postId": "1",\n      "id": 2,\n      "content": {"@type":"/desmos.posts.v2.poll","allowsAnswerEdits":true,"allowsMultipleAnswers":true,"endDate":"2025-01-01T12:00:00Z","providedAnswers":[{"text":"yes"},{"text":"no"}],"question":"A question"}\n    }\n  ],\n  "pagination": {\n    "total": "2"\n  }\n}\n\n')),(0,l.kt)("h3",{id:"pollanswers"},"PollAnswers"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"PollAnswers")," endpoint allows users to query al the poll answer associated with the given poll id attached to the post\nwith the given post id."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.posts.v2.Query/PollAnswers\n")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n-d \'{"subspace_id":1, "post_id":1, "poll_id":2}\' localhost:9090 desmos.posts.v2.Query/PollAnswers\ngrpcurl -plaintext \\\n-d \'{"subspace_id":1, "post_id":1, "poll_id":2, "user":"desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3"}\' localhost:9090 desmos.posts.v2.Query/PollAnswers\n')),(0,l.kt)("p",null,"Example output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "answers": [\n    {\n      "subspaceId": "1",\n      "postId": "1",\n      "pollId": 2,\n      "answersIndexes": [\n        0,\n        1\n      ],\n      "user": "desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3"\n    }\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n\n')),(0,l.kt)("h3",{id:"params-1"},"Params"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Params")," endpoint allows users to query the module's parameters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.posts.v2.Query/Params\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext localhost:9090 desmos.posts.v2.Query/Params\n")),(0,l.kt)("p",null,"Example output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "params": {\n    "maxTextLength": 500\n  }\n}\n')),(0,l.kt)("h2",{id:"rest"},"REST"),(0,l.kt)("p",null,"A user can query the ",(0,l.kt)("inlineCode",{parentName:"p"},"posts")," module using REST endpoints."),(0,l.kt)("h3",{id:"post-2"},"Post"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Post")," endpoint allows users to query a post with the given id inside a subspace with the given id."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/desmos/posts/v2/subspaces/{subspace_id}/posts/{post_id}\n")),(0,l.kt)("h3",{id:"subspaceposts-1"},"SubspacePosts"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"SubspacePosts")," endpoint allows users to query all the posts of the subspace with the given id."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/desmos/posts/v2/subspaces/{subspace_id}/posts\n")),(0,l.kt)("h3",{id:"sectionposts-1"},"SectionPosts"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"SectionPosts")," endpoint allows users to return all the posts associated with the section with the given id associated\nto the subspace with the given id."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/desmos/posts/v2/subspaces/{subspace_id}/sections/{section_id}/posts\n")),(0,l.kt)("h3",{id:"postattachments-1"},"PostAttachments"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"PostAttachments")," endpoint allows users to query all the attachment associated with the post id given living inside\nthe subspace with the given id."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/desmos/posts/v2/subspaces/{subspace_id}/posts/{post_id}/attachments\n")),(0,l.kt)("h3",{id:"pollanswers-1"},"PollAnswers"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"PollAnswers")," endpoint allows users to query al the poll answer associated with the given poll id attached to the post\nwith the given post id inside the subspace with the given id."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/desmos/posts/v2/subspaces/{subspace_id}/posts/{post_id}/polls/{poll_id}/answers\n")),(0,l.kt)("h3",{id:"params-2"},"Params"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Params")," endpoint allows users to query the module's parameters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/desmos/posts/v2/params\n")))}c.isMDXComponent=!0}}]);