(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{149:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return f}));var t=r(0),i=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),b=t,f=l["".concat(a,".").concat(b)]||l[b]||d[b]||o;return r?i.a.createElement(f,c(c({ref:n},s),{},{components:r})):i.a.createElement(f,c({ref:n},s))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,a=new Array(o);a[0]=b;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},98:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return p}));var t=r(3),i=r(7),o=(r(0),r(149)),a={sidebar_position:4},c={unversionedId:"user-guide/ui/access/cli",id:"user-guide/ui/access/cli",isDocsHomePage:!1,title:"CLI",description:"SSH",source:"@site/docs/user-guide/ui/access/cli.md",sourceDirName:"user-guide/ui/access",slug:"/user-guide/ui/access/cli",permalink:"/user-guide/ui/access/cli",editUrl:"https://github.com/dappnode/DAppNodeDocs/docs/user-guide/ui/access/cli.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"VPN's",permalink:"/user-guide/ui/access/vpn"},next:{title:"First Steps",permalink:"/first-steps"}},u=[{value:"SSH",id:"ssh",children:[]},{value:"Phisically by plugging a monitor and keyboard (Advanced)",id:"phisically-by-plugging-a-monitor-and-keyboard-advanced",children:[]}],s={toc:u};function p(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"ssh"},"SSH"),Object(o.b)("p",null,"Default credentials for SSH access are:"),Object(o.b)("p",null,"U: ",Object(o.b)("inlineCode",{parentName:"p"},"dappnode")),Object(o.b)("p",null,"P: ",Object(o.b)("inlineCode",{parentName:"p"},"dappnode.s0")),Object(o.b)("h2",{id:"phisically-by-plugging-a-monitor-and-keyboard-advanced"},"Phisically by plugging a monitor and keyboard (Advanced)"),Object(o.b)("p",null,"Your DAppNode will ask you for the password to log in. The default password is:"),Object(o.b)("p",null,"P: ",Object(o.b)("inlineCode",{parentName:"p"},"dappnode.s0")))}p.isMDXComponent=!0}}]);