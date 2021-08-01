import React from 'react'
import classNames from 'classnames'
import {
  price, arrowRight, arrowLeft, checkMark,
} from 'assets/icons/iconsLib'
import Icon from 'assets/icons/Icon'
import CustomIcon from 'assets/icons/CustomIcon'
import PropTypes from 'prop-types'
import orderStatus from 'interfaces/orders/orderStatus'
import { customPaymentIcons, paymentIcons } from 'libs/icons'
import styles from './OrderFooter.module.scss'

const OrderFooter = ({
  column,
  order,
  changeOrderStatus,
}) => {
  const { totalPrice, paymentMethod } = order
  const isMiddleColumn = column !== 0
  const isLastColumn = column === orderStatus.length - 1

  return (
    <footer className={styles.cardFooter}>

      {customPaymentIcons.has(paymentMethod)
        ? (
          <CustomIcon
            icon={paymentIcons[paymentMethod]}
            className={styles.mainIcon}
            size="20px"
            color="#E5CA00"
          />
        )
        : (
          <Icon
            icon={paymentIcons[paymentMethod]}
            className={styles.mainIcon}
            size="20px"
            color="#E5CA00"
          />
        )}

      <span>{totalPrice}</span>
      <div className={styles.iconContainer}>
        {isMiddleColumn && (
        <Icon
          icon={arrowLeft}
          className={classNames(styles.arrowIcon, styles.firstIcon)}
          size="15px"
          onClick={() => changeOrderStatus('back')}
        />
        )}
        <Icon
          icon={isLastColumn ? checkMark : arrowRight}
          className={styles.arrowIcon}
          size="15px"
          onClick={() => changeOrderStatus('forth')}
        />
      </div>
    </footer>
  )
}

OrderFooter.propTypes = {
  order: PropTypes.shape({
    totalPrice: PropTypes.string.isRequired,
    paymentMethod: PropTypes.string.isRequired,
  }).isRequired,
  column: PropTypes.number.isRequired,
  changeOrderStatus: PropTypes.func.isRequired,
}

export default OrderFooter
