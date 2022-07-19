import React, {FC, useEffect, useRef, useState} from 'react'
import classes from './PaginationProductsItem.module.scss'
import {useSelectorHook} from '../../../../hooks/useSelectorHook';
import {useDispatchHook} from '../../../../hooks/useDispatchHook';

interface IPaginationProductsItem {
  page: number
  className?: string
}

const PaginationProductsItem: FC<IPaginationProductsItem> =
  ({page, className}) => {
    const {quantityShowedProducts, totalPagesLoaded} = useSelectorHook(state => state.productReducer)
    const {setPage} = useDispatchHook()
    const pageRef = useRef(null)

    useEffect(() => {
      const pageCurrent = totalPagesLoaded / quantityShowedProducts
      if (page === pageCurrent) {
        // @ts-ignore
        pageRef.current.classList.add(`${classes.active}`)
      }
    }, [])

    const paginationClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
      const $target = event.currentTarget
      const pageCurrent = Number($target.innerHTML)

      $target.parentElement?.querySelector(`.${classes.active}`)?.classList.remove(`${classes.active}`)
      $target.classList.add(`${classes.active}`)

      setPage(quantityShowedProducts * pageCurrent)
    }

    return (
      <>
        <div ref={pageRef} className={[classes.page, className].join(' ')} onClick={paginationClickHandler}>
          {page}
        </div>
      </>
    )
  }

export default PaginationProductsItem