function addHideHandler(sourceId, targetId) {
    var sourceNode = document.getElementById(sourceId);
    var toggle = 0;
    var handler = function() {
        var targetNode = document.getElementById(targetId);
        toggle ^= 1;
        targetNode.style.display = toggle ? "block" : "none";
    }
    sourceNode.onclick = handler;
}

function addHandlers() {
    addHideHandler("toggle-one", "one");
    addHideHandler("toggle-two", "two");
}