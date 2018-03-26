/*

#1 Dependency Injection Pattern practice. (~ 1h)

In this exercise, you need to implement the inject method of Injector Class to get the correct output

NOTE: There is no need to touch anything else but implementing inject method, all others are fixed, you can

do whatever you want to let the program output the expected result.
*/
const deps = {
    foo: () = > {
    console.log('foo');
},
bar: () =
>
{
    console.log('bar');
}
}
;


class Injector {
    constructor(deps) {
        this._deps = deps;
    }

    inject(func) {
        //TODO: Please add your code here.
        const args = [];
        for (let dep in this._deps) {
            if (this._deps.hasOwnProperty(dep)) {
                args.push(this._deps[dep]);
            }
        }

        return func.bind(this,...args
    )
        ;
    }
}


const injector = new Injector(deps);

const dependant = injector.inject((foo, bar) = > {
    foo();
bar();
})
;


dependant();

/*
The result should output:

foo
bar
*/
