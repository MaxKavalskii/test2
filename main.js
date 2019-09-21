function slide (){
    $('.slider').slick({
      autoplay: true,
      speed: 1500,
      dots: true,
    });
  };

  slide();

  function services(){
    var width = $(window).width();

    if ( width <= 819 && width>710){
      $('.services__description__inner').slick({
        slidesToShow: 2,
        // autoplay: true,
      });
    } if ( width <= 710 && width>=1){
      $('.services__description__inner').slick({
        
      });
    } else{
      $('.services__description__inner').slick({
        slidesToShow: 3,
        centerPadding: '5px',
        centerMode: true,
        // autoplay: true,
      });
    }
  }

  services();

  console.log($(window).width())

  function feedback(){
    $('.feedback__racomandation-text').slick({
      infinite: false,
      speed: 130,
    });
  };

  feedback();

function counter(){

  $(".feedback__racomandation-text > .slick-next").on("click", function(){
    var number = $(".counter__number").html();
    var end = $(".counter__end").html();
    
    if (number<end){
      number++;
      return $(".counter__number").replaceWith("<span class='counter__number'>"+number+"</span>")
      
    }
  
  });
  

  $(".feedback__racomandation-text > .slick-prev").on("click", function (){
    var number = $(".counter__number").html();

    if (number==1){
      return;
    }else{
      number--;
      return $(".counter__number").replaceWith("<span class='counter__number'>"+number+"</span>")
    }
  })
 
}

counter();


function mobileM(){
  $(".menu__links").toggle()
}




