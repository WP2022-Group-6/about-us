 

/**
 * Drag and Drop multiple elements in multiple sources 
**/

let sourceContainerId = ''

// Allow multiple draggable items
let dragSources = document.querySelector('#home_liver')
let dragSources1 = document.querySelector('#home_cat')
let dragSources2 = document.querySelector('#home_freedom')
let dragSources3 = document.querySelector('#home_cheerful')
let dragSources4 = document.querySelector('#home_meme')
  dragSources.addEventListener('dragstart', dragStart)
  dragSources1.addEventListener('dragstart', dragStart1)
  dragSources2.addEventListener('dragstart', dragStart2)
  dragSources3.addEventListener('dragstart', dragStart3)
  dragSources4.addEventListener('dragstart', dragStart4)
  

// Allow multiple dropped targets
let dropTargets = document.querySelectorAll('[data-role="drag-drop-container"]')
dropTargets.forEach(dropTarget => {
  dropTarget.addEventListener('drop', dropped)
  dropTarget.addEventListener('dragenter', cancelDefault)
  dropTarget.addEventListener('dragover', cancelDefault)
})

function cancelDefault (e) {
  e.preventDefault()
  e.stopPropagation()
  return false
}
function dragStart (e) {
  e.dataTransfer.setData('text/plain', e.target.id)
  sourceContainerId = this.parentElement.id
  console.log('sourceContainerId', sourceContainerId)
  $("#home_liver").fadeOut(10);
}
function dragStart1 (e) {
  e.dataTransfer.setData('text/plain', e.target.id)
  sourceContainerId = this.parentElement.id
  console.log('sourceContainerId', sourceContainerId)
  $("#home_cat").fadeOut(10);
}
function dragStart2 (e) {
  e.dataTransfer.setData('text/plain', e.target.id)
  sourceContainerId = this.parentElement.id
  console.log('sourceContainerId', sourceContainerId)
  $("#home_freedom").fadeOut(10);
}
function dragStart3 (e) {
  e.dataTransfer.setData('text/plain', e.target.id)
  sourceContainerId = this.parentElement.id
  console.log('sourceContainerId', sourceContainerId)
  $("#home_cheerful").fadeOut(10);
}
function dragStart4 (e) {
  e.dataTransfer.setData('text/plain', e.target.id)
  sourceContainerId = this.parentElement.id
  console.log('sourceContainerId', sourceContainerId)
  $("#home_meme").fadeOut(10);
}

function dropped (e) {
  // execute function only when target container is different from source container
  if (this.id !== sourceContainerId) {
    cancelDefault(e)
    /*let id = e.dataTransfer.getData('text/plain')
    e.target.appendChild(document.querySelector('#' + id))*/
  alert("source to target!")
  $("#home_cat").fadeIn(10);
  $("#home_liver").fadeIn(10);
  $("#home_cheerful").fadeIn(10);
  $("#home_freedom").fadeIn(10);
  $("#home_meme").fadeIn(10);
  }else{
  alert("source to source!")
  $("#home_cat").fadeIn(10);
  $("#home_liver").fadeIn(10);
  $("#home_cheerful").fadeIn(10);
  $("#home_freedom").fadeIn(10);
  $("#home_meme").fadeIn(10);
  }
}
// End of Drag and Drop Basic 
  
  
