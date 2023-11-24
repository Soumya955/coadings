import React from 'react'
import './css/FilteredCard.css'
import { Switch } from '@chakra-ui/react'

export default function FilteredCard({showCompleted,setShowCompleted}) {
  return (
    <div className="filter-completed">
        <label>Show Completed Tasks:</label>
        <Switch
          checked={showCompleted}
          onChange={() => setShowCompleted(!showCompleted)}
          size="lg"
        />
      </div>
  )
}
