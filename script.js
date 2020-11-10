var x= $.noConflict();
 count=0;
        

       
        x(document).click ( 'keyUp',(e)=>{
            
                if(!x('.dino').hasClass('js')){
                    x('.dino').addClass('js')
                }
                setTimeout( ()=>{
                    x('.dino').removeClass('js');
                },500);
                count++;
                x('#score').text(count);
           
      }); 

    var gameOver =   setInterval ( ()=> {
          var head = parseInt( x('.dino').css('top'));
          var side = parseInt(x('.obs').css('left'));
    if(  side<50 && side>0 && head>=275) {
                alert('Game Over!! Final Score : '+ count +'');
                count=0;
                 }
    
        },10);
