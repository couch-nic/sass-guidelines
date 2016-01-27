(function(w){"use strict";var loadCSS=function(href,before,media){var doc=w.document;var ss=doc.createElement("link");var ref;if(before){ref=before}else{var refs=(doc.body||doc.getElementsByTagName("head")[0]).childNodes;ref=refs[refs.length-1]}var sheets=doc.styleSheets;ss.rel="stylesheet";ss.href=href;ss.media="only x";ref.parentNode.insertBefore(ss,before?ref:ref.nextSibling);var onloadcssdefined=function(cb){var resolvedHref=ss.href;var i=sheets.length;while(i--){if(sheets[i].href===resolvedHref){return cb()}}setTimeout(function(){onloadcssdefined(cb)})};ss.onloadcssdefined=onloadcssdefined;onloadcssdefined(function(){ss.media=media||"all"});return ss};if(typeof module!=="undefined"){module.exports=loadCSS}else{w.loadCSS=loadCSS}})(typeof global!=="undefined"?global:this);var supportsWoff2=function(win){if(!("FontFace"in win)){return false}var f=new FontFace("t",'url( "data:application/font-woff2;base64,d09GMgABAAAAAAIkAAoAAAAABVwAAAHcAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlYAgloKLEoBNgIkAxgLDgAEIAWDcgc1G7IEyB6SJAFID5YA3nAHC6h4+H7s27nP1kTyOoQkGuJWtNGIJKYznRI3VEL7IaHq985ZUuKryZKcAtJsi5eULwUybm9KzajBBhywZ5ZwoJNuwDX5C/xBjvz5DbsoNsvG1NGQiqp0NMLZ7JlnW+5MaM3HwcHheUQeiVokekHkn/FRdefvJaTp2PczN+I1Sc3k9VuX51Tb0Tqqf1deVXGdJsDOhz0/EffMOPOzHNH06pYkDDjs+P8fb/z/8n9Iq8ITzWywkP6PBMMN9L/O7vY2FNoTAkp5PpD6g1nV9WmyQnM5uPpAMHR2fe06jbfvzPriekVTQxC6lpKr43oDtRZfCATl5OVAUKykqwm9o8R/kg37cxa6eZikS7cjK4aIwoyh6jOFplhFrz2b833G3Jii9AjDUiAZ9AxZtxdEYV6imvRF0+0Nej3wu6nPZrTLh81AVcV3kmMVdQj6Qbe9qetzbuDZ7vXOlRrqooFSxCv6SfrDICA6rnHZXQPVcUHJYGcoqa3jVH7ATrjWBNYYkEqF3RFpVIl0q2JvMOJd7/TyjXHw2NyAuJpNaEbz8RTEVtCbSH7JrwQQOqwGl7sTUOtdBZIY2DKqKlvOmPvUxJaURAZZcviTT0SKHCXqzwc=" ) format( "woff2" )',{});f.load()["catch"](function(){});return f.status=="loading"||f.status=="loaded"}(this);function loadFont(fontName,woffUrl,woff2Url,onlyLoadFontOnSecondPageload){var nua=navigator.userAgent;var noSupport=!window.addEventListener||nua.match(/(Android (2|3|4.0|4.1|4.2|4.3))|(Opera (Mini|Mobi))/)&&!nua.match(/Chrome/);if(noSupport){return}var loSto={};try{loSto=localStorage||{}}catch(ex){}var localStoragePrefix="x-font-"+fontName;var localStorageUrlKey=localStoragePrefix+"url";var localStorageCssKey=localStoragePrefix+"css";var storedFontUrl=loSto[localStorageUrlKey];var storedFontCss=loSto[localStorageCssKey];var styleElement=document.createElement("style");styleElement.rel="stylesheet";document.head.appendChild(styleElement);if(storedFontCss&&(storedFontUrl===woffUrl||storedFontUrl===woff2Url)){styleElement.textContent=storedFontCss}else{var url=woff2Url&&supportsWoff2?woff2Url:woffUrl;var request=new XMLHttpRequest;request.open("GET",url);request.onload=function(){if(request.status>=200&&request.status<400){loSto[localStorageUrlKey]=url;loSto[localStorageCssKey]=request.responseText;if(!onlyLoadFontOnSecondPageload){styleElement.textContent=request.responseText}}};request.send()}}
