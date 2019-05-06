$( document ).ready(function() {
  fetch('https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(returnedValue) {
      console.log('Request successful', returnedValue);
      var menuListEmpty = '';
      $.each(returnedValue, function (index) {
        console.log(index);
        var subMenuListItems = '';
        $.each(returnedValue[index], function(key, value){
            subMenuListItems += '<div class="productLinkContent"><h3 class="linkTitle">'+value.title+'</h3><p class="linkSub">'+value['sub-title']+'</p></div>'
             
        })
        var tooltipWrapper = '<div id="my-tip_' + index + '" class="tip-content hidden" aria-hidden="true">'+subMenuListItems+'</div>'
        menuListEmpty += '<li class="nav-item"><a class="nav-link tip" data-tip="my-tip"href="#">'+ index +'</a>'+tooltipWrapper+'</li>'  
         // Tooltips
         $('.tip').each(function () {
          $(this).tooltip({
              html: true,
              title: $('.' + $(this).data('tip')).html()
          });
        }); 
      })
     $('.customNav').append($( '<nav class="navbar navbar-expand-lg"><ul class="navbar-nav mr-auto">' +menuListEmpty+ '</ul></nav>'));
     })
    .catch(function(error) {
      console.log('Request failed', error)
   });
});

