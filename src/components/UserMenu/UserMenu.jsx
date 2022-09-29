import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authLogout } from "redux/auth/operations.auth";
import { selectUser } from "redux/auth/selectors.auth"


function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user)
  const handleLogout = () =>{
    dispatch(authLogout()).unwrap()
    .then(()=>{
      toast.info('You logouted! ={');
      navigate('/login', {replace:true})
    }).catch(error => {
      toast.error(`error during logout - ${error}`);
    })
  }
  return (
    <div>
      <span>UserName</span>
      <span>UserEmail</span>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default UserMenu
