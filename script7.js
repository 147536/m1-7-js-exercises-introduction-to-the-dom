// Web page with its Header (with three links), its Main (with three divs, inside each div you can put what you want for example a news) and its Footer (with a link at the top of the page). The Header links should each take us to one of the divs. Done without writing the HTML code directly, let JS generate it. //

for (const a of document.querySelectorAll("header a")) {
    a.addEventListener("click", function(){
        document.querySelector(`#` + a.getAttribute("scrollTo")).scrollIntoView({
            behavior: `smooth`
        });
    })
    }

let footerA = document.querySelector("footer a");
footerA.addEventListener("click", function(){
    document.querySelector("body").scrollIntoView({
        behavior: `smooth`
    });
});
