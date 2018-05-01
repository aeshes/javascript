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

printListLoop(list);