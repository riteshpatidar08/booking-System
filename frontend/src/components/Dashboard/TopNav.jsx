import { useSelector  , useDispatch} from "react-redux";
import { RiLogoutCircleLine } from "react-icons/ri";
import { logout } from "../redux/slices/LoginSlice";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
    // const {name} = useSelector((state)=> state.login) ;
const dispatch = useDispatch();
const navigate = useNavigate()
    const name = localStorage.getItem('name');
    const handleClick = ()=> {
        dispatch(logout())
        navigate('/login')

    }
  
    return (
          <div className='flex items-center justify-between px-6 h-16 bg-white border-b border-gray-200'>
      <h1 className='text-xl font-semibold'>Welcome {name}</h1>
      <div>
      <RiLogoutCircleLine onClick={handleClick}  size={24} className="hover:text-red-500 cursor-pointer" />
      </div>
    </div>
    )
}


export default TopNav ;