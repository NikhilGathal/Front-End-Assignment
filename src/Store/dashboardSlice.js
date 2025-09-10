import { createSlice } from '@reduxjs/toolkit';
import initialData from '../../dashboard.json';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialData,
  reducers: {
    addWidgetToCategory: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(c => c.id === categoryId);
      if (category && !category.widgets.find(w => w.id === widget.id)) {
        category.widgets.push(widget);
      }
    },
    removeWidgetFromCategory: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(c => c.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(w => w.id !== widgetId);
      }
    }
  }
});

export const { addWidgetToCategory, removeWidgetFromCategory } = dashboardSlice.actions;
export default dashboardSlice.reducer;
