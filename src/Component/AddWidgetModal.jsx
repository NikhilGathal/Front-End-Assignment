import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWidgetToCategory } from '../redux/dashboardSlice'
import './Addwidgetmodal.css'

function AddWidgetModal({ categoryId, closeModal }) {
  const allWidgets = [
    {
      "id": "w1",
      "name": "Cloud Accounts",
      "text": "Random text for Cloud Accounts"
    },
    {
      "id": "w2",
      "name": "Cloud Account Risk Assessment",
      "text": "Random text for Risk Assessment"
    },
    {
      "id": "w3",
      "name": "Workload Alerts",
      "text": "Random text for Workload Alerts"
    },
    {
      "id": "w4",
      "name": "Image Security Issues",
      "text": "Random text for Image Security Issues"
    }
  ]
  const dispatch = useDispatch()
  const [selectedWidgetId, setSelectedWidgetId] = useState('')
  const [customText, setCustomText] = useState('')

  const handleAdd = () => {
     if (!selectedWidgetId.trim()) {
    alert('Please select a widget.');
    return;
  }

  // if (!customText.trim()) {
  //   alert('Please enter custom text.');
  //   return;
  // }
    const widget = allWidgets.find((w) => w.id === selectedWidgetId)
    if (widget) {
      dispatch(
        addWidgetToCategory({
          categoryId,
          widget: {
            id: selectedWidgetId,
            name: widget.name,
            text: customText || widget.text,
          },
        })
      )
      closeModal()
    }
  }

  return (
    <div className="modal"  onClick={closeModal} >
      <div className="modal-content"  onClick={(e) => e.stopPropagation()} >
        <h3>Select Widget</h3>

        <select
          value={selectedWidgetId}
          onChange={(e) => setSelectedWidgetId(e.target.value)}
        >
          <option value="">-- Select Widget Name--</option>
          {allWidgets.map((widget) => (
            <option key={widget.id} value={widget.id}>
              {widget.name}
            </option>
          ))}
        </select>

        <textarea
          placeholder="Custom Widget Text"
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
        />

        <div className="modal-buttons">
          <button className="add-btn" onClick={handleAdd}>
            Add Widget
          </button>
          <button className="cancel-btn" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddWidgetModal
