import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import ViewListTwoToneIcon from '@material-ui/icons/ViewListTwoTone';
import PollTwoToneIcon from '@material-ui/icons/PollTwoTone';
import { IconButton } from '@material-ui/core';

export default function NavBall() {
    const [hover, setHover] = useState(false)

    return hover ? (
        <div style={styles.nav} onMouseLeave={() => setHover(false)}>
                <Link style={styles.link} to='/'>
                    <IconButton style={{backgroundColor:'#FFC619', color:'white', height:'2.2em', width:'2.2em', boxShadow:'.01em .1em .2em .1em #AFAFAF'}}>
                    <HomeTwoToneIcon style={{fontSize:'2em'}} aria-label='go home'/>
                    </IconButton>
                </Link>                             
                <Link style={styles.link} to='/add'>
                    <IconButton style={{backgroundColor:'#fda300', color:'white', height:'2.4em', width:'2.4em', boxShadow:'.01em .1em .2em .1em #AFAFAF'}}>
                    <AddTwoToneIcon style={{fontSize:'2.2em'}}/>
                    </IconButton>
                </Link>

                <Link style={styles.link} to='/active'>
                <IconButton style={{backgroundColor:'#fa841a', color:'white', height:'2.6em', width:'2.6em', boxShadow:'.01em .1em .2em .1em #AFAFAF'}}>
                    <ViewListTwoToneIcon style={{fontSize:'2.4em'}} />
                </IconButton>
                </Link>
                <Link style={styles.link} to='/search'>
                <IconButton style={{backgroundColor:'#004da9', color:'white', height:'2.8em', width:'2.8em', boxShadow:'.01em .1em .2em .1em #AFAFAF'}} >
                    <SearchTwoToneIcon style={{fontSize:'2.6em'}}/>
                </IconButton>
                </Link>
                <Link style={styles.link} to='/reports' onMouseEnter={() => setHover(true)} >
                <IconButton style={{backgroundColor:'#024089', color: 'white', height:'3em', width:'3em', boxShadow:'.01em .1em .2em .1em #AFAFAF'}}>
                    <PollTwoToneIcon style={{fontSize:'2.6em'}}/>
                </IconButton>
                </Link>
        </div>
    ) : (
        <div style={styles.nav}>
        <Link style={styles.link} to='/reports' onMouseEnter={() => setHover(true)} >
            <IconButton style={{backgroundColor:'#024089', color: 'white', height:'3em', width:'3em', boxShadow:'.01em .1em .2em .1em #AFAFAF'}}>
                <PollTwoToneIcon style={{fontSize:'2.6em'}}/>
            </IconButton>
        </Link>
</div>
    )
}

const styles = {
    ball: {
        height: '5em',
        width: '5em',
        borderRadius: '50%',
        display: 'inline-block',
        backgroundColor: 'blue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:'1em',
        textAlign: 'center',
        margin:'1em',
    },
    link: {
        color:'white',
        margin:'1em',
    },
    nav:{
        display:'flex',
        alignItems:'center',
        position: 'fixed',
        bottom: '0',
        right: '0',
    },
    blue: {
        backgroundColor:'red'
    }
}