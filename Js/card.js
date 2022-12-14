var closeIcons = document.getElementsByClassName('card__header__close-icon');
var rotateIcons = document.getElementsByClassName('card__header__turn-icon');
var moveIcon = document.getElementsByClassName('card__move-icon')[0];

var collabCard = document.getElementsByClassName('card')[0];
var uniqueCard = document.getElementsByClassName('uniqueCard')[0];
var uniqueTeamCard = document.getElementsByClassName('uniqueTeamCard')[0];

var email = document.getElementsByClassName('card__body__copy-icon')[0];
var copiedTextContainer = document.getElementsByClassName('copied-container')[0];

for (let i = 0; i < rotateIcons.length; i++) {
    var element = rotateIcons[i];
    
    element.onclick = function() {
        if (this.getAttribute('data-type') == 'collab') {
            collabCard.setAttribute('data-side', this.getAttribute('data-side'));
        } else {
            uniqueTeamCard.setAttribute('data-side', this.getAttribute('data-side'));
        }
    }
}

for (let i = 0; i < closeIcons.length; i++) {
    var element = closeIcons[i];
    
    element.onclick = function() {
        if (this.getAttribute('data-type') == 'collab') {
            collabCard.classList.remove("shown-card");
        } else {
            uniqueTeamCard.classList.remove("shown-card");
        }
    }
}

email.onclick = function() {
    copyEmail(this.getAttribute('data-email').trim());
}

function populateCollabCard(collabInfo) {
    if (collabCard.getAttribute('data-collab') != collabInfo.num) {
        collabCard.setAttribute('data-collab', collabInfo.num);

        //Front
        var cNameEl = collabCard.querySelectorAll('.card__body__collab-name h3')[0];
        var cTeamEl = collabCard.querySelectorAll('.card__body__collab-team')[0];
        var cHobbiesEl = collabCard.querySelectorAll('.collab__hobbies-value')[0];
        var cEmojisEl = collabCard.querySelectorAll('.collab__emojis-value')[0];
        var cAdmissionEl = collabCard.querySelectorAll('.card__body__collab-admission')[0];
        var cImgEl = collabCard.querySelectorAll('.collab-image')[0];
        var cEmailEl = collabCard.querySelectorAll('.card__body__chat-icon a')[0];
        var cCopyEmailEl = collabCard.querySelectorAll('.card__body__copy-icon')[0];

        cNameEl.textContent = collabInfo.name;
        cTeamEl.textContent = collabInfo.team;
        // cEmailEl.textContent = collabInfo.email;
        cEmailEl.setAttribute('href', `https://teams.microsoft.com/l/chat/0/0?users=${collabInfo.email}`);
        cCopyEmailEl.setAttribute('data-email', collabInfo.email);
        cAdmissionEl.textContent = collabInfo.admission;
        cHobbiesEl.textContent = collabInfo.hobbies.join(', ');
        cEmojisEl.textContent = collabInfo.emojis.join('    ');
        cImgEl.setAttribute('src', `Images/${collabInfo.id}.jpg`);

        //Back
        var cNumEl = collabCard.querySelectorAll('.collab-number')[0];
        var cTeamEl = collabCard.querySelectorAll('.collab-team')[0];
        
        cNumEl.textContent = collabInfo.num;
    }
}

function populateTeamCard(teamInfo, i) {
    if (uniqueTeamCard.getAttribute('data-team') != teamInfo.id) {
        uniqueTeamCard.setAttribute('data-team', teamInfo.id);

        //Front
        var tNameEl = uniqueTeamCard.querySelectorAll('.card__body__collab-name h3')[0];
        var tTeamEl = uniqueTeamCard.querySelectorAll('.card__body__collab-team')[0];
        var tImgEl = uniqueTeamCard.querySelectorAll('.collab-image')[0];
        var tListEl = uniqueTeamCard.querySelectorAll('.card__body__collab-list')[0];
        tListEl.innerHTML = '';

        tNameEl.textContent = teamInfo.id;
        tTeamEl.textContent = teamInfo.subarea;
        tImgEl.setAttribute('src', `Images/${teamInfo.id}.jpg`);

        for (var link of collabsInfo.links) {
            var hasTeam = false;
            if (link.source.index == i) {
                hasTeam = link.target;
            } else if(link.target.index == i) {
                hasTeam = link.source;
            }

            if(hasTeam) {
                tListEl.insertAdjacentHTML('beforeend', `<div class="collab-list__image-container">
                    <img class="card__header__image collab-image" src="Images/${hasTeam.id}.jpg" alt="Foto do Colaborador" title="${hasTeam.name}">
                </div>`);
            }
        }

        var tDesc = uniqueTeamCard.querySelectorAll('.card__body__team-desc')[0];
        tDesc.innerHTML = teamInfo.desc;
    }
}

function populateAllCardsTab(collabs) {


    var allCardsContainer = document.getElementsByClassName('project-cards__all-cards')[0];
    
    collabs.nodes.sort(function(a,b) { return parseFloat(a.num) - parseFloat(b.num) }).forEach(collab => {
        if (collab.type) {
            allCardsContainer.insertAdjacentHTML('beforeend', `
            <div class="card all-cards collabNum${collab.num}" data-side="back">
                <div class="card__side card__side--front">
                    <div class="card__header">
                        <div class="card__header__logo-container">
                            <a href="https://hit.com.vc" target="_blank">
                                <img class="card__header__logo" src="Images/logo-hit.png" alt="Logo HIT" title="Site HIT">
                            </a>
                        </div>
                        <div class="card__header__image-container">
                            <img class="card__header__image collab-image" src="Images/${collab.id}.jpg" alt="Foto do Colaborador">
                        </div>

                        <div class="card__header__turn-icon" title="Girar Cart??o" data-side="back"  onclick="rotateCardFromAllCards(${collab.num}, 'front')">
                            <svg width="16" height="20" viewBox="0 0 16 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.2V8.8C0 9.28 0.32 9.6 0.8 9.6C1.28 9.6 1.6 9.28 1.6 8.8V7.2C1.6 
                                5.84 2.64 4.8 4 4.8H13.28L11.44 6.64C11.12 6.96 11.12 7.44 11.44 7.76C11.6 7.92 11.76 8 12 8C12.24 8 12.4 7.92 12.56 
                                7.76L15.76 4.56C15.8 4.52 15.82 4.48 15.84 4.44C15.86 4.4 15.88 4.36 15.92 4.32C16 4.08 16 3.84 15.92 3.68C15.92 3.6 
                                15.84 3.52 15.76 3.44L12.56 0.24C12.24 -0.08 11.76 -0.08 11.44 0.24C11.12 0.56 11.12 1.04 11.44 1.36L13.28 3.2H4C1.76 
                                3.2 0 4.96 0 7.2ZM14.4 10.4C14.4 9.92 14.72 9.6 15.2 9.6C15.68 9.6 16 9.92 16 10.4V12C16 14.24 14.24 16 12 16H2.72L4.56 
                                17.84C4.88 18.16 4.88 18.64 4.56 18.96C4.4 19.12 4.24 19.2 4 19.2C3.76 19.2 3.6 19.12 3.44 18.96L0.24 15.76C0.2 15.72 
                                0.18 15.68 0.16 15.64C0.14 15.6 0.12 15.56 0.08 15.52C0 15.28 0 15.04 0.08 14.88C0.08 14.8 0.16 14.72 0.24 14.64L3.44 
                                11.44C3.76 11.12 4.24 11.12 4.56 11.44C4.88 11.76 4.88 12.24 4.56 12.56L2.72 14.4H12C13.36 14.4 14.4 13.36 14.4 12V10.4Z"/>
                            </svg>
                        </div>

                    </div>
                    <div class="card__body">
                        <div class="card__body__collab-container">
                            <div class="card__body__collab-name">
                                <h3>
                                    ${collab.name}
                                </h3>
                            </div>
                            <div class="card__body__collab-team">
                                ${collab.team}
                            </div>
                            <div class="card__body__collab-admission">
                                ${collab.admission}
                            </div>
                        </div>

                        <hr class="card__body__separator">

                        <div class="card__body__collab-info">
                            <span class="collab__emojis">${collab.emojis.join('    ')}</span>

                            <div class="card__body__info-value card__body__info-email" data-type="Email">
                                    <div class="card__body__chat-icon" title="Chat no Teams">
                                    <a href="https://teams.microsoft.com/l/chat/0/0?users=${collab.email}" target="_blank">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.58333 0.333328H13.0833C14.3583 0.333328 15.3333 1.30833 15.3333 
                                            2.58333V10.0833C15.3333 11.3583 14.3583 12.3333 13.0833 12.3333H4.38333L1.60833 15.1083C1.45833 15.2583 1.30833 15.3333 
                                            1.08333 15.3333C1.00833 15.3333 0.858334 15.3333 0.783334 15.2583C0.483334 15.1833 0.333334 14.8833 0.333334 14.5833V2.58333C0.333334 
                                            1.30833 1.30833 0.333328 2.58333 0.333328ZM13.0833 10.8333C13.5333 10.8333 13.8333 10.5333 13.8333 10.0833V2.58332C13.8333 2.13332 
                                            13.5333 1.83332 13.0833 1.83332H2.58333C2.13333 1.83332 1.83333 2.13332 1.83333 2.58332V12.7833L3.55833 11.0583C3.70833 10.9083 
                                            3.85833 10.8333 4.08333 10.8333H13.0833Z"/>
                                        </svg>
                                    </a>
                                </div>

                                <div class="card__body__copy-icon" title="Copiar E-mail" onclick="copyEmail('${collab.email}')">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.90909 10.9091C3.34545 10.9091 3.63636 10.6182 3.63636 10.1818C3.63636 
                                        9.74545 3.34545 9.45455 2.90909 9.45455H2.18182C1.74545 9.45455 1.45455 9.16364 1.45455 8.72727V2.18182C1.45455 1.74545 
                                        1.74545 1.45455 2.18182 1.45455H8.72727C9.16364 1.45455 9.45455 1.74545 9.45455 2.18182V2.90909C9.45455 3.34545 9.74545 
                                        3.63636 10.1818 3.63636C10.6182 3.63636 10.9091 3.34545 10.9091 2.90909V2.18182C10.9091 0.945455 9.96364 0 8.72727 
                                        0H2.18182C0.945455 0 0 0.945455 0 2.18182V8.72727C0 9.96364 0.945455 10.9091 2.18182 10.9091H2.90909ZM13.8182 
                                        5.09091H7.27273C6.03636 5.09091 5.09091 6.03636 5.09091 7.27273V13.8182C5.09091 15.0545 6.03636 16 7.27273 
                                        16H13.8182C15.0545 16 16 15.0545 16 13.8182V7.27273C16 6.03636 15.0545 5.09091 13.8182 5.09091ZM14.5455 13.8182C14.5455 
                                        14.2545 14.2545 14.5455 13.8182 14.5455H7.27273C6.83636 14.5455 6.54545 14.2545 6.54545 13.8182V7.27273C6.54545 6.83636 
                                        6.83636 6.54545 7.27273 6.54545H13.8182C14.2545 6.54545 14.5455 6.83636 14.5455 7.27273V13.8182Z"/>
                                    </svg>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>
                <div class="card__side card__side--back">
                    <div class="card__header">

                        <div class="card__header__number-container">
                            <div class="collab-number">${collab.num}</div>
                            <div class="collab-team">Produtos</div>
                        </div>

                        <div class="card__header__turn-icon" title="Girar Cart??o" data-side="back" data-collab="${collab.num}" onclick="rotateCardFromAllCards(${collab.num}, 'back')">
                            <svg width="16" height="20" viewBox="0 0 16 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.2V8.8C0 9.28 0.32 9.6 0.8 9.6C1.28 9.6 1.6 9.28 1.6 8.8V7.2C1.6 
                                5.84 2.64 4.8 4 4.8H13.28L11.44 6.64C11.12 6.96 11.12 7.44 11.44 7.76C11.6 7.92 11.76 8 12 8C12.24 8 12.4 7.92 12.56 
                                7.76L15.76 4.56C15.8 4.52 15.82 4.48 15.84 4.44C15.86 4.4 15.88 4.36 15.92 4.32C16 4.08 16 3.84 15.92 3.68C15.92 3.6 
                                15.84 3.52 15.76 3.44L12.56 0.24C12.24 -0.08 11.76 -0.08 11.44 0.24C11.12 0.56 11.12 1.04 11.44 1.36L13.28 3.2H4C1.76 
                                3.2 0 4.96 0 7.2ZM14.4 10.4C14.4 9.92 14.72 9.6 15.2 9.6C15.68 9.6 16 9.92 16 10.4V12C16 14.24 14.24 16 12 16H2.72L4.56 
                                17.84C4.88 18.16 4.88 18.64 4.56 18.96C4.4 19.12 4.24 19.2 4 19.2C3.76 19.2 3.6 19.12 3.44 18.96L0.24 15.76C0.2 15.72 
                                0.18 15.68 0.16 15.64C0.14 15.6 0.12 15.56 0.08 15.52C0 15.28 0 15.04 0.08 14.88C0.08 14.8 0.16 14.72 0.24 14.64L3.44 
                                11.44C3.76 11.12 4.24 11.12 4.56 11.44C4.88 11.76 4.88 12.24 4.56 12.56L2.72 14.4H12C13.36 14.4 14.4 13.36 14.4 12V10.4Z"/>
                            </svg>
                        </div>
                    </div>

                    <div class="card__body">
                        <div class="card__body__collab-info">
                            <div class="card__body__info-line" title="Data de Lan??amento da Cole????o">
                                <div class="card__body__info-value card__body__info-creation">
                                    <span>${collab.launch}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`)
        } else {
            allCardsContainer.insertAdjacentHTML('beforeend', ` <div class="card all-cards collabNum${collab.num}" data-side="back">
                <div class="card__side card__side--front">
                    <div class="card__header">
                        <div class="card__header__logo-container">
                            <a href="https://hit.com.vc" target="_blank">
                                <img class="card__header__logo" src="Images/logo-hit.png" alt="Logo HIT" title="Site HIT">
                            </a>
                        </div>
                        <div class="card__header__image-container">
                            <img class="card__header__image collab-image" src="Images/${collab.id}.jpg" alt="Foto da Equipe">
                        </div>

                        <div class="card__header__turn-icon" title="Girar Cart??o" data-side="front" onclick="rotateCardFromAllCards(${collab.num}, 'front')">
                            <svg width="16" height="20" viewBox="0 0 16 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.2V8.8C0 9.28 0.32 9.6 0.8 9.6C1.28 9.6 1.6 9.28 1.6 8.8V7.2C1.6 
                                5.84 2.64 4.8 4 4.8H13.28L11.44 6.64C11.12 6.96 11.12 7.44 11.44 7.76C11.6 7.92 11.76 8 12 8C12.24 8 12.4 7.92 12.56 
                                7.76L15.76 4.56C15.8 4.52 15.82 4.48 15.84 4.44C15.86 4.4 15.88 4.36 15.92 4.32C16 4.08 16 3.84 15.92 3.68C15.92 3.6 
                                15.84 3.52 15.76 3.44L12.56 0.24C12.24 -0.08 11.76 -0.08 11.44 0.24C11.12 0.56 11.12 1.04 11.44 1.36L13.28 3.2H4C1.76 
                                3.2 0 4.96 0 7.2ZM14.4 10.4C14.4 9.92 14.72 9.6 15.2 9.6C15.68 9.6 16 9.92 16 10.4V12C16 14.24 14.24 16 12 16H2.72L4.56 
                                17.84C4.88 18.16 4.88 18.64 4.56 18.96C4.4 19.12 4.24 19.2 4 19.2C3.76 19.2 3.6 19.12 3.44 18.96L0.24 15.76C0.2 15.72 
                                0.18 15.68 0.16 15.64C0.14 15.6 0.12 15.56 0.08 15.52C0 15.28 0 15.04 0.08 14.88C0.08 14.8 0.16 14.72 0.24 14.64L3.44 
                                11.44C3.76 11.12 4.24 11.12 4.56 11.44C4.88 11.76 4.88 12.24 4.56 12.56L2.72 14.4H12C13.36 14.4 14.4 13.36 14.4 12V10.4Z"/>
                            </svg>
                        </div>

                    </div>
                    <div class="card__body">
                        <div class="card__body__collab-container">
                            <div class="card__body__collab-name">
                                <h3>
                                    ${collab.id}
                                </h3>
                            </div>
                            <div class="card__body__collab-team">
                                Engenharia de Produtos
                            </div>
                        </div>

                        <hr class="card__body__separator">

                        <div class="card__body__collab-info">
                            <div class="card__body__info-line">
                                <span class="card__body__info-value">${collab.desc}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card__side card__side--back">
                    <div class="card__header">

                        <div class="card__header__number-container">
                            <div class="collab-number">${collab.num}</div>
                            <div class="collab-team">Produtos</div>
                        </div>

                        <div class="card__header__turn-icon" title="Girar Cart??o" data-side="back" onclick="rotateCardFromAllCards(${collab.num}, 'back')">
                            <svg width="16" height="20" viewBox="0 0 16 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.2V8.8C0 9.28 0.32 9.6 0.8 9.6C1.28 9.6 1.6 9.28 1.6 8.8V7.2C1.6 
                                5.84 2.64 4.8 4 4.8H13.28L11.44 6.64C11.12 6.96 11.12 7.44 11.44 7.76C11.6 7.92 11.76 8 12 8C12.24 8 12.4 7.92 12.56 
                                7.76L15.76 4.56C15.8 4.52 15.82 4.48 15.84 4.44C15.86 4.4 15.88 4.36 15.92 4.32C16 4.08 16 3.84 15.92 3.68C15.92 3.6 
                                15.84 3.52 15.76 3.44L12.56 0.24C12.24 -0.08 11.76 -0.08 11.44 0.24C11.12 0.56 11.12 1.04 11.44 1.36L13.28 3.2H4C1.76 
                                3.2 0 4.96 0 7.2ZM14.4 10.4C14.4 9.92 14.72 9.6 15.2 9.6C15.68 9.6 16 9.92 16 10.4V12C16 14.24 14.24 16 12 16H2.72L4.56 
                                17.84C4.88 18.16 4.88 18.64 4.56 18.96C4.4 19.12 4.24 19.2 4 19.2C3.76 19.2 3.6 19.12 3.44 18.96L0.24 15.76C0.2 15.72 
                                0.18 15.68 0.16 15.64C0.14 15.6 0.12 15.56 0.08 15.52C0 15.28 0 15.04 0.08 14.88C0.08 14.8 0.16 14.72 0.24 14.64L3.44 
                                11.44C3.76 11.12 4.24 11.12 4.56 11.44C4.88 11.76 4.88 12.24 4.56 12.56L2.72 14.4H12C13.36 14.4 14.4 13.36 14.4 12V10.4Z"/>
                            </svg>
                        </div>
                    </div>

                    <div class="card__body">
                        <div class="card__body__collab-info">
                            <div class="card__body__info-line" title="Data de Lan??amento da Cole????o">
                                <div class="card__body__info-value card__body__info-creation">
                                    <span>${collab.launch}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>` );
        }
    });
}

function rotateCardFromAllCards(collab, side) {
    var collabCard = document.getElementsByClassName(`collabNum${collab}`)[0];

    collabCard.setAttribute('data-side', side);
}

function copyEmail(copyEmail) {
    copiedTextContainer.setAttribute('data-ani', 'copiedText');

    setTimeout(() => {
        copiedTextContainer.setAttribute('data-ani', 'none');
    }, 3300);

    navigator.clipboard.writeText(copyEmail);
}

populateAllCardsTab(collabsInfo);

dragElement(uniqueCard);
dragElement(uniqueTeamCard);

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, bound = elmnt.getBoundingClientRect();
    /* if present, the header is where you move the DIV from:*/
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // set the element's new position:
        var t = (elmnt.offsetTop - pos2);
        var l = (elmnt.offsetLeft - pos1);
        
        if (t < bound.height/2 + 20) {
        t = bound.height/2 + 20;
        } else if(t > (window.innerHeight - (bound.height/2 + 20))) {
        t = (window.innerHeight - (bound.height/2 + 20));
        }

        if (l < 20) {
        l = 20;
        } else if(l > (window.innerWidth - (bound.width + 20))) {
        l = (window.innerWidth - (bound.width + 20));
        }

        elmnt.style.top = t + "px";
        elmnt.style.left = l + "px";
    }
  
    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}