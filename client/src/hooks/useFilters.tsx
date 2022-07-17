import {useMemo} from 'react';

export const useSort = (array: any[], sortValue: string) => {
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

  return useMemo(() => {
    if (sortValue === 'increasePrice') {
      return array.sort(sortOneLevelLarger('price'))
    }
    if (sortValue === 'descendingPrice') {
      return array.sort(sortOneLevelLess('price'))
    }
    if (sortValue === 'alphabetically') {
      return array.sort(sortTwoLevelLarger('title', 'name'))
    }
    if (sortValue === 'increaseWeight') {
      return array.sort(sortTwoLevelLarger('title', 'weight'))
    }
    if (sortValue === 'descendingWeight') {
      return array.sort(sortTwoLevelLess('title', 'weight'))
    }
    return array
  }, [sortValue, array])
}

export const useFilters = (array: any, sortValue: string, findValue: string) => {
  const sortedArray = useSort(array, sortValue)

  return useMemo(() => {
    const findTitle = sortedArray.filter(item => item.title.name.toLowerCase().includes(findValue.toLowerCase()))
    const findDesc = sortedArray.filter(item => item.desc.toLowerCase().includes(findValue.toLowerCase()))
    return findTitle.concat(findDesc).filter((item, pos) => {
      return findTitle.concat(findDesc).indexOf(item) == pos;
    })
  }, [findValue, sortValue, sortedArray])
}