var rotateIcons = document.getElementsByClassName('card__header__turn-icon');
var collabCard = document.getElementsByClassName('card')[0];

for (let i = 0; i < rotateIcons.length; i++) {
    var element = rotateIcons[i];
    
    element.onclick = function() {
        collabCard.setAttribute('data-side', this.getAttribute('data-side'));
    }
}

var email = document.getElementsByClassName('card__body__info-email')[0];
var copiedTextContainer = document.getElementsByClassName('copied-container')[0];

email.onclick = function() {

    copiedTextContainer.setAttribute('data-ani', 'copiedText');

    setTimeout(() => {
        copiedTextContainer.setAttribute('data-ani', 'none');
    }, 3300);

    navigator.clipboard.writeText(this.textContent.trim());
}

function populateCollabCard(collabInfo) {
    if (collabCard.getAttribute('data-collab') != collabInfo.num) {
        collabCard.setAttribute('data-collab', collabInfo.num);
        collabCard.setAttribute('data-ani', 'pop');

        setTimeout(() => {
            collabCard.setAttribute('data-ani', 'none');
        }, 500);

        //Front
        var cNameEl = collabCard.querySelectorAll('.card__body__collab-name h2')[0];
        var cTeamEl = collabCard.querySelectorAll('.card__body__collab-team')[0];
        var cHobbiesEl = collabCard.querySelectorAll('.collab__hobbies-value')[0];
        var cEmojisEl = collabCard.querySelectorAll('.collab__emojis-value')[0];
        var cAdmissionEl = collabCard.querySelectorAll('.card__body__collab-admission')[0];
        var cImgEl = collabCard.querySelectorAll('.collab-image')[0];
        var cEmailEl = collabCard.querySelectorAll('.collab__email')[0];

        cNameEl.textContent = collabInfo.name;
        cTeamEl.textContent = collabInfo.team;
        cEmailEl.textContent = collabInfo.email;
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

function populateAllCardsTab(collabs) {
    var allCardsContainer = document.getElementsByClassName('project-cards__all-cards')[0];
    
    collabs.nodes.forEach(collab => {
        if (collab.type) {
            allCardsContainer.insertAdjacentHTML('beforeend', `
            <div class="card all-cards collabNum${collab.num}" data-side="front">
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

                        <div class="card__header__turn-icon" title="Girar Cartão" data-side="front"  onclick="rotateCardFromAllCards(${collab.num}, 'front')">
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

                            <span class="collab__email">${collab.email}</span>
                        </div>
                    </div>
                </div>
                <div class="card__side card__side--back">
                    <div class="card__header">

                        <div class="card__header__number-container">
                            <div class="collab-number">${collab.num}</div>
                            <div class="collab-team">Produtos</div>
                        </div>

                        <div class="card__header__turn-icon" title="Girar Cartão" data-side="back" data-collab="${collab.num}" onclick="rotateCardFromAllCards(${collab.num}, 'back')">
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
                            <div class="card__body__info-line" title="Data de criação">
                                <div class="card__body__info-value card__body__info-creation">
                                    <span>27/10/2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`)
        }
        
    });
}

function rotateCardFromAllCards(collab, side) {
    var collabCard = document.getElementsByClassName(`collabNum${collab}`)[0];

    collabCard.setAttribute('data-side', side);
}

populateAllCardsTab(collabsInfo);