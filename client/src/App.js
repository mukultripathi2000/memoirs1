import React, {useState,useEffect} from 'react'
import { Container, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import usestyles from './styles'
import {getPosts} from './actions/posts'
 
const App = () => {
    const [currentId,setCurrentId]=useState(null)
    const classes = usestyles()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getPosts())
    },[currentId,dispatch])
    return (
        <Container maxwidth="lg">
           <Navbar />
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
       </Container>
    )
}

export default App