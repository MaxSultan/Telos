import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getReferrals } from '../reducers/referrals'
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Active(props) {

    useEffect(()=> {
       if(props.referrals.length <= 1) props.getReferrals()
    },[])

    const renderResolvedReferrals = () => {
        const { referrals } = props
        if (referrals.length <= 0) return <h2>No Referrals</h2>
        return props.referrals.filter(ref => ref.result !== '').map(ref => (
            <Grid item xs={12}>
                <Paper style={styles.item}>
                    <div>
                            <Link to={{
                                pathname: '/referral',
                                state: {
                                    referral: ref
                                }
                            }} >
                                <h1><strong>{ref.f_name} {ref.l_name}</strong></h1>
                            </Link>
                        <p>Status: {ref.status}</p>
                    </div>
                    <div style={{height:'5em', width:'5em', backgroundColor:`${ref.color}`, borderRadius:'2.5em'}}/>
                </Paper>
            </Grid>
        ))
    }

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
                                <h1><strong>{ref.f_name} {ref.l_name}</strong></h1>
                            </Link>
                        <p>Status: {ref.status}</p>
                    </div>
                    <div style={{height:'5em', width:'5em', backgroundColor:`${ref.color}`, borderRadius:'2.5em'}}/>
                </Paper>
            </Grid>
        ))
    }

    return (
        <div style={{padding:'1em'}}>
            <h1><strong>Active</strong></h1>
            <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
            style={{padding:'1em'}}
            >
                {renderActiveReferrals()}
            </Grid>
            <h1><strong>Resolved</strong></h1>
            <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
            style={{padding:'1em'}}
            >
                {renderResolvedReferrals()}
            </Grid>
        </div>
    )
}

const styles = {
    item: {
        background: 'linear-gradient(#C4C4C4, #ABA9A9)',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding: '1em',
        marginBottom:'.5em',
    }
}

const mapStateToProps = (state) => ({
    referrals: state.referrals,
  });

const mapDispatchToProps = (dispatch) => ({
    getReferrals: () => dispatch(getReferrals())
})

export default connect (mapStateToProps, mapDispatchToProps)(Active)