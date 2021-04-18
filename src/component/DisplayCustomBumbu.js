import React from 'react'

const DisplayCustomBumbu = ({addCustom}) => {
  return (
    <div className="tw-w-full">
      {addCustom.length >= 1 && (
        <table className="tw-w-full tw-text-left tw-mb-4"> 
        <thead>
          <tr className="tw-font-opensans tw-font-medium tw-text-base tw-text-basic">
            <th className="">Image</th>
            <th className="tw-px-1">Item</th>
            <th className="tw-pl-4">Harga</th>
            <th className="">Berat</th>
          </tr>
        </thead>
        {!!addCustom && addCustom.map((item) => (
          <tbody key={item.id}>
            <tr>
              <td className="tw-py-1">
                <img
                  src={item.imageBumbu}
                  alt="gambar"
                  className="tw-w-10 tw-h-10 tw-object-cover tw-mr-2"
                />
              </td>
              <td className="tw-text-sm tw-font-medium tw-w-16 tw-px-1">
                {item.namaBumbu}
              </td>
              <td className="tw-text-sm tw-font-medium tw-pl-4">
                Rp. {item.hargaBumbu}
              </td>
              <td className="tw-text-sm tw-font-medium">
                {item.qty} gram
              </td>
            </tr>
          </tbody>
        ))} 
    </table>
      )}
    </div>
  )
}

export default DisplayCustomBumbu
