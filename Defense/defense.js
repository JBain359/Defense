$(document).ready(function(){
$('#instruct').animate({marginLeft: "+=400px"},500)
var playGame = function (){
    $('#playArea').fadeIn('slow')
    
    //Victory and Death
    var victory = function(){
    $('#victory').fadeIn('slow') 
    $('#victory').animate({marginTop: "+=1000px"},1000)
    }
    
    var loss =function(){
    $('#loss').fadeIn('slow') 
    $('#loss').animate({marginTop: "+=1000px"},1000)
    }
     //Hit Detection

        var hitDetect = function(){
            setTimeout(function(){
    if((0<= document.getElementById('comp').offsetLeft-document.getElementById('player').offsetLeft && document.getElementById('comp').offsetLeft-document.getElementById('player').offsetLeft<= 40) || (0<= document.getElementById('player').offsetLeft-document.getElementById('comp').offsetLeft && document.getElementById('player').offsetLeft-document.getElementById('comp').offsetLeft<=30)){
            console.log("hit!")
            $('#compHealth').animate({width: "-=5"},100)
             if(document.getElementById('compHealth').style.width  === '0px' ){
            $('#playArea').fadeOut('slow');
            $('#comp').fadeOut('slow');
            $('#comp').remove();
            $('#compHealth').remove();
            victory();
            }
    }
            },450);

            setTimeout(function(){
    if((0<= document.getElementById('comp').offsetLeft-document.getElementById('player').offsetLeft && document.getElementById('comp').offsetLeft-document.getElementById('player').offsetLeft<= 40) || (0<= document.getElementById('player').offsetLeft-document.getElementById('comp').offsetLeft && document.getElementById('player').offsetLeft-document.getElementById('comp').offsetLeft<=30)){
            console.log("hit!")
            $('#compHealth').animate({width: "-=5"},100)
                if(document.getElementById('compHealth').style.width  === '0px' ){
            $('#playArea').fadeOut('slow');
            $('#comp').fadeOut('slow');
            $('#comp').remove();
            $('#compHealth').remove();
            victory();
            }
    }
            },500);
        }    

            var compHitDetect = function(){
            setTimeout(function(){
    if((0<= document.getElementById('comp').offsetLeft-document.getElementById('player').offsetLeft && document.getElementById('comp').offsetLeft-document.getElementById('player').offsetLeft<= 50) || (0<= document.getElementById('player').offsetLeft-document.getElementById('comp').offsetLeft && document.getElementById('player').offsetLeft-document.getElementById('comp').offsetLeft<=45)){
            console.log("hit!")
            $('#playerHealth').animate({width: "-=10"},10)
             if(document.getElementById('playerHealth').style.width  === '0px' ){
            $('#playArea').fadeOut('slow');
            $('#player').fadeOut('slow');
            $('#player').remove();
            $('#playerHealth').remove()
            loss()
            }
    }
            },450);
        } 

        // The Computer
        var computer = new Object()
        computer.x = 0;
        computer.y = 0;

    //COMP CONTROLS
        var living = 1

        var compShoot = function(){
            $('#compShot').after('<div id="compInMo"></div>');
            $('#compInMo').animate({top: "+=10000px"},3000)
            setTimeout(function(){
               setInterval(function(){
                   $('#compInMo:nth-child(17)').remove()
               },1000) 
            },1000)   
            compHitDetect()
        }
        var shots
        while(living<=2000){
            var direction = Math.random();
            console.log(direction)
            if (direction<=.5){
                direction = "right"
            } else{
                direction = "left"
            };

            switch(direction) {

                    case "left":
                        $('#comp').animate({left: "-=500px"}, 750)
                        computer.x -=500;
                        if(computer.x<0){
                       $('#comp').animate({left: "+=500px"}, 750);
                        computer.x += 500;
                        }
                        break;
                   case "right":
                       $('#comp').animate({left: "+=500px"}, 750);
                       computer.x +=500;
                        if(computer.x>=1000){
                        $('#comp').animate({left: "-=500px"}, 750)
                        computer.x -=500;;
                        }
                      break;



            };
            living = living+1
                //boundaries


        }
                       setInterval(function(){compShoot()},500)
                       setInterval(function(){compShoot()},500)                





        //shooting function
        var shoot = function(){
            $('#shot').after('<div id="inMo"></div>');
            $('#inMo').animate({top: "-=10000px"},3000)
            setTimeout(function(){
               setInterval(function(){
                   $('#inMo:nth-child(17)').remove()
               },1000) 
            },1000)   
            hitDetect()
        }


        //PLAYER CONTROLS
        //player input tracker
        var input = new Array();
        input=[1,1]

        //input options
        $(document).keydown(function(key) {
            switch(parseInt(key.which,10)) {
                // Left arrow key pressed
                case 65:
                    $('#player').animate({left: "-=3000px"}, 2000);
                    input[1]=65 
                    break;
                // Right Arrow Pressed
                case 68:
                    $('#player').animate({left: "+=3000px"}, 2000);
                    input[1]=68
                    break;
                case 87:
                    input[0]=87
                    break;

            }
                
                 if(input[0]===87){
                    shoot()

                 }
            console.log(input)
        });

        //ending the input
        $(document).keyup(function(key){
            switch(parseInt(key.which,10)) {
                case 65:
                    $('#player').stop(true,false)
                    $('#shot').stop(true,false)
                    input[1]=1
                    break;
                case 68:
                    $('#player').stop(true,false)
                    $('#shot').stop(true,false)
                    input[1]=1
                    break;
                case 87:
                    $('#shot').stop(true,false)
                    input[0]=1
                    break;
            }
         });   





}
        $('#play').click(function(){
            $('#instruct').remove();
            playGame()
        })
        
        $('.playAgain').click(function(){
            location.reload()
        })
    })