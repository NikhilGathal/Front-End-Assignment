import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidgetFromCategory } from '../redux/dashboardSlice';
import './Widget.css';

function Widget({ widget, categoryId }) {
  const dispatch = useDispatch();

  return (
    <div className="widget-card">
      <h4>{widget.name}</h4>
      <p>{widget.text}</p>
      <button className='widbut' onClick={() =>
        dispatch(removeWidgetFromCategory({ categoryId, widgetId: widget.id }))
      }>
        X
      </button>
    </div>
  );
}

export default Widget;
