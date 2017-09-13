// +++++++++ Menu Burger for Burger +++++++++ //
document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});


// +++++++++ API Request +++++++++ //
var xhr = new XMLHttpRequest();
xhr.open('GET', 'data/data.json', true);
xhr.onload = function() {
  if(this.readyState == 4 && this.status == 200){
    let info = JSON.parse(this.responseText);
    // ++++ Get Generated ID Function ++++ //
    jQuery.fn.getIdArray = function() {
      let ret = [];
      $('[id]', this).each(function() {
        ret.push(this.id);
      });
      return ret;
    };

    // ++++ Template Cloning ++++ //
    var maintmpl = $('.card-template');
    function findingNemo(el,value) {
      let tmpl = maintmpl.clone().appendTo(el);
      tmpl.find('.card-header-title').html("<div>"+value.title+"</div>");
      tmpl.find('.release-date .date').html("<div>"+value.releaseDate+"</div>");
      tmpl.find('.price-tag').html("<div>$"+value.price+"</div>");
      tmpl.show();
    }

    $.each(info.items, function(key, value){
      //console.log(key, value);
      //console.log(key);
      // console.log(value.parent);
      var phoneCategory = $('#items');
      console.log(key);
      var substring = "c";
      if(key.indexOf(substring) !== -1 ) {
        phoneCategory.append('<div id='+ key +'><h2 class="categories"><span class="category">'+ value.title +'</span><a href="#" class="button">View All</a></h2></div>');
      }
      //var array = $("#items").getIdArray();
      //console.log('Hoooooaaaaah! '+ array);

      $.each(value, function(k, v){
        //let items = $("#items").getIdArray();
        let data = $("#items").getIdArray();
        for(let i = 0; i < data.length; i++ ) {
           if(data[i] === v) {
            //  console.log('eto ang data '+ data[i]);
            //  console.log('eto ang key '+ key);
             //console.log('#'+items[i]);
             findingNemo('#'+data[i],value);
           }
        }

      });

    });
  }
}
xhr.send();
