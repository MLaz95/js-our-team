const rowElement = document.querySelector('#row');

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

for (i = 0; i < teamMembers.length; i++){
    const eachMember = teamMembers[i];

    
    const newCardElement = document.createElement('div');

    const memberInfo = document.createElement('div');
    
    for(let key in eachMember){
        console.log(eachMember[key]);

        if(key == 'photo'){
            const photoElement = document.createElement('img');
            photoElement.setAttribute('src', `./img/${eachMember[key]}`);
            newCardElement.prepend(photoElement);
        }else{
            memberInfo.innerHTML += `<div>${eachMember[key]}</div>`;
        }
        
    };

    
    newCardElement.append(memberInfo);
    rowElement.append(newCardElement);
};