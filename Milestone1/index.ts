const container = document.querySelector('#container') as HTMLDivElement;
const pinfo = document.querySelector('#PersonalInfo') as HTMLDivElement;
const pinfo2 = document.querySelector('#PersonalInfo2') as HTMLDivElement;
const eduskill = document.querySelector('#EducationSkill') as HTMLDivElement;
const details = document.querySelector('#Details') as HTMLDivElement;
const show_hidebtn = document.querySelector('#Skills button') as HTMLButtonElement; 
const skillList = document.querySelector('#Skills span') as HTMLUListElement;

show_hidebtn.addEventListener('click',()=>{
    let result = skillList.classList.toggle('hide');   //will return false after removing hide class
    show_hidebtn.innerText = result?'Show skills':'Hide skills';
});


