$(document).ready(function(){fetch("https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4",{mode:"cors"}).then(function(t){return t.json()}).then(function(n){console.log("Request successful",n);var i="";$.each(n,function(t){console.log(t);var a="";$.each(n[t],function(t,n){a+='<div><h3 class="linkTitle">'+n.title+'</h3><p class="linkSub">'+n["sub-title"]+"</p></div>"}),i+='<li class="nav-item"><a class="nav-link tip" data-tip="my-tip"href="#">'+t+"</a>"+('<div id="my-tip" class="tip-content hidden">'+a+"</div>")+"</li>",$(".tip").each(function(){$(this).tooltip({html:!0,title:$("."+$(this).data("tip")).html()})})}),$(".customNav").append($('<nav class="navbar navbar-expand-lg"><ul class="navbar-nav mr-auto">'+i+"</ul></nav>"))}).catch(function(t){console.log("Request failed",t)})});