import React, {useState} from 'react'
import ReactModal from 'react-modal';
import './css.css';

export default function Modal({edit, title, text}) {

    const [open, setOpen] = useState(false);
   

    const handleCloseModal = () =>setOpen(false)
    const handleOpenModal = () =>setOpen(true)

    const [data, setData] = useState({title, text});

    const handleDefaultProps = () => {
        setData({title,  text})
    }

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        setData({...data, [name]: target.value})
    }

    const handleClickCancel = () => {
        handleDefaultProps();
    }
   

    //ReactModal.setAppElement('#root')

   if (edit)
    return (
        <React.Fragment>
            
            <h3 className="new-title" onClick={handleOpenModal}>{title}</h3>
            
            <ReactModal
             isOpen={open}
             onRequestClose={handleCloseModal}
             className="Modal"
             overlayClassName="Overlay"
             >
              <div className="modal-content-new">
                    <input
                        type="text"
                        name="title"
                        onChange={handleInputChange}
                        value={data.title}
                        className="new-title"
                    />
                    <textarea 
                        type="text" 
                        name="text" 
                        onChange={handleInputChange} 
                        value={data.text} 
                        className="modal-text"
                    />
              </div>
      
              <button className="button modal-close" onClick={handleCloseModal}>GUARDAR SECCIÓN</button>
              <button className="button modal-close" onClick={handleClickCancel && handleCloseModal}>CANCELAR</button>
              
             </ReactModal>
            
           
        </React.Fragment>
    )
    else 
    return (
    <React.Fragment>
            
           <h3 className="new-title" onClick={handleOpenModal}>{title}</h3>
            <ReactModal
             isOpen={open}
             onRequestClose={handleCloseModal}
             className="Modal"
             overlayClassName="Overlay"
             >
              <div className="modal-content-new">
                    <h2 className="modal-title">{title}</h2>
                    <p className="modal-text">{text}</p>
              </div>
              <button className="button modal-close" onClick={handleCloseModal}>CERRAR</button>
             </ReactModal>
            
           
        </React.Fragment>
    )
    
}
