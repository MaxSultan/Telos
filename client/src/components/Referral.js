import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import AddReferal from './AddReferal';
import { useHistory } from 'react-router';
import Checklist from './Checklist';
import Axios from 'axios';

export default function Referral(props) {
    const history = useHistory()
    const [editing, setEditing] = useState(false)
    const [checklist, setChecklist] = useState({})
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

    useEffect(()=> {
        Axios.get(`/api/referals/${id}/checklists`)
        .then(res => {
            console.log(res.data)
            setChecklist(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const updateChecklist = (referralId, id, checklistObj) => {
        Axios.put(`/api/referals/${referralId}/checklists/${id}`, checklistObj)
        .then(res => {
            console.log(res.data)
            setChecklist(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div style={styles.page}>
            <div style={styles.sideBySide}>
                <div>
                    <h1><strong>{f_name} {l_name}</strong></h1>
                    <p>Source: {source} </p>
                    <p>Educational Consultant: {ed_con}</p>
                    <p>Wilderness Therapist: {w_therapist}</p>
                    <p>TelosU Therapist: {therapist}</p>
                    <p>Created at: {created_at}</p>
                    <Button onClick={() => setEditing(!editing)}>Edit</Button>
                    <Button onClick={() => props.deleteReferral(id, history)}>Delete</Button>
                </div>
                <Checklist 
                {...checklist}
                color={color} 
                setChecklist={setChecklist} 
                updateChecklist={updateChecklist}
                />
            </div>
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

const styles = {
    sideBySide: {
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    page: {
        maxWidth:'95vw'
    }
}