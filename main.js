var navLinks = document.querySelectorAll('nav a')

navLinks.forEach(function(link){
  link.onclick = function(event) {
    event.preventDefault()
    var targetDiv = document.querySelector(event.target.hash)
    $('html, body').animate(
    {
      scrollTop: targetDiv.offsetTop
    },
    1000
    )
  }
})