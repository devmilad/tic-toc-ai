import React from 'react'
import './App.css'
import { TicToc } from './components/TicToc'
export const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>
          Dev Milad
        </h2>
      </header>
      <main>
        <TicToc />
      </main>
    </div>
  )
}
