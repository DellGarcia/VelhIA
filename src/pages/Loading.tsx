import { X, Circle } from '@styled-icons/feather'

import '../styles/loading.scss';

export function Loading() {
  return (
    <div id="page-loading">
      <div className="animation-container">
        <X className="x1"/>
        <Circle className="circle"/>
        <X className="x2" />
      </div>
      <span>Espere um pouco enquanto preparamos um oponente!</span>
    </div>
  )
}