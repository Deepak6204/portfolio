function hidelanding() {
  $(".center").slideUp();
  $("body").css("overflow-y", "scroll");
}

$(document).ready(function () {
  var wordsArray = [" ", "Web Developer", "Competetive Coder"];
  var $textElement = $(".type");
  var typingSpeed = 100; // Adjust typing speed in milliseconds
  var deleteSpeed = 50; // Adjust delete speed in milliseconds

  function typeAndDelete(index, word) {
    if (index < word.length) {
      $textElement.append(word.charAt(index));
      index++;
      setTimeout(function () {
        typeAndDelete(index, word);
      }, typingSpeed);
    } else {
      setTimeout(function () {
        deleteWord(word);
      }, 1000); // Time before deleting the word
    }
  }

  function deleteWord(word) {
    var wordLength = word.length;
    if (wordLength > 0) {
      word = word.slice(0, -1);
      $textElement.text(word);
      setTimeout(function () {
        deleteWord(word);
      }, deleteSpeed);
    } else {
      var nextWord = wordsArray.shift();
      if (nextWord) {
        wordsArray.push(nextWord); // Add the word back to the end of the array
        setTimeout(function () {
          typeAndDelete(0, nextWord);
        }, typingSpeed);
      }
    }
  }

  function startTypewriter() {
    var firstWord = wordsArray.shift();
    if (firstWord) {
      typeAndDelete(0, firstWord);
    }
  }

  startTypewriter();
});

// custom-carousel.js
$(document).ready(function () {
  var carouselInner = $(".carousel-inner");
  var imageCount = carouselInner.children().length;
  var currentIndex = 0;
  var slideWidth = 100 / imageCount;
  var interval = 3000;

  // Set initial position of carousel-inner
  carouselInner.css("width", imageCount * 100 + "%");

  // Click event for previous arrow
  $(".carousel-prev").click(function () {
    currentIndex = currentIndex === 0 ? imageCount - 1 : currentIndex - 1;
    carouselInner.css(
      "transform",
      "translateX(-" + slideWidth * currentIndex + "%)"
    );
  });

  // Click event for next arrow
  $(".carousel-next").click(function () {
    currentIndex = currentIndex === imageCount - 1 ? 0 : currentIndex + 1;
    carouselInner.css(
      "transform",
      "translateX(-" + slideWidth * currentIndex + "%)"
    );
  });

  setInterval(() => {
    currentIndex = currentIndex === imageCount - 1 ? 0 : currentIndex + 1;
    carouselInner.css(
      "transform",
      "translateX(-" + slideWidth * currentIndex + "%)"
    );
  }, interval);
});

$(document).ready(function () {
  var homeSection = $("#home");

  if (homeSection.length > 0) {
    var offsetTop = homeSection.offset().top;
    $("html, body").animate({ scrollTop: offsetTop }, 1); // 1000ms = 1 second
  }

  // $('.about').mouseenter(function(){
  // })
  // $('.about').mouseleave(function(){
  // })

  //checking for the about element in the viewport
  $(window).on("scroll", function () {
    var home = $("#about");
    var box = home[0].getBoundingClientRect();
    if (box.top <= $(window).height() / 2.4) {
      $(".skills").css({
        position: "relative",
        left: "6%",
        marginLeft: "2%",
        animation: "zoomin 0.6s ease",
        opacity: '1'
      });
    }
  });

  function slidein(self) {
    var box2 = self[0].getBoundingClientRect();
    if (box2.top <= $(window).height() / 2) {
      self.css({opacity: '1', animation: "slidein 0.8s ease-in-out" });
    }
  }

  $(window).on("scroll", function () {
    slidein($("input"));
    slidein($("textarea"));
    slidein($(".title"));
    slidein($(".top h1"));
    slidein($(".hr"));
  });
  


});

function updateskill(ele){
  $('.skill').html($(ele).html());
  $('.active-button').removeClass('active-button')
  $(".but").click(function(){
    $(this).addClass('active-button')
  });
}


function addhtml(){
  $('.skill').html($('.cpp').html());
}