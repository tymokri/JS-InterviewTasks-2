'use strict';

( () => {

    const fib = (n = 1) => {
        let a = 1;
        let b = 1;

        for (let i = 3; i <= n ; i++) {
            let c = a + b;
            a = b;
            b = c;
        }

        return b;
    };

    fib(4);
    fib(8);

})();