document.addEventListener("DOMContentLoaded", ()=>{
    let title = document.getElementById('title-radius');
    if(title){
        new CircleType(title);
    }
    // const player = new Plyr('#player1');
    // const player = new Plyr('#player2');
    // const player = new Plyr('#player3');

});

(function($){
    $(document).ready(function(){
        $('.btn-play').on('click',function(){
        var popup = $(this).data('playerpopup');
        $('#'+popup).css('display','block');
           
        })
        $('.inst-player-popup-close').on('click',function(){
            $(this).parent('.inst-player-popup').hide();
        })
    })

})(jQuery);