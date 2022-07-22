import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://theculturetrip.com/wp-content/uploads/2021/06/kiridara-luang-prabang.jpg" 
        alt="" 
        className='siImg'/>
        <div className='siDesc'>
          <h1 className='siTitle'>Tower street hotels</h1>
          <span className='siDis'>500m from you</span>
          <span className='siFree'>free coffee</span>
          <span className='siSub'>Studio hetel</span>
          <span className='siFeatures'>Entire studio . 1 bathroom . 21m 1 full bed</span>
          <span className='siCancel'>Free cancellation</span>
          <span className='siCancelSub'>You can cancel later, so lock in the great price today!</span>
        </div>
        <div className='siDetails'>
                <div className='siRating'> 
                  <span>Excellent</span>
                  <button>8.9</button>
                </div>
                <div className='siDetailTexts'>
                    <span className='siPrice'>
                        ₭ 150,000
                    </span>
                    <span className='siTex'>Includes taxes and fees</span>
                    <button className='siCheckBtn'>See avaiability</button>
                </div>
        </div>
        
    </div>
  )
}

export default SearchItem