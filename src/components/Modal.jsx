import './Modal.css'

function Modal ({phrase}) {
 function confirm(){
  console.log('confirm')
 }
 function cancel(){
  console.log('cancel')
 }

    return (
        <>
  <div className="modal">
    <p className="modal__title">{phrase}</p>
    <div className="modal__buttons">
      <button className="btn btn__cancel"onClick ={cancel}>Cancel</button>
      <button className="btn"  onClick ={confirm} >Confirm</button>
    </div>
  </div>
  <div className="backdrop" />
</>
    )
}

export default Modal;