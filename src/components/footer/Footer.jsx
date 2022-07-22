import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='fLists'>
            <ul className='fList'>
                <li className='fListTitleItem'>Countries</li>
                <li className='fListItem'>Laos</li>
                <li className='fListItem'>Laos</li>
                <li className='fListItem'>Laos</li>
            </ul>
            <ul className='fList'>
                <li className='fListTitleItem'>About Us</li>
                <li className='fListItem'>Hotel booking</li>
                <li className='fListItem'>Train booking</li>
            </ul>
            <ul className='fList'>
                <li className='fListTitleItem'>Conditions</li>
            </ul>
        </div>
        <div className='fText'>Copyright @ 2022 booking.</div>
    </div>
  )
}

export default Footer