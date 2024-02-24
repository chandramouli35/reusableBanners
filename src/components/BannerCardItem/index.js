// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {details} = props
  const {headerText, description, className} = details

  return (
    <li className="listItems-card">
      <div className="card-container">
        <div className={className}>
          <div>
            <h1 className="heading">{headerText}</h1>
            <p className="paragraph">{description}</p>
            <button className="button" type="button">
              Show More
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default BannerCardItem
