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
            <h1 style={{maxWidth:'6em'}}><strong>Referral List</strong></h1>
            <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
            style={styles.back}
            >
                <Grid xs={12} container >
                {renderActiveReferrals()}
                </Grid>
            </Grid>
        </div>
    )
}

const styles = {
    back: {
        backgroundColor: '#000080',
        minHeight: '23em',
        padding: '.5em',
        overflowY:'scroll',
        borderRadius:'5px',
        overflowY:'scroll',
        maxHeight:'60vh',
        boxShadow:'0px 5px 5px rgba(0, 0, 0, 0.25)'
    },
    item: {
        background: 'linear-gradient(#ffffff,#e5e5d3)',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding: '1em',
        marginBottom: '.3em',
    },
    position:{
        flexShrink:1,
        padding:'3em',
        maxWidth:'20em',
    }

}

const mapStateToProps = (state) => ({
    referrals: state.referrals,
  });

  const mapDispatchToProps = (dispatch) => ({
    getReferrals: () => dispatch(getReferrals())
})

  export default connect (mapStateToProps, mapDispatchToProps)(ReferalList)