import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem} = props
  const {tabId, displayText} = tabDetails

  return (
    <li className="tab-item-container">
      <button className="" type="button" onClick={clickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
