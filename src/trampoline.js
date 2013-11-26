var getInstance = require('fantasy-helpers').getInstance;

function done(result) {
    var self = getInstance(this, done);
    self.isDone = true;
    self.result = result;
    return self;
}

function cont(thunk) {
    var self = getInstance(this, cont);
    self.isDone = false;
    self.thunk = thunk;
    return self;
}

function trampoline(bounce) {
    while(!bounce.isDone) {
        bounce = bounce.thunk();
    }
    return bounce.result;
}

// Export
if(typeof module != 'undefined')
    module.exports = {
        done: done,
        cont: cont,
        trampoline: trampoline
    };