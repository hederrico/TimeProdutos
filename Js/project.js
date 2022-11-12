var navCards = document.getElementsByClassName('navbar-cards')[0];
var cardsContainer = document.getElementsByClassName('project-cards')[0];
var navGraph = document.getElementsByClassName('navbar-graph')[0];
var graphContainer = document.getElementsByClassName('project-graph')[0];
var navHelp = document.getElementsByClassName('navbar-help')[0];

var helpContainer = document.getElementsByClassName('project-help')[0];

var rotateAllCards = document.getElementsByClassName('rotate-all-cards')[0];

navCards.onclick = function() {
    cardsContainer.setAttribute('data-state',  1);
    graphContainer.setAttribute('data-state',  0);
    helpContainer.setAttribute('data-state',  0);

    navCards.setAttribute('active-tab',  'true');
    navGraph.setAttribute('active-tab',  'false');
    navHelp.setAttribute('active-tab',  'false');

    rotateAllCards.style.display = 'block';

    animateAllCards();
}

navGraph.onclick = function() {
    graphContainer.setAttribute('data-state',  1);
    cardsContainer.setAttribute('data-state',  0);
    helpContainer.setAttribute('data-state',  0);

    navGraph.setAttribute('active-tab',  'true');
    navCards.setAttribute('active-tab',  'false');
    navHelp.setAttribute('active-tab',  'false');

    rotateAllCards.style.display = 'none';
    resize();
}

navHelp.onclick = function() {
    helpContainer.setAttribute('data-state',  1);
    cardsContainer.setAttribute('data-state',  0);
    graphContainer.setAttribute('data-state',  0);

    navHelp.setAttribute('active-tab',  'true');
    navCards.setAttribute('active-tab',  'false');
    navGraph.setAttribute('active-tab',  'false');
}


var rotateAllCardsFnc = function() {
    var allCards = document.getElementsByClassName('all-cards');

    for (let i = 0; i < allCards.length; i++) {
        var card = allCards[i];
        
        if (card.getAttribute('data-side') == 'front') {
            card.setAttribute('data-side', 'back');
        } else {
            card.setAttribute('data-side', 'front');
        }
    }
}

var animateAllCards = function() {
    var allCards = document.querySelectorAll('div.all-cards');

    var i = 1;
    for (var card of allCards) {
        card.classList.add('pop')

        card.style["animation-delay"] = i*0.03 + 's';
        i++;
    }
}

animateAllCards();
rotateAllCards.onclick = rotateAllCardsFnc;
