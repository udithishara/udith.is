( function(History, undefined ) {

  document.getElementsByClassName('branding__year')[0].innerHTML = new Date().getFullYear();

  if ( !History.enabled ) {
    return false;
  }

  var wrap = document.getElementById("wrap");

  document.addEventListener('click', function (e) {

    // If the clicked element doesn't have the right selector, bail
    if (!e.target.matches('.page-link')) return;

    // Don't follow the link
    e.preventDefault();

    // Log the clicked element in the console
    console.log(e.target);
    
    var pageTitle = (e.target.title) ? e.target.title : e.target.textContent;
    pageTitle = (e.target.getAttribute("rel") === "Home") ? "Udith Ishara - Developer, Writer, Creator" : pageTitle + " - Udith.is";

    var pagePath = (e.target.title === "Home") ? e.target.href : e.target.href + "/";
    History.pushState(null, pageTitle, pagePath);

  }, false);

  History.Adapter.bind(window, "statechange", function () {

    var state = History.getState();

    var xhr = new XMLHttpRequest();
    xhr.open("GET", state.url);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // handle xhr.response
        // console.log($(xhr.responseText))
        let parser = new DOMParser();
        let parsedHtml = parser.parseFromString(xhr.responseText, 'text/html');
        let parsedWrap = parsedHtml.getElementById("wrap");
        let main = parsedHtml.getElementById("main");
        // console.log("parsedWrap")
        // console.log(parsedWrap)

        wrap.innerHTML = parsedWrap.innerHTML;

        window.scrollTo({top: 0,behavior: 'smooth'});
      }
      if (xhr.status === 404) {
        // wrap.innerHTML = "404 Page Not Found";
        document.location = '/404'
        // Todo: Ajax again
      }
    }
    xhr.send();
  });


  const toggleSwitch = document.querySelector('.theme-switch__input');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'dark') {
          toggleSwitch.checked = true;
      }
  }

  function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
      else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
  }

  toggleSwitch.addEventListener('change', switchTheme, false);

  // const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // if (prefersDarkScheme.matches) {
  //   document.documentElement.setAttribute('data-theme', 'dark');
  // } else {
  //   document.documentElement.setAttribute('data-theme', 'light');
  // }

  const prefersDarkScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

  if (prefersDarkScheme.matches){
    console.log("User prefers a dark interface");
  } else {
    console.log("User prefers a light interface");
  }



} )( window.History );

// Links inside a ajax fetched area doesn't seem to work because when they're injected, 
// they just come as HTML and the current javascript to track click even't doesn't seem to work on it
// We can overcome this temporary by re-writing the same code in side the .promise().done()
// But need a better solution than this

// This is solved by having the click event listner to the whole document instead of just the classed hrefs

// https://css-tricks.com/using-the-html5-history-api/
// https://warpspire.com/posts/url-design
// https://gomakethings.com/how-to-update-a-url-without-reloading-the-page-using-vanilla-javascript/
// https://medium.com/@george.norberg/history-api-getting-started-36bfc82ddefc
// https://gomakethings.com/listening-for-click-events-with-vanilla-javascript/
// https://leerob.io/blog/mdx
