function runFiveMiles() {
    console.log("Go for a five-mile run");
  } 

function liftWeights() {
    console.log("Pump iron");
  }
  
function swimFortyLaps() {
    console.log("Swim 40 laps");
  } 

function exerciseRoutine(postRunActivity) { //pass a function (reference) to exerciseRoutine as the argument
    runFiveMiles(); //execute the runFiveMiles function
    postRunActivity(); //execute whatever function was passed in as an argument
  } 

function Monday() {
    exerciseRoutine(liftWeights); //executes runFiveMiles and then liftWeights
  }

function Tuesday() {
    exerciseRoutine(swimFortyLaps);
}

Monday();
Tuesday();

// Defining a function called Wednesday. Wednesday runs exerciseRoutine, which is currently
// taking an inline function as its argument. The inline function is only going to be
// used one time, so it doesn't need to be named. 
// Wednesday is created using the function keyword. The inline function can be created using
// the anonymous function syntax, but it can be shortened using arrow function syntax. 
function Wednesday() {
    exerciseRoutine(() => console.log('Stretch! Work that core!'));
}

Wednesday();

// morningRoutine takes in a function as an argument, which specifies the type of exercise using exerciseRoutine().
// Then, it uses the value of exercise to determine the value of breakfast.
// It calls exerciseRoutine(exercise) to print out the daily exercise routine.
// Then, it returns a function which creates a message specifying the type of breakfast.

function morningRoutine(exercise) {
    let breakfast;

    if (exercise === liftWeights) {
        breakfast = 'protein bar';
    } else if (exercise === swimFortyLaps) {
        breakfast = 'kale smoothie';
    } else {
        breakfast = 'granola';
    }

    exerciseRoutine(exercise);

    return function () {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    };
}

// The return value of morningRoutine(exercise) is going to be a function.
// A variable called afterExercise is created to hold the function returned from executing morningRoutine(exercise)
// So afterExercise is a variable that 'points to' a function.

const afterExercise = morningRoutine(liftWeights);

// You can use afterExercise to execute the function at any time. 
// If you had just run morningRoutine(exercise), you wouldn't be storing the return function anywhere,
// and you would have to keep running the function every time in order to get to the function it returns. 

afterExercise();

// Assignment starts here

// Part 1

function argumentFunction() {
    console.log('I\'m the argument.');
}

function receivesAFunction(aFunction) {
    console.log('Function received.');
    aFunction();
}

receivesAFunction(argumentFunction);

// Part 2

function returnsANamedFunction() {
    const namedFunction = function() {
        console.log('I\'m a named function.');
    }

    return namedFunction;
}

const gettingANamedFunction = returnsANamedFunction();

gettingANamedFunction;
gettingANamedFunction();

// Part 3

function returnsAnAnonymousFunction() {
    return (() => console.log('I\'m an anonymous function.'));
}

const gettingAnAnonymousFunction = returnsAnAnonymousFunction();

gettingAnAnonymousFunction;
gettingAnAnonymousFunction();