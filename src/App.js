import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { CurrentQuestion } from 'components/CurrentQuestion'
import { Summary } from 'components/Summary'
import 'app.css'


const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {

  return (
    <Provider store={store}> {/* Gives access to the store*/}
      <section>
        <CurrentQuestion />
        <Summary />
      </section>
    </Provider>
  )
}
