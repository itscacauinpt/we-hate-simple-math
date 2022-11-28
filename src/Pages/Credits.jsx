import { useNavigate } from "react-router-dom";

import Button from "../Components/Button";
import backButton from "../img/back-button.svg"

export default function Credits() {
  const navigate = useNavigate();

  const backMenu = () => navigate("/menu");

  return(
    <>
      <Button
        title={ 'back to menu button' }
        image={ backButton }
        functionGame={ backMenu }/>
      <p>Quase quase</p>
    </>
  )
}