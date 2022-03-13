import {Navigate, Route, Routes} from "react-router-dom"
import CompanyProfileRoutes from "../modules/companyProfile/routes";
import SuperUserRoutes from "../modules/superUser/routes";

interface PrivateRoutesProps {
    isLoggedIn: boolean
    role: string
}

const PrivateRoute = (props: PrivateRoutesProps) => {

    const {role} = props
    const {isLoggedIn} = props
    const routeToAuth = 'auth'

    return (
        <Routes>
            {role === 'super-admin' && (<Routes>
                    <Route path='/super-user' element={<SuperUserRoutes/>}/>
                    <Route path='/' element={<CompanyProfileRoutes/>}/>
            </Routes>
            )}
            {role === 'normal' && (
                <Route path='/' element={<CompanyProfileRoutes/>}/>
            )}
            <Route
                path='*'
                element={isLoggedIn ? <p>Not Found</p> : <Navigate to={routeToAuth}/>}
            />
        </Routes>
    )
}

export default PrivateRoute
