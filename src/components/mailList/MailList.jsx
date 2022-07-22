import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <span>Sign up and we will send the best deals to you</span>
       <div className="mailInputContainer">
         <input type="text" placeholder="Your email" />
         <button>Subscribe</button>
       </div>
    </div>
  )
}

export default MailList