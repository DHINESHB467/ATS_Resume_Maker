(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9755],{2903:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let r=i(8754),n=i(1757),o=i(5893),l=n._(i(7294)),a=r._(i(3867)),s=i(6594),d=i(4229),u=i(3945);i(3179);let c=i(8337);function f(e){return"/"===e[0]?e.slice(1):e}let g={deviceSizes:[320,460,520,640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},h=new Set,p="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",m=new Map([["default",function(e){var t;let{config:i,src:r,width:n,quality:o}=e,l=o||(null==(t=i.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.endsWith(".svg")&&!i.dangerouslyAllowSVG?r:(0,c.normalizePathTrailingSlash)(i.path)+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+l}],["imgix",function(e){let{config:t,src:i,width:r,quality:n}=e,o=new URL(""+t.path+f(i)),l=o.searchParams;return l.set("auto",l.getAll("auto").join(",")||"format"),l.set("fit",l.get("fit")||"max"),l.set("w",l.get("w")||r.toString()),n&&l.set("q",n.toString()),o.href}],["cloudinary",function(e){let{config:t,src:i,width:r,quality:n}=e,o=["f_auto","c_limit","w_"+r,"q_"+(n||"auto")].join(",")+"/";return""+t.path+o+f(i)}],["akamai",function(e){let{config:t,src:i,width:r}=e;return""+t.path+f(i)+"?imwidth="+r}],["custom",function(e){let{src:t}=e;throw Error('Image with src "'+t+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}]]);function b(e){return void 0!==e.default}function v(e){let{config:t,src:i,unoptimized:r,layout:n,width:o,quality:l,sizes:a,loader:s}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:d,kind:u}=function(e,t,i,r){let{deviceSizes:n,allSizes:o}=e;if(r&&("fill"===i||"responsive"===i)){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t||"fill"===i||"responsive"===i?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,n,a),c=d.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:d.map((e,r)=>s({config:t,src:i,quality:l,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:s({config:t,src:i,quality:l,width:d[c]})}}function y(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function w(e){var t;let i=(null==(t=e.config)?void 0:t.loader)||"default",r=m.get(i);if(r)return r(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '+s.VALID_LOADERS.join(", ")+". Received: "+i)}function x(e,t,i,r,n,o){e&&e.src!==p&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentNode&&(h.add(t),"blur"===r&&o(!0),null==n?void 0:n.current)){let{naturalWidth:t,naturalHeight:i}=e;n.current({naturalWidth:t,naturalHeight:i})}}))}let A=e=>{let{imgAttributes:t,heightInt:i,widthInt:r,qualityInt:n,layout:a,className:s,imgStyle:d,blurStyle:u,isLazy:c,placeholder:f,loading:g,srcString:h,config:p,unoptimized:m,loader:b,onLoadingCompleteRef:y,setBlurComplete:w,setIntersection:A,onLoad:j,onError:S,isVisible:k,noscriptSizes:_,...z}=e;return g=c?"lazy":g,(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{...z,...t,decoding:"async","data-nimg":a,className:s,style:{...d,...u},ref:(0,l.useCallback)(e=>{A(e),(null==e?void 0:e.complete)&&x(e,h,a,f,y,w)},[A,h,a,f,y,w]),onLoad:e=>{x(e.currentTarget,h,a,f,y,w),j&&j(e)},onError:e=>{"blur"===f&&w(!0),S&&S(e)}}),(c||"blur"===f)&&(0,o.jsx)("noscript",{children:(0,o.jsx)("img",{...z,loading:g,decoding:"async","data-nimg":a,style:d,className:s,...v({config:p,src:h,unoptimized:m,layout:a,width:r,quality:n,sizes:_,loader:b})})})]})};function j(e){var t;let i,{src:r,sizes:n,unoptimized:c=!1,priority:f=!1,loading:m,lazyRoot:x=null,lazyBoundary:j,className:S,quality:k,width:_,height:z,style:I,objectFit:O,objectPosition:E,onLoadingComplete:M,placeholder:R="empty",blurDataURL:P,...C}=e,N=(0,l.useContext)(u.ImageConfigContext),q=(0,l.useMemo)(()=>{var e;let t=g||N||s.imageConfigDefault,i=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),r=t.deviceSizes.sort((e,t)=>e-t),n=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:i,deviceSizes:r,qualities:n}},[N]),W=n?"responsive":"intrinsic";"layout"in C&&(C.layout&&(W=C.layout),delete C.layout);let L=w;if("loader"in C){if(C.loader){let e=C.loader;L=t=>{let{config:i,...r}=t;return e(r)}}delete C.loader}let D="";if("object"==typeof(t=r)&&(b(t)||void 0!==t.src)){let e=b(r)?r.default:r;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(P=P||e.blurDataURL,D=e.src,(!W||"fill"!==W)&&(z=z||e.height,_=_||e.width,!e.height||!e.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e))}let B=!f&&("lazy"===m||void 0===m);((r="string"==typeof r?r:D).startsWith("data:")||r.startsWith("blob:"))&&(c=!0,B=!1),h.has(r)&&(B=!1),q.unoptimized&&(c=!0);let[U,G]=(0,l.useState)(!1),[H,T,V]=(0,d.useIntersection)({rootRef:x,rootMargin:j||"200px",disabled:!B}),F=!B||T,J={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Q={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},K=!1,X=y(_),Y=y(z),Z=y(k),$=Object.assign({},I,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:O,objectPosition:E}),ee="blur"!==R||U?{}:{backgroundSize:O||"cover",backgroundPosition:E||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'+P+'")'};if("fill"===W)J.display="block",J.position="absolute",J.top=0,J.left=0,J.bottom=0,J.right=0;else if(void 0!==X&&void 0!==Y){let e=Y/X,t=isNaN(e)?"100%":""+100*e+"%";"responsive"===W?(J.display="block",J.position="relative",K=!0,Q.paddingTop=t):"intrinsic"===W?(J.display="inline-block",J.position="relative",J.maxWidth="100%",K=!0,Q.maxWidth="100%",i="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27"+X+"%27%20height=%27"+Y+"%27/%3e"):"fixed"===W&&(J.display="inline-block",J.position="relative",J.width=X,J.height=Y)}let et={src:p,srcSet:void 0,sizes:void 0};F&&(et=v({config:q,src:r,unoptimized:c,layout:W,width:X,quality:Z,sizes:n,loader:L}));let ei=r,er={imageSrcSet:et.srcSet,imageSizes:et.sizes,crossOrigin:C.crossOrigin,referrerPolicy:C.referrerPolicy},en=l.default.useLayoutEffect,eo=(0,l.useRef)(M),el=(0,l.useRef)(r);(0,l.useEffect)(()=>{eo.current=M},[M]),en(()=>{el.current!==r&&(V(),el.current=r)},[V,r]);let ea={isLazy:B,imgAttributes:et,heightInt:Y,widthInt:X,qualityInt:Z,layout:W,className:S,imgStyle:$,blurStyle:ee,loading:m,config:q,unoptimized:c,placeholder:R,loader:L,srcString:ei,onLoadingCompleteRef:eo,setBlurComplete:G,setIntersection:H,isVisible:F,noscriptSizes:n,...C};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("span",{style:J,children:[K?(0,o.jsx)("span",{style:Q,children:i?(0,o.jsx)("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:i}):null}):null,(0,o.jsx)(A,{...ea})]}),f?(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",as:"image",href:et.srcSet?void 0:et.src,...er},"__nimg-"+et.src+et.srcSet+et.sizes)}):null]})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4229:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let r=i(7294),n=i(4474),o="function"==typeof IntersectionObserver,l=new Map,a=[];function s(e){let{rootRef:t,rootMargin:i,disabled:s}=e,d=s||!o,[u,c]=(0,r.useState)(!1),f=(0,r.useRef)(null),g=(0,r.useCallback)(e=>{f.current=e},[]);return(0,r.useEffect)(()=>{if(o){if(d||u)return;let e=f.current;if(e&&e.tagName)return function(e,t,i){let{id:r,observer:n,elements:o}=function(e){let t;let i={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===i.root&&e.margin===i.margin);if(r&&(t=l.get(r)))return t;let n=new Map;return t={id:i,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)})},e),elements:n},a.push(i),l.set(i,t),t}(i);return o.set(e,t),n.observe(e),function(){if(o.delete(e),n.unobserve(e),0===o.size){n.disconnect(),l.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:i})}else if(!u){let e=(0,n.requestIdleCallback)(()=>c(!0));return()=>(0,n.cancelIdleCallback)(e)}},[d,i,t,u,f.current]),[g,u,(0,r.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9755:function(e,t,i){e.exports=i(2903)}}]);