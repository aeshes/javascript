var list = { value:1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

function printListLoop(xs) {
    for (let iter = xs; iter ; iter = iter.next) {
        console.log(xs.value);
        xs = xs.next;
    }
}

function printListRecursive(xs) {
    if (!xs) return;
    console.log(xs.value);
    printListRecursive(xs.next);
}

function printReverseRecursive(xs) {
    if (xs) {
        printReverseRecursive(xs.next);
        console.log(xs.value);
    }
}

function printReverseIterative(xs) {
    let elems = [];
    for (let iter = xs; iter ; iter = iter.next) {
        elems.push(iter.value);
    }

    for (let i = elems.length - 1; i >= 0; --i) {
        console.log(elems[i]);
    }
}

printListLoop(list);
printListRecursive(list);
printReverseRecursive(list);
printReverseIterative(list);