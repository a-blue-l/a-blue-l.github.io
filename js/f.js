(function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)})([function(e,t,n){var r,i,s,o,u,a,f,l,c,h,p,d,v,m;u=n(9),r=n(10),l=n(11),o=n(1),i=n(12),a=n(13),d=/msie 6.0/gi.test(navigator.userAgent)||document.compatMode!=="CSS1Compat",s={getLeftRightOfBody:function(){var e,t;return t=Math.max(document.documentElement.clientWidth,document.documentElement.scrollWidth),e=document.body.clientWidth,Math.max(0,(t-e)/2)},createTopBottomPlaceHolder:function(e,t,n,i,s){var o,u,a;u=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,o=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;if(r.floatPos[s.position]==="top"||r.floatPos[s.position]==="bottom")i.style.width="100%",i.style.height=s.h+"px";i.style.position="fixed",i.style.left=0,n?i.style.top=0:i.style.bottom=0,this.res=(a=this.res)!=null?a:[],this.res.push({placeholder:i}),d&&(n||(i.style.top=Math.max(0,o-s.h)+"px"),i.style.position="absolute",i.setAttribute("data-top",i.style.top.match(/\d+/)[0]),l.on(window,"scroll",function(e){return function(t){var n,r,i,s,o,u;n=function(e){var t,n;return n=document.documentElement.scrollTop||document.body.scrollTop,t=n+parseInt(e.placeholder.getAttribute("data-top"),10),document.getElementById(e.placeholder.id).style.top=t+"px"},o=e.res,u=[];for(r=0,s=o.length;r<s;r++)i=o[r],u.push(n(i));return u}}(this)));if(t==="onScroll")return i.style.display="none",l.on(window,"scroll",function(e){return function(t){var n,r,i,s,o,u;n=function(e){var t;return t=document.documentElement.scrollTop||document.body.scrollTop,t>48?document.getElementById(e.placeholder.id).style.display="block":document.getElementById(e.placeholder.id).style.display="none"},o=e.res,u=[];for(r=0,s=o.length;r<s;r++)i=o[r],u.push(n(i));return u}}(this))},setLeftRightFloatPlaceHolder:function(e,t,n,r){var i,s,o,u,a;u=54,s=18,o=5,i=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,a=Math.max(0,i-r.h-s-o),e==="body"?t?n.style.left=Math.max(0,this.getLeftRightOfBody()-r.w)+"px":n.style.right=Math.max(0,this.getLeftRightOfBody()-r.w)+"px":t?n.style.left=0:n.style.right=0,n.style.top=a/2+"px",n.style.position="fixed",n.style.width=r.w+"px",n.style.height=r.h+s+o+"px";if(d)return n.style.position="absolute",n.setAttribute("data-top",n.style.top.match(/\d+/)[0])},createLeftRightFloatPlaceHolder:function(e,t,n,r){var i,s,o,u,a;return this.setLeftRightFloatPlaceHolder(e,t,n,r),u=54,s=18,o=5,i=document.createElement("div"),i.style.margin="0px 0px "+o+"px "+(r.w-54).toString()+"px",i.style.padding="0px",i.style["float"]="none",i.style.overflow="hidden",i.style.display="block",i.style.border="none",i.style.backgroundImage='url("http://p6.qhimg.com/d/inn/69518715/close.jpg")',i.style.visibility="visible",i.style.width=u+"px",i.style.height=s+"px",i.style.cursor="pointer",i.style.boxSizing="content-box",i.setAttribute("onclick",'document.getElementById("'+n.id+'").style.display = "none"'),n.appendChild(i),this.res=(a=this.res)!=null?a:[],this.res.push({origin:e,isLeft:t,placeholder:n,options:r}),d&&l.on(window,"scroll",function(e){return function(t){var n,r,i,s,o,u;n=function(e){var t,n,r;r=document.getElementById(e.placeholder.id);if(r!==null)return n=document.documentElement.scrollTop||document.body.scrollTop,t=n+parseInt(r.getAttribute("data-top"),10),r.style.top=t+"px"},o=e.res,u=[];for(r=0,s=o.length;r<s;r++)i=o[r],u.push(n(i));return u}}(this)),l.on(window,"resize",function(e){return function(t){var n,r,i,s,o,u;n=function(t){return e.setLeftRightFloatPlaceHolder(t.origin,t.isLeft,document.getElementById(t.placeholder.id),t.options,!1)},o=e.res,u=[];for(r=0,s=o.length;r<s;r++)i=o[r],u.push(n(i));return u}}(this))},setLeftRightBottomPlaceHolder:function(e,t,n,r){var i,s,o,u,a;u=54,s=18,o=5,i=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,a=Math.max(0,i-r.h-s-o),e==="body"?t?n.style.left=this.getLeftRightOfBody()+"px":n.style.right=this.getLeftRightOfBody()+"px":t?n.style.left=0:n.style.right=0,n.style.position="fixed",n.style.top=a+"px",n.style.width=r.w+"px",n.style.height=r.h+s+o+"px";if(d)return n.style.position="absolute",n.setAttribute("data-top",n.style.top.match(/\d+/)[0])},createLeftRightBottomPlaceHolder:function(e,t,n,r){var i,s,o,u,a;return this.setLeftRightBottomPlaceHolder(e,t,n,r),u=54,s=18,o=5,i=document.createElement("div"),i.style.margin="0px 0px "+o+"px "+(r.w-54).toString()+"px",i.style.padding="0px",i.style["float"]="none",i.style.overflow="hidden",i.style.display="block",i.style.border="none",i.style.backgroundImage='url("http://p6.qhimg.com/d/inn/69518715/close.jpg")',i.style.visibility="visible",i.style.width=u+"px",i.style.height=s+"px",i.style.cursor="pointer",i.style.boxSizing="content-box",i.setAttribute("onclick",'document.getElementById("'+n.id+'").style.display = "none"'),n.appendChild(i),this.res=(a=this.res)!=null?a:[],this.res.push({origin:e,isLeft:t,placeholder:n,options:r}),d&&l.on(window,"scroll",function(e){return function(t){var n,r,i,s,o,u;n=function(e){var t,n,r;r=document.getElementById(e.placeholder.id);if(r!==null)return n=document.documentElement.scrollTop||document.body.scrollTop,t=n+parseInt(r.getAttribute("data-top"),10),r.style.top=t+"px"},o=e.res,u=[];for(r=0,s=o.length;r<s;r++)i=o[r],u.push(n(i));return u}}(this)),l.on(window,"resize",function(e){return function(t){var n,r,i,s,o,u;n=function(t){return e.setLeftRightBottomPlaceHolder(t.origin,t.isLeft,document.getElementById(t.placeholder.id),t.options,!1)},o=e.res,u=[];for(r=0,s=o.length;r<s;r++)i=o[r],u.push(n(i));return u}}(this))}},c=function(e,t,n,r){var i;return e&&(t="100%"),i="QIHOO_UNION_"+(new Date).getTime(),"<iframe id="+i+" src="+r+" width="+t+" height="+n+" frameborder=0 marginheight=0 marginwidth=0 scrolling=no align=center,center allowtransparency=true style=display:block;border:none;margin:0;padding:0></iframe>"},h=function(e){var t,n,i,o;i=document.createElement("div"),i.id="QIHOO_UNION_F_PLACEHOLDER_"+(new Date).getTime()+Math.random()*100,i.style.margin="0px",i.style.padding="0px",i.style["float"]="none",i.style.overflow="hidden",i.style.display="block",i.style.border="none",i.style.background="none",i.style.visibility="visible",i.style.cursor="pointer",i.style.boxSizing="content-box",i.style.zIndex="2147483646",o=r.floatPos[e.position],n=r.floatOrigin[e.origin]||"browser",t=r.floatDisplay[e.display]||"default";switch(o){case"left":s.createLeftRightFloatPlaceHolder(n,!0,i,e);break;case"right":s.createLeftRightFloatPlaceHolder(n,!1,i,e);break;case"top":s.createTopBottomPlaceHolder(n,t,!0,i,e);break;case"bottom":s.createTopBottomPlaceHolder(n,t,!1,i,e);break;case"leftbottom":s.createLeftRightBottomPlaceHolder(n,!0,i,e);break;case"rightbottom":s.createLeftRightBottomPlaceHolder(n,!1,i,e)}return i},f=function(e){var t,n,s,u,f,p;if(l.isInIframe())return;return u=l.getDocumentTitleAndUrl(),s=e.position===6||e.position===7,t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,s&&(e.h=48,e.w=t),f={ls:e.ls,w:e.w,h:e.h,inject:r.inject.FLOAT,pos:e.position,rurl:u.url,pn:r.QIHOO_UNION.FLOAT,prt:(new Date).getTime(),tit:u.title,pt:r.QIHOO_UNION.PT,cw:t,dpr:1,jv:r.jv},o.setStyle(f),n=r.searchPage+l.serialize(f),p=h(e),p.innerHTML+=c(s,e.w,e.h,n),p.setAttribute("data-ls",f.ls),p.setAttribute("data-rurl",f.rurl),document.write(p.outerHTML),i.getPosition()&&a.add(p),r.QIHOO_UNION.FLOAT++},m=(v=window.QIHOO_UNION_F_SLOT)!=null?v:window.QIHOO_union_F_SLOT,m.position!==""&&(m.position=parseInt(m.position,10),m.display===""?m.display=1:m.display=parseInt(m.display,10),m.origin===""?m.origin=2:m.origin=parseInt(m.origin,10),p=r.floatPos[m.position]||"",p==="leftright"?(m.position=4,f(m),m.position=5,f(m)):p==="topbottom"?(m.position=6,f(m),m.position=7,f(m)):f(m))},function(e,t,n){var r,i,s,o,u,a,f,l;l=n(2),s=n(3),a=n(4),r=n(5),i=n(6),f=n(7),o=n(8),u={setStyle:function(e){var t,n,u,c,h,p,d;switch(e.inject){case 1:return d=l.getLayout(e.w,e.h),u=s.getLayout(e.w,e.h),h=a.getLayout(e.w,e.h),n=i.getLayout(e.w,e.h),p=f.getLayout(e.w,e.h),e.inlay=d.line*d.column,e.link=u.line*u.column,e.rank=h.line*h.column,e.imagelink=n.line*n.column,e.searchlink=Math.max(1,p.line*p.column),e;case 2:return t=r.getLayout(e.w,e.h),d=l.getLayout(e.w,e.h),u=s.getLayout(e.w,e.h),h=a.getLayout(e.w,e.h),n=i.getLayout(e.w,e.h),e.inlay=d.line*d.column,e.link=u.line*u.column,e.rank=h.line*h.column,e.imagelink=n.line*n.column,e.searchlink=0,e.hao360=t.line*t.column,e;case 3:return c=o.getLayout(e.w,e.h),e.mobilelink=c.column*c.line,e.inlay=0,e.link=0,e.hao360=0,e.rank=0,e.imagelink=0,e.searchlink=0,e;default:return e}}},e.exports=u},function(e,t){var n;n={getLayout:function(e,t){var n,r;r=e+"_"+t;switch(r){case"300_250":case"250_250":case"640_60":n={column:1,line:3};break;case"160_600":n={column:1,line:7};break;case"960_90":n={column:4,line:1};break;case"336_280":n={column:1,line:4};break;default:n={column:0,line:0}}return n}},e.exports=n},function(e,t){var n;n={getLayout:function(e,t){var n,r,i,s,o,u,a;r=1024>=e&&e>=103&&1024>=t&&t>=28,a=e+"_"+t;switch(a){case"300_250":case"250_250":case"336_280":i={column:2,line:6};break;case"160_600":i={column:1,line:15};break;case"640_60":i={column:6,line:2};break;case"960_90":i={column:9,line:3};break;default:n=Math.floor(e/103),s=Math.floor(t/28),n*s>50&&(s=Math.floor(50/n)),i={column:n,line:s}}return o=u=4,i.itemWidth=Math.floor((e-o*(i.column-1))/i.column),i.itemHeight=Math.floor((t-u*(i.line-1))/i.line),i.spaceX=Math.floor((e-i.column*i.itemWidth)/(i.column-1)),i.spaceY=Math.floor((t-i.line*i.itemHeight)/(i.line-1)),r||(i.column=i.line=0),Number.isNaN(i.itemWidth)&&(i.itemWidth=0),Number.isNaN(i.itemHeight)&&(i.itemHeight=0),Number.isNaN(i.spaceX)&&(i.spaceX=0),Number.isNaN(i.spaceY)&&(i.spaceY=0),i}},e.exports=n},function(e,t){var n;n={getLayout:function(e,t){var n,r,i,s,o,u,a,f,l,c,h,p;return i=1,l=1,r=e-2*i-2*l,n=t-2*i-2*l,s=Math.floor(e/120),f=Math.floor(t/28),s*f>50&&(f=Math.floor(50/s)),u=Math.floor((n-4*(f-1))/f),a=Math.floor((r-4*(s-1))/s),c=n-f*u,h=r-s*a,p=Math.floor(c/(f-1)),o=Math.floor(h/(s-1)),{line:f,column:s,borderSize:i,padding:l,itemWidth:a,itemHeight:u,rowspan:p,colspan:o,width:r,height:n}}},e.exports=n},function(e,t){var n;n={getLayout:function(e,t){var n,r;return n=t===48,r={column:50,line:1},n||(r={column:0,line:0}),r},getStrlen:function(e){var t,n;return t=e.replace(/[\u4e00-\u9fa5\u3002\u2022]+/g,""),n=(2*e.length-t.length)/2,n},caculate:function(e,t,n){var r,i,s,o,u,a,f,l,c,h;f=e-547-60,a=[],i=[],h=0,l=0,r=0,o=0,u=n.length;while(r<u){c=this.getStrlen(n[r].tit),s=c*t+20+2,h+=s,h<f?i.push(n[r]):(a.push(i),i=[],h=s,i.push(n[r])),l=f-h;if(r===u-1){o=0;while(o<u)c=this.getStrlen(n[o].tit),s=c*t+20+2,l-=s,l>=0?i.push(n[o]):(a.push(i),o=n.length),o++}r++}return{newAds:a}}},e.exports=n},function(e,t){var n;n={getLayout:function(e,t){var n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T;l=32,T=86,x=86,S=180,E=180,y=2,w=2,g=20,b=20,i=!1;if(e<T||t<x)return{column:0,line:0};a=Math.floor(e/T),f=Math.floor(t/x),c=[],m=[],n=function(n,r){var i,s,o,u,a;i=Math.floor(e/n),s=Math.floor(t/r),s=Math.min(s,Math.floor(l/i)),u=Math.floor((e-n*i)/(i+1)),a=Math.floor((t-r*s)/(s+1)),o=Math.abs(n/(r-20)-1.8);if(s>0&&i>0&&a>1&&u>1)return m.push({column:i,line:s,unitWidth:n,unitHeight:r,spaceX:u,spaceY:a,rate:o})};for(r=o=h=T,p=S;o<=p;r=o+=5)for(s=u=d=x,v=E;u<=v;s=u+=5)n(r,s);return c=m.sort(function(e,t){return e.spaceX+e.spaceY-(t.spaceX+t.spaceY)}).slice(0,10).sort(function(e,t){return e.rate-t.rate}),c[0]}},e.exports=n},function(e,t){var n;n={getLayout:function(e,t){var n,r,i,s,o;r={searchButtonWidth:80,searchButtonHeight:36,bodyPadding:5,bodyBorderSize:1,conMarginBottom:5},r.bodyWidth=e-2*r.bodyBorderSize-2*r.bodyPadding,r.bodyHeight=t-2*r.bodyBorderSize-2*r.bodyPadding,r.conWidth=r.bodyWidth,r.conHeight=Math.max(0,t-r.searchButtonHeight-r.conMarginBottom-2*r.bodyBorderSize-2*r.bodyPadding),n=Math.floor(r.conWidth/120),i=Math.floor(r.conHeight/27),n*i>32&&(i=Math.floor(32/n)),r.column=n,r.line=i,s=o=4,r.itemWidth=Math.floor((r.conWidth-s*(r.column-1))/r.column),r.itemHeight=Math.floor((r.conHeight-o*(r.line-1))/r.line),r.column-1>0?r.spaceX=Math.floor((r.conWidth-r.column*r.itemWidth)/(r.column-1)):r.spaceX=0,r.line-1>0?r.spaceY=Math.floor((r.conHeight-r.line*r.itemHeight)/(r.line-1)):r.spaceY=0,r.column*r.line===0&&(r.conHeight=Math.max(0,t-r.searchButtonHeight-2*r.bodyBorderSize-2*r.bodyPadding));if(r.conHeight===0||e<200)r.column=r.line=0;return r}},e.exports=n},function(e,t){var n;n={getLayout:function(e,t,n){var r,i,s,o,u;return r=Math.floor(e/103),s=Math.floor(t/20),r*s>32&&(s=Math.floor(32/r)),i={column:r,line:s},o=u=4,i.itemWidth=Math.floor((e-o*(i.column-1))/i.column),i.itemHeight=Math.floor((t-u*(i.line-1))/i.line),i.spaceX=Math.floor((e-i.column*i.itemWidth)/(i.column-1)),i.spaceY=Math.floor((t-i.line*i.itemHeight)/(i.line-1)),i}},e.exports=n},function(e,t){Array.isArray||(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"}),Array.prototype.filter||(Array.prototype.filter=function(e){"use strict";if(this===void 0||this===null)throw new TypeError;var t=Object(this),n=t.length>>>0;if(typeof e!="function")throw new TypeError;var r=[],i=arguments.length>=2?arguments[1]:void 0;for(var s=0;s<n;s++)if(s in t){var o=t[s];e.call(i,o,s,t)&&r.push(o)}return r}),Array.prototype.map||(Array.prototype.map=function(e,t){var n,r,i;if(this==null)throw new TypeError(" this is null or not defined");var s=Object(this),o=s.length>>>0;if(typeof e!="function")throw new TypeError(e+" is not a function");arguments.length>1&&(n=t),r=new Array(o),i=0;while(i<o){var u,a;i in s&&(u=s[i],a=e.call(n,u,i,s),r[i]=a),i++}return r}),Array.prototype.reduce||(Array.prototype.reduce=function(e){"use strict";if(this==null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof e!="function")throw new TypeError(e+" is not a function");var t=Object(this),n=t.length>>>0,r=0,i;if(arguments.length==2)i=arguments[1];else{while(r<n&&!(r in t))r++;if(r>=n)throw new TypeError("Reduce of empty array with no initial value");i=t[r++]}for(;r<n;r++)r in t&&(i=e(i,t[r],r,t));return i}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){var n;if(this==null)throw new TypeError('"this" is null or not defined');var r=Object(this),i=r.length>>>0;if(i===0)return-1;var s=+t||0;Math.abs(s)===Infinity&&(s=0);if(s>=i)return-1;n=Math.max(s>=0?s:i-Math.abs(s),0);while(n<i){if(n in r&&r[n]===e)return n;n++}return-1}),Number.isNaN=Number.isNaN||function(e){return typeof e=="number"&&e!==e}},function(e,t,n){var r,i,s,o,u;s=n(11),r={searchPage:"http://api.so.lianmeng.360.cn/searchthrow/api/ads/throw?",mobileSearchPage:"http://api.so.lianmeng.360.cn/searchthrow/api/mads/throw?",positionTrack:"http://s1.stat.lianmeng.360.cn/xy.gif?",pos:{INLAY:0,LEFTBOTTOM:1,RIGHTBOTTOM:2,LEFT:3,RIGHT:4,TOP:5,BOTTOM:6},inject:{INLAY:1,FLOAT:2,MOBILEINLAY:3},jv:"1437124819535",floatPos:["","leftbottom","rightbottom","leftright","left","right","top","bottom","topbottom"],floatOrigin:["","body","browser"],floatDisplay:["","default","onScroll"]},i={PT:(new Date).getTime(),RAND:Math.random()*Math.random()*1e4,INLAY:0,FLOAT:0,MOBILEINLAY:0},s.isInIframe()?(window.QIHOO_UNION=(o=window.QIHOO_UNION)!=null?o:i,r.QIHOO_UNION=window.QIHOO_UNION):(window.top.QIHOO_UNION=(u=window.top.QIHOO_UNION)!=null?u:i,r.QIHOO_UNION=window.top.QIHOO_UNION),e.exports=r},function(e,t){var n,r={}.hasOwnProperty;n={on:function(e,t,n){return window.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},isInIframe:function(){var e,t,n,r,i;i=window,r=!1;try{n=i.parent.location.href,i=i.parent}catch(t){e=t,r=!0}return r},getDocumentTitleAndUrl:function(){var e,t,n,r,i,s,o,u,a,f;f=window,e=f.document;if(Object.prototype.toString.call(f.setInterval)!=="[object Function]")u=(i=e.title)!=null?i:"",a=(s=f.location.href)!=null?s:"";else{r=10;while(r>0){try{u=f.document.title,a=f.parent.location.href,f=f.parent}catch(n){t=n,a=f.document.referrer;break}r--}}return o={title:u.replace(/\(|\)|>|<|\'|\"/g,""),url:a.replace(/\(|\)|>|<|\'|\"/g,"")},o},serialize:function(e){var t,n,i;n=[];for(t in e){if(!r.call(e,t))continue;i=e[t],n.push(t+"="+encodeURIComponent(i).toString().substr(0,512))}return n.join("&")}},e.exports=n},function(e,t,n){var r,i;r=n(10),i={getPosition:function(){return r.QIHOO_UNION.RAND%100<50}},e.exports=i},function(e,t,n){var r,i,s,o;o=n(11),r=n(10),i=n(14),s={add:function(e){var t;this.res=(t=this.res)!=null?t:[],this.res.push(e),this.fn=function(e){var t,n,i,s,o,u,a,f,l,c,h,p,d,v,m;d=window,p=Math.max(0,d.innerWidth||d.document.documentElement.clientWidth),h=Math.max(0,d.innerHeight||d.document.documentElement.clientHeight),n=Math.max(0,d.document.documentElement.offsetWidth),t=Math.max(0,d.document.documentElement.offsetHeight),l=Math.max(0,screen.width),f=Math.max(0,screen.height);if(document.getElementById(e.id)!==null)return o=document.getElementById(e.id).getBoundingClientRect(),v=Math.max(0,o.left),m=Math.max(0,o.top),s=e.getAttribute("data-ls"),a=encodeURIComponent(e.getAttribute("data-rurl")),u=(new Date).getTime(),c=r.positionTrack+("ls="+s+"&rurl="+a+"&x="+v+"&y="+m+"&vw="+p+"&vh="+h+"&dw="+n+"&dh="+t+"&sw="+l+"&sh="+f+"&_r="+u),i=new Image,i.onload=i.onerror=function(){return i=null},i.src=c};if(this.domready!=="init")return this.domready="init",i(function(e){return function(){var t,n,r,i,s;i=e.res,s=[];for(t=0,r=i.length;t<r;t++)n=i[t],s.push(e.fn(n));return s}}(this))}},e.exports=s},function(e,t,n){!function(t,n){e.exports=n()}("domready",function(e){function p(e){h=1;while(e=t.shift())e()}var t=[],n,r=!1,i=document,s=i.documentElement,o=s.doScroll,u="DOMContentLoaded",a="addEventListener",f="onreadystatechange",l="readyState",c=o?/^loaded|^c/:/^loaded|c/,h=c.test(i[l]);return i[a]&&i[a](u,n=function(){i.removeEventListener(u,n,r),p()},r),o&&i.attachEvent(f,n=function(){/^c/.test(i[l])&&(i.detachEvent(f,n),p())}),e=o?function(n){self!=top?h?n():t.push(n):function(){try{s.doScroll("left")}catch(t){return setTimeout(function(){e(n)},50)}n()}()}:function(e){h?e():t.push(e)}})}]);