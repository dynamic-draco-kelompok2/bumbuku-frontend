import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getHistoryTransaksi } from '../redux/actions/historytransaction.actions';

const HistoryTransaksi = () => {
  const dispatch = useDispatch()
  const historyTransaction = useSelector((state) => state.handleHistoryTransaksi.data)
  console.log(historyTransaction)
  useEffect(() => {
    dispatch(getHistoryTransaksi())
  }, [dispatch])
  return (
    <div className="p-4">
      <h1 className="tw-font-opensans tw-text-xl">
        History Transaksi
      </h1>
    </div>
  )
}

export default HistoryTransaksi
