import React from 'react'

function CartDetail(props) {
    return (
        <>
        <tr>
			<td className="py-2 px-2 font-opensans font-regular">- {props.item.bumbuProduk_id.name} </td>
			<td className="py-2 px-2 font-opensans font-regular">Rp. {props.item.bumbuProduk_id.harga}</td>
		</tr>
        {props.item.custom? 
            props.item.custom.map((item, index) => {
                return (
                    <tr key={index}>
                        <td></td>
                        {index === 0? 
                        <td className="py-2 px-2 font-opensans font-regular">- Custom</td>
                        :
                        <td className="py-2 px-2 font-opensans font-regular"></td>
                        }
                        <td className="py-2 px-2 font-opensans font-regular">{item.bumbuDasar_id.name} ({item.gram} gram) : Rp. {item.gram * item.bumbuDasar_id.harga}</td>
                    </tr>
                )
            })
        :
            null
        }
        </>
    )
}

export default CartDetail
