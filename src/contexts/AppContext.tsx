import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';

export interface Product {
  id: number;
  title: string;
  subtitle?: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  material?: string;
  dimensions?: string;
  description?: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedMaterial?: string;
  selectedSize?: string;
}

interface AppState {
  cart: CartItem[];
  favorites: Product[];
  comparison: Product[];
  recentlyViewed: Product[];
}

type AppAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_TO_FAVORITES'; payload: Product }
  | { type: 'REMOVE_FROM_FAVORITES'; payload: number }
  | { type: 'ADD_TO_COMPARISON'; payload: Product }
  | { type: 'REMOVE_FROM_COMPARISON'; payload: number }
  | { type: 'CLEAR_COMPARISON' }
  | { type: 'ADD_TO_RECENTLY_VIEWED'; payload: Product }
  | { type: 'LOAD_STATE'; payload: AppState };

const initialState: AppState = {
  cart: [],
  favorites: [],
  comparison: [],
  recentlyViewed: [],
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.cart.find(item => 
        item.id === action.payload.id && 
        item.selectedMaterial === action.payload.selectedMaterial &&
        item.selectedSize === action.payload.selectedSize
      );
      
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id && 
            item.selectedMaterial === action.payload.selectedMaterial &&
            item.selectedSize === action.payload.selectedSize
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };

    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };

    case 'ADD_TO_FAVORITES': {
      const exists = state.favorites.find(item => item.id === action.payload.id);
      if (exists) return state;
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }

    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id !== action.payload),
      };

    case 'ADD_TO_COMPARISON': {
      const exists = state.comparison.find(item => item.id === action.payload.id);
      if (exists) return state;
      // Ограничиваем до 4 товаров для сравнения
      if (state.comparison.length >= 4) {
        return {
          ...state,
          comparison: [...state.comparison.slice(1), action.payload],
        };
      }
      return {
        ...state,
        comparison: [...state.comparison, action.payload],
      };
    }

    case 'REMOVE_FROM_COMPARISON':
      return {
        ...state,
        comparison: state.comparison.filter(item => item.id !== action.payload),
      };

    case 'CLEAR_COMPARISON':
      return {
        ...state,
        comparison: [],
      };

    case 'ADD_TO_RECENTLY_VIEWED': {
      const filtered = state.recentlyViewed.filter(item => item.id !== action.payload.id);
      // Ограничиваем до 10 последних просмотренных товаров
      const updated = [action.payload, ...filtered].slice(0, 10);
      return {
        ...state,
        recentlyViewed: updated,
      };
    }

    case 'LOAD_STATE':
      return action.payload;

    default:
      return state;
  }
}

interface AppContextType {
  state: AppState;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateCartQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  addToFavorites: (item: Product) => void;
  removeFromFavorites: (id: number) => void;
  addToComparison: (item: Product) => void;
  removeFromComparison: (id: number) => void;
  clearComparison: () => void;
  addToRecentlyViewed: (item: Product) => void;
  isInCart: (id: number) => boolean;
  isInFavorites: (id: number) => boolean;
  isInComparison: (id: number) => boolean;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Загружаем состояние из localStorage при инициализации
  useEffect(() => {
    const savedState = localStorage.getItem('appState');
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        dispatch({ type: 'LOAD_STATE', payload: parsedState });
      } catch (error) {
        console.error('Error loading state from localStorage:', error);
      }
    }
  }, []);

  // Сохраняем состояние в localStorage при изменениях
  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

  const addToCart = (item: CartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const updateCartQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id, quantity } });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const addToFavorites = (item: Product) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: item });
  };

  const removeFromFavorites = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: id });
  };

  const addToComparison = (item: Product) => {
    dispatch({ type: 'ADD_TO_COMPARISON', payload: item });
  };

  const removeFromComparison = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_COMPARISON', payload: id });
  };

  const clearComparison = () => {
    dispatch({ type: 'CLEAR_COMPARISON' });
  };

  const addToRecentlyViewed = (item: Product) => {
    dispatch({ type: 'ADD_TO_RECENTLY_VIEWED', payload: item });
  };

  const isInCart = (id: number) => {
    return state.cart.some(item => item.id === id);
  };

  const isInFavorites = (id: number) => {
    return state.favorites.some(item => item.id === id);
  };

  const isInComparison = (id: number) => {
    return state.comparison.some(item => item.id === id);
  };

  const getCartTotal = () => {
    return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return state.cart.reduce((count, item) => count + item.quantity, 0);
  };

  const value: AppContextType = {
    state,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    addToFavorites,
    removeFromFavorites,
    addToComparison,
    removeFromComparison,
    clearComparison,
    addToRecentlyViewed,
    isInCart,
    isInFavorites,
    isInComparison,
    getCartTotal,
    getCartCount,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}