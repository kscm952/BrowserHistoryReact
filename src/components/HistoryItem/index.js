import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const deleteClick = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item">
      <div className="history-timeAccessed-container">
        <p className="history-timeAccessed">{timeAccessed}</p>
      </div>
      <div className="history-details-container">
        <div className="website-details-container">
          <img src={logoUrl} className="logo-icon" alt="domain logo" />
          <div className="domain-details">
            <p className="domain-name">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <div className="delete-icon-container">
          <button
            type="button"
            onClick={deleteClick}
            className="button"
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              className="delete-icon"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
