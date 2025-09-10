import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Category from './Component/Category'
import AddWidgetModal from './Component/AddWidgetModal'
import SearchBar from './Component/SearchBar'
import './App.css'

function App() {
  const categories = useSelector((state) => state.dashboard.categories)
  const [modalCategoryId, setModalCategoryId] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const openAddWidgetModal = (categoryId) => setModalCategoryId(categoryId)
  const closeAddWidgetModal = () => setModalCategoryId(null)

  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.text.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }))

  //.filter( (ca)=>ca.widgets.length > 0 )
  
  return (
    <div className="app">
      <h1>Dashboard</h1>

      <SearchBar query={searchQuery} setQuery={setSearchQuery} />
      {filteredCategories.map((category) => (
        <Category
          key={category.id}
          category={category}
          openAddWidgetModal={openAddWidgetModal}
        />
      ))}

      {modalCategoryId && (
        <AddWidgetModal
          categoryId={modalCategoryId}
          closeModal={closeAddWidgetModal}
        />
      )}
    </div>
  )
}

export default App
