/*
  Please add all Javascript code to this file.
*/


$(function() {
  // DOM is now ready
  var secretKey = config.SDK_KEY;
  var key = config.api_key;
  var url = "https://accesscontrolalloworiginall.herokuapp.com/https://api.npr.org/query?id=1149";
  console.log('secretKey', key)

  // $.get(url + "&numResults=3&requiredAssets=image&date=current&storyCountToday=3&output=JSON&apiKey=" + secretKey, function(response){
  //   console.log('data', response)
  //   response.item.forEach(function(result){
  //   addInfo = result.additionalInfo.id
  //   console.log('addInfo', result)
  //   $("h3").html(result.additionalInfo.$text)
  //   // $("ul").append("<li>"+ result.additionalInfo.$text+"</li>")
    
  //   })
  // })

  $.get("https://accesscontrolalloworiginall.herokuapp.com/http://api.eventful.com/json/events/search?keywords=books&location=San+Diego&app_key=" +key + "&id=20218701", function(response){
    console.log('data', response.venue_name)
    $("h3").html(response.venue_name)
    // $('img').attr('src', image);
    var eventsAvail = response.events.event;
    if (eventsAvail === 0){
      console.log('no images found');
    } else {
      handleResponseSuccess(response);
    }
    // response.links.link.forEach(function(result){
    // var link = result.url
    
    // console.log('addInfo', link)
    
    // $('a').attr('href', link);
    // $("ul").append("<li>"+ result.additionalInfo.$text+"</li>")
    
    // })
  })
    console.log('allData', allData)
    $.each(allData, function() {
      console.log('this.url', this.url)
      console.log('this.url', this.title)
      $("h3").html(this.title);
      $('a').attr('href', this.url);
      var element = $('<img>').attr('src', this.image_url).addClass('image');
      // $('img').attr('src', this.url); 
    });
  }
})

// // debugger
// $.get("https://accesscontrolalloworiginall.herokuapp.com/https://sugarscape.hearst.io/api/v1/articles?visibility=1&all_images=0&get_image_cuts=0&ignore_cache=0&limit=10&order_by=date+desc", function(results){
//   console.log(results);
//   results.data.feed.forEach(function(result){
//     console.log('result', result)
//     $("ul").append("<li>"+result.content.title+"</li>")
//   })
// })



function handleResponseSuccess(response) {
  var allData = response.subcategory;
  console.log('allData', allData)
  $.each(allData, function() {
    $("ul").append("<li>"+innerResult.title.$text+"</li>")
  });
}