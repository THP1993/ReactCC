import './Confirm.css'

function Confirm ({phrase}) {
    return (
        <>
  <div className="modal">
    <p className="modal__title">{phrase}</p>
    <div className="modal__buttons">
      <button className="btn btn__cancel">Cancel</button>
      <button className="btn">Confirm</button>
    </div>
  </div>
  <div className="backdrop" />
</>
    )
}

export default Confirm;