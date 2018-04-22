function addRecord()
{
    var text = document.getElementById("record").value;
    if (text !== "")
    {
        var item = createListItem(text);

        document.getElementById("todo").appendChild(item);
        document.getElementById("record").value = "";
    }
}

function createListItem(text)
{
    var item = document.createElement("li");
    var node = document.createTextNode(text);
    item.appendChild(node);

    return item;
}