import React, {FC, useMemo} from 'react'
import Select from '../../UI/Select/Select';

interface ISortProducts {
  getSortValue: (value: string) => void
}

const SortProducts: FC<ISortProducts> = ({getSortValue }) => {
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

  const activeOption = (option: {
    value: string
    text: string
  }) => {
    getSortValue(option.value)
  }

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