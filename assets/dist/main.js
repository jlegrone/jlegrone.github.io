function initXMLhttp(){var e;return e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")}function minAjax(e){if(!e.url)return void(1==e.debugLog&&console.log("No Url!"));if(!e.method)return void(1==e.debugLog&&console.log("No Default method (GET/POST) given!"));e.async||(e.async=!0),e.debugLog||(e.debugLog=!1);var t=initXMLhttp();t.onreadystatechange=function(){4==t.readyState&&200==t.status?(e.success&&e.success(t.responseText,t.readyState),1==e.debugLog&&console.log("SuccessResponse"),1==e.debugLog&&console.log("Response Data:"+t.responseText)):(e.stateChange&&e.stateChange(t.responseText,t.readyState),1==e.debugLog&&console.log("FailureResponse --> State:"+t.readyState+"Status:"+t.status))};var n=[],a=e.data;if("string"==typeof a)for(var o=String.prototype.split.call(a,"&"),r=0,i=o.length;i>r;r++){var s=o[r].split("=");n.push(encodeURIComponent(s[0])+"="+encodeURIComponent(s[1]))}else if("object"==typeof a&&!(a instanceof String||FormData&&a instanceof FormData))for(var c in a){var s=a[c];if("[object Array]"==Object.prototype.toString.call(s))for(var r=0,i=s.length;i>r;r++)n.push(encodeURIComponent(c)+"[]="+encodeURIComponent(s[r]));else n.push(encodeURIComponent(c)+"="+encodeURIComponent(s))}n=n.join("&"),"GET"==e.method&&(t.open("GET",e.url+"?"+n,e.async),t.send(),1==e.debugLog&&console.log("GET fired at:"+e.url+"?"+n)),"POST"==e.method&&(t.open("POST",e.url,e.async),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.setRequestHeader("Accept","application/"+e.type),t.send(n),1==e.debugLog&&console.log("POST fired at:"+e.url+" || Data:"+n))}!function(){function e(e){return e.join(";")}var t=document.forms.contact_form,n=document.getElementById("contact");t.onsubmit=function(e){e.preventDefault(),n.className="form-sending",minAjax({url:"https://formspree.io/dev@jacoblegrone.com",method:"POST",type:"json",data:{name:t.name.value,_replyto:t.replyto.value,message:t.message.value,_gotcha:t._gotcha.value},success:function(e){n.className="form-sent"},stateChange:function(e,t){}})};var a=["color: rgb(100,100,100)","text-align: center","font-weight: bold","font-size: 18px","font-family: lato"],o=a.slice();o[0]="color: rgb(49,176,144)",console.log("%cThanks for checking out my portfolio! To view the source for this site, please visit %chttps://github.com/jlegrone/jlegrone.github.io%c.",e(a),e(o),e(a))}();var webSamples=[{name:"SC Health Atlas",linkUrl:"schealthatlas.org",tags:["Python","Google Maps API","ArcGIS","Web Scraping","jQuery","Responsive"],description:"The South Carolina Health Atlas is a source of health and social services data for South Carolina. The Atlas aims to provide South Carolinians with data and tools necessary to explore the availability of health and social services in their communities, and link people to the care they need.",views:[{title:"SC Health Atlas",displayUrl:"schealthatlas.org",img:"schealth.png"},{title:"SC Health Atlas",displayUrl:"schealthatlas.org",img:"schealth-search.png"},{title:"SC Health Atlas",displayUrl:"schealthatlas.org",img:"schealth-directions.png"},{title:"SC Health Atlas",displayUrl:"schealthatlas.org/?services=hospital,publichealth,substanceabuse,schoolclinic,freemed",img:"schealth-share.png"},{title:"SC Health Atlas",displayUrl:"schealthatlas.org/?type=dark",img:"schealth-heatmap.png"},{title:"SC Health Atlas | Data",displayUrl:"schealthatlas.org/data",img:"schealth-data.png"}]},{name:"Country Dance & Song Society Dance Map",linkUrl:"map.cdss.org",tags:["Python","Google AppEngine","Facebook Graph API","Google Maps API","Google Calendar API","Mandrill API","jQuery","Responsive"],description:"The Country Dance and Song Society sponsors folk dancing organizations around the world. They wished to provide an interactive and community maintained map of dance venues.",views:[{title:"CDSS Dance Map",displayUrl:"map.cdss.org",img:"cdssmap.png"},{title:"CDSS Dance Map",displayUrl:"map.cdss.org/#id=5659313586569216",img:"cdssmap-rsvp.png"},{title:"Edit Venue - Charlotte NC",displayUrl:"map.cdss.org/dances/5659313586569216/edit",img:"cdssmap-edit.png"},{title:"About",displayUrl:"map.cdss.org/about",img:"cdssmap-about.png"}]},{name:"Engineers Without Borders USC Chapter",linkUrl:"ewbusc.org",tags:["PHP","Bootstrap","Responsive"],description:"The Student Chapter of EWB-USA at the University of South Carolina (EWB-USC), founded in 2010, is a strong interdisciplinary team from a variety of colleges and majors. Our student members come from the College of Engineering and Computing, the College of Arts and Sciences, the Arnold School of Public Health, and the Darla Moore School of Business.",views:[{title:"EWB | USC Chapter",displayUrl:"www.ewbusc.org",img:"ewbusc.png"},{title:"EWB | USC Chapter",displayUrl:"www.ewbusc.org/events",img:"ewbusc-events.png"},{title:"EWB | USC Chapter",displayUrl:"www.ewbusc.org/projects",img:"ewbusc-projects.png"}]},{name:"Personal Blog",linkUrl:"blog.jacoblegrone.com",tags:["HTML5","CSS3","Responsive"],description:"I designed the styling for my personal 'contra dance calling' blog, which is hosted on the Tumblr platform.",views:[{title:"Jacob LeGrone",displayUrl:"blog.jacoblegrone.com/about",img:"jacobblog.png"},{title:"Jacob LeGrone",displayUrl:"blog.jacoblegrone.com/dances",img:"jacobblog-dances.png"},{title:"Jacob LeGrone",displayUrl:"blog.jacoblegrone.com/post/101954150202/travelers-delight-by-jacob-legrone",img:"jacobblog-post.png"}]}],expInfo=[{heading:"Software Stack",items:[["Front end","HTML5, CSS3, JavaScript"],["Back end","Python, PHP, Node.js"],["Databases","NDB (NoSQL), MySQL"],["Platforms","Google AppEngine, Heroku, Wordpress"]]},{heading:"Tools & Software",items:[["Frameworks & Libraries","Bootstrap, Django, React.js, D3.js, jQuery"],["Build Tools","NPM, Bower, Gulp/Grunt, SASS/LESS"],["Image Manipulation","GIMP, PhotoShop, Illustrator"],["Other Software Packages","ArcGIS, Google Earth, R, Excel"]]},{heading:"Web APIs",items:[[null,"Google Maps JavaScript V3"],[null,"Facebook JavaScript & Python SDK"],[null,"Google Docs, Calendar, and Mail APIs"],[null,"Mandrill & Mailchimp REST APIs"],[null,"PayPal Instant Payment Notification"]]}],ExperienceColumnComponent=React.createClass({displayName:"ExperienceColumnComponent",render:function(){var e=this.props.data.items.map(function(e){return React.createElement("span",null,e[0],React.createElement("li",null,e[1]))});return React.createElement("div",{className:"four columns"},React.createElement("h5",null,this.props.data.heading),React.createElement("ul",null,e))}}),ExperienceRowComponent=React.createClass({displayName:"ExperienceRowComponent",render:function(){var e=this.props.data.map(function(e){return React.createElement(ExperienceColumnComponent,{data:e})});return React.createElement("div",{className:"container"},React.createElement("div",{className:"row"},e))}}),SiteInfoComponent=React.createClass({displayName:"SiteInfoComponent",render:function(){var e=this.props.data.tags.map(function(e){return React.createElement("li",null,e)});return React.createElement("div",{className:"five columns siteInfo"},React.createElement("h4",null,this.props.data.name),React.createElement("p",null,this.props.data.description),React.createElement("a",{className:"button",href:"http://"+this.props.data.linkUrl},"Visit ",this.props.data.linkUrl),React.createElement("ul",{className:"siteTags"},e))}}),ReactCSSTransitionGroup=React.addons.CSSTransitionGroup,SitePreviewComponent=React.createClass({displayName:"SitePreviewComponent",getInitialState:function(){return{page:0,last:this.props.views.length-1}},handleClick:function(e){this.state.page<this.state.last?this.setState({page:this.state.page+1}):this.setState({page:0})},render:function(){return React.createElement("div",{className:"seven columns sitePreview"},React.createElement("div",{className:"browser_wrapper"},React.createElement("div",{className:"browser_header"},React.createElement("h1",{className:"name"},this.props.views[this.state.page].title),React.createElement("div",{className:"address_bar"},React.createElement("a",{href:"http://"+this.props.views[this.state.page].displayUrl},"http://",this.props.views[this.state.page].displayUrl))),React.createElement("div",{className:"browser_content"},React.createElement(ReactCSSTransitionGroup,{transitionName:"example",transitionAppear:!0},React.createElement("img",{src:"assets/img/"+this.props.views[this.state.page].img,onClick:this.handleClick})))))}}),ProjectRowComponent=React.createClass({displayName:"ProjectRowComponent",render:function(){var e=this.props.data.map(function(e,t){var n=React.createElement(SitePreviewComponent,{views:e.views}),a=React.createElement(SiteInfoComponent,{data:e});return React.createElement("div",{className:"row projectRow"},React.createElement("div",{className:"container"},n,a))});return React.createElement("div",null,e)}});React.render(React.createElement(ProjectRowComponent,{data:webSamples}),document.getElementById("samples")),React.render(React.createElement(ExperienceRowComponent,{data:expInfo}),document.getElementById("skills")),function(e,t,n,a,o,r){e.GoogleAnalyticsObject=a,e[a]||(e[a]=function(){(e[a].q=e[a].q||[]).push(arguments)}),e[a].l=+new Date,o=t.createElement(n),r=t.getElementsByTagName(n)[0],o.src="https://www.google-analytics.com/analytics.js",r.parentNode.insertBefore(o,r)}(window,document,"script","ga"),ga("create","UA-44055940-3","auto"),ga("send","pageview"),window.Modernizr=function(e,t,n){function a(e){b.cssText=e}function o(e,t){return a(C.join(e+";")+(t||""))}function r(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var a in e){var o=e[a];if(!i(o,"-")&&b[o]!==n)return"pfx"==t?o:!0}return!1}function c(e,t,a){for(var o in e){var i=t[e[o]];if(i!==n)return a===!1?e[o]:r(i,"function")?i.bind(a||t):i}return!1}function l(e,t,n){var a=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+x.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?s(o,t):(o=(e+" "+j.join(a+" ")+a).split(" "),c(o,t,n))}function u(){f.input=function(n){for(var a=0,o=n.length;o>a;a++)N[n[a]]=n[a]in S;return N.list&&(N.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(e){for(var a,o,r,i=0,s=e.length;s>i;i++)S.setAttribute("type",o=e[i]),a="text"!==S.type,a&&(S.value=w,S.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&S.style.WebkitAppearance!==n?(h.appendChild(S),r=t.defaultView,a=r.getComputedStyle&&"textfield"!==r.getComputedStyle(S,null).WebkitAppearance&&0!==S.offsetHeight,h.removeChild(S)):/^(search|tel)$/.test(o)||(a=/^(url|email)$/.test(o)?S.checkValidity&&S.checkValidity()===!1:S.value!=w)),k[e[i]]=!!a;return k}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var p,d,m="2.8.3",f={},g=!0,h=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,S=t.createElement("input"),w=":)",E={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),R="Webkit Moz O ms",x=R.split(" "),j=R.toLowerCase().split(" "),T={svg:"http://www.w3.org/2000/svg"},P={},k={},N={},A=[],U=A.slice,M=function(e,n,a,o){var r,i,s,c,l=t.createElement("div"),u=t.body,p=u||t.createElement("body");if(parseInt(a,10))for(;a--;)s=t.createElement("div"),s.id=o?o[a]:v+(a+1),l.appendChild(s);return r=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),l.id=v,(u?l:p).innerHTML+=r,p.appendChild(l),u||(p.style.background="",p.style.overflow="hidden",c=h.style.overflow,h.style.overflow="hidden",h.appendChild(p)),i=n(l,e),u?l.parentNode.removeChild(l):(p.parentNode.removeChild(p),h.style.overflow=c),!!i},I=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var a;return M("@media "+t+" { #"+v+" { position: absolute; } }",function(t){a="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),a},L=function(){function e(e,o){o=o||t.createElement(a[e]||"div"),e="on"+e;var i=e in o;return i||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),i=r(o[e],"function"),r(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,i}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),D={}.hasOwnProperty;d=r(D,"undefined")||r(D.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(e,t){return D.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=U.call(arguments,1),a=function(){if(this instanceof a){var o=function(){};o.prototype=t.prototype;var r=new o,i=t.apply(r,n.concat(U.call(arguments)));return Object(i)===i?i:r}return t.apply(e,n.concat(U.call(arguments)))};return a}),P.flexbox=function(){return l("flexWrap")},P.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},P.canvastext=function(){return!!f.canvas&&!!r(t.createElement("canvas").getContext("2d").fillText,"function")},P.webgl=function(){return!!e.WebGLRenderingContext},P.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:M(["@media (",C.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},P.geolocation=function(){return"geolocation"in navigator},P.postmessage=function(){return!!e.postMessage},P.websqldatabase=function(){return!!e.openDatabase},P.indexedDB=function(){return!!l("indexedDB",e)},P.hashchange=function(){return L("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},P.history=function(){return!!e.history&&!!history.pushState},P.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},P.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},P.rgba=function(){return a("background-color:rgba(150,255,150,.5)"),i(b.backgroundColor,"rgba")},P.hsla=function(){return a("background-color:hsla(120,40%,100%,.5)"),i(b.backgroundColor,"rgba")||i(b.backgroundColor,"hsla")},P.multiplebgs=function(){return a("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},P.backgroundsize=function(){return l("backgroundSize")},P.borderimage=function(){return l("borderImage")},P.borderradius=function(){return l("borderRadius")},P.boxshadow=function(){return l("boxShadow")},P.textshadow=function(){return""===t.createElement("div").style.textShadow},P.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},P.cssanimations=function(){return l("animationName")},P.csscolumns=function(){return l("columnCount")},P.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return a((e+"-webkit- ".split(" ").join(t+e)+C.join(n+e)).slice(0,-e.length)),i(b.backgroundImage,"gradient")},P.cssreflections=function(){return l("boxReflect")},P.csstransforms=function(){return!!l("transform")},P.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in h.style&&M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},P.csstransitions=function(){return l("transition")},P.fontface=function(){var e;return M('@font-face {font-family:"font";src:url("https://")}',function(n,a){var o=t.getElementById("smodernizr"),r=o.sheet||o.styleSheet,i=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(a.split(" ")[0])}),e},P.generatedcontent=function(){var e;return M(["#",v,"{font:0/0 a}#",v,':after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},P.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(a){}return n},P.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(a){}return n},P.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},P.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},P.webworkers=function(){return!!e.Worker},P.applicationcache=function(){return!!e.applicationCache},P.svg=function(){return!!t.createElementNS&&!!t.createElementNS(T.svg,"svg").createSVGRect},P.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==T.svg},P.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(E.call(t.createElementNS(T.svg,"animate")))},P.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(E.call(t.createElementNS(T.svg,"clipPath")))};for(var B in P)d(P,B)&&(p=B.toLowerCase(),f[p]=P[B](),A.push((f[p]?"":"no-")+p));return f.input||u(),f.addTest=function(e,t){if("object"==typeof e)for(var a in e)d(e,a)&&f.addTest(a,e[a]);else{if(e=e.toLowerCase(),f[e]!==n)return f;t="function"==typeof t?t():t,"undefined"!=typeof g&&g&&(h.className+=" "+(t?"":"no-")+e),f[e]=t}return f},a(""),y=S=null,function(e,t){function n(e,t){var n=e.createElement("p"),a=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",a.insertBefore(n.lastChild,a.firstChild)}function a(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[g]];return t||(t={},h++,e[g]=h,v[h]=t),t}function r(e,n,a){if(n||(n=t),u)return n.createElement(e);a||(a=o(n));var r;return r=a.cache[e]?a.cache[e].cloneNode():f.test(e)?(a.cache[e]=a.createElem(e)).cloneNode():a.createElem(e),!r.canHaveChildren||m.test(e)||r.tagUrn?r:a.frag.appendChild(r)}function i(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var r=n.frag.cloneNode(),i=0,s=a(),c=s.length;c>i;i++)r.createElement(s[i]);return r}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?r(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+a().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function c(e){e||(e=t);var a=o(e);return y.shivCSS&&!l&&!a.hasCSS&&(a.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||s(e,a),e}var l,u,p="3.7.0",d=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",h=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:p,shivCSS:d.shivCSS!==!1,supportsUnknownElements:u,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:c,createElement:r,createDocumentFragment:i};e.html5=y,c(t)}(this,t),f._version=m,f._prefixes=C,f._domPrefixes=j,f._cssomPrefixes=x,f.mq=I,f.hasEvent=L,f.testProp=function(e){return s([e])},f.testAllProps=l,f.testStyles=M,f.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},h.className=h.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(g?" js "+A.join(" "):""),f}(this,this.document),function(e,t,n){function a(e){return"[object Function]"==h.call(e)}function o(e){return"string"==typeof e}function r(){}function i(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=v.shift();y=1,e?e.t?f(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):y=0}function c(e,n,a,o,r,c,l){function u(t){if(!m&&i(p.readyState)&&(b.r=m=1,!y&&s(),p.onload=p.onreadystatechange=null,t)){"img"!=e&&f(function(){w.removeChild(p)},50);for(var a in j[n])j[n].hasOwnProperty(a)&&j[n][a].onload()}}var l=l||d.errorTimeout,p=t.createElement(e),m=0,h=0,b={t:a,s:n,e:r,a:c,x:l};1===j[n]&&(h=1,j[n]=[]),"object"==e?p.data=n:(p.src=n,p.type=e),p.width=p.height="0",p.onerror=p.onload=p.onreadystatechange=function(){u.call(this,h)},v.splice(o,0,b),"img"!=e&&(h||2===j[n]?(w.insertBefore(p,S?null:g),f(u,l)):j[n].push(p))}function l(e,t,n,a,r){return y=0,t=t||"j",o(e)?c("c"==t?C:E,e,t,this.i++,n,a,r):(v.splice(this.i++,0,e),1==v.length&&s()),this}function u(){var e=d;return e.loader={load:l,i:0},e}var p,d,m=t.documentElement,f=e.setTimeout,g=t.getElementsByTagName("script")[0],h={}.toString,v=[],y=0,b="MozAppearance"in m.style,S=b&&!!t.createRange().compareNode,w=S?m:g.parentNode,m=e.opera&&"[object Opera]"==h.call(e.opera),m=!!t.attachEvent&&!m,E=b?"object":m?"script":"img",C=m?"script":E,R=Array.isArray||function(e){return"[object Array]"==h.call(e)},x=[],j={},T={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};d=function(e){function t(e){var t,n,a,e=e.split("!"),o=x.length,r=e.pop(),i=e.length,r={url:r,origUrl:r,prefixes:e};for(n=0;i>n;n++)a=e[n].split("="),(t=T[a.shift()])&&(r=t(r,a));for(n=0;o>n;n++)r=x[n](r);return r}function i(e,o,r,i,s){var c=t(e),l=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(o&&(o=a(o)?o:o[e]||o[i]||o[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,o,r,i,s):(j[c.url]?c.noexec=!0:j[c.url]=1,r.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(a(o)||a(l))&&r.load(function(){u(),o&&o(c.origUrl,s,i),l&&l(c.origUrl,s,i),j[c.url]=2})))}function s(e,t){function n(e,n){if(e){if(o(e))n||(p=function(){var e=[].slice.call(arguments);d.apply(this,e),m()}),i(e,p,t,0,l);else if(Object(e)===e)for(c in s=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(c)&&(!n&&!--s&&(a(p)?p=function(){var e=[].slice.call(arguments);d.apply(this,e),m()}:p[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),m()}}(d[c])),i(e[c],p,t,c,l))}else!n&&m()}var s,c,l=!!e.test,u=e.load||e.both,p=e.callback||r,d=p,m=e.complete||r;n(l?e.yep:e.nope,!!u),u&&n(u)}var c,l,p=this.yepnope.loader;if(o(e))i(e,0,p,0);else if(R(e))for(c=0;c<e.length;c++)l=e[c],o(l)?i(l,0,p,0):R(l)?d(l):Object(l)===l&&s(l,p);else Object(e)===e&&s(e,p)},d.addPrefix=function(e,t){T[e]=t},d.addFilter=function(e){x.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",p=function(){t.removeEventListener("DOMContentLoaded",p,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,a,o,c,l){var u,p,m=t.createElement("script"),o=o||d.errorTimeout;m.src=e;for(p in a)m.setAttribute(p,a[p]);n=l?s:n||r,m.onreadystatechange=m.onload=function(){!u&&i(m.readyState)&&(u=1,n(),m.onload=m.onreadystatechange=null)},f(function(){u||(u=1,n(1))},o),c?m.onload():g.parentNode.insertBefore(m,g)},e.yepnope.injectCss=function(e,n,a,o,i,c){var l,o=t.createElement("link"),n=c?s:n||r;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in a)o.setAttribute(l,a[l]);i||(g.parentNode.insertBefore(o,g),f(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(){for(var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],a=n.length,o=window.console=window.console||{};a--;)e=n[a],o[e]||(o[e]=t)}();