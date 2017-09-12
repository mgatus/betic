// Menu update
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


//  Loop cards
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
      }

      $.each(info.items, function(key, value){
        //console.log(key, value);
        //console.log(key);
        //console.log(value.title);
        var phoneCategory = $('#items');

        if(value.parent === "c000" ) {
          phoneCategory.append("<div id="+ key +"><h2>"+ value.title +"</h2></div>");
        }

        $.each(value, function(k, v){
          var items = $('#items .card');
          // console.log(k,v)
          console.log(v)
          if(v ==="c001") {
            items.append("<div>"+value.title+"</div>");
          } else if(v === "c002") {
            items.append("<div>"+value.title+"</div>");
          } else if (v === "c003") {
            items.append("<div>"+value.title+"</div>");
          }


          // var items = $('.card');
          // if(v.parent === "c001" ) {
          //   items.append("<h2>"+v.manufacturer+"</h2>");
          // }
        });

      });

      JSON.stringify(info);
