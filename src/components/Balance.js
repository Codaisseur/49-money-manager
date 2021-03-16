import { useDispatch, useSelector } from "react-redux";
import { deposit } from "../store/account/actions";
import { selectAccountValue } from "../store/account/selectors";

export default function Account() {
  const dispatch = useDispatch();

  const balance = useSelector(selectAccountValue);

  return (
    <>
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          // dispatch(deposit(10));

          const action = deposit(10);
          console.log("action in App.js", action);
          dispatch(action);
        }}
      >
        Deposit 10$
      </button>
    </>
  );
}
