import {typesRoutes} from './typesRoutesPages';
import HomePage from './public/HomePage/HomePage';
import BurgersPage from './public/BurgersPage/BurgersPage';
import DrinksPage from './public/DrinksPage/DrinksPage';
import PizzaPage from './public/PizzaPage/PizzaPage';
import SetsPage from './public/SetsPage/SetsPage';
import AdminPage from './admin/AdminPage/AdminPage';

export const authRoutes = [
  {
    path: typesRoutes.ADMIN,
    Element: AdminPage
  }
]

export const publicRoutes = [
  {
    path: typesRoutes.HOME,
    Element: HomePage
  },
  {
    path: typesRoutes.BURGERS,
    Element: BurgersPage
  },
  {
    path: typesRoutes.DRINKS,
    Element: DrinksPage
  },
  {
    path: typesRoutes.PIZZA,
    Element: PizzaPage
  },
  {
    path: typesRoutes.SETS,
    Element: SetsPage
  }
]