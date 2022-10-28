var navCards = document.getElementsByClassName('navbar-cards')[0];
var cardsContainer = document.getElementsByClassName('project-cards')[0];
var navGraph = document.getElementsByClassName('navbar-graph')[0];
var graphContainer = document.getElementsByClassName('project-graph')[0];


navCards.onclick = function() {
    cardsContainer.setAttribute('data-state',  1);
    graphContainer.setAttribute('data-state',  0);
}

navGraph.onclick = function() {
    graphContainer.setAttribute('data-state',  1);
    cardsContainer.setAttribute('data-state',  0);
}