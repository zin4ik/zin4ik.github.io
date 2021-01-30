document.addEventListener("DOMContentLoaded", ()=>{
    let title = document.getElementById('title-radius');
    if(title){
        new CircleType(title);
    }

});

(function($){
    $(document).ready(function(){

        $('.circle-text').css('opacity','1');
        var player = new Plyr('#player');
        var player2 = new Plyr('#player2');
        var player3 = new Plyr('#player3');
         



        $('.btn-play').on('click',function(){
            var popup = $(this).data('playerpopup');
            $('#'+popup).css('display','block');
            var id = $('#'+popup).find('video').attr('id');
            if( id == 'player'){
                player.play();
            }else if(id == 'player2'){
                player2.play();
            }
            else if(id == 'player3'){
                player3.play();
            }

        })
        $('.inst-player-popup-close').on('click',function(){
            var idpLayer = $(this).parent().find('video').attr('id');
            if( idpLayer  == 'player'){
                player.stop();
            }else if(idpLayer == 'player2'){
                player2.stop();
            }
            else if(idpLayer == 'player3'){
                player3.stop();
            }
            $(this).parent('.inst-player-popup').hide();
        })
    })

})(jQuery);