var container = document.querySelector('#container');
var pinfo = document.querySelector('#PersonalInfo');
var pinfo2 = document.querySelector('#PersonalInfo2');
var eduskill = document.querySelector('#EducationSkill');
var details = document.querySelector('#Details');
var show_hidebtn = document.querySelector('#Skills button');
var skillList = document.querySelector('#Skills span');
container.addEventListener('mouseenter', function () {
    pinfo.style.backgroundColor = '#332f2f';
    pinfo2.style.backgroundColor = '#332f2f';
    eduskill.style.backgroundColor = '#f0d8be';
    details.style.backgroundColor = 'rgb(226, 225, 225)';
    container.style.border = '4px solid #3d3a3b';
    container.style.borderRadius = '55px';
});
show_hidebtn.addEventListener('click', function () {
    var result = skillList.classList.toggle('hide'); //will return false after removing hide class
    show_hidebtn.innerText = result ? 'Show skills' : 'Hide skills';
});
