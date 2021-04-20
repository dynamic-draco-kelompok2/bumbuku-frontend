import React from 'react'

const EditProfile = ({editProfile, setEditProfile}) => {
  const handleCloseModal = () => {
    setEditProfile(false)
  }
  const getUser = localStorage.getItem("payload")
  const userData = JSON.parse(getUser)
  console.log(userData)
  return (
    <div>
      {editProfile && (
        <div className="">
        <div className="tw-w-screen tw-h-screen tw-bg-black tw-opacity-50 tw-fixed tw-top-0 tw-left-0 hidden md:flex"></div>
        <div className="tw-flex tw-justify-center tw-z-50">
          <div className="tw-bg-desktop tw-w-full tw-h-full tw-flex tw-flex-col tw-rounded tw-fixed tw-top-0 md:tw-top-20 md:tw-max-w-xl md:tw-h-4/5 lg:tw-max-w-3xl">
            <div 
              className="tw-pt-5 tw-flex tw-justify-between tw-px-4"
            >
              <div></div>
              <div className="tw-bg-icon tw-w-8 tw-h-8 tw-rounded-full tw-cursor-pointer">
                <div 
                  className="tw-flex tw-justify-center" 
                  style={{marginTop: '2px'}}
                  onClick={handleCloseModal}
                >
                  <span className="tw-text-xl tw-text-white tw-font-medium">
                    X
                  </span>
                </div>
              </div>
            </div>
            <div className="tw-px-4">
              <h1 className="tw-font-opensans tw-pb-1 tw-font-bold tw-text-base lg:tw-text-xl">
                Edit Your Profile
              </h1>
              <div className="tw-bg-icon tw-flex tw-rounded-full tw-w-14 tw-h-14 tw-items-center tw-mx-auto">
              <span className="tw-mx-auto tw-text-4xl">
                {userData.name.charAt(0).toUpperCase()}
              </span>
            </div>
              <div className="tw-flex tw-flex-col tw-justify-center tw-mx-auto tw-items-center tw-w-72">
                <form>
                  <div className="tw-flex tw-flex-row tw-my-4 tw-justify-between tw-w-60">
                    <h4 className="tw-font-opensans tw-text-base">Name: </h4>
                    <input className="tw-rounded tw-items-center tw-font-opensans" />
                  </div>
                  <div className="tw-flex tw-flex-row tw-my-4 tw-justify-between tw-w-60">
                    <h4 className="tw-font-opensans tw-text-base">Email: </h4>
                    <input className="tw-rounded tw-items-center" />
                  </div>
                  <div className="tw-flex tw-flex-row tw-my-4 tw-justify-between tw-w-60">
                    <h4 className="tw-font-opensans tw-text-base">Alamat: </h4>
                    <input className="tw-rounded tw-items-center" />
                  </div>
                  <button className="tw-bg-base tw-font-opensans tw-text-white tw-p-2 tw-rounded tw-w-24 tw-my-4">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
         
      )}
    </div>
  )
}

export default EditProfile
