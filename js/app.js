/*
  Please add all Javascript code to this file.
*/


$(function() {
  // DOM is now ready
  var secretKey = config.SDK_KEY;
  var key = config.api_key;

  //call api
  $.get("https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=" + secretKey + "", function(response){
    console.log('data', response.articles)
    console.log('this.author', this.author)
    // var theSource = $('<li>').attr('href', response.source);
    // $("ul").append(theSource);
    $('#sourceList').append($('<li>', {}).append($('<a>', { href: '#'}).text(response.source)));
    // $('img').attr('src', image);
    var articles = response.articles;
    if (articles === 0){
      console.log('no articles found');
    } else {
      console.log('inhere')
      handleResponseSuccess(response);
    }
    $(".articleContent h3").on('click',function(e){
      e.preventDefault();
      showPopUp($(this));
    });
  })
    
  //success
  function handleResponseSuccess(response) {
  var allData = response.articles;
  console.log('allData', allData)
  $.each(allData, function() {
    var article = $("a").attr('href', this.url);
    $('img').attr('src', this.urlToImage)
    $("h3").html(this.title);
    $('h6').html(this.author);
    // $("ul").append("<li>"+allData.description+"</li>")
    $('.articleContent').append(this.article)

  });
  // $('#main').append(article);
  }

  function showPopUp(){
    $('#popUp h1').html(this.title);
    $('#popUp p').html(this.description)
    $("a").attr('href', this.url);
    $('#popUp').removeClass('loader hidden')
  }
})

