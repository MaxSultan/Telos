import React from 'react'
import { Link } from 'react-router-dom'
import ReferalList from './ReferalList'
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import ViewListTwoToneIcon from '@material-ui/icons/ViewListTwoTone';
import PollTwoToneIcon from '@material-ui/icons/PollTwoTone';
import Paper from '@material-ui/core/Paper';

export default function Home() {
    return (
        <div style={styles.layout} className="homeLayout">
            <div style={{marginLeft:'2em'}}>
                <h1 style={{fontSize:'3em'}}><strong>Referral Manager</strong></h1>
                <div style={styles.grid}>
                    <Paper style={styles.boxLink} elevation={5} className='box1'>
                        <Link to='/add'>
                            <AddTwoToneIcon style={styles.icon}/>
                            <h2 style={{color:'#fda300'}}>Add</h2>
                        </Link>
                    </Paper>
                    <Paper style={styles.boxLink} elevation={5} className='box2'>
                        <Link to='/active'>
                            <ViewListTwoToneIcon style={styles.icon} />
                            <h2 style={{color:'#fda300'}}>View Active</h2>
                        </Link>
                    </Paper>
                    <Paper style={styles.boxLink} elevation={5} className='box3'>
                        <Link to='/search'>
                            <SearchTwoToneIcon style={styles.icon} />
                            <h2 style={{color:'#fda300'}}>Search</h2>
                        </Link>
                    </Paper>
                    <Paper style={styles.boxLink} elevation={5} className='box4'>
                        <Link to='/reports'>
                            <PollTwoToneIcon style={styles.icon} />
                            <h2 style={{color:'#fda300'}}>Reports</h2>
                        </Link>
                    </Paper>
                </div>
            </div>
            <ReferalList style={styles.right}/>
        </div>
    )
}

const styles = {
    boxLink: {
        height: '10em',
        width: '10em',
        backgroundColor: '#000080',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1em',
        borderRadius: '1em',
        textAlign:'center',
    },
    grid: {
        display: 'grid',
        height:'21em',
        width: '21em',
        gridTemplateRow: '1fr 1fr',
        gridTemplateColumn: '1fr 1fr',
    },
    layout: {
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        width:'100wv'
    },
    icon:{
        fontSize:'5em', 
        color:'#fda300',
    }
}