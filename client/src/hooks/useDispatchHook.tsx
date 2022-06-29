import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import RootActions from '../store/actions/rootActions'

export const useDispatchHook = () => {
  const dispatch = useDispatch()
  return bindActionCreators(RootActions, dispatch)
}