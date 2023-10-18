const customCheckbox = document.getElementById("checkbox");

customCheckbox.addEventListener("click", function() {
    this.classList.toggle("checked");
});

document.addEventListener("DOMContentLoaded", function () {
    const tree = document.getElementById("tree");

    const treeItems = tree.querySelectorAll("li");
    treeItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.stopPropagation(); 
            toggleNode(item);
        });
    });

    function toggleNode(node) {
        const childList = node.querySelector("ul");
        if (childList) {
            childList.classList.toggle("collapsed");
        }
    }
});