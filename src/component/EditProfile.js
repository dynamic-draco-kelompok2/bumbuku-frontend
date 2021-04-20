import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editAlamatUser } from '../redux/actions/user.actions'

const EditProfile = ({editProfile, setEditProfile}) => {
  const dispatch = useDispatch()
  const getUser = localStorage.getItem("payload")
  const userData = JSON.parse(getUser)
  const [updateAlamat, setUpdateAlamat] = useState("")

  const handleCloseModal = () => {
    setUpdateAlamat("")
    setEditProfile(false)
  }

  const handleUpdate = (e) => {
    const newAlamatUser = {...userData, alamat: updateAlamat}
    e.preventDefault();
    localStorage.removeItem("payload")
    const updateUser = localStorage.setItem("payload", 
      JSON.stringify(
        newAlamatUser
      )
    )
    // JSON.parse(updateUser)
    dispatch(editAlamatUser({_id: userData._id, newAlamatUser}))
    setEditProfile(false)
  }

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
                  <div className="tw-flex tw-flex-row tw-my-4 tw-w-60">
                    <h4 className="tw-font-opensans tw-text-base">Name: </h4>
                    <span className="tw-ml-4">
                      {userData.name}
                    </span>
                  </div>
                  <div className="tw-flex tw-flex-row tw-my-4 tw-w-60">
                    <h4 className="tw-font-opensans tw-text-base">Email: </h4>
                    <span className="tw-ml-5">
                      {userData.email}
                    </span>
                  </div>
                  <div className="tw-flex tw-flex-row tw-my-4 tw-justify-between tw-w-60">
                    <h4 className="tw-font-opensans tw-text-base">Alamat: </h4>
                    <input 
                      className="tw-rounded tw-items-center tw-text-xs tw-w-full tw-ml-2 tw-pl-1 tw-font-opensans"
                      value={updateAlamat}
                      onChange={(e) => setUpdateAlamat(e.target.value)}
                      placeholder={userData.alamat}
                    />
                  </div>
                  <button 
                    className="tw-bg-base tw-font-opensans tw-text-white tw-p-2 tw-rounded tw-w-24 tw-my-4"
                    onClick={handleUpdate}
                  >
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

