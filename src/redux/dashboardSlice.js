import { createSlice } from '@reduxjs/toolkit';
import initialData from '../dashboard.json/';



const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialData,
  reducers: {
    addWidgetToCategory: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);

      if (category) {
        const existingWidgetIndex = category.widgets.findIndex(w => w.id === widget.id);

        if (existingWidgetIndex >= 0) {
          category.widgets[existingWidgetIndex].text = widget.text;
        } else {
          category.widgets.push(widget);
        }
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
