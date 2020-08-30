
const container = document.querySelector('#carosul1');
$(function(){
  $("#show").load("index.html")
  $.ajax({
      url:'https://raw.githubusercontent.com/rashaobaid/projectt1/master/categories.json',
      dataType: 'json',
      cache :false,
      success:function(data ,status){           
        var innerHtml = [];
        $.each(data,function(index){
          var item = data[index]
          var inner =  
                `<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">`+
                `<div class="item d-flex justify-content-between">`+
                `<img src="${item['image']}" alt="">`+
                `<div class="item-body">`+
                    `<p class="title">${item['title']}</p>`+
                    `<p class="discription">${item['description']}</p>`+
                `</div>`+
                `</div>`+
                `</div>`
          innerHtml.push(inner)
          console.log(inner)
        })
        $('.Categories .content ').html(innerHtml);
      },
      error:function(xhr,textStatus,err){
        console.log(xhr);
        console.log(textStatus);
        console.log(err);
      }
   
  });
  $.ajax({
    url:'https://raw.githubusercontent.com/rashaobaid/projectt1/master/nonfiction.json',
dataType: 'json',
cache :false,
success:function(data ,status){  
console.log(data);
var innerHtml = [];
$.each(data,function(index){
  var item = data[index]
  var inner = ` <div class=" col-lg-2 col-md-4 col-sm-6 col-12 ">`+
  `<div class="card1 ">`+
      `<div class="center"><img class="card1-img-top" src="${item['image']}"  alt="" ></div>`+
      `<div class="card1-body">`+
        `<p class="card1-title">${item['title']}</p>`+
        `<p class="card1-text">${item['author']}</p>`+
        `<p class="card1-text2">${item['reviewedBy']}</p>`+
      `</div>`+
    `</div>`+
 `</div>`
 
        innerHtml.push(inner);
      });

      (function(){
      $('#recipeCarousel').carousel({interval: 10000 })
        $('.carousel .carousel-item').each(function(){
            var minPerSlide = 6;
            var next = $(this).next();
            if (!next.length) {
            next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
            for (var i=0;i<minPerSlide;i++) {
                next=next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                  }
                
                next.children(':first-child').clone().appendTo($(this));
              }
        });
      });
      
      $('.carousel-item').html(innerHtml);
    },
    error:function(xhr,textStatus,err){
      console.log(xhr);
      console.log(textStatus);
      console.log(err);
    }
});
  
$.ajax({
  url:'https://raw.githubusercontent.com/rashaobaid/projectt1/master/fiction.json',
dataType: 'json',
cache :false,
success:function(data ,status){  
console.log(data);
var innerHtml = [];
indicator = '';
$.each(data,function(index){
var item = data[index]
var inner = ` <div class=" col-lg-2 col-md-4 col-sm-6 col-12 ">`+
`<div class="card1 ">`+
    `<div class="center"><img class="card1-img-top" src="${item['image']}"  alt="" ></div>`+
    `<div class="card1-body">`+
      `<p class="card1-title">${item['title']}</p>`+
      `<p class="card1-text">${item['author']}</p>`+
      `<p class="card1-text2">${item['reviewedBy']}</p>`+
    `</div>`+
  `</div>`+
`</div>`

      innerHtml.push(inner);
    });
    $('.carousel-item2').html(innerHtml);
  },
  error:function(xhr,textStatus,err){
    console.log(xhr);
    console.log(textStatus);
    console.log(err);
  }
});
$.ajax({
  url:'https://raw.githubusercontent.com/rashaobaid/projectt1/master/children.json',
dataType: 'json',
cache :false,
success:function(data ,status){  
console.log(data);
var innerHtml = [];
$.each(data,function(index){
var item = data[index]
var inner = ` <div class=" col-lg-2 col-md-4 col-sm-6 col-12 ">`+
`<div class="card1 ">`+
    `<div class="center"><img class="card1-img-top" src="${item['image']}"  alt="" ></div>`+
    `<div class="card1-body">`+
      `<p class="card1-title">${item['title']}</p>`+
      `<p class="card1-text">${item['author']}</p>`+
      `<p class="card1-text2">${item['reviewedBy']}</p>`+
    `</div>`+
  `</div>`+
`</div>`
      innerHtml.push(inner);
    });
    $('.carousel-item3').html(innerHtml);
  },
  error:function(xhr,textStatus,err){
    console.log(err);
  }
});
$.ajax({
  url:'https://raw.githubusercontent.com/rashaobaid/projectt1/master/self_improvement.json',
  dataType: 'json',
cache :false,
success:function(data ,status){  
console.log(data);
var innerHtml = [];
$.each(data,function(index){
var item = data[index]
var inner = ` <div class=" col-lg-2 col-md-4 col-sm-6 col-12 ">`+
`<div class="card1 ">`+
    `<div class="center"><img class="card1-img-top" src="${item['image']}"  alt="" ></div>`+
    `<div class="card1-body">`+
      `<p class="card1-title">${item['title']}</p>`+
      `<p class="card1-text">${item['author']}</p>`+
      `<p class="card1-text2">${item['reviewedBy']}</p>`+
    `</div>`+
  `</div>`+
`</div>`
      innerHtml.push(inner);
    });
    $('.carousel-item4').html(innerHtml);
  },
  error:function(xhr,textStatus,err){
    console.log(err);
  }
});


});


