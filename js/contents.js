/**
 * A way to generate a contents pane for posts
 */

console.log("Script started");
let h1_list = document.getElementsByTagName("h2");
let content_div = document.getElementById("sidenav");
for (i = 0; i < h1_list.length; i++) {
    var sibling = h1_list[i].nextSibling;
    var link = document.createElement("a");
    var node = document.createTextNode(h1_list[i].textContent);
    link.href = "#" + h1_list[i].id
    link.appendChild(node);
    content_div.appendChild(link);
    // while ((sibling = sibling.nextSibling).tagName != "H1" ) {

    // }

}