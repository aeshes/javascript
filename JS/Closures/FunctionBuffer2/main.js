function makeBuffer()
{
    var items = [];

    function buffer(value) {
        if (arguments.length == 0) return items;
        items.push(value);
    };

    buffer.clear = function() {
        items.length = 0;
    }

    return buffer;
}

var buffer = makeBuffer();
buffer("closures");
buffer("must");
buffer("use");

console.log( buffer() );

buffer.clear();

console.log( buffer() );