var λ = require('../trampoline');

function count(x, n) {
    if(n >= x) return λ.done(n);
    return λ.cont(function() {
        return count(x, n + 1);
    });
}

exports.trampoline = {
    'Trampoline test': function(test) {
        var n = 10000;
        test.equal(λ.trampoline(count(n, 0)), n);
        test.done();
    }
};
