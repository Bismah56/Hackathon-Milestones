const form = document.querySelector('form') as HTMLFormElement;
const _name = document.getElementById('name') as HTMLInputElement;
const _email = document.getElementById('email') as HTMLInputElement;
const _phone = document.getElementById('mobNo.') as HTMLInputElement;
const _address = document.getElementById('address') as HTMLInputElement;
const _userphoto:any = document.getElementById('profile-Pic');
const _degree = document.getElementById('degree') as HTMLInputElement;
const _field = document.getElementById('field') as HTMLInputElement;
const _period = document.getElementById('studyperiod') as HTMLInputElement;
const _institute = document.getElementById('institute') as HTMLInputElement;
const _jobtitle = document.getElementById('title') as HTMLInputElement;
const _experience = document.getElementById('exp') as HTMLTextAreaElement;
const _objective = document.getElementById('obj') as HTMLTextAreaElement;
const imgUpdate:any = document.getElementById('image'); 
const S1 = document.getElementById('s1') as HTMLInputElement;
const S2 = document.getElementById('s2') as HTMLInputElement;
const S3 = document.getElementById('s3') as HTMLInputElement;
const S4 = document.getElementById('s4') as HTMLInputElement;
const S5 = document.getElementById('s5') as HTMLInputElement;

const pic_ = document.getElementById('pic') as HTMLImageElement;
const name_ = document.getElementById('nameTitle') as HTMLDivElement;
const title_ = document.getElementById('jobTitle') as HTMLParagraphElement;
const email_ = document.getElementById('email_') as HTMLSpanElement;
const number_ = document.getElementById('number') as HTMLSpanElement;
const location_ = document.getElementById('location') as HTMLSpanElement;
const Degree_ = document.getElementById('Degree') as HTMLElement;  
const Field_ = document.getElementById('field_') as HTMLDivElement;
const Institute_ = document.getElementById('Institute') as HTMLSpanElement;
const AcademicYear = document.getElementById('academic-year') as HTMLSpanElement;
const imgUpdatebtn = document.getElementById('imageUpdate') as HTMLLabelElement; 
const skill1 = document.getElementById('S1') as HTMLDivElement;
const skill2 = document.getElementById('S2') as HTMLDivElement;
const skill3 = document.getElementById('S3') as HTMLDivElement;
const skill4 = document.getElementById('S4') as HTMLDivElement;
const skill5 = document.getElementById('S5') as HTMLDivElement;
const workExp = document.getElementById('experience') as HTMLParagraphElement;
const objective = document.getElementById('objective') as HTMLParagraphElement;
let resume = document.getElementById('resume-container') as HTMLDivElement;
let fileURL;

_userphoto.addEventListener('change',()=>{
    let file = _userphoto.files[0];
    fileURL = URL.createObjectURL(file);
    pic_.src = fileURL;
});

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#F0E4CC';
    form.style.display = 'none';
    resume.style.display = 'inherit';
    imgUpdatebtn.style.display = 'inherit';
    name_.textContent = _name.value;
    email_.textContent = _email.value;      
    number_.textContent = _phone.value;
    location_.textContent = _address.value;
    Degree_.textContent = _degree.value;
    Field_.textContent = _field.value;
    Institute_.textContent = _institute.value;
    AcademicYear.textContent = _period.value;
    workExp.textContent = _experience.value;
    objective.textContent = _objective.value;
    title_.textContent = _jobtitle.value;
    skill1.textContent = S1.value;
    skill2.textContent = S2.value;
    skill3.textContent = S3.value;
    skill4.textContent = S4.value;
    skill5.textContent = S5.value;
});

imgUpdate.addEventListener('change',()=>{
    let file = imgUpdate.files[0];
    fileURL = URL.createObjectURL(file);
    pic_.src = fileURL;
});