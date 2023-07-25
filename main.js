function myScroll(sectionId) {
  const id = document.getElementById(sectionId)
  id.scrollIntoView({behavior: 'smooth'}, true)
}
