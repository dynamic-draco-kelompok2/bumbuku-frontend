import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from 'react-helmet'
import { Container, Row, Col, Button, Toast, Spinner, Form } from "react-bootstrap";
import { RatingStar } from "rating-star";

// import {  } from '../redux/actions/review.action';

function ReviewProdukPage() {
    let { id } = useParams();
	const dispatch = useDispatch();
    const review = useSelector((state) => state.handleReview);
    const reviewByID = review.data[review.data.findIndex(item => item._id === id)];
    const [rating, setRating] = React.useState(1);
    console.log(review);

    const [show, setShow] = useState({
        valid: false,
        title: "",
        text: "",
    });

    const onRatingChange = (score) => {
        setRating(score);
      };

    // useEffect(() => {
	// 	dispatch(getBumbuById(id));
	// 	dispatch(getCustomBumbu());
	// }, [dispatch, id]);

    return (
        <>
        <Helmet>
			<meta charSet="utf-8"/>
			<title>Bumbuku - Review Product</title>
			<meta name="description" content="about"/>
      	</Helmet>
        {review.data.length === 0 ?
            <div className="tw-w-screen tw-h-screen tw-bg-black tw-opacity-50 tw-fixed tw-top-0 tw-left-0 hidden md:flex tw-z-30">
                <div className="h-100 d-flex align-items-center justify-content-center">
					<Spinner className="" animation="border" variant="warning"/>
                </div>
            </div>
        :
        <Container>
            <Row className="d-flex justify-content-center">
				<Toast className="my-toast" onClose={() => setShow({...show,valid:false})} show={show.valid} delay={9000} autohide>
				<Toast.Header className="tw-bg-base text-white">
					<img
					src="holder.js/20x20?text=%20"
					className="rounded mr-2"
					alt=""
					/>
					<strong className="mr-auto">{show.title}</strong>
				</Toast.Header>
				<Toast.Body className="f-bold">{show.text}</Toast.Body>
				</Toast>
            </Row>
            <Row className="mx-2 tw-mt-10">
                <Col xs={12} lg={6}>
					<img
						src={reviewByID.bumbuProduk_id.image}
						alt="gambar"
						className="tw-rounded tw-w-full tw-h-48 tw-object-cover md:tw-h-96 lg:tw-max-w-md lg:tw-h-72"
					/>
				</Col>
				<Col xs={12} lg={6}>
					<div>
						<h3 className="tw-font-opensans tw-pt-2 tw-mb-1 tw-font-bold">
							{reviewByID.bumbuProduk_id.name}
						</h3>
					</div>
					<div className="tw-flex tw-flex-col tw-border-t tw-border-grey tw-mt-4 tw-py-2">
						<span className="tw-font-opensans tw-font-bold">
							Description:
						</span>
						<span className="tw-font-opensans">
							{reviewByID.bumbuProduk_id.description}
						</span>
					</div>
				</Col>
				<Col xs={12} className="mt-3">
					<div className="tw-font-opensans tw-pt-2 tw-mb-1 tw-font-bold">
						Rating
					</div>

					<RatingStar
						clickable
						maxScore={5}
						id="123"
						rating={rating}
						onRatingChange={onRatingChange}
					/>

					<div className="tw-font-opensans tw-pt-2 tw-mb-1 tw-font-bold mt-3">
						Review
					</div>
					<Form onSubmit={(e) => dispatch()}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control required 
                          className="rounded-3xl" 
                          type="text" 
                          placeholder="Tulis review anda untuk produk ini"
                          name="reviewWord"/>
                    </Form.Group>
					<Button type="submit" variant="primary" className="mt-3 tw-bg-base tw-border-base tw-shadow-base">
                        Submit
                    </Button>
					</Form>
				</Col>
            </Row>
        </Container>
        }
        </>
    )
}

export default ReviewProdukPage
