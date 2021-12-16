import './Error.scss';
import {Link} from 'react-router-dom'

export default function Error() {
  return (
    <>
      <h1 className='error-title'>404</h1>
      <Link className='error-link' to='/main'>К корню</Link>
    </>
  )
}