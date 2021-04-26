import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import Magnifier from '../assets/icons/Magnifier'

const SearchCategoryProduct = ({searchCategoryProduk, setSearchCategoryProduk}) => {
  return (
    <div className="tw-mb-4">
      <Form className="tw-w-full tw-flex lg:tw-w-1/2 tw-px-4 tw-mx-auto">
				<FormControl
					type="text"
					placeholder="Search"
					className="mr-sm-2 focus:tw-outline-none tw-font-opensans"
          value={searchCategoryProduk}
          onChange={(e) => setSearchCategoryProduk(e.target.value)}
				/>
				<button className="tw-bg-icon tw-hidden lg:tw-flex tw-text-white tw-py-1 tw-px-4 tw-text-md tw-rounded tw-font-opensans">
					Search
				</button>
        <div className="tw-flex tw-mt-2 tw-ml-2 lg:tw-hidden">
          <Magnifier />
        </div>
			</Form>
    </div>
  )
}

export default SearchCategoryProduct
