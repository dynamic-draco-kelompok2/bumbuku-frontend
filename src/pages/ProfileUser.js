import React from 'react'
import { Helmet } from 'react-helmet'

const ProfileUser = () => {
  const getUser = localStorage.getItem("payload")
  const userData = JSON.parse(getUser)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Bumbuku - Your Profile's</title>
        <meta name="description" content="about"/>
      </Helmet>
      {userData && (
        <div className="tw-flex tw-flex-col tw-items-center tw-text-center">
          <h1 
            className="tw-font-opensans tw-text-2xl tw-font-bold tw-text-center tw-p-4"
          >
            Your Profile
          </h1>
          <div className="tw-w-full tw-flex tw-flex-col tw-justify-center px-4 tw-max-w-lg">
            <div className="tw-bg-icon tw-flex tw-rounded-full tw-w-14 tw-h-14 tw-items-center tw-mx-auto">
              <span className="tw-mx-auto tw-text-4xl">
                {userData.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="tw-pt-4 tw-mx-auto">
              <div className="tw-flex tw-flex-row tw-items-center">
                <h4 className="tw-font-opensans- tw-text-lg tw-font-semibold">Name: </h4>
                <span className="tw-font-opensans- tw-text-base tw-font-normal tw--mt-1.5 tw-ml-1">
                  {userData.name}
                </span>
              </div>
              <div className="tw-flex tw-flex-row tw-items-center">
                <h4 className="tw-font-opensans- tw-text-lg tw-font-semibold">Email: </h4>
                <span className="tw-font-opensans- tw-text-base tw-font-normal tw--mt-1.5 tw-ml-1">
                  {userData.email}
                </span>
              </div>
              <div className="tw-flex tw-flex-row tw-items-center">
                <h4 className="tw-font-opensans- tw-text-lg tw-font-semibold">Alamat: </h4>
                <span className="tw-font-opensans- tw-text-base tw-font-normal tw--mt-1.5 tw-ml-1">
                  {userData.alamat}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProfileUser
