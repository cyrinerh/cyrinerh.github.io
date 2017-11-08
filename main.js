var navLinks = document.querySelectorAll('nav a')
var firstLink = navLinks[1]

function linkToHash(link) {
  return link.hash
}

firstLink.onclick = function(event) {
  event.preventDefault()
  var targetDiv = document.querySelector('#about')
  $('html, body').animate(
  {
    scrollTop: targetDiv.offsetTop
  },
  1000
  )
}

var secondLink = navLinks[2]

function linkToHash(link) {
  return link.hash
}

secondLink.onclick = function(event) {
  event.preventDefault()
  var targetDiv = document.querySelector('#portfolio')
  $('html, body').animate(
  {
    scrollTop: targetDiv.offsetTop
  },
  1000
  )
}


var thirdLink = navLinks[3]

function linkToHash(link) {
  return link.hash
}

thirdLink.onclick = function(event) {
  event.preventDefault()
  var targetDiv = document.querySelector('#contact')
  $('html, body').animate(
  {
    scrollTop: targetDiv.offsetTop
  },
  2000
  )
}