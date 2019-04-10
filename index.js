/* be sure that i use ES6 */


// on screen load call funtion that will store all sounds and pads(buttons) to play that sound in different variables
window.addEventListener('load',() =>{
    const sounds = document.querySelectorAll('.sound')
    const pad =  document.querySelectorAll('.pads div');
    const visual  = document.querySelector('.visual');
    // colors for bubbles to show up on tap
    const colors = [
                    '#60d394', 
                    '#3B748C',
                    '#8B80F9',
                    '#CFBFF7',
                    '#CFB1B7',
                    '#83858C'
                   ];


    // lets play sound on click
    // here index is value for each sound it will automatically updated
    pad.forEach((pad, index)=>{
        pad.addEventListener('click', function(){
            // lets add a code so dont need to wait to click and start again on each pad if u click on a pad onece it will sart and if u click on it again it will start again
            // to do that we need to reset the time of sound on click
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });

    // function to create colorful bubbles on tap

    const createBubbles = index => {
        //Create bubbles
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        // adding random colors from color array
        var x = Math.floor((Math.random() * 6) + 1);
        bubble.style.backgroundColor = colors[x];  // if u dont want random color just write index in the array index


        bubble.style.animation = `move 1s ease`;
        bubble.addEventListener("animationend", function() {
          visual.removeChild(this);
        });
      };
    });