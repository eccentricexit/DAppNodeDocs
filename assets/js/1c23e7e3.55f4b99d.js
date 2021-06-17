(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{149:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=o.a.createContext({}),c=function(e){var t=o.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,f=u["".concat(a,".").concat(h)]||u[h]||l[h]||i;return r?o.a.createElement(f,s(s({ref:t},d),{},{components:r})):o.a.createElement(f,s({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return c}));var n=r(3),o=r(7),i=(r(0),r(149)),a={sidebar_position:4},s={unversionedId:"user-guide/ui/recommended-set-ups/add-ipfs-peers",id:"user-guide/ui/recommended-set-ups/add-ipfs-peers",isDocsHomePage:!1,title:"Add IPFS Peers",description:"In this section, firstly you will read about what is IPFS and how it can affect to your DAppNode. Then, you will see a guide how to add IPFS peer and how to get a link of your IPFS for sharing with other users.",source:"@site/docs/user-guide/ui/recommended-set-ups/add-ipfs-peers.md",sourceDirName:"user-guide/ui/recommended-set-ups",slug:"/user-guide/ui/recommended-set-ups/add-ipfs-peers",permalink:"/user-guide/ui/recommended-set-ups/add-ipfs-peers",editUrl:"https://github.com/dappnode/DAppNodeDocs/docs/user-guide/ui/recommended-set-ups/add-ipfs-peers.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Backup Functionality",permalink:"/user-guide/ui/recommended-set-ups/backup-functionality"},next:{title:"Dashboard View",permalink:"/user-guide/ui/dashboard"}},p=[{value:"IPFS on DAppNode",id:"ipfs-on-dappnode",children:[{value:"What is IPFS?",id:"what-is-ipfs",children:[]},{value:"Why is important to add peers?",id:"why-is-important-to-add-peers",children:[]},{value:"How it affects to DAppNode?",id:"how-it-affects-to-dappnode",children:[]}]},{value:"Sharing IPFS peer",id:"sharing-ipfs-peer",children:[{value:"Get your IPFS peer link",id:"get-your-ipfs-peer-link",children:[]},{value:"Add a peer to your DAppNode",id:"add-a-peer-to-your-dappnode",children:[]}]}],d={toc:p};function c(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this section, firstly you will read about what is IPFS and how it can affect to your DAppNode. Then, you will see a guide how to add IPFS peer and how to get a link of your IPFS for sharing with other users."),Object(i.b)("h2",{id:"ipfs-on-dappnode"},"IPFS on DAppNode"),Object(i.b)("h3",{id:"what-is-ipfs"},"What is IPFS?"),Object(i.b)("p",null,"Shortly, IPFS is a protocol to share data between machines. On your DAppNode when you go to the DAppStore and you are installing a package, what is happening behind the scene is the next:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"DAppNode machine gets the IPFS address from the ethereum blockchain."),Object(i.b)("li",{parentName:"ol"},"DAppNode machine uses this address to find the content associated with this link.")),Object(i.b)("h3",{id:"why-is-important-to-add-peers"},"Why is important to add peers?"),Object(i.b)("p",null,"The searching process is the key to understand why is important to add peers. When your DAppNode is going to search the content associated with this link or hash. Firstly, it will ask the nearest peers to it. If it's popular information, probably the research will be fast, but in case, the information is more peculiar, it requires asking for this content for peers that are not connected to you directly. Then, if you are connected to so many peers, the propagation of the information is faster and is more probable that some of your closed peers have the information you want."),Object(i.b)("h3",{id:"how-it-affects-to-dappnode"},"How it affects to DAppNode?"),Object(i.b)("p",null,"Firstly, DAppNode has a server with all the packages. In this way, we are sure all the packages are available. But the way your machine download a package to install it or even detects that there is an update of a package is by asking the nearest peers of your machine. Then, the best way to improve the propagation of the information, in this case, the release of a package, it's adding peers to your DAppNode."),Object(i.b)("h2",{id:"sharing-ipfs-peer"},"Sharing IPFS peer"),Object(i.b)("p",null,"You should go to the System > Peers or you can try to ",Object(i.b)("a",{parentName:"p",href:"http://my.dappnode/#/system/add-ipfs-peer"},"use this link")," if you are connected vpn or via wifi."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"../../../../static/img/system_view_peers.png"})),Object(i.b)("h3",{id:"get-your-ipfs-peer-link"},"Get your IPFS peer link"),Object(i.b)("p",null,"To get the link to share with others. Simply click copy the content of the first field (Share IPFS peer).\nIn my case it would be:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"http://my.dappnode/#/system/add-ipfs-peer/%2Fdns4%2F0773a72d55aed273.dyndns.dappnode.io%2Ftcp%2F4001%2Fipfs%2F12D3KooWT3GFZAR2fWQjqrMWg3iWN1csur7qEcpQy5Dj33abHHWZ")),Object(i.b)("h3",{id:"add-a-peer-to-your-dappnode"},"Add a peer to your DAppNode"),Object(i.b)("p",null,"When a user pass you his link, you just have to paste on the second field (Add IPFS peer\n) and click on the ",Object(i.b)("strong",{parentName:"p"},"Add peer")," button."))}c.isMDXComponent=!0}}]);