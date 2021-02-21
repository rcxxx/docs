(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),c=n(7),a=(n(0),n(146)),o={id:"prefer-cc-style-cast",title:"",sidebar_label:"\u8f6c\u578b\u64cd\u4f5c\u7b26"},i={unversionedId:"cc/effective_cc/prefer-cc-style-cast",id:"cc/effective_cc/prefer-cc-style-cast",isDocsHomePage:!1,title:"prefer-cc-style-cast",description:"\u6700\u597d\u4f7f\u7528 C++ \u8f6c\u578b\u64cd\u4f5c\u7b26",source:"@site/docs/cc/effective_cc/\u4f7f\u7528C++\u8f6c\u578b\u64cd\u4f5c\u7b26.md",slug:"/cc/effective_cc/prefer-cc-style-cast",permalink:"/docs/docs/cc/effective_cc/prefer-cc-style-cast",version:"current",sidebar_label:"\u8f6c\u578b\u64cd\u4f5c\u7b26"},p=[],b={toc:p};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u6700\u597d\u4f7f\u7528-c-\u8f6c\u578b\u64cd\u4f5c\u7b26"},"\u6700\u597d\u4f7f\u7528 C++ \u8f6c\u578b\u64cd\u4f5c\u7b26"),Object(a.b)("p",null,"C\u98ce\u683c\u7684\u8f6c\u578b\u64cd\u4f5c\u7b26"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"(type)expression"))),Object(a.b)("p",null,"C++ \u5f15\u5165 4 \u4e2a\u65b0\u7684\u8f6c\u578b\u64cd\u4f5c\u7b26\uff08cast operators\uff09\uff1a",Object(a.b)("inlineCode",{parentName:"p"},"static_cast")," , ",Object(a.b)("inlineCode",{parentName:"p"},"const_cast")," , ",Object(a.b)("inlineCode",{parentName:"p"},"dynamic_cast")," , ",Object(a.b)("inlineCode",{parentName:"p"},"reinterpret_cast")),Object(a.b)("p",null,"\u4f7f\u7528\u65b0\u7684\u8f6c\u578b\u64cd\u4f5c\u7b26\u5e94\u8be5\u5c06\u4ee3\u7801\u6539\u5199\u4e3a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"static_cast<type>(expression)"))),Object(a.b)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u60f3\u8981\u5c06\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"int")," \u578b\u53d8\u91cf\u8f6c\u578b\u4e3a ",Object(a.b)("inlineCode",{parentName:"p"},"double")," \u578b\u53d8\u91cf\uff0c\u5f3a\u8feb\u8868\u8fbe\u5f0f\u8f93\u51fa\u6d6e\u70b9\u578b"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"int num_1, num_2;\n\ndouble result = ((double)num_1) / num_2;        // C \u98ce\u683c\u7c7b\u578b\u8f6c\u6362\n\n// \u5982\u679c\u91c7\u7528 C++ \u8f6c\u578b\u64cd\u4f5c\u7b26\ndouble result_2 = static_cast<double>(num_1) / num_2;\n")),Object(a.b)("p",null,"\u4f7f\u7528 C++ \u7684\u8f6c\u578b\u64cd\u4f5c\u7b26\uff0c\u66f4\u5bb9\u6613\u88ab\u8fa8\u8bc6\u51fa\u6765"),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"static_cast"))," \u57fa\u672c\u4e0a\u4e0e\u65e7\u5f0f\u7684\u7c7b\u578b\u8f6c\u6362\u529f\u80fd\u76f8\u4f3c\uff0c\u4e5f\u5177\u6709\u76f8\u540c\u7684\u9650\u5236\uff0c\u4f8b\u5982\u4e0d\u80fd\u5c06\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"double")," \u8f6c\u578b\u4e3a ",Object(a.b)("inlineCode",{parentName:"p"},"pointer")," \uff0c\u4e0d\u80fd\u5c06 ",Object(a.b)("inlineCode",{parentName:"p"},"struct")," \u8f6c\u578b\u4e3a ",Object(a.b)("inlineCode",{parentName:"p"},"int")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"static_cast")," \u751a\u81f3\u4e0d\u80fd\u79fb\u9664\u8868\u8fbe\u5f0f\u7684\u5e38\u91cf\u6027\uff08constness\uff09\uff0c\u56e0\u4e3a\u6709\u4e00\u4e2a\u65b0\u7684\u8f6c\u578b\u64cd\u4f5c\u7b26 ",Object(a.b)("inlineCode",{parentName:"li"},"const_cast")," \u4e13\u53f8\u8d77\u804c")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u5176\u4ed6\u65b0\u5f0f C++ \u8f6c\u578b\u64cd\u4f5c\u7b26\u9002\u7528\u4e8e\u66f4\u96c6\u4e2d\u7684\u76ee\u7684")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"const_cast"))," \u7528\u6765\u6539\u53d8\u8868\u8fbe\u5f0f\u4e2d\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"\u5e38\u91cf\u6027\uff08constness\uff09")," \u6216 ",Object(a.b)("inlineCode",{parentName:"p"},"\u53d8\u6613\u6027\uff08volatileness\uff09")," \uff0c\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"const_cast")," \u662f\u4e00\u79cd\u5f3a\u8c03\uff0c\u4f7f\u7528\u8fd9\u4e2a\u64cd\u4f5c\u7b26\u53ea\u7528\u6765\u6539\u53d8\u67d0\u7269\u7684\u5e38\u91cf\u6027\u6216\u53d8\u6613\u5f62\uff0c\u5982\u679c\u5c06 ",Object(a.b)("inlineCode",{parentName:"p"},"const_cast")," \u7528\u4e8e\u5176\u4ed6\u7528\u9014\uff0c\u8f6c\u578b\u64cd\u4f5c\u4f1a\u88ab\u62d2\u7edd"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"dynamic_cast")),' \u7528\u6765\u6267\u884c\u7ee7\u627f\u4f53\u7cfb\u4e2d\u7684 "\u5b89\u5168\u5411\u4e0b\u8f6c\u578b\u6216\u8de8\u7cfb\u8f6c\u578b\u52a8\u4f5c" \uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u53ef\u4ee5\u5229\u7528 ',Object(a.b)("inlineCode",{parentName:"p"},"dynamic_cast")," \u5c06\u6307\u5411\u57fa\u7c7b\u7684\u6307\u9488\u6216\u5f15\u7528\u8f6c\u578b\u4e3a\u6307\u5411\u6d3e\u751f\u7c7b\u7684\u6307\u9488\u6216\u5f15\u7528\uff0c\u5e76\u80fd\u5f97\u77e5\u662f\u5426\u8f6c\u578b\u6210\u529f\uff0c\u5982\u679c\u8f6c\u578b\u5931\u8d25\uff0c\u4f1a\u4ee5\u4e00\u4e2a\u7a7a\u6307\u9488\uff08\u5f53\u8f6c\u578b\u5bf9\u8c61\u662f\u6307\u9488\uff09\u6216\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"exception")," \uff08\u5f53\u8f6c\u578b\u5bf9\u8c61\u662f reference\uff09\u8868\u73b0\u51fa\u6765"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"``")))}l.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var b=c.a.createContext({}),l=function(e){var t=c.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(n),O=r,m=s["".concat(o,".").concat(O)]||s[O]||u[O]||a;return n?c.a.createElement(m,i(i({ref:t},b),{},{components:n})):c.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=O;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<a;b++)o[b]=n[b];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);