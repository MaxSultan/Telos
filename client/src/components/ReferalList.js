import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getReferrals } from '../reducers/referrals'
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

function ReferalList(props) {

    useEffect(()=> {
        if(props.referrals.length <= 1) props.getReferrals()
     },[])

    const renderActiveReferrals = () => {
        const { referrals } = props
        if (referrals.length <= 0) return <h2>No Referrals</h2>
        return props.referrals.filter(ref => ref.result === '').map(ref => (
            <Grid item xs={12}>
                <Paper style={styles.item}>
                    <div>
                            <Link to={{
                                pathname: '/referral',
                                state: {
                                    referral: ref
                                }
                            }} >
                                <h1 style={{fontSize:'1em'}}><strong>{ref.f_name} {ref.l_name}</strong></h1>
                            </Link>
                        <p style={{fontSize:'.5em'}}>Status: {ref.status}</p>
                    </div>
                    <div style={{height:'2em', width:'2em', backgroundColor:`${ref.color}`, borderRadius:'2.5em'}}/>
                </Paper>
            </Grid>
        ))
    }

    return (
        <div style={styles.position}>
            <h1><strong>Referral List</strong></h1>
            <div style={styles.back}>
            <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
            style={{width:'auto', height:'auto'}}
            >
                <Grid xs={12} container spacing={1}>
                {renderActiveReferrals()}
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

const styles = {
    back: {
        backgroundColor: 'gray',
        height: '23em',
        width: '15em',
        overflowY:'scroll'
    },
    item: {
        backgroundColor: '#e5e5d3',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding: '1em',
        margin: '.5em',
    }
}

const mapStateToProps = (state) => ({
    referrals: state.referrals,
  });

  const mapDispatchToProps = (dispatch) => ({
    getReferrals: () => dispatch(getReferrals())
})

  export default connect (mapStateToProps, mapDispatchToProps)(ReferalList)