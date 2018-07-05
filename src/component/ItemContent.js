import React from 'react'

const ItemContent = (props) => {
  return(
    <div className="w-80 w-50-m w-25-l dib">
      <div className="w-90 pa2 bg-white br1 mv3 center" style={{boxShadow: '0px 1px 2px rgb(163, 157, 157)'}}>
        <img src={props.image} />
        <i class="fas fa-paperclip silver"></i>
        <div className="fr">
          <i class="fas fa-eye silver"></i><span className="mr2 silver f6 ml1">{props.views}</span>
          <i class="fas fa-comment silver"></i><span className="mr2 silver f6 ml1">{props.comments}</span>
          <i class="fas fa-heart silver"></i><span className="silver f6 ml1">{props.likes}</span>
        </div>
      </div>
    </div>
  )
}

export default ItemContent
