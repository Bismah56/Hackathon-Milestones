//Accessing html elements in which users data will be displayed(text content)
const form = document.querySelector('form') as HTMLFormElement;
const name_ = document.getElementById('nameTitle') as HTMLDivElement;
const title_ = document.getElementById('jobTitle') as HTMLParagraphElement;
const email_ = document.getElementById('email_') as HTMLSpanElement;
const phone_ = document.getElementById('number') as HTMLSpanElement;
const degree_ = document.getElementById('Degree') as HTMLElement;
const skill_ = document.getElementById('Skill') as HTMLDivElement;
const obj_ = document.getElementById('objective') as HTMLParagraphElement;
const exp_ = document.getElementById('experience') as HTMLParagraphElement;

const Link = document.getElementById('link') as HTMLAnchorElement;
const downloadBtn = document.getElementById('pdf') as HTMLButtonElement;
const link_container = document.getElementById('shareable-link') as HTMLDivElement;

//handling Form Submission
form.addEventListener('submit',(event)=>{
    event.preventDefault();       //prevents page reload
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#797878';
    (document.getElementById('resume-container') as HTMLDivElement).style.display = 'inherit';
    form.style.display = 'none';
    downloadBtn.style.display = 'inherit';

    //collecting Input values:
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('mobNo.') as HTMLInputElement).value;
    const username = (document.getElementById('Username') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const experience = (document.getElementById('exp') as HTMLTextAreaElement).value;
    const objective = (document.getElementById('obj') as HTMLTextAreaElement).value;
    const skill = (document.getElementById('skills') as HTMLTextAreaElement).value;

    //Save form data in local storage with username as key:
    const resumeData = {
        name,
        email,
        phone,
        degree,
        title,
        experience,
        objective,
        skill
    };

    //saving the data locally
    localStorage.setItem(username, JSON.stringify(resumeData));  //string

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
    const shareableURL =  `${window.location.origin}${location.pathname}?username=${encodeURIComponent(username)}`;

    //Display shareable link
    link_container.style.display = 'inherit';
    Link.href = shareableURL;
    Link.textContent = shareableURL;
});

//Prefill the form based on username in the url 
window.addEventListener('DOMContentLoaded',()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if(username){

        //Autofill form if data is found in localStorage
        const savedResumeData = localStorage.getItem(username);  //key

        if (savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);  //object now
            (document.getElementById('Username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            (document.getElementById('mobNo.') as HTMLInputElement).value = resumeData.phone;
            (document.getElementById('degree') as HTMLInputElement).value = resumeData.degree;
            (document.getElementById('title') as HTMLInputElement).value = resumeData.title;
            (document.getElementById('exp') as HTMLTextAreaElement).value = resumeData.experience;
            (document.getElementById('obj') as HTMLTextAreaElement).value = resumeData.objective;
            (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skill;
        }
    }
});

//Handle pdf download:
downloadBtn.addEventListener('click',()=>{
    window.print();
});