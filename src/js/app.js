(function(){

    if(document.querySelector(".splide")){
        const slider = new Splide( '.splide', {
            type       : 'loop',
            height     : '9rem',
            perPage    : 1,
            breakpoints: {
              640: {
                height: '6rem',
              },
            },
          } );
        slider.mount();
    }

})();