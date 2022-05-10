import './style.fund-component.css';

const FundComponent = ({src, description}) => {
  return (
    <div className="fund-main-component">
        <img className='fund-img' src={src} alt="fund-img" />
        <button className='fund-btn'>{description}</button>
    </div>
  )
}

export default FundComponent