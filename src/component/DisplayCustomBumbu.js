import React from 'react'

const DisplayCustomBumbu = ({addCustom}) => {
  return (
    <div>
      {!!addCustom && addCustom.map((item) => (
        <table className="w-full text-left borderless"> 
          <thead>
            <tr className="font-opensans font-semibold text-basic">
              <th>Image</th>
              <th>Item</th>
              <th>Harga</th>
              <th>Berat</th>
            </tr>
          </thead>
          <tbody key={item.id}>
            <tr>
              <td>
                <img
                  src={item.imageBumbu}
                  alt="gambar"
                  className="w-10 h-10 object-cover mr-2"
                />
              </td>
              <td className="text-sm font-medium">
                {item.namaBumbu}
              </td>
              <td className="text-sm font-medium">
                Rp. {item.hargaBumbu}
              </td>
              <td className="text-sm font-medium">
                {item.qty} gram
              </td>
            </tr>
          </tbody>
        </table>
      ))} 
    </div>
  )
}

export default DisplayCustomBumbu
