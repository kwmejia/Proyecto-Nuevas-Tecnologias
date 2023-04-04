import { createPortal } from 'react-dom'
import './loading.scss'

export default function Loading () {
  return createPortal(
    <div className="loading">
      <div></div>
    </div>,
    document.getElementById('loading')
  )
}
