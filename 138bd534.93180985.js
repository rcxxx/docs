(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),c=(n(0),n(92)),i={id:"data-structures-algorithm-2",title:"\u7b97\u6cd5 (2)",sidebar_label:"\u7b97\u6cd5 2"},b={unversionedId:"data-structures/data-structures-algorithm-2",id:"data-structures/data-structures-algorithm-2",isDocsHomePage:!1,title:"\u7b97\u6cd5 (2)",description:"\u7b97\u6cd5\u65f6\u95f4\u590d\u6742\u5ea6",source:"@site/docs/data-structures/\u7b97\u6cd52.md",slug:"/data-structures/data-structures-algorithm-2",permalink:"/docs/docs/data-structures/data-structures-algorithm-2",version:"current",sidebar_label:"\u7b97\u6cd5 2",sidebar:"someSidebar",previous:{title:"\u7b97\u6cd5",permalink:"/docs/docs/data-structures/data-structures-algorithm"},next:{title:"\u611f\u5174\u8da3\u533a\u57df\u2014\u2014ROI",permalink:"/docs/docs/opencv/opencv-roi"}},o=[{value:"\u7b97\u6cd5\u65f6\u95f4\u590d\u6742\u5ea6",id:"\u7b97\u6cd5\u65f6\u95f4\u590d\u6742\u5ea6",children:[{value:"\u63a8\u5bfc\u5927O\u9636",id:"\u63a8\u5bfc\u5927o\u9636",children:[]},{value:"\u5e38\u6570\u9636",id:"\u5e38\u6570\u9636",children:[]},{value:"\u7ebf\u6027\u9636",id:"\u7ebf\u6027\u9636",children:[]},{value:"\u5bf9\u6570\u9636",id:"\u5bf9\u6570\u9636",children:[]},{value:"\u5e73\u65b9\u9636",id:"\u5e73\u65b9\u9636",children:[]}]},{value:"\u5e38\u89c1\u7684\u65f6\u95f4\u590d\u6742\u5ea6",id:"\u5e38\u89c1\u7684\u65f6\u95f4\u590d\u6742\u5ea6",children:[]},{value:"\u6700\u574f\u60c5\u51b5\u4e0e\u5e73\u5747\u60c5\u51b5",id:"\u6700\u574f\u60c5\u51b5\u4e0e\u5e73\u5747\u60c5\u51b5",children:[]},{value:"\u7b97\u6cd5\u7a7a\u95f4\u590d\u6742\u5ea6",id:"\u7b97\u6cd5\u7a7a\u95f4\u590d\u6742\u5ea6",children:[]}],l={rightToc:o};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u7b97\u6cd5\u65f6\u95f4\u590d\u6742\u5ea6"},"\u7b97\u6cd5\u65f6\u95f4\u590d\u6742\u5ea6"),Object(c.b)("h4",{id:"\u7b97\u6cd5\u65f6\u95f4\u590d\u6742\u5ea6\u7684\u5b9a\u4e49"},"\u7b97\u6cd5\u65f6\u95f4\u590d\u6742\u5ea6\u7684\u5b9a\u4e49"),Object(c.b)("p",null,"\u5728\u8fdb\u884c\u7b97\u6cd5\u5206\u6790\u65f6\uff0c\u8bed\u53e5\u603b\u7684\u6267\u884c\u6b21\u6570T(n)\u662f\u5173\u4e8e\u95ee\u9898\u89c4\u6a21n\u7684\u51fd\u6570\uff0c\u8fdb\u800c\u5206\u6790T(n)\u968fn\u53d8\u5316\u60c5\u51b5\u5e76\u786e\u5b9aT(n)\u7684\u6570\u91cf\u7ea7\u3002\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\uff0c\u4e5f\u5c31\u662f\u7b97\u6cd5\u7684\u65f6\u95f4\u91cf\u5ea6\u8bb0\u4f5c\uff1aT(n)=O(f(n))\u5b83\u8868\u793a\u968f\u95ee\u9898\u89c4\u6a21n\u7684\u589e\u5927\uff0c\u7b97\u6cd5\u6267\u884c\u65f6\u95f4\u7684\u589e\u957f\u7387\u548cf(n)\u7684\u589e\u957f\u7387\u76f8\u540c\uff0c\u79f0\u4f5c\u7b97\u6cd5\u7684\u6e10\u8fd1\u65f6\u95f4\u590d\u6742\u5ea6\uff0c\u7b80\u79f0\u4e3a\u65f6\u95f4\u590d\u6742\u5ea6\u3002\u5176\u4e2df(n)\u662f\u95ee\u9898\u89c4\u6a21n\u7684\u67d0\u4e2a\u51fd\u6570"),Object(c.b)("h3",{id:"\u63a8\u5bfc\u5927o\u9636"},"\u63a8\u5bfc\u5927O\u9636"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7528\u5e38\u65701\u53d6\u4ee3\u8fd0\u884c\u65f6\u95f4\u4e2d\u7684\u6240\u6709\u52a0\u6cd5\u5e38\u6570"),Object(c.b)("li",{parentName:"ul"},"\u5728\u4fee\u6539\u540e\u7684\u8fd0\u884c\u6b21\u6570\u51fd\u6570\u4e2d\uff0c\u53ea\u4fdd\u7559\u6700\u9ad8\u9636\u9879"),Object(c.b)("li",{parentName:"ul"},"\u5982\u679c\u6700\u9ad8\u9636\u9879\u5b58\u5728\u4e14\u4e0d\u662f1\uff0c\u5219\u53bb\u9664\u4e0e\u8fd9\u4e2a\u9879\u76f8\u4e58\u7684\u5e38\u6570")),Object(c.b)("p",null,"\u6700\u540e\u63a8\u5bfc\u51fa\u7684\u7ed3\u679c\u5c31\u662f\u5927O\u9636"),Object(c.b)("h3",{id:"\u5e38\u6570\u9636"},"\u5e38\u6570\u9636"),Object(c.b)("p",null,"\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3aO(1)"),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u6ce8")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u4e0d\u8bba\u8fd9\u4e2a\u5e38\u6570\u662f\u591a\u5c11\uff0c\u90fd\u8bb0\u4f5cO(1)\uff0c\u800c\u4e0d\u80fd\u662fO(3)\u3001O(12)"))),Object(c.b)("p",null,"\u5bf9\u4e8e\u5206\u652f\u7ed3\u6784\u800c\u8a00\uff0c\u4e0d\u8bba\u662f\u771f\u8fd8\u662f\u5047\uff0c\u6267\u884c\u6b21\u6570\u4e3a\u6052\u5b9a\u7684\uff0c\u4e0d\u4f1a\u968f\u7740n\u7684\u53d8\u5927\u800c\u53d8\u5316\uff0c\u6240\u4ee5\u5355\u7eaf\u7684\u5206\u652f\u7ed3\u6784\uff08\u4e0d\u5305\u542b\u5728\u5faa\u73af\u7ed3\u6784\u4e2d\uff09\uff0c\u5176\u65f6\u95f4\u590d\u6742\u5ea6\u4e5f\u662fO(1)"),Object(c.b)("h3",{id:"\u7ebf\u6027\u9636"},"\u7ebf\u6027\u9636"),Object(c.b)("p",null,"\u4ee3\u7801\u8981\u6267\u884cn\u6b21\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u5c31\u4e3aO(n)\u2014\u2014\u6267\u884cn\u6b21\u590d\u6742\u5ea6\u4e3aO(1)\u7684\u7b97\u6cd5"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6211\u4eec\u8981\u5206\u6790\u7b97\u6cd5\u7684\u590d\u6742\u5ea6\uff0c\u5173\u952e\u5c31\u662f\u8981\u5206\u6790\u5faa\u73af\u7ed3\u6784\u7684\u8fd0\u884c\u60c5\u51b5")),Object(c.b)("h3",{id:"\u5bf9\u6570\u9636"},"\u5bf9\u6570\u9636"),Object(c.b)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\u4e3aO(logn)"),Object(c.b)("h3",{id:"\u5e73\u65b9\u9636"},"\u5e73\u65b9\u9636"),Object(c.b)("p",null,"\u5faa\u73af\u5d4c\u5957\uff0c\u590d\u6742\u5ea6\u4e3aO(n)\u7684\u7b97\u6cd5\u518d\u5faa\u73afn\u6b21"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7b97\u6cd5\u65f6\u95f4\u590d\u6742\u5ea6\u4e3aO(n^2)"),Object(c.b)("li",{parentName:"ul"},"\u5982\u679c\u4e3a\u5d4c\u5957\u5faa\u73afm\u6b21  \u5219\u4e3aO(n*m)")),Object(c.b)("h2",{id:"\u5e38\u89c1\u7684\u65f6\u95f4\u590d\u6742\u5ea6"},"\u5e38\u89c1\u7684\u65f6\u95f4\u590d\u6742\u5ea6"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/rcxxx/my-img/main/img/screenshot/%E5%B8%B8%E8%A7%81%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6.png",alt:null}))),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\ud83d\udca1")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"O(1)<O(log n)<O(n)<O(n^2)<O(n^3)<O(2^n)<O(n!)<O(n^n)"))),Object(c.b)("h2",{id:"\u6700\u574f\u60c5\u51b5\u4e0e\u5e73\u5747\u60c5\u51b5"},"\u6700\u574f\u60c5\u51b5\u4e0e\u5e73\u5747\u60c5\u51b5"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6700\u574f\u60c5\u51b5\u8fd0\u884c\u65f6\u95f4\u662f\u4e00\u79cd\u4fdd\u8bc1\uff0c\u90a3\u5c31\u662f\u8fd0\u884c\u65f6\u95f4\u5c06\u4e0d\u4f1a\u518d\u574f\u4e86")),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"s \u6ce8 ")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u5728\u5e94\u7528\u4e2d\uff0c\u8fd9\u662f\u4e00\u79cd\u6700\u91cd\u8981\u7684\u8981\u6c42\uff0c\u901a\u5e38\uff0c\u9664\u975e\u7279\u522b\u6307\u5b9a\uff0c\u6211\u4eec\u63d0\u5230\u7684\u8fd0\u884c\u65f6\u95f4\u90fd\u662f\u6700\u574f\u60c5\u51b5\u7684\u8fd0\u884c\u65f6\u95f4"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5e73\u5747\u8fd0\u884c\u65f6\u95f4\u662f\u6240\u6709\u60c5\u51b5\u4e2d\u6700\u6709\u610f\u4e49\u7684\uff0c\u56e0\u4e3a\u5b83\u662f\u671f\u671b\u7684\u8fd0\u884c\u65f6\u95f4"),Object(c.b)("li",{parentName:"ul"},"\u4e00\u822c\u5728\u6ca1\u6709\u7279\u6b8a\u8bf4\u660e\u7684\u60c5\u51b5\u4e0b\uff0c\u90fd\u662f\u6307\u6700\u574f\u65f6\u95f4\u590d\u6742\u5ea6")),Object(c.b)("h2",{id:"\u7b97\u6cd5\u7a7a\u95f4\u590d\u6742\u5ea6"},"\u7b97\u6cd5\u7a7a\u95f4\u590d\u6742\u5ea6"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7b97\u6cd5\u7a7a\u95f4\u590d\u6742\u5ea6\u901a\u8fc7\u8ba1\u7b97\u7b97\u6cd5\u6240\u9700\u7684\u50a8\u5b58\u7a7a\u95f4\u5b9e\u73b0")),Object(c.b)("p",null,"\u7b97\u6cd5\u7a7a\u95f4\u590d\u6742\u5ea6\u7684\u8ba1\u7b97\u516c\u5f0f\u8bb0\u4f5c\uff1aS(n)=O(f(n))\uff0c\u5176\u4e2d\uff0cn\u4e3a\u95ee\u9898\u7684\u89c4\u6a21\uff0cf(n)\u4e3a\u8bed\u53e5\u5173\u4e8en\u6240\u5360\u50a8\u5b58\u7a7a\u95f4\u7684\u51fd\u6570"),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\ud83d\udca1")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u901a\u5e38\u6211\u4eec\u90fd\u4f7f\u7528\u201c\u65f6\u95f4\u590d\u6742\u5ea6\u201d\u6765\u6307\u8fd0\u884c\u65f6\u95f4\u7684\u9700\u6c42\uff0c\u4f7f\u7528\u201c\u7a7a\u95f4\u590d\u6742\u5ea6\u201d\u6307\u7a7a\u95f4\u9700\u6c42\u3002\u5f53\u4e0d\u9650\u5b9a\u8bcd\u5730\u4f7f\u7528\u201c\u590d\u6742\u5ea6\u201d\u65f6\uff0c\u901a\u5e38\u6307\u65f6\u95f4\u590d\u6742\u5ea6"))))}d.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,m=s["".concat(i,".").concat(u)]||s[u]||O[u]||c;return n?r.a.createElement(m,b(b({ref:t},l),{},{components:n})):r.a.createElement(m,b({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=u;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);