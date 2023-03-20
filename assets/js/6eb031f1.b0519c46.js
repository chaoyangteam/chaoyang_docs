"use strict";(self.webpackChunkchaoyang_docs=self.webpackChunkchaoyang_docs||[]).push([[7137],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),s=a(6550),u=a(1980),i=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,i]=b({queryString:a,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),k(e)}),[i,k,l]),tabValues:l}}var g=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=i[a].value;n!==s&&(p(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return r.createElement(T,(0,n.Z)({key:String(t)},e))}},8573:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(452);function l(e){return n.createElement(n.Fragment,null,n.createElement(r.Z,e))}},9523:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162);a(8573);const s={title:"TapTap\u8d26\u53f7\u767b\u5f55\u5f00\u53d1\u6307\u5357",sidebar_label:"Tap\u767b\u5f55",sidebar_position:3},u=void 0,i={unversionedId:"sdk/login/tap_login",id:"sdk/login/tap_login",title:"TapTap\u8d26\u53f7\u767b\u5f55\u5f00\u53d1\u6307\u5357",description:"\u53c2\u9605\u7d22\u5f15",source:"@site/docs/sdk/login/tap_login.md",sourceDirName:"sdk/login",slug:"/sdk/login/tap_login",permalink:"/docs/sdk/login/tap_login",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdk/login/tap_login.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"TapTap\u8d26\u53f7\u767b\u5f55\u5f00\u53d1\u6307\u5357",sidebar_label:"Tap\u767b\u5f55",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u8d26\u53f7\u767b\u5f55",permalink:"/docs/sdk/login/password_login"},next:{title:"SDK\u5165\u95e8",permalink:"/docs/category/sdk\u5165\u95e8-1"}},c={},p=[{value:"\u53c2\u9605\u7d22\u5f15",id:"\u53c2\u9605\u7d22\u5f15",level:2},{value:"TapTap\u767b\u5f55",id:"taptap\u767b\u5f55",level:2},{value:"\u9a8c\u8bc1\u767b\u5f55",id:"\u9a8c\u8bc1\u767b\u5f55",level:3},{value:"Try? Catch!",id:"try-catch",level:2}],d={toc:p},m="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u53c2\u9605\u7d22\u5f15"},"\u53c2\u9605\u7d22\u5f15"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6709\u5173TapTap\u767b\u5f55\u90e8\u5206\u66f4\u591a\u90e8\u5206\u53ef\u53c2\u9605Tap\u5f00\u53d1\u8005\u6587\u6863\u7684",(0,r.kt)("a",{parentName:"p",href:"https://developer.taptap.cn/docs/sdk/taptap-login/guide/start/"},"Tap\u767b\u5f55"),"\u90e8\u5206\uff0c\n\u6211\u4eec\u5df2\u5b8c\u6210\u5bf9 TDS \u7684\u6574\u5408\uff0c",(0,r.kt)("strong",{parentName:"p"},"chaoyang_user"),"\u7ee7\u627f\u4e86",(0,r.kt)("strong",{parentName:"p"},"LCUser"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"TDSUser\u7684\u529f\u80fd\uff0c\u5e76\u4e14\u52a0\u4ee5\u4f18\u5316"))),(0,r.kt)("h2",{id:"taptap\u767b\u5f55"},"TapTap\u767b\u5f55"),(0,r.kt)("p",null,"\u671d\u9633SDK\u63d0\u4f9b\u4e86\u66f4\u52a0\u4fbf\u6377\u7684\u767b\u5f55\u65b9\u6848\uff1a"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"c#",label:"Unity",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"   Chaoyang_Login.Tap_Login(new Chaoyang_Action\n         {\n            OnLogin = (state, info) =>\n            {\n              if (state)\n              {\n                // \u767b\u5f55\u6210\u529f\n              }\n              else\n              {\n                // \u767b\u5f55\u5931\u8d25\n              }\n        }\n    });\n"))),(0,r.kt)(o.Z,{value:"java",label:"Android",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\u6682\u4e0d\u652f\u6301\n"))),(0,r.kt)(o.Z,{value:"ios",label:"IOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ios"},"\u6682\u4e0d\u652f\u6301\n")))),(0,r.kt)("h3",{id:"\u9a8c\u8bc1\u767b\u5f55"},"\u9a8c\u8bc1\u767b\u5f55"),(0,r.kt)("p",null,"\u6e38\u620f\u4e2d\u6bcf\u6b21\u90fd\u9700\u8981\u8fdb\u884c\u767b\u5f55\u96be\u514d\u6709\u4e9b\u9ebb\u70e6\uff0c\u671d\u9633SDK\u63d0\u4f9b\u4e86\u9759\u9ed8\u767b\u5f55\u7684\u65b9\u6848\uff1a"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"c#",label:"Unity",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"  // \u9a8c\u8bc1\u7528\u6237\u662f\u5426\u6709\u6548\n  if (await Chaoyang_User.Verify_TapUser())\n  {\n    // \u6709\u6548\uff1a\u6267\u884c\u8df3\u5230\u9996\u9875\u7b49\u4e1a\u52a1\u64cd\u4f5c\n  }\n  else\n  {\n    // \u65e0\u6548\uff1a\u6267\u884c\u767b\u5f55\u64cd\u4f5c\n    ...\n  }\n"))),(0,r.kt)(o.Z,{value:"java",label:"Android",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\u6682\u4e0d\u652f\u6301\n"))),(0,r.kt)(o.Z,{value:"ios",label:"IOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ios"},"\u6682\u4e0d\u652f\u6301\n")))),(0,r.kt)("h2",{id:"try-catch"},"Try? Catch!"),(0,r.kt)("p",null,"\u6784\u5efa\u4e4b\u524d\u53ef\u4ee5\u6b63\u5e38\u767b\u5f55\uff0c\u6784\u5efa\u540e\u5374\u4e0d\u884c\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u8bf7\u89c1",(0,r.kt)("a",{parentName:"li",href:"https://developer.taptap.cn/docs/sdk/start/quickstart/#%E9%85%8D%E7%BD%AE%E7%AD%BE%E5%90%8D%E8%AF%81%E4%B9%A6"},"\u7b7e\u540d\u914d\u7f6e"),"\u3002\u5982\u4f55\u83b7\u53d6\u7b7e\u540d\uff1f\u53ef\u4ee5\u4f7f\u7528 GenSignatureMD5 \u7b49\u5de5\u5177\u83b7\u53d6\u3002")),(0,r.kt)("p",null,"\u767b\u5f55\u7a97\u53e3\u4e00\u7247\u767d\u65e0\u6cd5\u52a0\u8f7d\u6570\u636e\uff1f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u68c0\u67e5\u670d\u52a1\u5668\u57df\u540d\u524d\u662f\u5426\u6709 https://")," "),(0,r.kt)("li",{parentName:"ol"},"\u66f4\u65b0SDK\u548c\u7f16\u8f91\u5668\u7684\u7248\u672c"),(0,r.kt)("li",{parentName:"ol"},"\u5728Tap\u5f00\u53d1\u8005\u63d0\u4ea4\u5de5\u5355\u53cd\u9988")),(0,r.kt)("p",null,"\u66f4\u591a\u95ee\u9898\u6b63\u5728\u641c\u96c6\u6574\u7406\u4e2d\u3002"))}b.isMDXComponent=!0}}]);