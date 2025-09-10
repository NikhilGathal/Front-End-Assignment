import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidgetFromCategory } from '../redux/dashboardSlice';
import './Category.css'
import Widget from './Widget';

function Category({ category, openAddWidgetModal }) { 
  
  return (
    <div className="category">
      <h2>{category.name}</h2>
      <button onClick={() => openAddWidgetModal(category.id)}>+ Add Widget</button>

      <div className="widgets">
        {category.widgets.map(widget => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
      </div>
    </div>
  );
}

export default Category