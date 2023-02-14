var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

let thorX = initialTx ,thorY = initialTy

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    let directionX = '',directionY = ''

    if (thorX > lightX) {
        directionX = "W"
        thorX --
    } else if (thorX < lightX) {
        directionX = "E"
        thorX++
    }

    if (thorY > lightY) {
        directionY = "N"
        thorY --
    } else if (thorY < lightY){
        directionY = "S"
        thorY ++
    }    

    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(directionY + directionX)
}