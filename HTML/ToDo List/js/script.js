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
    item = addCloseButton(item);

    return item;
}

function addCloseButton(listItem)
{
    var span = document.createElement("span");
    var node = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(node);
    listItem.appendChild(span);

    return listItem;
}