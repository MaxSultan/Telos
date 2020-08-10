import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import AddReferal from './AddReferal';

function Referral(props) {
    const [editing, setEditing] = useState(false)
    const { f_name, 
        l_name, 
        source, 
        ed_con, 
        therapist, 
        w_therapist, 
        created_at, 
        status, 
        color, 
        result,
        id 
    } = props.location.state.referral
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
            <Button onClick={() => setEditing(!editing)}>Edit</Button>
            <Button>Delete</Button>
            {editing && 
            <AddReferal  
            initF_name={f_name} 
            initL_name={l_name}
            initSource={source}
            initEd_con={ed_con}
            initTherapist={therapist}
            initW_therapist={w_therapist}
            initStatus={status}
            initColor={color}
            initResult={result} 
            editId = {id}/>}
        </div>
    )
}

export default connect()(Referral)