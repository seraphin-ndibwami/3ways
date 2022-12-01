changecontent('welcom')
/**
 * this function eable to change content in my page
 * @param {string} id
 * @return {DocumentFragment}
 */
function changecontent(id){
    const section = document.querySelector('.section')
    const containt = document.getElementById(id).content.cloneNode(true)
    console.log('appel')
    const section_cildren = document.querySelectorAll('.section > div')
    section_cildren.forEach(element =>{
        element.remove()
    })
    section.append(containt)
    return containt
}
const buttons = document.querySelectorAll('button')
buttons.forEach(element =>{
    element.addEventListener('click', (e)=>{
        changecontent(e.currentTarget.textContent)
        console.log(e.currentTarget.textContent)
    })
})