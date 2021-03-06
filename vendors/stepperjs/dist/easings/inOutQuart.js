"use strict";

function inOutQuart(n) {
    n = n * 2;

    if (n < 1) {
        return 0.5 * n * n * n * n;
    }

    return -0.5 * ((n -= 2) * n * n * n - 2);
}

module.exports = inOutQuart;