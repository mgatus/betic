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

// +++++++++ Data here ++++++++//
var info = {
  "items": {
    "c001": {
      "parent": "c000",
      "title": "Phones"
    },
    "c002": {
      "parent": "c000",
      "title": "Laptops"
    },
    "c003": {
      "parent": "c000",
      "title": "Accessories"
    },
    "p001": {
      "parent": "c001",
      "manufacturer": "Apple",
      "title": "iPhone 10",
      "price": 499,
      "releaseDate": "2018-04-23T18:25:43.511Z"
    },
    "p002": {
      "parent": "c002",
      "manufacturer": "Apple",
      "title": "Macbook Pro 2017",
      "price": 1999,
      "releaseDate": "2017-04-23T18:25:43.511Z"
    },
    "p003": {
      "parent": "c002",
      "manufacturer": "Dell",
      "title": "XPS 13",
      "price": 1399,
      "releaseDate": "2017-04-23T18:25:43.511Z"
    },
    "p004": {
      "parent": "c001",
      "manufacturer": "Samsung",
      "title": "Samsung Galaxy S10",
      "price": 399,
      "releaseDate": "2017-04-23T18:25:43.511Z"
    },
    "p005": {
      "parent": "c003",
      "manufacturer": "Apple",
      "title": "Apple Charger 12W",
      "price": 99,
      "releaseDate": "2016-12-23T18:25:43.511Z"
    },
    "p006": {
      "parent": "c003",
      "manufacturer": "Samsung",
      "title": "Samsung Charger 12W",
      "price": 89,
      "releaseDate": "2017-04-23T18:25:43.511Z"
    }
  }
};



// +++++++++ API Request +++++++++ //
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

    $.each(info.items, function(key, value) {
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


