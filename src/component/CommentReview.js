import React from 'react'
import { Container, Row, Col, Button, Toast, Spinner } from "react-bootstrap";

function CommentReview(props) {

    console.log(props.item)
    return (
        <>
        <Col xs={10} className="mt-3 ml-3">
            <div className="tw-font-bold tw-font-opensans tw-mt-2 tw-text-base">{props.item.username}</div>
            <div className="tw-font-opensans ml-3">{props.item.comment}</div>
            <div className="linePlaceOrder"></div>
        </Col>
        </>
    )
}

export default CommentReview
