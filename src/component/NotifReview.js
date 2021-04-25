import React from 'react'
import {NavDropdown } from "react-bootstrap";


function NotifReview(props) {
    return (
        <>
            <NavDropdown.Item href={`/review-produk/${props.item._id}`}>
                Produk <b>{props.item.bumbuProduk_id.name}</b> menunggu untuk di review !
            </NavDropdown.Item>
            {props.index !== props.arr.length-1 && <NavDropdown.Divider /> }
        </>
    )
}

export default NotifReview
