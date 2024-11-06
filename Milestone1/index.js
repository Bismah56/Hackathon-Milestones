var container = document.querySelector('#container');
var pinfo = document.querySelector('#PersonalInfo');
var pinfo2 = document.querySelector('#PersonalInfo2');
var eduskill = document.querySelector('#EducationSkill');
var details = document.querySelector('#Details');
var show_hidebtn = document.querySelector('#Skills button');
var skillList = document.querySelector('#Skills span');
show_hidebtn.addEventListener('click', function () {
    var result = skillList.classList.toggle('hide'); //will return false after removing hide class
    show_hidebtn.innerText = result ? 'Show skills' : 'Hide skills';
});
