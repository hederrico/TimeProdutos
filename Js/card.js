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