import './buyDataForm.css'

const BuyDataForm = ({handlerChange}) => {
  return (
    <>
    
        <form className='form' action="">
            <input className='inputStyle' name="name" onChange={(e) => handlerChange(e)} type="text" placeholder="FULL NAME" />
            
            <br />
            <input className='inputStyle' name="phone" onChange={(e) => handlerChange(e)} type="tel" placeholder="PHONE" />
            
            <br />
            <input className='inputStyle' name="email" onChange={(e) => handlerChange(e)} type="email" placeholder="E-MAIL" />
            
            <br />
            <input className='inputStyle' name="email2" onChange={(e) => handlerChange(e)} type="email" placeholder="REPEAT E-MAIL" />
            
            <br />
            <textarea className='inputStyle inputComment' name="comment" onChange={(e) => handlerChange(e)} id="" cols="30" rows="10" placeholder="COMMENTS" ></textarea>
        </form>
    
    </>
  )
}

export default BuyDataForm