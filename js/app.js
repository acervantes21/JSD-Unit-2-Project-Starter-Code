/*
  Please add all Javascript code to this file.
*/


$(function() {
  // DOM is now ready
  var secretKey = config.SDK_KEY;
  var key = config.api_key;
  // var url = "https://accesscontrolalloworiginall.herokuapp.com/https://api.npr.org/query?id=1149";
  console.log('secretKey', secretKey)

    //call api
  $.get("https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=" + secretKey + "", function(response){
    console.log('data', response.articles)
    console.log('this.author', this.author)
    
    $("ul").append("<li>"+ response.source+"</li>")
    // $('img').attr('src', image);
    var images = response.articles;
    if (images === 0){
      console.log('no images found');
    } else {
      console.log('inhere')
      handleResponseSuccess(response);
    }
    // response.articles.forEach(function(result){
    // var author = result.author;
    // var link = result.url;
    // console.log('author', author)
    // $("h3").html(author)
    // $('a').attr('href', link);
    // })
  })
    
    // $.each(allData, function() {
    //   console.log('this.url', this.url)
    //   console.log('this.url', this.title)
      
    //   // $('img').attr('src', this.url); 
    // });
  
  function handleResponseSuccess(response) {
  var allData = response.articles;
  console.log('allData', allData)
  
  $.each(allData, function() {
    console.log('this.author', this.author)
    var articleUrl = $('a').attr('href', this.url);
    $(".articleContent a").append(articleUrl);
    // $('img').attr('src', this.urlToImage);
    $(".articleContent h3").append(this.title);
    $('h6').html(this.author);
    // $('h1').html(this.title);
    // $('p').html(this.description);
    // $("ul").append("<li>"+allData.description+"</li>")
    var element = $('<img>').attr('src', this.urlToImage);
    $(".featuredImage").append(element);
    // $("ul").append("<li>"+allData.description+"</li>")
  });
  }
})

