import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"
import { Link  } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "../../store/slices/auth/authSlice"
import { useLogoutMutation } from "../../store/slices/users/usersApiSlice"

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApiCall] = useLogoutMutation()

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate("/login")
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <header>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl">Black-Jack Trainer</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>{userInfo.name}</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <Link to='/profile'><span>Profile</span></Link>
                  </li>

                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
