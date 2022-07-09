import React, {FC, useState} from 'react'
import classes from '../Product.module.scss';
import Checkbox from '../../UI/Checkbox/Checkbox';
import Button from '../../UI/Button/Button';
import {Col} from 'react-flexbox-grid';

interface IImage {
  href: string
  src: string
  alt: string
}

interface ITitle {
  name: string
  weight: number
  href: string
}

interface ICheckbox {
  name: string
  value: string
  price: number
}

interface IProductList {
  image?: IImage
  title?: ITitle
  desc?: string
  checkbox?: ICheckbox
  price?: number
}

const ProductList: FC<IProductList> = ({checkbox, title, price, image, desc}) => {
  const [products, setProducts] = useState([
    {
      image: {
        href: '#',
        src: 'https://mafia.ua/storage/editor/fotos/480x0/karbonara-metrovaya_1566297127558.jpeg',
        alt: 'pizza1'
      },
      title: {
        name: 'Карбонара метровая',
        weight: 1200,
        href: '#'
      },
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore, eligendi, ex facere in ipsa labore magni modi nostrum odit omnis pariatur repudiandae sint voluptatibus! Eos iusto numquam rem.',
      checkbox: [{
        name: 'Сырный бортик к метровой пицце',
        value: 'CheeseSide',
        price: 59
      }],
      price: 429
    },
    {
      image: {
        href: '#',
        src: 'https://mafia.ua/storage/editor/fotos/480x0/margarita_156706066239.jpeg',
        alt: 'pizza2'
      },
      title: {
        name: 'Маргарита',
        weight: 450,
        href: '#'
      },
      desc: 'Соус маринара, помидоры, сыр моцарелла, соус песто Сирный соус в ПОДАРОК!',
      checkbox: [{
        name: 'Сырный бортик к средней пицце',
        value: 'CheeseSide',
        price: 29
      }],
      price: 149
    },
    {
      image: {
        href: '#',
        src: 'https://mafia.ua/storage/editor/fotos/480x0/pollo_1567060914824.jpeg',
        alt: 'pizza3'
      },
      title: {
        name: 'Поло',
        weight: 550,
        href: '#'
      },
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore, eligendi, ex facere in ipsa labore magni modi nostrum odit omnis pariatur repudiandae sint voluptatibus! Eos iusto numquam rem.',
      checkbox: [{
        name: 'Соус барбекю',
        value: 'barbecueSauce',
        price: 15
      }],
      price: 219
    },
    {
      image: {
        href: '#',
        src: 'https://mafia.ua/storage/editor/fotos/480x0/gurmeo-metrovaya_1566296981221.jpeg',
        alt: 'pizza4'
      },
      title: {
        name: 'Гурмео метровая',
        weight: 1300,
        href: '#'
      },
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore, eligendi, ex facere in ipsa labore magni modi nostrum odit omnis pariatur repudiandae sint voluptatibus! Eos iusto numquam rem.',
      checkbox: [
        {
          name: 'Соус сырный',
          value: 'cheeseSauce',
          price: 25
        },
        {
          name: 'Соус барбекю',
          value: 'barbecueSauce',
          price: 15
        },
        {
          name: 'Сырный бортик к средней пицце',
          value: 'CheeseSide',
          price: 29
        }
      ],
      price: 439
    }
  ])

  const checkboxChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const $priceCurrentProduct = event.currentTarget.parentNode?.parentNode?.parentNode?.parentNode?.querySelector(`.${classes.price}`)
    const priceCurrentProduct = event.currentTarget.parentNode?.parentNode?.parentNode?.parentNode?.querySelector(`.${classes.price}`)?.innerHTML
    const additionalPriceChecked = event.currentTarget.getAttribute('data-price')

    if (event.currentTarget.checked.valueOf()) {
      const priceIncrement = Number(priceCurrentProduct) + Number(additionalPriceChecked)
      $priceCurrentProduct!.innerHTML = `${priceIncrement}`
    } else {
      const priceDecrement = Number(priceCurrentProduct) - Number(additionalPriceChecked)
      $priceCurrentProduct!.innerHTML = `${priceDecrement}`
    }
  }

  const clickHandler = () => {

  }

  return (
    <>
      {products.map((product, index) =>
        <Col key={index} sm={3}>
          <div className={classes.product}>
            <a className={classes.imageLink} href={product.image.href}>
              <img className={classes.image}
                   src={product.image.src} alt={product.image.alt}/>
            </a>
            <div className={classes.content}>
              <div className={classes.title}>
                <a href={product.title.href}>
                  <span>{product.title.name}</span>
                </a>
                <span className={classes.weight}>{product.title.weight} г</span>
              </div>
              <div className={classes.desc}>
                {product.desc}
              </div>
              <div className={classes.checkboxWrapper}>
                {product.checkbox.map((checkbox, index) =>
                  <Checkbox
                    key={index}
                    onChange={checkboxChangeHandler}
                    value={checkbox.value}
                    name={checkbox.name}
                    data-price={checkbox.price}
                    price={checkbox.price}
                  />
                )}
              </div>
              <div className={classes.priceWrapper}>
                <span className={classes.price}>
                  {product.price}
                </span>
                грн
              </div>
              <Button className={classes.button} onClick={clickHandler}>Заказать</Button>
            </div>
          </div>
        </Col>
      )}
    </>
  )
}

export default ProductList