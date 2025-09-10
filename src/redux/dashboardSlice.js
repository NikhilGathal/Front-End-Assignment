import { createSlice } from '@reduxjs/toolkit';
import initialData from '../dashboard.json/';

const saveToLocalStorage = (categories) => {
  localStorage.setItem('categories', JSON.stringify(categories));
};


const storedCategories = localStorage.getItem('categories');
const initialState = {
  categories: storedCategories ? JSON.parse(storedCategories) : initialData.categories,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
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
      saveToLocalStorage(state.categories);

    },

    removeWidgetFromCategory: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(c => c.id === categoryId);

      if (category) {
        category.widgets = category.widgets.filter(w => w.id !== widgetId);
      }

      saveToLocalStorage(state.categories);
    }
  }
});

export const { addWidgetToCategory, removeWidgetFromCategory } = dashboardSlice.actions;
export default dashboardSlice.reducer;
