import React, {useEffect, useMemo} from 'react'
import Select from '../../UI/Select/Select';
import {useSelectorHook} from '../../../hooks/useSelectorHook';
import {useDispatchHook} from '../../../hooks/useDispatchHook';
import {changeProduct} from '../../../store/actions/productAction';

const SortProducts = () => {
  const options = useMemo(() => {
    return [
      {
        value: 'alphabetically',
        text: 'по алфавиту'
      },
      {
        value: 'descendingPrice',
        text: 'по убыванию цены'
      },
      {
        value: 'increasePrice',
        text: 'по возрастанию цены'
      },
      {
        value: 'descendingWeight',
        text: 'по убыванию веса'
      },
      {
        value: 'increaseWeight',
        text: 'по возрастанию веса'
      }
    ]
  }, [])
  const {products} = useSelectorHook(state => state.productReducer)
  const {changeProduct} = useDispatchHook()

  const sortOneLevelLarger = (field: string) => {
    return (a: any, b: any) => a[field] > b[field] ? 1 : -1
  }

  const sortOneLevelLess = (field: string) => {
    return (a: any, b: any) => a[field] < b[field] ? 1 : -1
  }

  const sortTwoLevelLarger = (field1: string, field2: string) => {
    return (a: any, b: any) => a[field1][field2] > b[field1][field2] ? 1 : -1
  }

  const sortTwoLevelLess = (field1: string, field2: string) => {
    return (a: any, b: any) => a[field1][field2] < b[field1][field2] ? 1 : -1
  }

  const activeOption = (option: {
    value: string
    text: string
  }) => {
    if (option.value === 'increasePrice') {
      changeProduct(products.sort(sortOneLevelLarger('price')))
    }
    if (option.value === 'descendingPrice') {
      changeProduct(products.sort(sortOneLevelLess('price')))
    }
    if (option.value === 'alphabetically') {
      changeProduct(products.sort(sortTwoLevelLarger('title', 'name')))
    }
    if (option.value === 'increaseWeight') {
      changeProduct(products.sort(sortTwoLevelLarger('title', 'weight')))
    }
    if (option.value === 'descendingWeight') {
      changeProduct(products.sort(sortTwoLevelLess('title', 'weight')))
    }
  }

  useEffect(() => {
    changeProduct(products.sort(sortTwoLevelLarger('title', 'name')))
  }, [])

  return (
    <>
      <Select
        options={options}
        activeOption={activeOption}
      />
    </>
  )
}

export default SortProducts