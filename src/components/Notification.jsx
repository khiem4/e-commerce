import { useSelector } from 'react-redux';
import { MdError, MdVerified } from 'react-icons/md'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  return (
    <>
      {notification.success &&
        <div className='notification_success'>
          <MdVerified size={25} />
          {notification.success}
        </div>
      }
      {notification.error &&
        <div className='notification_error'>
          <MdError size={25} />
          {notification.error}
        </div>
      }
    </>
  )
}

export default Notification