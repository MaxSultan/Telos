import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { showReferral } from '../reducers/referrals'

function Referral(props) {
    const { f_name, l_name, source, ed_con, therapist, w_therapist, created_at } = props.location.state.referral
    return (
        <div>
            {console.log(props.location.state)}
            Referral Show page
            <h1><strong>{f_name} {l_name}</strong></h1>
            <p>Source: {source} </p>
            <p>Educational Consultant: {ed_con}</p>
            <p>Wilderness Therapist: {w_therapist}</p>
            <p>TelosU Therapist: {therapist}</p>
            <p>Created at: {created_at}</p>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    showReferral: (id) => dispatch(showReferral(id)),
})

const mapStateToProps = (state) => ({
    referral: state.referral,
})

export default connect(mapStateToProps, mapDispatchToProps)(Referral)