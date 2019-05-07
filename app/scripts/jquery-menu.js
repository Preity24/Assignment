function myCustomMenu(navSelector) {
  this.selector = navSelector;
  this.tooltipContent = function(value){
    return '<div class="dropdownArrow"></div><div class="productLinkContent pb-3"><h3 class="linkTitle">'+value.title+'</h3><p class="linkSub">'+value['sub-title']+'</p></div>';
  };
  this.triggerMenu = function(url){
    fetch(url,{mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(this.successCallback.bind(this))
    .catch(function(error) {
      console.log('Request failed', error)
    });
  };
  this.successCallback = function(returnedValue) {
    console.log('Request successful', returnedValue);
        var menuListEmpty = '';
        var _this=this;
        $.each(returnedValue, function (index) {
          console.log(index);
          var subMenuListItems = '';
          $.each(returnedValue[index], function(key, value){
            console.log(this);
              subMenuListItems += _this.tooltipContent(value);
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
      $(this.selector).append($( '<nav class="navbar navbar-expand-lg"><ul class="navbar-nav">' +menuListEmpty+ '</ul></nav>'));
  }
}

