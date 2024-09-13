const container = document.querySelector('#container') as HTMLDivElement;
const pinfo = document.querySelector('#PersonalInfo') as HTMLDivElement;
const pinfo2 = document.querySelector('#PersonalInfo2') as HTMLDivElement;
const eduskill = document.querySelector('#EducationSkill') as HTMLDivElement;
const details = document.querySelector('#Details') as HTMLDivElement;
const show_hidebtn = document.querySelector('#Skills button') as HTMLButtonElement; 
const skillList = document.querySelector('#Skills span') as HTMLUListElement;

container.addEventListener('mouseenter',()=>{
    pinfo.style.backgroundColor = '#332f2f';
    pinfo2.style.backgroundColor = '#332f2f';
    eduskill.style.backgroundColor = '#f0d8be';
    details.style.backgroundColor = 'rgb(226, 225, 225)';
    container.style.border = '4px solid #3d3a3b';
    container.style.borderRadius = '55px';
});

show_hidebtn.addEventListener('click',()=>{
    let result = skillList.classList.toggle('hide');   //will return false after removing hide class
    show_hidebtn.innerText = result?'Show skills':'Hide skills';
});


