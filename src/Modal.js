function Modal(x) {
  return(
    <div className="modal">
      {x.name}
      <h4>{x.title}</h4>
      <p>{x.createDate}</p>
      <p>{x.content}</p>
    </div>
  )
}

export default Modal;