import { useCart } from '../context/CartContext'
import './Toast.css'

export default function Toast() {
  const { toasts } = useCart()
  return (
    <div className="toast-stack">
      {toasts.map(t => (
        <div key={t.id} className="toast">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          {t.msg}
        </div>
      ))}
    </div>
  )
}
