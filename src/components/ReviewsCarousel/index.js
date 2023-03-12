// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  gotoPreviousReview = () => {
    this.setState(prevState => ({index: prevState.index - 1}))
  }

  gotoNextReview = () => {
    this.setState(prevState => ({index: prevState.index + 1}))
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[index]
    const n = reviewsList.length - 1

    return (
      <div className="bg-cont">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="profile" />
        <div className="arrows-cont">
          {index > 0 ? (
            <button
              type="button"
              className="arrow"
              onClick={this.gotoPreviousReview}
              date-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
          ) : (
            <button type="button" className="arrow" date-testid="leftArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="right arrow"
              />
            </button>
          )}
          <p className="username">{username}</p>
          {index < n ? (
            <button
              type="button"
              className="arrow"
              onClick={this.gotoNextReview}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt={username}
              />
            </button>
          ) : (
            <button type="button" className="arrow" data-testid="rightArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt={username}
              />
            </button>
          )}
        </div>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
