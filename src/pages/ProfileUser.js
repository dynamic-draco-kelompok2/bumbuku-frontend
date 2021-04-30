import React, { useState } from "react";
import { Helmet } from "react-helmet";
import EditProfile from "../component/EditProfile";
import { Container, Button} from "react-bootstrap";

const ProfileUser = () => {
	const [editProfile, setEditProfile] = useState(false);
	const getUser = localStorage.getItem("payload");
	const userData = JSON.parse(getUser);

	const handleEditProfile = () => {
		setEditProfile(!editProfile);
	};

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Bumbuku - Your Profile's</title>
				<meta name="description" content="about" />
			</Helmet>
			<Container className="h-footer">
				{userData && (
					<div className="tw-flex tw-flex-col tw-items-center tw-text-center tw-mb-10">
						<h1 className="tw-font-opensans tw-font-regular tw-text-center titleProfile">
							Your Profile
						</h1>
						<p className="subTitleProfile">
							Lengkapi profilmu dan alamat pengiriman dengan benar
						</p>
						<div className="tw-w-full tw-flex tw-flex-col tw-justify-center px-4 tw-max-w-lg">
							<div className="tw-bg-icon tw-flex tw-rounded-full tw-items-center tw-mx-auto photoUserProfile">
								<span className="tw-mx-auto tw-text-4xl">
									{userData.name.charAt(0).toUpperCase()}
								</span>
							</div>
							<div className="tw-pt-4 tw-mx-auto">
								<div className="tw-flex tw-flex-row tw-justify-center">
									{/* <h4 className="tw-font-opensans- tw-text-lg tw-font-semibold">Name: </h4> */}
									<span className="txtNamaUser">{userData.name}</span>
								</div>
								<div className="tw-flex tw-flex-row tw-justify-center txtAlamatUser tw-w-21/2">
                  <span className="">

										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-geo-alt"
											viewBox="0 0 16 16"
										>
											<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
											<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
										</svg>
                  </span>
									{userData.alamat}
								</div>
								<div className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-my-10">
									<h4 className="tw-font-opensans tw-text-lg tw-font-semibold">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-envelope-open colorIconEmail"
											viewBox="0 0 16 16"
										>
											<path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
										</svg>
									</h4>
									<span className="txtEmailUser">{userData.email}</span>
								</div>
								{/* <div className="tw-justify-center"> */}
								{/* <div className="tw-bg-base tw-p-2 tw-px-3 tw-rounded-xl"> */}
								{/* </div> */}
								<Button
									type="submit"
									variant="primary"
									onClick={handleEditProfile}
									className="mt-3 tw-rounded-lg tw-py-2 tw-w-full tw-bg-base tw-border-base tw-shadow-base btnProfile"
								>
									Edit Profile
								</Button>
								{/* </div> */}
							</div>
						</div>
						<EditProfile
							editProfile={editProfile}
							setEditProfile={setEditProfile}
						/>
					</div>
				)}
			</Container>
		</>
	);
};

export default ProfileUser;
