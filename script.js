const containerElement = document.querySelector('#container');

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

    let singleMember = '';
    
    for(let key in eachMember){
        console.log(eachMember[key]);

        if(key == 'photo'){
            singleMember += `<img src="./img/${eachMember[key]}">`
        }else{
            singleMember += `<div>${eachMember[key]}</div>`;
        }
        
    };

    const newElement = document.createElement('div');
    newElement.innerHTML = singleMember;
    containerElement.append(newElement);
};