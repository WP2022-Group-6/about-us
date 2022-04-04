 

 
 /**
 * Drag and Drop multiple elements in multiple sources 
**/

let sourceContainerId = ''

// Allow multiple draggable items
let dragSources = document.querySelectorAll('[draggable="true"]')
dragSources.forEach(dragSource => {
  dragSource.addEventListener('dragstart', dragStart)
})

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
}

function dropped (e) {
  // execute function only when target container is different from source container
  if (this.id !== sourceContainerId) {
    cancelDefault(e)
    let id = e.dataTransfer.getData('text/plain')
    e.target.appendChild(document.querySelector('#' + id))
  }
  $("#home_bowl").fadeOut(500);
  $("#home_bowl").delay(600).fadeIn(700);
  /* Because I don't know how to convert the section , I setup it to fadeOut and fadeIn. 
     When you making the effect, just overwritten line 43&44 to you want!!! 
  */
}
// End of Drag and Drop Basic 
  
  
