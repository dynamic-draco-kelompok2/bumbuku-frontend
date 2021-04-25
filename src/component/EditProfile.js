import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editAlamatUser } from "../redux/actions/user.actions";
import { Container, Row, Form } from "react-bootstrap";

const EditProfile = ({ editProfile, setEditProfile }) => {
	const dispatch = useDispatch();
	const getUser = localStorage.getItem("payload");
	const userData = JSON.parse(getUser);
	const [updateAlamat, setUpdateAlamat] = useState("");

	const handleCloseModal = () => {
		setUpdateAlamat("");
		setEditProfile(false);
	};

	const handleUpdate = (e) => {
		const newAlamatUser = { ...userData, alamat: updateAlamat };
		e.preventDefault();
		localStorage.removeItem("payload");
		localStorage.setItem("payload", JSON.stringify(newAlamatUser));
		dispatch(editAlamatUser({ _id: userData._id, newAlamatUser }));
		setEditProfile(false);
	};

	return (
		<div>
			{editProfile && (
				<Container className="">
					<div className="tw-w-screen tw-h-screen tw-bg-black tw-opacity-50 tw-fixed tw-top-0 tw-left-0 hidden md:flex"></div>
          
					<div className="tw-flex tw-justify-center tw-z-50">
						<div className="tw-bg-desktop tw-w-full tw-h-full tw-flex tw-flex-col tw-rounded tw-fixed tw-top-0 md:tw-top-20 md:tw-max-w-xl md:tw-h-4/5 lg:tw-max-w-3xl">
							<div className="tw-pt-5 tw-flex tw-justify-between tw-px-4">
								<div></div>
								<div className="tw-bg-icon tw-w-8 tw-h-8 tw-rounded-full tw-cursor-pointer">
									<div
										className="tw-flex tw-justify-center"
										style={{ marginTop: "2px" }}
										onClick={handleCloseModal}
									>
										<span className="tw-text-xl tw-text-white tw-font-medium">
											X
										</span>
									</div>
								</div>
							</div>
              
							<div className="tw-px-4">
								<h1 className="tw-font-opensans tw-font-regular tw-text-center titleProfile">
									Edit Your Profile
								</h1>
								<div className="tw-bg-icon tw-flex tw-rounded-full tw-items-center tw-mx-auto photoUserProfile">
									<span className="tw-mx-auto tw-text-4xl">
										{userData.name.charAt(0).toUpperCase()}
									</span>
								</div>

								<Row className="tw-flex tw-flex-col tw-justify-center tw-mx-auto tw-items-center tw-w-82 tw-mt-5">
									<Form>
                  
										<Row className="tw-flex tw-flex-row tw-my-4 tw-w-70 txtAlamatUser">
											<span className="">Name : </span>
											<span className="tw-ml-6">{userData.name}</span>
										</Row>
										<Row className="tw-flex tw-flex-row tw-my-4 tw-w-70 txtAlamatUser">
											<span className="">Email : </span>
											<span className="tw-ml-7">{userData.email}</span>
										</Row>
										<Row className="tw-flex tw-flex-row tw-my-4 tw-w-70 txtAlamatUser">
											<span className="">Alamat : </span>
											<textarea
												className="tw-rounded tw-items-center tw-text-xs tw-pl-1 tw-pt-1 tw-font-opensans tw-ml-4"
												value={updateAlamat}
												onChange={(e) => setUpdateAlamat(e.target.value)}
												placeholder={userData.alamat}
												rows="7"
												cols="25"
											/>
										</Row>
										<button
											className="mt-3 tw-rounded-lg tw-py-2 tw-w-full tw-bg-base tw-border-base tw-shadow-base btnProfile tw-text-white"
											onClick={handleUpdate}
										>
											Update
										</button>
									</Form>
								</Row>
							</div>
						</div>
					</div>
				</Container>
			)}
		</div>
	);
};

export default EditProfile;
