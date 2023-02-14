import { useSelector } from 'react-redux';
import { MdVerified } from 'react-icons/md'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  return (
    <div className='notification_popup'>
      {notification.map((notify, index) =>
        <div key={index}>
          <div>
            <MdVerified />
            {notify}
          </div>
        </div>
      )}
    </div>
  )
}

export default Notification