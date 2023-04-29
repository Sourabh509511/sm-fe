import { Route, Routes } from 'react-router-dom'
import PageNotFound from 'views/PageNotFound'
import Home from 'views/Home/Home'
import AboutUs from 'views/About us'
import Layout from 'views/Layout/Layout'

const IndexRouter = () => {
    return (
        <Routes >
            <Route element={<Layout/>}>
                <Route key="home" exact path="/" element={<Home/>}/>
                <Route path="about" exact element={<AboutUs/>} />
                <Route path="*" exact element={<PageNotFound/>} />
            </Route>
        </Routes>
    )
}

export default IndexRouter
