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
    const {quantityShowedProducts} = useSelectorHook(state => state.productReducer)
    const {setPage} = useDispatchHook()
    const pageRef = useRef(null)
    const [pageOld, setPageOld] = useState<number>(0)

    useEffect(() => {
      if (page === 1) {
        // @ts-ignore
        pageRef.current.classList.add(`${classes.active}`)
      }
    }, [])

    const paginationClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
      const $target = event.currentTarget
      const pageCurrent = Number($target.innerHTML)

      $target.parentElement?.querySelector(`.${classes.active}`)?.classList.remove(`${classes.active}`)
      $target.classList.add(`${classes.active}`)

      // console.log(pageCurrent, 'pageCurrent')
      // console.log(pageOld, 'pageOld')
      // if (pageCurrent >= pageOld) {
      //   console.log('+')
      //   setPage(quantityShowedProducts * pageCurrent)
      //   setPageOld(pageCurrent)
      // }
      // if (pageCurrent <= pageOld) {
      //   console.log('-')
      //   setPage(quantityShowedProducts / pageCurrent)
      //   setPageOld(pageCurrent)
      // }
      // console.log(quantityShowedProducts)
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