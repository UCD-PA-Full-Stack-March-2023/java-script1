let search = document.querySelector('.search-box');

 document.querySelector('.#search-icon').onclick = () =>  {
    search.classList.toggle('active');
    navbar.classList.remove('active');
 }

 let navbar = document.querySelector('.navbar');

 document.querySelector('.#menu-icon').onclick = () =>  {
    navbar.classList.toggle('active');
    search.classList.toggle('active');
 }

window.onscroll= () => {

    navbar.classList.remove('active');
    search.classList.remove('active');
}


 let header = document.querySelector('header');

 window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
 });
 const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(feedbackForm);
  const feedbackData = {
    name: formData.get('name'),
    email: formData.get('email'),
    rating: formData.get('rating'),
    comments: formData.get('comments'),
  };

  
});

