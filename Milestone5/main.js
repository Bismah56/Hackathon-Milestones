//Accessing html elements in which users data will be displayed(text content)
var form = document.querySelector('form');
var name_ = document.getElementById('nameTitle');
var title_ = document.getElementById('jobTitle');
var email_ = document.getElementById('email_');
var phone_ = document.getElementById('number');
var degree_ = document.getElementById('Degree');
var skill_ = document.getElementById('Skill');
var obj_ = document.getElementById('objective');
var exp_ = document.getElementById('experience');
var Link = document.getElementById('link');
var downloadBtn = document.getElementById('pdf');
var link_container = document.getElementById('shareable-link');
//handling Form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevents page reload
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#797878';
    document.getElementById('resume-container').style.display = 'inherit';
    form.style.display = 'none';
    downloadBtn.style.display = 'inherit';
    //collecting Input values:
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('mobNo.').value;
    var username = document.getElementById('Username').value;
    var degree = document.getElementById('degree').value;
    var title = document.getElementById('title').value;
    var experience = document.getElementById('exp').value;
    var objective = document.getElementById('obj').value;
    var skill = document.getElementById('skills').value;
    //Save form data in local storage with username as key:
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        degree: degree,
        title: title,
        experience: experience,
        objective: objective,
        skill: skill
    };
    //saving the data locally
    localStorage.setItem(username, JSON.stringify(resumeData)); //string
    //Generate resume content dynamically:
    name_.textContent = name;
    title_.textContent = title;
    email_.textContent = email;
    phone_.textContent = phone;
    degree_.textContent = degree;
    skill_.textContent = skill;
    obj_.textContent = objective;
    exp_.textContent = experience;
    //Generate a shareable URL with username only
    var shareableURL = "".concat(window.location.origin).concat(location.pathname, "?username=").concat(encodeURIComponent(username));
    //Display shareable link
    link_container.style.display = 'inherit';
    Link.href = shareableURL;
    Link.textContent = shareableURL;
});
//Prefill the form based on username in the url 
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        //Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username); //key
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData); //object now
            document.getElementById('Username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('mobNo.').value = resumeData.phone;
            document.getElementById('degree').value = resumeData.degree;
            document.getElementById('title').value = resumeData.title;
            document.getElementById('exp').value = resumeData.experience;
            document.getElementById('obj').value = resumeData.objective;
            document.getElementById('skills').value = resumeData.skill;
            // Submit the form programmatically
            // form.submit();
        }
    }
});
//Handle pdf download:
downloadBtn.addEventListener('click', function () {
    window.print();
});
