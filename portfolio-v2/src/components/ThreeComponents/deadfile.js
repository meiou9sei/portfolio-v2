/*

REWRITE THIS ALL TOMORROW WITH FRESH BRAIN. WRITE OUT PSEUDO CODE FIRST (draw it out ig)
THEN RECODE BASED ON THIS HERE OLD CODE.

I think you need it to be timerMax 30, and make chances be like
- if already walking, has a high chance of continuing to walk, no new direction please
- if tpose, newAnimationPlease
- if headdown was last, goes into eating animation mode
- if eating animation mode, has a high chance of continuing to eat, but if newanimation, does headup first
- if headup, just normal newAnimationPlease request

SHEEPMOVEMENT
- Don't interrupt other animation, just have an if clause for spawning alone and let others be a switch ase. 
spawning just occurs ON TOP of w/e other animation 
- make timerMax 30 instead of 500, follow tree of that

- figure out why spawning animation works?> try replicate on other animations?
*/

function sheepRandomAnimations() {
        //plays spawn animation ON TOP of w/e animation currently playing
        if (newSpawn) {
            //whichAnimation = "SpawnAnimation";
            newSpawn = false;
            actions.Spawning.reset();
            actions.Spawning.setLoop(THREE.LoopOnce).play();
            //timer = 0;
        }
        
        console.log(newAnimationPlease + "is here ")
        //selects new Animation every timerMax frames (which sets newAnimationPlease to true)
        if (newAnimationPlease) {
            console.log('entered');
            //3 options: 
            let nextMove = Math.random();
            newMovementPlease = false;
            //1) stand still
            if (nextMove < 0.333) {
                whichAnimation = "TPose";
            } else if (nextMove < 0.666) {
                whichAnimation = "Eating";
            } else {
                newMovementPlease = true;
                whichAnimation = "Moving";
            }

        }

        console.log(whichAnimation);
        
        switch (whichAnimation) {
            case "TPose":
                actions.zzzaTPose.reset();
                actions.zzzaTPose.setLoop(THREE.LoopOnce).play();
                break;
            case "Eating": 
                actions.HeadDown.reset();
                actions.HeadDown.setLoop(THREE.LoopOnce).play();
                break;
            case "Walking": 
                actions.Walking.reset();
                actions.Walking.setLoop(THREE.LoopOnce).play();
                break;
        }
    }



/********************************************************************************************/

function resetAllSheepAnimations() {
    actions.zzzaTPose.reset();
    actions.Eating.reset();
    actions.Walking.reset();
    actions.HeadDown.reset();
    actions.HeadUp.reset();
    actions.Spawning.reset();
    actions.Spawning2.reset();
}

//animation trigger and moving sheep
function sheepSpawn() {
    //play spawning animation every time state refreshes
    actions.Spawning2.reset();
    actions.Spawning2.setLoop(THREE.LoopOnce).play();
}

function sheepRandomAnimations() {
    //for loop random animations forever - if doing an animation, continue it most of the time vvv
    if ( whichAnimation === null || (newAnimationPlease && ( (Math.random() < LOWCHANCE) || whichAnimation === "EatingEnd")) ) {

        let nextAnimation = Math.random();
        resetAllSheepAnimations();

        //if eatingstart, next will be eating mid
        if (whichAnimation === "EatingStart" && newAnimationPlease) {
            resetAllSheepAnimations();
            whichAnimation = "EatingMid"
        } else if (whichAnimation === "EatingMid") {
            if (nextAnimation < LOWCHANCE) {
                actions.Eating.reset();
                whichAnimation = "EatingEnd";
            } 
        } else if (nextAnimation < 0.333) { //3 options if need new animation 
            //1) stand still
            newMovementPlease = false;
            whichAnimation = "TPose";
        } else if (nextAnimation < 0.666) {
            //2) start eating
            newMovementPlease = false;
            whichAnimation = "EatingStart";
        } else {
            //3) walk
            whichAnimation = "Walking";
            newMovementPlease = true;
        }

    }

    console.log(whichAnimation);

    switch (whichAnimation) {
        case "TPose":
            resetAllSheepAnimations();
            actions.zzzaTPose.play();
            break;
        case "EatingStart": 
            actions.Walking.reset();
            actions.HeadDown.setLoop(THREE.LoopOnce).play();
            break;
        case "EatingMid": 
            actions.Eating.play();
            break;
        case "EatingEnd":        
            actions.HeadUp.setLoop(THREE.LoopOnce).play();
            break;
        case "Walking": 
            actions.Eating.reset();
            actions.Walking.play();
            break;
    }
}

function sheepRandomMovements() {
    timerTicker();

    if(whichAnimation === "Walking") {
        //newMovementPlease, whichAnimation are set in sheepRandomAnimations()
        if (newMovementPlease) {
            newYangle = getRandomNum(0, TAU);
            ref.current.rotation.y = newYangle;
            newXposition = Math.cos(newYangle);
            newZposition = Math.sin(newYangle);
            //above calculated w/ https://gamedev.stackexchange.com/questions/192379/move-2d-rotating-object-in-its-facing-direction
        }

        //calculates direction to move towards and executes, so sheep walks towards where it's rotated
        ref.current.position.x += newXposition/100;
        ref.current.position.z -= newZposition/100;
    }
}

function sheepRandomMovements() {
    timerTicker();

    if(whichAnimation === "Walking") {
        //newMovementPlease, whichAnimation are set in sheepRandomAnimations()
        if (newMovementPlease) {
            newYangle = getRandomNum(0, TAU);
            ref.current.rotation.y = newYangle;
            newXposition = Math.cos(newYangle);
            newZposition = Math.sin(newYangle);
            //above calculated w/ https://gamedev.stackexchange.com/questions/192379/move-2d-rotating-object-in-its-facing-direction
        }

        //calculates direction to move towards and executes, so sheep walks towards where it's rotated
        ref.current.position.x += newXposition/100;
        ref.current.position.z -= newZposition/100;
    }
}


useEffect(() => {
    sheepSpawn();
})
