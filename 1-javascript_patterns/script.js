

// All the code is in a module instead of being defined globally
(function () {

    // Passing a function as a parameter
    // Functions as abstractions example

    var work = function () {
        console.log("working");
    };

    var doWork = function (func) {
        func();
    };

    doWork(work);


    // Public and private methods
    // Modules & encapsulation example
    // Also called revealing module pattern as it only shows the methods that wants to be public

    var createWorker = function () {

        var printName = function () {
            console.log('Name: ' + this.name);
        }

        var printNamePrivate = function () {
            console.log('Name: ' + this.name);
        }

        return {
            name: 'Rafael',
            printName: printName
        }
    };

    var worker = createWorker();
    console.log('name: ' + worker.name);
    worker.printName();

    // This should throw an exception as it is not defined globally
    try {
        worker.printNamePrivate();
    } catch (ex) {
        console.log('error, message: ' + ex)
    }

}());
