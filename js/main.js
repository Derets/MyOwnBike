// ProgressBar
const progress = document.querySelector('.progress');
window.addEventListener('scroll', progressBar);

function progressBar(event) {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percent = windowScroll / windowHeight * 100;

    progress.style.width = percent + '%';
}

//SmoothScroll
const anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault()
      const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
      document.querySelector(goto).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }

// MultiLang
const select = document.querySelector('select');
const allLang = ['en', 'ru', 'ua'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  // console.log(hash);
  if (!allLang.includes(hash)) {
      location.href = window.location.pathname + '#ua';
      location.reload();
  }
  select.value = hash;
  // document.querySelector('title').innerHTML = langArr['mainScr1__title'][hash];
  for (let key in langArr) {
      let elem = document.querySelector('.lang-' + key);
      if (elem) {
        
          elem.innerHTML = langArr[key][hash];
      }

  }
}

changeLanguage();

//burger-menu
let burger = document.getElementById('burger')
let nav = document.querySelector('nav')

console.log(burger);
console.log(nav);

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  nav.classList.toggle('active')
  document.body.classList.toggle('lock')
})

