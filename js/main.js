/**/

const justChecking = (event) => {
  const h3Content = event.currentTarget.querySelector('.h3').innerText;
  const h3 = document.createElement('h3')
  const pContent = event.currentTarget.querySelectorAll('.p');
  const pArray = [...pContent]
  const p = document.createElement('p')
  let text = '';
  // const pForEach = () => {
  //   let c = pArray.map(element => text = element.textContent);
  //   console.log(c ,'asdgfgfdg')
  // }
  // console.log('asdasd',pForEach())
  // console.log(text)
  const modalContent = document.createElement('section');
  const modalDialog = document.createElement('div');
  const modal = document.createElement('div');
  const modalDiv = document.getElementById('modal')
  h3.textContent = h3Content;
  
  modalContent.className = 'modal-content';
  modalDialog.className = 'modal-dialog';
  modal.className = 'modal is-visible';
  modalContent.appendChild(h3);
  // realizamos un for para recorrer el array y repetir la creacion de contenido un por cada elemento que encuentra
  for (let i = 0; i < pArray.length; i++) {
      const element = pArray[i];
      console.log(element)
      modalContent.appendChild(element)
      ;
    }
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  modal.onclick = function() {
    modalDiv.removeChild(modal);
  }
  if (screen.width <= 479) {
    
    modalDiv.appendChild(modal);
  }
  else{
    console.log('funciona');
  };
};
