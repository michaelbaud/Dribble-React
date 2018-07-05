import React from 'react'

const Header = () => {
  return(
    <div className="">

      {/* NAV */}
      <div className='bg-mid-gray relative'>
        <nav className="pv3 relative ml3">
          <a href='#' className="white ph2">Shots</a>
          <a href='#' className="silver ph2 hover">Designers</a>
          <a href='#' className="silver ph2">Teams</a>
          <a href='#' className="silver ph2">Community</a>
          <a href='#' className="silver ph2">Jobs</a>
          <a href='#' className="silver ph2">Hiring</a>
          <a href='#' className="silver ph2 absolute f2 nt3">...</a>
        </nav>
        <div className="absolute right-0 top-0 mr4" style={{marginTop: '0.8em'}}>
          <a href="#" className="silver ph2">Singn up</a>
          <a href="#" className="silver ph2">Singn in</a>
          <input type="text" placeholder="Search" className="b--none br2 pa1 f6"></input>
        </div>
      </div>
      {/* END NAV */}

      {/* BANNER 1 */}
      <div className="bg-dark-gray pv4 ph3">
        <div className="f4 tc">
          <span className="white">What are you working on?</span>
          <span className="silver ml2">Dribbble is where designers get inspired and hired. </span>
        </div>
        <div className="tc mt3">
          <a href="#" className="pv2 ph3 br2 bg-hot-pink hover-bg-dark-pink white dib">Continue →</a>
        </div>
      </div>
      {/* END BANNER 1 */}

      {/* BANNER 2 */}
      <div className="pv3 bg-mid-gray tc ph3">
        <span className="silver">Looking to hire a <span className="nowrap">designer ?</span></span>
        <br className="db dn-ns" />
        <a href="#" className="white underline ml2"><span className="nowrap">Learn more</span></a>
      </div>
      {/* END BANNER 2 */}

    </div>
  )
}

export default Header
