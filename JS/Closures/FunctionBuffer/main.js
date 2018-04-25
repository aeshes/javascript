function makeBuffer()
{
    var items = [];

    return function(value) {
        if (arguments.length == 0) return items;
        items.push(value);
    };
}

var buffer = makeBuffer();
buffer("closures");
buffer("must");
buffer("use");

console.log( buffer() );