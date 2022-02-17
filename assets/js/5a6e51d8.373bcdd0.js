"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[2748],{3905:function(t,e,n){n.d(e,{Zo:function(){return f},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},f=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,f=o(t,["components","mdxType","originalType","parentName"]),c=d(n),s=a,g=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return n?r.createElement(g,i(i({ref:e},f),{},{components:n})):r.createElement(g,i({ref:e},f))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41481:function(t,e){var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}return n(t,[{key:"on",value:function(t,e){this.subscriptions[t]=this.subscriptions[t]||[],this.subscriptions[t].push(e)}},{key:"off",value:function(t,e){if(this.subscriptions[t]){var n=this.subscriptions[t].findIndex((function(t){return t===e}));this.subscriptions[t].splice(n,1)}}},{key:"handleMsg",value:function(t){t.data&&t.data.type&&(this.subscriptions[t.data.type]||[]).forEach((function(e){e(t.data,t.origin,t.source)}))}},{key:"destroy",value:function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}}}]),t}(),a=r;e.Z=a;"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"Receiver","src/recevier.js"),__REACT_HOT_LOADER__.register(a,"default","src/recevier.js"))},72181:function(t,e,n){n.d(e,{Z:function(){return p}});var r=n(75068),a=n(67294),l=n(45697),i=n.n(l),o=n(41481),p=function(t){function e(e){var n;return(n=t.call(this,e)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new o.Z,n.recevier.on("updateHeight",(function(t,e,r){n.iframe&&r===n.iframe.contentWindow&&(n.container.style.height=(t.msg||0)+"px",n.props.onUpdateHeight(t.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,r.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(t){var e=t.url,n=t.disableHeightSync;t.style;e.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height||"800px"),n!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var t=this,e=this.props,n=e.className,r=e.id,l=e.style,i=e.url;return i?a.createElement("div",{className:"bg-iframe "+n,id:r,style:Object.assign({height:800,width:"100%"},l),ref:function(e){t.container=e}},a.createElement("iframe",{src:i,style:{border:"none",width:"100%",height:"100%"},ref:function(e){t.iframe=e}})):a.createElement("div",{className:"bg-iframe empty"},"Iframe")},e}(a.PureComponent);p.displayName="bg-iframe",p.propTypes={className:i().string,disableHeightSync:i().bool,id:i().string,onUpdateHeight:i().func,style:i().object,url:i().string.isRequired},p.defaultProps={className:"",disableHeightSync:!1,id:"",onUpdateHeight:function(){},style:{},syncParam:!0,url:""}},64622:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return f},toc:function(){return m},default:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=n(72181),o=["components"],p={title:"\u660e\u7ec6",order:16},d="\u660e\u7ec6",f={unversionedId:"components/form/tableField",id:"components/form/tableField",title:"\u660e\u7ec6",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/tableField.mdx",sourceDirName:"components/form",slug:"/components/form/tableField",permalink:"/docs/components/form/tableField",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/form/tableField.mdx",tags:[],version:"current",frontMatter:{title:"\u660e\u7ec6",order:16},sidebar:"components",previous:{title:"\u7ea7\u8054\u9009\u62e9",permalink:"/docs/components/form/cascadeSelectField"},next:{title:"JSX",permalink:"/docs/components/advanced/JSX"}},m=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],c={toc:m};function s(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u660e\u7ec6"},"\u660e\u7ec6"),(0,l.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,l.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,l.kt)(i.Z,{url:"https://pre-yida-performance3.alibaba-inc.com/developer/table-field-v2?isRenderNav=false",mdxType:"Iframe"}),(0,l.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027code"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6570\u636e\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u52a8\u6001\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6807\u9898"),(0,l.kt)("td",{parentName:"tr",align:"left"},"label"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u201c\u6807\u9898\u201d"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u663e\u793a\u6807\u9898"),(0,l.kt)("td",{parentName:"tr",align:"left"},"showLabel"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"value"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},'[{"fieldId1": "123", "fieldId2": "456"}, {"fieldId1": "abc", "fieldId2": "def"}]'),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6392\u5217\u65b9\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"representation"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u201cTILED\u201d"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u53ef\u9009\u503c\uff1a"TILED", "TABLE"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5c55\u73b0\u65b9\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"layout"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'"VERTICAL"'),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u53ef\u9009\u503c\uff1a"VERTICAL", "HORIZONTAL"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e3b\u9898"),(0,l.kt)("td",{parentName:"tr",align:"left"},"theme"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'"split"'),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u53ea\u5728 PC \u8868\u683c\u6a21\u5f0f\u4e0b\u6709\u6548\uff0c\u53ef\u9009\u503c\uff1a"zebra", "split", "border"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u663e\u793a\u5e8f\u53f7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"showIndex"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ea\u5728 PC \u8868\u683c\u6a21\u5f0f\u4e0b\u6709\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u663e\u793a\u8868\u5934"),(0,l.kt)("td",{parentName:"tr",align:"left"},"showTableHead"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ea\u5728 PC \u8868\u683c\u6a21\u5f0f\u4e0b\u6709\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6309\u94ae\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"buttonName"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'"\u65b0\u589e\u4e00\u6761"'),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5220\u9664\u6309\u94ae"),(0,l.kt)("td",{parentName:"tr",align:"left"},"deleteButtonName"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'"\u5220\u9664"'),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:"left"},"behavior"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'{fieldBehavior: "NORMAL"}'),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},'fieldBehavior \u53ef\u9009\u503c\uff1a"NORMAL","DISABLED","READONLY","HIDDEN"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5927\u5bbd\u5ea6"),(0,l.kt)("td",{parentName:"tr",align:"left"},"style"),(0,l.kt)("td",{parentName:"tr",align:"left"},"object"),(0,l.kt)("td",{parentName:"tr",align:"left"},'{ maxWidth:"100%" }'),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4ec5 PC \u7aef\u652f\u6301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5927\u6761\u6570"),(0,l.kt)("td",{parentName:"tr",align:"left"},"listNum"),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"10"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5c0f\u6761\u6570"),(0,l.kt)("td",{parentName:"tr",align:"left"},"listMinNum"),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u989d\u5916\u6309\u94ae"),(0,l.kt)("td",{parentName:"tr",align:"left"},"importButton"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'"\u5176\u4ed6\u6309\u94ae"'),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u70b9\u51fb\u6dfb\u52a0\u4e8b\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:"left"},"onAddClick"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function(ctx) {}"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u70b9\u51fb\u5220\u9664\u4e8b\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:"left"},"onDelClick"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function(ctx) {}"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u70b9\u51fb\u81ea\u5b9a\u4e49\u6309\u94ae\u4e8b\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:"left"},"onClick"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function(ctx) {}"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u503c\u6539\u53d8\u4e8b\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:"left"},"onChange"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function({ values, extra }) {}"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"extra \u7ed3\u6784\uff1a{ from: '\u52a8\u4f5c\u6765\u6e90\uff0c\u5982 add_item / del_item', formGroupId: '\u8868\u5355\u5206\u7ec4 ID', changes: { name: '\u5b57\u6bb5\u540d\u79f0', value: '\u5b57\u6bb5\u503c' } }")))))}s.isMDXComponent=!0}}]);