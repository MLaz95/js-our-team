const rowElement = document.querySelector('#row');

// array of team member objects
const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg',
    },
];

// for each object
for (i = 0; i < teamMembers.length; i++){
    const eachMember = teamMembers[i];

    // creates a container
    const newColElement = document.createElement('div')
    newColElement.classList.add('col');

    // creates a card
    const newCardElement = document.createElement('div');
    newCardElement.classList.add('card', 'h-100', 'rounded-0')

    // creates text section
    const memberInfo = document.createElement('div');
    memberInfo.classList.add('card-body', 'text-center')
        // adds name and role to text section
    memberInfo.innerHTML += `<h5>${eachMember['name']}</h5>`
    memberInfo.innerHTML += `<div>${eachMember['role']}</div>`;

    
    // creates an image element
    const photoElement = document.createElement('img');
        // sets img attribute to photo
    photoElement.setAttribute('src', `./img/${eachMember['photo']}`);
    photoElement.classList.add('card-img-top', 'rounded-0');

    // adds photo to card
    newCardElement.prepend(photoElement);
    // adds text section to card
    newCardElement.append(memberInfo);
    // adds card to container
    newColElement.append(newCardElement);
    // adds container to page
    rowElement.append(newColElement);
};