<?php // ?>
<!DOCTYPE html>
<html lang="en" manifest="julienetienne.co.uk.manifest">
<head>
    <!-- -+-+-+ +-+-+-+-+-+-+-+-+
    |J|u|l|i|e|n| |E|t|i|e|n|n|e|
    +-+-+-+-+-+-+ +-+-+-+-+-+-+-+
    Copyright 2015 Julien Etienne
        
           ||Welcome Scavengers||

    This is a simple website made
    from  scratch without jQuery,
    JS frameworks, CSS frameworks
    , boilerplates  or CMSs. Just
    for fun. It  makes  use of  a 
    handful  of   small  libs   & 
    tools.
    
    Supports IE8+ &  Safari  5.1+ 
    &   mobile   ofcourse.   some 
    enhancements    degrade   for
    legacy      browsers/devices.

    Here's the repo:
    http://github.com/julienetie/
    personal-site.git
    +-+-+-+-+-+-+ +-+-+-+-+-+-+-+
    
    Julien -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Work of Freelance Designer &amp; Developer Julien Etienne">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Julien Etienne - UI Developer</title>
    <!-- Apple setup -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="Web Starter Kit">
    <meta name="mobile-web-app-capable" content="yes">
    <link rel="manifest" href="visuals/icons/manifest.json">
    <!-- Fun loving icon src -_- -->
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="icon" sizes="192x192" href="visuals/icons/android-chrome-192x192.png">
    <link rel="apple-touch-icon" sizes="76x76" href="visuals/icons/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="120x120" href="visuals/icons/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="152x152" href="visuals/icons/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="visuals/icons/apple-touch-icon-180x180.png">
    <!-- MS metro thing -->
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage" content="/mstile-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <!-- Hash fragments are not part of HTTP requests, opting out of canonical attr -->
    <meta name="author" content="Julien Etienne">
    <!-- Disabled JS -->
    <noscript>
    <style>
        #oldschool{
            display: none;
        }
    </style>
    </noscript>
    <!-- /**
          * The below is critical CSS, not me being lazy: http://addyosmani.com/blog/tag/critical-path-css/
          */ -->
    <style type="text/css">
body,h1{font-weight:400;color:#222}a,html{cursor:default}html{font-family:'Open Sans',sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;background-color:#222}body{letter-spacing:.2em;background-color:#e6ebff;position:absolute;width:100%;margin:0}article,header,nav{display:block}h1{padding:.5em 1.4em}a{background-color:transparent;padding:0 .2em .1em .4em}a:link{outline:rgba(255,255,255,.01) solid 1px;text-decoration:none;color:inherit;-webkit-transition:all .3s linear;-moz-transition:all .3s linear;-o-transition:all .3s linear;transition:all .3s linear}h1{font-size:2em;margin:.67em 0}img{border:0}svg:not(:root){overflow:hidden}article{width:100%;position:relative;float:left;transition:all .3s linear;overflow:hidden}article{-webkit-transition:all .3s linear;-moz-transition:all .3s linear;-o-transition:all .3s linear}nav ul li:before{content:'#';position:relative;float:left;margin-right:.2em}.cross{position:absolute;top:0;z-index:0}ul{border:1px solid #CFCFFF;border-color:rgba(0,0,255,.05);border-top:none;list-style-type:none}ul li{color:#222;padding-bottom:.3em;border-left:1px solid #ACACFC;border-left-color:rgba(0,0,255,.1);padding-left:1em}ul li:nth-child(1){border-radius:1em}ul li:last-child{padding-bottom:1em}#oldschool{display:none}@media only screen and (max-width:40em){ul li{padding-bottom:2.2em}}.cross line{stroke:rgba(150,20,80,1);stroke-dasharray:20 20 10;stroke-width:.08}.cross line:nth-child(2){stroke-dasharray:none}header[contenteditable]{outline:0}::selection{background:#f5da55;color:#C00}::-moz-selection{background:#f5da55;color:#C00}h1::-moz-selection{background:#0f0;color:lilac}img::-moz-selection{background:#ff0}
</style>
<script>
(function(u){function loadCSS(e,t,n){"use strict";function r(){for(var t,i=0;i<d.length;i++)d[i].href&&d[i].href.indexOf(e)>-1&&(t=!0);t?o.media=n||"all":setTimeout(r)}var o=window.document.createElement("link"),i=t||window.document.getElementsByTagName("script")[0],d=window.document.styleSheets;return o.rel="stylesheet",o.href=e,o.media="only x",i.parentNode.insertBefore(o,i),r(),o}for(var i in u){loadCSS(u[i]);}}(['style/julienetienne.min.ce401b01.css']));
</script>
<noscript>
<link rel="stylesheet" href="style/julienetienne.min.ce401b01.css">
</noscript>
    <style>
    @media print {
        @page {
            counter-increment: page;
            counter-reset: page 1;
            @bottom-right {
                content: "Page " counter(page) " of " counter(pages);
            }
        }
    }
    </style>
    <script type="text/javascript">
    WebFontConfig = {
        google: {
            families: ['Open+Sans::latin']
        }
    };
    (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();
    </script>
</head>

<body>
    <!-- /**
      *  Embedding lazyload into the page eliminates blocking, lazyload is 
      *  required to be in the top of the body to prevent hell breaking loose.
      */ -->
    <script>!function(t){var n;"undefined"!=typeof window?n=window:"undefined"!=typeof self&&(n=self),n.lazyload=t()}(function(){return function t(n,e,o){function r(u,f){if(!e[u]){if(!n[u]){var c="function"==typeof require&&require;if(!f&&c)return c(u,!0);if(i)return i(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var a=e[u]={exports:{}};n[u][0].call(a.exports,function(t){var e=n[u][1][t];return r(e?e:t)},a,a.exports,t,n,e,o)}return e[u].exports}for(var i="function"==typeof require&&require,u=0;u<o.length;u++)r(o[u]);return r}({1:[function(t,n,e){(function(e){function o(t){-1===f.call(l,t)&&l.push(t)}function r(t){function n(t){var n=e(t);console.log(n),n&&(t.src=n),t["data-lzled"]=!0,i[f.call(i,t)]=null}function e(n){return"function"==typeof t.src?t.src(n):n.getAttribute(t.src)}function r(e){e.onload=null,e.removeAttribute("onload"),e.onerror=null,e.removeAttribute("onerror"),-1===f.call(i,e)&&c(e,t,n)}t=u({offset:333,src:"data-src",container:!1},t||{}),"string"==typeof t.src&&o(t.src);var i=[];return r}function i(t){var n="HTML"+t+"Element";if(n in e!=!1){var o=e[n].prototype.getAttribute;e[n].prototype.getAttribute=function(t){if("src"===t){for(var n,e=0,r=l.length;r>e&&!(n=o.call(this,l[e]));e++);return n||o.call(this,t)}return o.call(this,t)}}}function u(t,n){for(var e in t)void 0===n[e]&&(n[e]=t[e]);return n}function f(t){for(var n=this.length;n--&&this[n]!==t;);return n}n.exports=r;var c=t("in-viewport"),l=["data-src"];e.lzld=r(),i("Image"),i("IFrame")}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"in-viewport":2}],2:[function(t,n,e){(function(t){function e(n,e,o){var r={container:t.document.body,offset:0};(void 0===e||"function"==typeof e)&&(o=e,e={});for(var u=r.container=e.container||r.container,f=r.offset=e.offset||r.offset,l=0;l<c.length;l++)if(c[l].container===u)return c[l].isInViewport(n,f,o);return c[c.push(i(u))-1].isInViewport(n,f,o)}function o(t,n,e){t.attachEvent?t.attachEvent("on"+n,e):t.addEventListener(n,e,!1)}function r(t,n,e){var o;return function(){function r(){o=null,e||t.apply(i,u)}var i=this,u=arguments,f=e&&!o;clearTimeout(o),o=setTimeout(r,n),f&&t.apply(i,u)}}function i(n){function e(t,n,e){var o=i(t,n);return o?(e&&(s.splice(u.call(s,t),1),e(t)),!0):(e&&setTimeout(c(t,n,e),0),!1)}function i(e,o){if(!l(t.document.documentElement,e)||!l(t.document.documentElement,n))return!1;if(!e.offsetWidth||!e.offsetHeight)return!1;var r=e.getBoundingClientRect(),i=n.getBoundingClientRect(),u={left:r.left,top:r.top},f={width:o,height:o};n===t.document.body?(f.width+=t.document.documentElement.clientWidth,f.height+=t.document.documentElement.clientHeight,i={bottom:n.scrollHeight,top:0,left:0,right:n.scrollWidth}):(u.left-=i.left,u.top-=i.top,f.width+=n.clientWidth,f.height+=n.clientHeight);var c=!(r.right<i.left||r.left>i.right||r.bottom<i.top||r.top>i.bottom)&&u.top<=f.height&&u.left<=f.width;return c}function c(t,n,o){return-1===u.call(s,t)&&s.push(t),function(){d.push(function(){e(t,n,o)})}}function a(){for(var t;t=d.shift();)t()}var d=[],s=[],p=n===t.document.body?t:n,h=r(a,15);return o(p,"scroll",h),p===t&&o(t,"resize",h),"function"==typeof t.MutationObserver&&f(s,n,h),{container:n,isInViewport:e}}function u(t){for(var n=this.length;n--&&this[n]!==t;);return n}function f(t,n,e){function o(t){t.some(i)===!0&&setTimeout(e,0)}function r(n){return-1!==u.call(t,n)}function i(t){return c.call(t.addedNodes,r).length>0}var f=new MutationObserver(o),c=Array.prototype.filter;f.observe(n,{childList:!0,subtree:!0})}n.exports=e;var c=[],l=t.document.documentElement.compareDocumentPosition?function(t,n){return!!(16&t.compareDocumentPosition(n))}:t.document.documentElement.contains?function(t,n){return t!==n&&(t.contains?t.contains(n):!1)}:function(t,n){for(;n=n.parentNode;)if(n===t)return!0;return!1}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)});</script>
    <!-- I figured people may type "Julien Etienne is a ?????. Ha, either way inleast it's memorable. -->
    <header id="top" contenteditable="true" spellcheck="false">
        <!-- Just wanted to let the word know. -->
        <h1 id="editable" data-print-header="Julien Etienne UI Developer">Julien Etienne can't speak French</h1>
        <div id="oldschool">
        <h1>Julien Etienne UI Developer</h1>
        <h3>PRINT LIKE IT'S 1977</h3>
            <img src="visuals/print/old-school.jpg" alt="">
        </div>
    </header>
    <!-- #0 Contents -->
    <nav id="contents">
        <ul>
            <li><a href="#experiments">Experiments</a></li>
            <li><a href="#websites">Web design &#38; development</a></li>
            <li><a href="#prototypes">Prototypes &#38; other</a></li>
            <li><a href="#logos-and-branding">Logos &#38; branding</a></li>
            <li><a href="#maya">Autocad Maya 3d modeling &#38; rendering</a></li>
            <li><a href="#apis">APIs</a></li>
            <li><a href="#core-technologies">Core technologies</a></li>
            <li><a href="#accounts">Accounts</a></li>
            <li><a href="#bookmarked">Bookmarked</a></li>
            <li><a href="#stats">Stats</a></li>
            <li><a href="#contact" id="bottom">Contact</a></li>
        </ul>
    </nav>
    <!-- #1 Experiments -->
    <article class="visual-portfolio" id="experiments">
        <svg class="cross">
            <line x1="0" y1="0"/>
            <line x1="0" y2="0"/>
        </svg>
        <h2>Experiments</h2>
        <ul>
            <li>
                <div id="smarties-placehlider">
                    <canvas id="smarties" width="1200" height="800">Your browser is prehistoric, please upgrade.</canvas>
                </div>
            </li>
            <li><a target="_blank" href="http://codepen.io/undefined_">...more</a></li>
        </ul>
        <hr>
    </article>
    <!-- #2 Web design & development -->
    <article class="visual-portfolio" id="websites" itemscope="" itemtype="https://schema.org/CreativeWork" role="main">
        <svg class="cross">
            <line x1="0" y1="0"/>
            <line x1="0" y2="0"/>
        </svg>
        <h2>Web design &#38; development</h2>
        <ul>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/websites/clp.jpg" src="visuals/websites/clp-pix.jpg" alt="Christian Lewis Photography"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/websites/kaiwoshe.jpg" src="visuals/websites/kaiwoshe-pix.jpg" alt="Kaiwoshe Inn Guest House"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/websites/wyw2.jpg" src="visuals/websites/wyw2-pix.jpg" alt="Write Your Will Limited"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/websites/music-site.jpg" src="visuals/websites/music-site-pix.jpg" alt="JK Music site"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/websites/uds.jpg" src="visuals/websites/uds-pix.jpg" alt="Université de Sherbrooke comminications site"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/websites/jeetan.jpg" src="visuals/websites/jeetan-pix.jpg" alt="Jeetan Patel's professional home page"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/websites/codeheads.jpg" src="visuals/websites/codeheads-pix.jpg" alt="Codeheads flash games"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/websites/zizi_2012.jpg" src="visuals/websites/zizi_2012-pix.jpg" alt="Zizi Hair Salon"></li>
        </ul>
        <hr>
    </article>
    <!-- #3 Prototypes & other -->
    <article class="visual-portfolio" id="prototypes" itemscope="" itemtype="https://schema.org/CreativeWork" role="main">
        <svg class="cross">
            <line x1="0" y1="0"/>
            <line x1="0" y2="0"/>
        </svg>
        <h2>Prototypes &#38; other</h2>
        <ul>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/concepts/a7.jpg" src="visuals/concepts/a7-pix.jpg" alt="A7 landing page live snapshot"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/concepts/angry-young-rats.jpg" src="visuals/concepts/angry-young-rats-pix.jpg" alt="Angry Young Rats CSS3 design concept"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/concepts/envidia.jpg" src="visuals/concepts/envidia-pix.jpg" alt="ENVIDIA Webware"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/concepts/en.jpg" src="visuals/concepts/en-pix.jpg" alt="ENVIDIA Webware prototype"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/concepts/je-rev2.jpg" src="visuals/concepts/je-rev2-pix.jpg" alt="Early Julien Etienne web design and development website"></li>
        </ul>
        <hr>
    </article>
    <!-- #4 Logos & branding -->
    <article class="visual-portfolio" id="logos-and-branding" itemscope="" itemtype="https://schema.org/CreativeWork" role="main">
        <svg class="cross">
            <line x1="0" y1="0"/>
            <line x1="0" y2="0"/>
        </svg>
        <h2>Logos &#38; branding</h2>
        <ul>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/landb/2.jpg" src="visuals/landb/2-pix.jpg" alt="Branding header image"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/landb/zizi.gif" src="visuals/landb/zizi-pix.jpg" alt="Zizi Hair Salon logo"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/landb/10.jpg" src="visuals/landb/10-pix.jpg" alt="Iris computers logo"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/landb/8.jpg" src="visuals/landb/8-pix.jpg" alt="Vector Zip design symbolic logo"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/landb/wyw_logo.jpg" src="visuals/landb/wyw-logo-pix.jpg" alt="Write Your Will logo"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/landb/k-live.gif" src="visuals/landb/k-live-pix.jpg" alt="K Live Entertainment logo"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/landb/11.jpg" src="visuals/landb/11-pix.jpg" alt="Apolo Technologies logo"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/landb/15.jpg" src="visuals/landb/15-pix.jpg" alt="Resource & UK Live Events logo"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/landb/17.jpg" src="visuals/landb/17-pix.jpg" alt="Play God logo"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/landb/jw.png" src="visuals/landb/jw-pix.jpg" alt="Jo Woode logo"></li>
            <li itemprop="workExample"><img onload="lzld(this)" data-src="visuals/landb/9.jpg" src="visuals/landb/9-pix.jpg" alt="Pharo & Go Digital logo"></li>
        </ul>
        <hr>
    </article>
    <!-- #5 Autocad Maya 3d modeling & rendering -->
    <article id="maya" itemscope="" itemtype="https://schema.org/CreativeWork">
        <svg class="cross">
            <line x1="0" y1="0"/>
            <line x1="0" y2="0"/>
        </svg>
        <h2>Autocad Maya 3d modeling &#38; rendering</h2>
        <ul>
            <li itemprop="workExample"><a target="_blank" href="visuals/alt/2.jpg">Rosso Diablo: Tiger Heads</a></li>
            <li itemprop="workExample"><a target="_blank" href="visuals/alt/1.jpg">Wild Rapid Gaming Character</a></li>
            <li itemprop="workExample"><a target="_blank" href="visuals/alt/3.jpg">SolaRay Logo symbol</a></li>
            <li itemprop="workExample"><a target="_blank" href="visuals/alt/4.jpg">Sprite design for JavaScript game</a></li>
            <li itemprop="workExample"><a target="_blank" href="visuals/alt/7.jpg">2nd World, art</a></li>
            <li itemprop="workExample"><a target="_blank" href="visuals/alt/9.jpg">Automobile design prototype</a></li>
        </ul>
        <hr>
    </article>
    <!-- #6 APIs-->
    <article id="apis" itemscope="" itemtype="https://schema.org/CreativeWork">
        <svg class="cross">
            <line x1="0" y1="0"/>
            <line x1="0" y2="0"/>
        </svg>
        <h2>APIs</h2>
        <ul itemscope="" itemtype="https://schema.org/SoftwareSourceCode">
            <li><a itemprop="codeRepository workExample" target="_blank" href="https://github.com/julienetie/soucouyant">Soucouyant</a></li>
            <li><a itemprop="codeRepository workExample" target="_blank" href="https://github.com/julienetie/resizilla">Resizilla</a></li>
            <li><a itemprop="codeRepository workExample" target="_blank" href="https://github.com/julienetie/cssesta-css-reset">CSSesta</a></li>
            <li>
                <a itemprop="codeRepository workExample" target="_blank" href="https://github.com/julienetie/imagine-list">
                    <s>Imagine-list
                    </s>
                </a>
            </li>
        </ul>
        <hr>
    </article>
    <!-- #7 Core technologies -->
    <article id="core-technologies" itemscope="" itemtype="https://schema.org/SoftwareSourceCode">
        <svg class="cross">
            <line x1="0" y1="0"/>
            <line x1="0" y2="0"/>
        </svg>
        <h2>Core technologies</h2>
        <ul>
            <li itemprop="runtimePlatform">JavaScript</li>
            <li itemprop="programmingLanguage">CSS</li>
            <li itemprop="programmingLanguage">HTML</li>
            <li itemprop="programmingLanguage">SVG</li>
            <li>Canvas</li>
            <li itemprop="runtimePlatform">Python</li>
            <li itemprop="runtimePlatform">node.js</li>
            <li>Illustrator</li>
            <li>Inkscape</li>
        </ul>
        <hr>
    </article>
    <!-- #8 Accounts -->
    <article id="accounts">
        <svg class="cross">
            <line x1="0" y1="0"/>
            <line x1="0" y2="0"/>
        </svg>
        <h2>Accounts</h2>
        <ul>
            <li><a target="_blank" href="https://github.com/julienetie">GITHUB</a></li>
            <li><a target="_blank" href="https://github.com/julienetie">MDN</a></li>
            <li><a target="_blank" href="http://www.modelmayhem.com/portfolio/1280324/viewall">Photography</a></li>
            <li><a target="_blank" href="http://codepen.io/undefined_">CodePen</a></li>
            <li><a target="_blank" href="https://twitter.com/julienetienne_">Twitter</a></li>
        </ul>
        <hr>
    </article>
    <!-- #9 Bookmarked -->
    <article id="bookmarked">
        <svg class="cross">
            <line x1="0" y1="0"/>
            <line x1="0" y2="0"/>
        </svg>
        <h2>Bookmarked</h2>
        <ul>
            <li><a target="_blank" href="https://www.packtpub.com/application-development/learning-behavior-driven-development-javascript">Learning Behaviordriven Development with JavaScript</a></li>
            <li><a target="_blank" href="https://github.com/getify/You-Dont-Know-JS/blob/master/README.md#you-dont-know-js-book-series">You Don't Know JS</a></li>
        </ul>
        <hr>
    </article>
    <!--#10 Stats-->
    <article id="stats">
        <svg class="cross">
            <line x1="0" y1="0"/>
            <line x1="0" y2="0"/>
        </svg>
        <h2>Stats</h2>
        <ul>
            <li><a target="_blank" href="https://developers.google.com/speed/pagespeed/insights/?url=julienetienne.co.uk">PageSpeed Insights - Mobile (This website dosen't use "PageSpeed" )</a></li>
            <li><a target="_blank" href="http://tools.pingdom.com/fpt/#!/ddtebO/http://julienetienne.co.uk/">Pingdom Website Speed Test</a></li>
            <li><a target="_blank" href="https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=http%3A%2F%2Fjulienetienne.co.uk%2F">W3  Validation</a></li>
            <li><a target="_blank" href="http://wave.webaim.org/report#/http%3A%2F%2Fjulienetienne.co.uk%2F">WAVE Accessibility Check</a></li>
        </ul>
        <h2>About this site:</h2>
        <ul>
            <li class="in-line">Libs: <a target="_blank" href="https://github.com/vvo/lazyload" title="lazyload, loads images when they enter the veiwport.">lazyload</a>,<a target="_blank" href="https://gist.github.com/galambalazs/6477177" title="SmoothScroll improves fluidity when scrolling.">SmoothScroll.js</a>,
                <a target="_blank" href="https://github.com/julienetie/smooth-scroll" title="smooth-scroll pans to links, I added a few improvements.">smooth-scroll customized</a>,
                <a target="_blank" href="https://github.com/filamentgroup/loadCSS" title="Non-blocking Async CSS">loadCSS</a>
            </li>
            <li class="in-line">Setup: <a target="_blank" href="https://github.com/julienetie/personal-site/blob/master/gulpfile.js" title="A simple gulp setup that takes advantage of critical (above the fold) CSS and application caching.">gulpfile.js</a></li>
            <li>Technologies: JS, CSS, SVG, Canvas, HTML5'</li>
            <li>Legacy support from: IE8+, Safari 5.1+ </li>
            <li>Assistive technologies support: TBA</li>
        </ul>
        <hr>
    </article>
    <!-- #9 Contact -->
    <address id="contact" itemscope="" itemtype="http://schema.org/Person">
        <span id="ch">Contact</span>
        <ul>
            <li itemprop="name">Julien Etienne</li>
            <li itemprop="jobTitle">Web UI Developer</li>
            <li>London/ UK</li>
            <li>Twitter: <a href="https://twitter.com/julienetienne_">@julienetienne_</a></li>
            <li>Email: <a href="https://twitter.com/julienetienne_">Not today ;)</a></li>
        </ul>
        <hr>
    </address>
    <!-- Top Arrow & Logo -->
    <div id="top-arrow"><a href="#top">&#x25B2;</a></div>
    <!-- Self maintainable copyright notice, in case I forget what year it is -->
    <footer itemscope="" itemtype="https://schema.org/creativeWork">
        <small>&#169; <time datetime="2015" itemprop="copyrightYear">2015</time> <span itemprop="copyrightHolder">Julien Etienne</span></small>
    </footer>
    <!-- After DOM body scripts -->
    <script src="scripts/julienetienne.min.js" defer></script>
    <!-- GOOGLE ANALYTICS -->
    <script>
    (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-60745535-1', 'auto');
    ga('send', 'pageview');

    var prompt = true;

    (function() {

        function removeElement(node) {
            node.parentNode.removeChild(node);
        }



        var beforePrint = function() {
            if (prompt === true) {

                alert('Because images load on view, you may need to close this print prompt and quickly scroll to each image to ensure a good print/ pdf.');
                window.scrollTo(0, 0);
            }
        };
        var afterPrint = function() {
            if (prompt === true) {
                prompt = false;
            }
        };

        if (window.matchMedia) {
            var mediaQueryList = window.matchMedia('print');
            mediaQueryList.addListener(function(mql) {
                if (mql.matches) {
                    beforePrint();
                } else {
                    afterPrint();
                }
            });
        }


        window.onbeforeprint = beforePrint;
        window.onafterprint = afterPrint;

    }());
    </script>
</body>

</html>
