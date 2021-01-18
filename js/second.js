/*document.querySelector('.probando').addEventListener('click', (event) => {
    if (screen.width <= 479) {
        const h3Content = event.currentTarget.querySelector('.h3').innerText;
        const pContent = event.currentTarget.querySelectorAll('.p');
        console.log(pContent)
        const pArray = [...pContent]
        console.log(pArray)
        let p = ''
        const probando = () => {
            for (let i = 0; i < pArray.length; i++) {
                const element = pArray[i].innerText;
                p = element
                console.log(p)
                return ` 
                <div className="modal" id="modal1">
                    <div className="modal-dialog">
                    <section className="modal-content">$
                        <h3>${h3Content}</h3>
                        <p>${element}</p>
                    </section>
                    </div>
              </div>`
            }
            return p
        }
        console.log(probando())
    }
})
    */