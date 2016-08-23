$(function(){
  // console.log("I am working!");

  var albumOne = [
    {
      title: "1",
      src: "images/Choke.jpg"
    },
    {
      title: "2",
      src: "images/mmpr.jpg"
    },
    {
      title: "3",
      src: "images/brucelee.jpg"
    }
  ]

  var $photoList = $("[data-js='photo__list']");
  var $modalBjj = $("[data-js='modal__choke']");
  var $modalMMPR = $("[data-js='modal__mmpr']");
  var $modalBruceLee = $("[data-js='modal__brucelee']");
  var $backButton = $("[data-js='back__button']");

  albumOne.forEach(function(image){
     var imageContainer = $(`<li class= 'image__container'>${image.title}</li>`);

     var newImage = $("<img class='image'>").attr("src",image.src);

     imageContainer.append(newImage);

     $photoList.append(imageContainer);
  });

  $photoList.on("click", "li:first-child", function(){
    $modalBjj.show("modal__hide--choke")
  })

  $photoList.on("click", "li:nth-child(2)", function(){
    $modalMMPR.show("modal__hide--mmpr")
  })

  $photoList.on("click", "li:nth-child(3)", function(){
    $modalBruceLee.show("modal__hide--brucelee")
  })

  $backButton.on("click", function(){
    $modalBjj.hide("modal__hide--choke")
  })

  $backButton.on("click", function(){
    $modalMMPR.hide("modal__hide--mmpr")
  })

  $backButton.on("click", function(){
    $modalBruceLee.hide("modal__hide--brucelee")
  })

});
