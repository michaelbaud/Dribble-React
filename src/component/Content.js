import React from 'react'
import ItemContent from './ItemContent'

class Content extends React.Component {

  state = {
    items: [
      {image:"./images/img1.png", views:"2,254", comments:"9", likes:"452"},
      {image:"./images/img2.png", views:"2,254", comments:"9", likes:"452"},
      {image:"./images/img3.png", views:"2,254", comments:"9", likes:"452"},
      {image:"./images/img4.png", views:"2,254", comments:"9", likes:"452"},
      {image:"./images/img5.png", views:"2,254", comments:"9", likes:"452"},
      {image:"./images/img6.jpg", views:"2,254", comments:"9", likes:"452"},
      {image:"./images/img7.png", views:"2,254", comments:"9", likes:"452"},
      {image:"./images/img8.png", views:"2,254", comments:"9", likes:"452"},
      {image:"./images/img9.png", views:"2,254", comments:"9", likes:"452"},
      {image:"./images/img10.png", views:"2,254", comments:"9", likes:"452"},
      {image:"./images/img11.png", views:"2,254", comments:"9", likes:"452"},
      {image:"./images/img12.jpg", views:"2,254", comments:"9", likes:"452"}
    ]
  }

  render() {
    const renderItems = this.state.items.map(item => {
      return <ItemContent image={item.image} views={item.views} comments={item.comments} likes={item.likes}/>
    })

    return(
      <div>

        {/* FILTER */}
        <div className="tc pv3">
          <a href="#" className="dark-gray ph3">Popular <span className="light-silver f6">v</span></a>
          <a href="#" className="dark-gray ph3">Shots <span className="light-silver f6">v</span></a>
          <a href="#" className="dark-gray ph3">Now <span className="light-silver f6">v</span></a>
        </div>
        {/* END FILTER */}

        {/* CONTENT BLOCK */}
        <div className="bg-light-gray pv4 ph4 bt b--moon-gray">
          {renderItems}
        </div>
        {/* END CONTENT BLOCK */}

      </div>
    )
  }

}

export default Content
