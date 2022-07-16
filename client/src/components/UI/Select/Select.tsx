import React, {FC, useState} from 'react'
import classes from './Select.module.scss';

interface ISelectDefaultState {
  value: string
  text: string
}

interface ISelect {
  options: any[]
  SelectDefaultState?: ISelectDefaultState
  activeOption?: (option: ISelectDefaultState) => void
}

const Select: FC<ISelect> =
  ({
     options,
     SelectDefaultState = {
       value: options[0].value,
       text: options[0].text
     },
     activeOption
   }) => {
    const [isList, setIsList] = useState<boolean>(false)
    const [selectDefault, setSelectDefault] = useState<ISelectDefaultState>(SelectDefaultState)

    const selectClickHandler = () => {
      if (isList) {
        setIsList(false)
      } else {
        setIsList(true)
      }
    }

    const optionClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
      const target = event.currentTarget
      const valueOption = String(target.getAttribute('data-value'))
      const textOption = target.innerHTML

      setSelectDefault({value: valueOption, text: textOption})
      setIsList(false)
      if (activeOption) {
        activeOption({value: valueOption, text: textOption})
      }
    }
    return (
      <div className={classes.wrapper}>
        <div className={classes.dropdown}>
          <button onClick={selectClickHandler} className={classes.select}>
            <span className={classes.selectName}>Сортировать: </span>
            <span className={classes.selectText}>{selectDefault.text}</span>
          </button>
          {isList ?
            <ul className={classes.list}>
              {options.map((option, index) =>
                <li
                  key={index}
                  onClick={optionClickHandler}
                  className={classes.item}
                  data-value={option.value}
                >
                  {option.text}
                </li>
              )}
            </ul> :
            <></>}
        </div>
      </div>
    )
  }

export default Select