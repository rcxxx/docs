(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return s}));var a=n(0),c=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),i=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},O=function(e){var t=i(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,r=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),O=i(n),d=a,s=O["".concat(r,".").concat(d)]||O[d]||u[d]||b;return n?c.a.createElement(s,l(l({ref:t},p),{},{components:n})):c.a.createElement(s,l({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,r=new Array(b);r[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<b;p++)r[p]=n[p];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"Highlight",(function(){return p})),n.d(t,"default",(function(){return O}));var a=n(3),c=n(7),b=(n(0),n(110)),r={id:"opencv-install-gpu",title:"OpenCV\u5f00\u53d1\u73af\u5883\u914d\u7f6e",sidebar_label:"Install\uff08GPU\uff09"},l={unversionedId:"opencv/opencv-install-gpu",id:"opencv/opencv-install-gpu",isDocsHomePage:!1,title:"OpenCV\u5f00\u53d1\u73af\u5883\u914d\u7f6e",description:"OpenCV",source:"@site/docs/opencv/opencv-install-02.md",slug:"/opencv/opencv-install-gpu",permalink:"/docs/docs/opencv/opencv-install-gpu",version:"current",sidebar_label:"Install\uff08GPU\uff09",sidebar:"someSidebar",previous:{title:"OpenCV\u5f00\u53d1\u73af\u5883\u914d\u7f6e",permalink:"/docs/docs/opencv/opencv-install-cpu"},next:{title:"\u611f\u5174\u8da3\u533a\u57df\u2014\u2014ROI",permalink:"/docs/docs/opencv/opencv-roi"}},o=[{value:"OpenCV",id:"opencv",children:[]},{value:"Ubuntu18.04\u4ece\u6e90\u7801\u7f16\u8bd1OpenCV - \u5f00\u542fGPU\u652f\u6301",id:"ubuntu1804\u4ece\u6e90\u7801\u7f16\u8bd1opencv---\u5f00\u542fgpu\u652f\u6301",children:[{value:"\u5b89\u88c5\u524d\u5148\u5b89\u88c5\u663e\u5361\u9a71\u52a8\u4ee5\u53caCUDA\u3001CUDNN",id:"\u5b89\u88c5\u524d\u5148\u5b89\u88c5\u663e\u5361\u9a71\u52a8\u4ee5\u53cacuda\u3001cudnn",children:[]},{value:"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56",id:"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56",children:[]},{value:"\u83b7\u53d6 <strong><code>OpenCV</code></strong> \u6e90\u7801",id:"\u83b7\u53d6-opencv-\u6e90\u7801",children:[]},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",children:[]},{value:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],p=function(e){var t=e.children,n=e.color;return Object(b.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},i={rightToc:o,Highlight:p};function O(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"opencv"},"OpenCV"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://opencv.org/"}),"OpenCV\u5b98\u7f51"))),Object(b.b)("h2",{id:"ubuntu1804\u4ece\u6e90\u7801\u7f16\u8bd1opencv---\u5f00\u542fgpu\u652f\u6301"},"Ubuntu18.04\u4ece\u6e90\u7801\u7f16\u8bd1OpenCV - \u5f00\u542fGPU\u652f\u6301"),Object(b.b)("p",null,"\u914d\u7f6e\u5217\u8868"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u7248\u672c"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u7cfb\u7edf\u7248\u672c"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Ubuntu18.04LTS")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GCC/G++"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"7.5.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"OpenCV"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"4.1.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CUDA"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"10.2")))),Object(b.b)("h3",{id:"\u5b89\u88c5\u524d\u5148\u5b89\u88c5\u663e\u5361\u9a71\u52a8\u4ee5\u53cacuda\u3001cudnn"},"\u5b89\u88c5\u524d\u5148\u5b89\u88c5\u663e\u5361\u9a71\u52a8\u4ee5\u53caCUDA\u3001CUDNN"),Object(b.b)("p",null,"\u53ef\u4ee5\u53c2\u8003\u8fd9\u91cc\ud83d\udc49"),Object(b.b)("h3",{id:"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56"},"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt-get install build-essential\nsudo apt-get install cmake git libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev libswscale-dev\nsudo apt-get install python-dev python-numpy libtbb2 libtbb-dev libjpeg-dev libpng-dev libtiff-dev libdc1394-22\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"libjasper-dev")))),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'sudo add-apt-repository "deb http://security.ubuntu.com/ubuntu xenial-security main"\nsudo apt update\nsudo apt install libjasper-dev\n')),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4e00\u4e9b\u5176\u4ed6\u7684\u4f9d\u8d56")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt-get install \\\nlibglew-dev \\\nzlib1g-dev \\\nlibavutil-dev \\\nlibpostproc-dev \\\nlibeigen3-dev\n")),Object(b.b)("h3",{id:"\u83b7\u53d6-opencv-\u6e90\u7801"},"\u83b7\u53d6 ",Object(b.b)("strong",{parentName:"h3"},Object(b.b)("inlineCode",{parentName:"strong"},"OpenCV"))," \u6e90\u7801"),Object(b.b)("p",null,"\u901a\u8fc7 ",Object(b.b)("inlineCode",{parentName:"p"},"git")," \u4e0b\u8f7d"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/<my_work_directory>\ngit clone https://github.com/opencv/opencv.git\ngit clone https://github.com/opencv/opencv_contrib.git\ngit clone https://github.com/opencv/opencv_extra.git\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u6ce8\u610f\u8fd9\u91cc\u9700\u8981\u5206\u522b\u5c06\u4e09\u4e2a\u4ed3\u5e93\u4e2d\u7684\u5206\u652f\u90fd\u5207\u6362\u81f3 ",Object(b.b)("inlineCode",{parentName:"li"},"4.1.0"))),Object(b.b)("p",null,"\u4ece\u5b98\u7f51\u4e0b\u8f7d\u538b\u7f29\u5305 ",Object(b.b)(p,{color:"#25c2a0",mdxType:"Highlight"},"[\u63a8\u8350]")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/opencv/opencv/releases/tag/4.1.0"}),Object(b.b)("strong",{parentName:"a"},Object(b.b)("inlineCode",{parentName:"strong"},"opencv-4.1.0")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/opencv/opencv_contrib/releases/tag/4.1.0"}),Object(b.b)("strong",{parentName:"a"},Object(b.b)("inlineCode",{parentName:"strong"},"opencv_contrib-4.1.0")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/opencv/opencv_extra/releases/tag/4.1.0"}),Object(b.b)("strong",{parentName:"a"},Object(b.b)("inlineCode",{parentName:"strong"},"opencv_extra-4.1.0"))))),Object(b.b)("p",null,"\u4e0b\u8f7d\u5b8c\u6210\u540e\u89e3\u538b"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"tar zxvf opencv-4.1.0.tar.gz ~/workspace/\ntar zxvf opencv_contrib-4.1.0.tar.gz ~/workspace/\ntar zxvf opencv_extra-4.1.0.tar.gz ~/workspace/\n")),Object(b.b)("h3",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),Object(b.b)("p",null,"\u65b0\u5efa ",Object(b.b)("inlineCode",{parentName:"p"},"build/")," \u76ee\u5f55\u5b58\u653e\u7f16\u8bd1\u751f\u6210\u7684\u6587\u4ef6"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/workspace/opencv-4.1.0/\nmkdir build\ncd build\n")),Object(b.b)("p",null,"\u914d\u7f6e ",Object(b.b)("inlineCode",{parentName:"p"},"cmake")," \u53c2\u6570\uff0c\u4fee\u6539 ",Object(b.b)("inlineCode",{parentName:"p"},"opencv_extra")," \u548c ",Object(b.b)("inlineCode",{parentName:"p"},"opencv_contrib")," \u7684\u8def\u5f84"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'cmake -DCMAKE_BUILD_TYPE=Release \\\n    -DCMAKE_INSTALL_PREFIX=/usr/local \\\n    -DBUILD_PNG=OFF \\\n    -DBUILD_TIFF=OFF \\\n    -DBUILD_TBB=OFF \\\n    -DBUILD_JPEG=OFF \\\n    -DBUILD_JASPER=OFF \\\n    -DBUILD_ZLIB=OFF \\\n    -DBUILD_EXAMPLES=ON \\\n    -DBUILD_opencv_python2=OFF \\\n    -DBUILD_opencv_python3=ON \\\n    -DBUILD_opencv_cudacodec=OFF \\\n    -DWITH_OPENCL=OFF \\\n    -DWITH_OPENMP=OFF \\\n    -DWITH_FFMPEG=ON \\\n    -DWITH_GSTREAMER=OFF \\\n    -DWITH_GSTREAMER_0_10=OFF \\\n    -DWITH_CUDA=ON \\\n    -DWITH_TBB=ON \\\n    -DWITH_GTK=ON \\\n    -DWITH_VTK=OFF \\\n    -DWITH_1394=OFF \\\n    -DWITH_OPENEXR=OFF \\\n    -DCUDA_TOOLKIT_ROOT_DIR=/usr/local/cuda-10.2 \\\n    -DCUDA_ARCH_PTX="" \\\n    -DINSTALL_C_EXAMPLES=OFF \\\n    -DINSTALL_TESTS=ON \\\n    -DOPENCV_TEST_DATA_PATH=../../opencv_extra-4.1.0/testdata \\\n    -DOPENCV_EXTRA_MODULES_PATH=../../opencv_contrib-4.1.0/modules \\\n    -DOPENCV_GENERATE_PKGCONFIG=YES \\\n    ..\n')),Object(b.b)("p",null,"\u7b49\u5f85 ",Object(b.b)("inlineCode",{parentName:"p"},"makefile")," \u751f\u6210 \u2014\u2014 \u8fc7\u7a0b\u4fdd\u6301\u7f51\u7edc\u901a\u7545\uff0c\u4f1a\u4e0b\u8f7d\u4e00\u4e9b\u5185\u5bb9"),Object(b.b)("p",null,"\u751f\u6210\u5b8c\u4e4b\u540e\u5f00\u59cb\u7f16\u8bd1"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"NUM_CPU=$(nproc)\nmake -j$(($NUM_CPU - 1))\n")),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"\u8fd9\u91cc\u7f16\u8bd1\u65f6\u95f4\u66f4\u4e45\uff0c\u4f60\u53ef\u4ee5\u53eb\u51e0\u4e2a\u670b\u53cb\u4e00\u8d77\u559d\u8336 (= =!)"))),Object(b.b)("p",null,"\u7b49\u5f85\u7f16\u8bd1\u5b8c\u6210\u540e"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo make install\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5c06\u7f16\u8bd1\u597d\u7684 ",Object(b.b)("inlineCode",{parentName:"li"},".so")," \u6587\u4ef6\u4ee5\u53ca\u5934\u6587\u4ef6\u5b89\u88c5\u5230 ",Object(b.b)("inlineCode",{parentName:"li"},"/usr/local")," \u76ee\u5f55\u4e0b")),Object(b.b)("h3",{id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"},"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"sudo gedit /etc/ld.so.conf.d/opencv.conf"))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u6253\u5f00 ",Object(b.b)("inlineCode",{parentName:"li"},"opencv.conf")," \u5728\u5176\u4e2d\u6dfb\u52a0 ",Object(b.b)("inlineCode",{parentName:"li"},"/usr/local/lib"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"sudo gedit /etc/bash.bashrc"))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u6253\u5f00 ",Object(b.b)("inlineCode",{parentName:"li"},"bash.bashrc")," \u5728\u6700\u540e\u9762\u6dfb\u52a0")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib/pkgconfig \nexport PKG_CONFIG_PATH\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"sudo ldconfig"))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4f7f\u914d\u7f6e\u751f\u6548")),Object(b.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(b.b)("p",null,"\u5b98\u7f51tutorial ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.opencv.org/4.1.0/d6/d15/tutorial_building_tegra_cuda.html"}),"Building OpenCV for Tegra with CUDA")))}O.isMDXComponent=!0}}]);