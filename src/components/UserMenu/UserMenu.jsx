import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authLogout } from "redux/auth/operations.auth";
import { selectUserEmail, selectUserName } from "redux/auth/selectors.auth";
import s from './UserMenu.module.css';


function UserMenu() {
  const username = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);

  const dispatch = useDispatch();
  const navigate = useNavigate();


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
      <span className={s.span}>Hello, {username}!</span>
      <span className={s.span}>({email})</span>
      <button className={s.link} onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default UserMenu
