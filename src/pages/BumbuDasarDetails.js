import { useEffect } from "react";
import CardBumbuDasar from "../component/CardBumbuDasar";
import { useSelector, useDispatch } from "react-redux";
import { getBumbuDasar } from "../redux/actions/bumbudasar.actions";


function BumbuDasarDetails() {
  const dispatch = useDispatch();
	const bumbuDasar = useSelector((state) => state.handleBumbuDasar);

	useEffect(() => {
		dispatch(getBumbuDasar());
	}, [dispatch]);



  return (
    <div>
			<CardBumbuDasar bumbuDasar={bumbuDasar.data} />
    </div>
  )
}

export default BumbuDasarDetails
