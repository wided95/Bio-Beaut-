import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-discription'>
              <h2>Contact</h2>  
              <p>15, rue du Château
                 75001 Paris, France
                 T: 01 23 45 67 89
                 info@monsite.fr</p>
            </div>
            <div className='contact-input'>
                <input type='text' placeholder=' Nom'/>
                <input type='email' placeholder='E-mail'/>
                <input type='tel' placeholder='Téléphone'/>
                <textarea placeholder='Rédiger votre text ici...'/>
                <div class="box-3">
  <div class="btn btn-three">
    <span>Envoyer</span>
  </div>
</div>
            </div>
        </div>
    )
}

export default Contact
