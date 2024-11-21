// PRELOADER
let loader = document.getElementById('preloader');

function viewPage(){
    loader.style.display = 'none';
}

window.addEventListener('load', () =>{
   setTimeout(viewPage, '3000');
})


// NAVIGATIONS
function checkScroll(){
    let active1 = document.querySelector('.active1');
    let active2 = document.querySelector('.active2');
    let active3 = document.querySelector('.active3');
    let active4 = document.querySelector('.active4');
    let active5 = document.querySelector('.active5');
    let active6 = document.querySelector('.active6');
    let scrollValue = window.scrollY;
 
      if(scrollValue < 700){
        active1.classList.add('activenav');
        active2.classList.remove('activenav');
      }
      else if(scrollValue < 1400){
        active1.classList.remove('activenav');
        active2.classList.add('activenav');
        active3.classList.remove('activenav');
      }
      else if(scrollValue < 1800){
        active1.classList.remove('activenav');
        active2.classList.remove('activenav');
        active3.classList.add('activenav');
        active4.classList.remove('activenav');
      }
      else if(scrollValue < 2500){
        active1.classList.remove('activenav');
        active2.classList.remove('activenav');
        active3.classList.remove('activenav');
        active4.classList.add('activenav');
        active5.classList.remove('activenav');
      }
      else if(scrollValue < 3200){
        active1.classList.remove('activenav');
        active2.classList.remove('activenav');
        active3.classList.remove('activenav');
        active4.classList.remove('activenav');
        active5.classList.add('activenav');
        active6.classList.remove('activenav');
      }
      else{
        active1.classList.remove('activenav');
        active2.classList.remove('activenav');
        active3.classList.remove('activenav');
        active4.classList.remove('activenav');
        active5.classList.remove('activenav');
        active6.classList.add('activenav')
      }
 
    console.log(scrollValue);
 }window.addEventListener('scroll', checkScroll);



// HEADER ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('heroup')
    }
    else{
      entry.target.classList.remove('heroup')
    }
  })
})
const hiddenElement = document.querySelectorAll('.heroup');
hiddenElement.forEach((el) => observer.observe(el));


//READ MORE SECTION
let ready =  document.getElementById('read');
let mor = document.getElementById('more');

function toggleMore(){
  if(!mor.classList.contains('showmore')){
    ready.innerText='See Less▵'
    mor.style.display='flex'
    mor.classList.add('showmore')
  }
  else{
    ready.innerText='See More▿'
    mor.style.display='none'
    mor.classList.remove('showmore')
  }
}




function login(){
  let name = document.getElementById('namE');
  let reg = document.getElementById('regnumber');
  let email = document.getElementById('mail');
  let pass = document.getElementById('password');
  let Bio = document.getElementById('bio');
  let error = document.getElementById('msg');
  const agree = document.querySelector('input[name="agree"]:checked');
  // let phone = document.getElementById('phoneNo');
  // let level = document.getElementById('class');
  // let department = document.getElementById('dept');

  let Name = name.value;
  let matno = reg.value;
  let mail = email.value;
  let password = pass.value;
  let ABout = Bio.value;
  // let dept = department.value;
  // let number = phone.value;
  // let lvl = level.value;


  name.addEventListener('input', () =>{
      error.style.backgroundColor = 'transparent';
      name.style.border = '2px solid orangered';
      error.style.color = 'transparent';
  })
  reg.addEventListener('input', () =>{
      error.style.backgroundColor = 'transparent';
      reg.style.border = '2px solid orangered';
      error.style.color = 'transparent';
  })
  email.addEventListener('input', () =>{
      error.style.backgroundColor = 'transparent';
      email.style.border = '2px solid orangered';
      error.style.color = 'transparent';
  })
  pass.addEventListener('input', () =>{
      error.style.backgroundColor = 'transparent';
      pass.style.border = '2px solid orangered';
      error.style.color = 'transparent';
  })
  Bio.addEventListener('input', () =>{
      error.style.backgroundColor = 'transparent';
      Bio.style.border = '2px solid orangered';
      error.style.color = 'transparent';
  })
  // department.addEventListener('input', () =>{
  //     error.style.backgroundColor = 'transparent';
  //     department.style.border = '2px solid orangered';
  //     error.style.color = 'transparent';
  // })
  // phone.addEventListener('input', () =>{
  //     error.style.backgroundColor = 'transparent';
  //     phone.style.border = '2px solid orangered';
  //     error.style.color = 'transparent';
  // })
  // level.addEventListener('input', () =>{
  //     error.style.backgroundColor = 'transparent';
  //     level.style.border = '2px solid orangered';
  //     error.style.color = 'transparent';
  // })



    if(Name.trim() == ""){
        error.innerHTML = 'Fill in name';
        error.style.backgroundColor = 'red';
        error.style.borderRadius = '5px';
        error.style.padding = '8px';
        error.style.transition = '0.4s';
        error.style.color = 'white';
        name.style.border = '2px solid red';
        name.style.transition = '0.25s';
        return false;
    }
    else if(matno.trim() == ""){
        error.innerHTML = 'Fill in Reg number';
        error.style.backgroundColor = 'red';
        error.style.borderRadius = '5px';
        error.style.padding = '8px';
        error.style.color = 'white';
        error.style.transition = '0.4s';
        reg.style.border = '2px solid red';
        reg.style.transition = '0.25s';
        return false;
    }
    else if(mail.trim() == ""){
        error.innerHTML = 'Fill in Email address';
        error.style.backgroundColor = 'red';
        error.style.borderRadius = '5px';
        error.style.color = 'white';
        error.style.padding = '8px';
        error.style.transition = '0.4s';
        email.style.border = '2px solid red';
        email.style.transition = '0.25s';
        return false;
    }
    else if(password.trim() == ""){
        error.innerHTML = 'Fill in Password';
        error.style.backgroundColor = 'red';
        error.style.borderRadius = '5px';
        error.style.color = 'white';
        error.style.padding = '8px';
        error.style.transition = '0.4s';
        pass.style.border = '2px solid red';
        pass.style.transition = '0.25s';
        return false;
    }
    else if(ABout.trim() == ""){
      error.innerHTML = 'Write Something about Yourself';
      error.style.backgroundColor = 'red';
      error.style.borderRadius = '5px';
      error.style.color = 'white';
      error.style.padding = '8px';
      error.style.transition = '0.4s';
      Bio.style.border = '2px solid red';
      Bio.style.transition = '0.25s';
      return false;
  }
    else if(agree.value !== 'yes') {
      error.innerHTML = 'This Site is only for Computer Science Students';
      error.style.backgroundColor = 'red';
      error.style.borderRadius = '5px';
      error.style.color = 'white';
      error.style.padding = '8px';
      error.style.transition = '0.4s';
      return false;
    }
    else{
        localStorage.setItem('Fullname', Name);
        localStorage.setItem('MatNo', matno);
        localStorage.setItem('Mybio', ABout)
        return true;
    }
      // else if(lvl.trim() == ""){
      //     error.innerHTML = 'Fill in Level';
      //     error.style.backgroundColor = 'red';
      //     error.style.borderRadius = '5px';
      //     error.style.color = 'white';
      //     error.style.padding = '8px';
      //     error.style.transition = '0.4s';
      //     level.style.border = '2px solid red';
      //     level.style.transition = '0.25s';
      //     return false;
      // }
      // else if(number.trim() == ""){
      //     error.innerHTML = 'Fill in phone number';
      //     error.style.backgroundColor = 'red';
      //     error.style.borderRadius = '5px';
      //     error.style.color = 'white';
      //     error.style.padding = '8px';
      //     error.style.transition = '0.4s';
      //     phone.style.border = '2px solid red';
      //     phone.style.transition = '0.25s';
      //     return false;
      // }
}

window.addEventListener('load', () => {
  let Fullname = localStorage.getItem('Fullname');
  let Regnumber = localStorage.getItem('MatNo');
  let Aboutme = localStorage.getItem('Mybio')

  document.querySelector('.admin-name').innerHTML = Fullname;
  document.querySelector('.student-name').innerHTML = Fullname;
  document.querySelector('.welcome').innerHTML = Fullname;
  document.querySelector('.matricno').innerHTML = Regnumber;
  document.querySelector('.ctn-cards').innerHTML = Aboutme;
  }
)




// PROFILE PICTURE UPLOAD

const uploadForm = document.getElementById('upload-form');
const profilePictureInput = document.getElementById('profile-picture');
const uploadBtn = document.getElementById('upload-btn');
const profilePictureContainer = document.getElementById('profile-picture-container');
const profilePictureDisplay = document.getElementById('profile-picture-display');
const profilepic = document.getElementById('dp');

uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

uploadBtn.addEventListener('click', () => {
  profilePictureInput.click();
});

profilePictureInput.addEventListener('change', () => {
  const file = profilePictureInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const imageDataUrl = reader.result;
    profilePictureDisplay.src = imageDataUrl;
    profilepic.src = imageDataUrl;
    profilePictureContainer.style.backgroundImage = `url(${imageDataUrl})`;
  };
  reader.readAsDataURL(file);
});

