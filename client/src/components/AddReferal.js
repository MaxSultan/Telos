import React, { useState } from 'react';
import { TextField, MenuItem, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import { connect, } from 'react-redux';
import { addReferral, editReferral } from '../reducers/referrals'
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function AddReferal(props) {
    const [firstName, setFirstName] = useState(props.initF_name ? props.initF_name : '')
    const [lastName, setLastName] = useState(props.initL_name ? props.initL_name : '')
    const [source, setSource] = useState(props.initSource ? props.initSource : '')
    const [edCon, setEdCon] = useState(props.initEd_con ? props.initEd_con : '')
    const [therapist, setTherapist] = useState(props.initTherapist ? props.initTherapist : '')
    const [wildernessTherapist, setWildernessTherapist] = useState(props.initW_therapist ? props.initW_therapist : '')
    const [status, setStatus] = useState(props.initStatus ? props.initStatus : '')
    const [color, setColor] = useState(props.initColor ? props.initColor : '')
    const [result, setResult] = useState(props.initResult ? props.initResult : '')
    const color_options = ['green','yellow', 'orange', 'red', 'undefined']
    const therapist_options = ['Monte Criddle', 'Trevor ...', 'Kyle', 'Kylie']
    const sources_options = ['Educational Consultant', 'Direct Contact','Other']
    const history = useHistory()
    const classes = useStyles();
    const referral = {
        f_name: firstName, 
        l_name: lastName, 
        source: source, 
        ed_con: edCon,
        therapist: therapist,
        w_therapist: wildernessTherapist,
        status: status,
        color: color,
        result: result, 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.editId ? props.editReferral(props.editId, referral, history) : props.addReferral(referral, history)
        defaultValues()
    }

    const defaultValues = () => {
        setStatus('')
        setFirstName('')
        setLastName('')
        setSource('')
        setEdCon('')
        setTherapist('')
        setWildernessTherapist('')
        setColor('')
        setResult('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{border:'1px solid black', margin:'5em', padding:'3em', marginTop:'1em'}}>
            {props.editId ? <h1>Edit Referral</h1> : <h1>Add Referral</h1>}
            <div className='formDiv'>
                <TextField 
                id="outlined-basic" 
                label="First Name" 
                variant="outlined" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField 
                id="outlined-basic" 
                label="Last Name" 
                variant="outlined" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className='formDiv'>
                <TextField
                id="standard-select-currency"
                select
                label="Select"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                helperText="Select refferal source"
                variant="outlined"
                >
                    {sources_options.map((option) => (
                    <MenuItem key={option} value={option}>
                    {option}
                    </MenuItem>
                    ))}
                </TextField>
                <TextField 
                id="outlined-basic" 
                label="Educational Consultant" 
                variant="outlined" 
                value={edCon}
                onChange={(e) => setEdCon(e.target.value)}
                />
            </div>
            <div className='formDiv'>
                <TextField
                id="therapist-select"
                select
                label="Therapist"
                value={therapist}
                onChange={(e) => setTherapist(e.target.value)}
                helperText="Select a Therapist"
                variant="outlined"
                >
                    {therapist_options.map((option) => (
                    <MenuItem key={option} value={option}>
                    {option}
                    </MenuItem>
                    ))}
                </TextField>
                <TextField 
                id="outlined-basic" 
                label="Wilderness Therapist" 
                variant="outlined" 
                value={wildernessTherapist}
                onChange={(e) => setWildernessTherapist(e.target.value)}
                />
            </div>
            <div className='formDiv'>
                <TextField 
                id="outlined-basic" 
                label="Status" 
                variant="outlined" 
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                />
                <TextField
                id="standard-select-currency"
                select
                label="Select"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                helperText="Please select the referrals color"
                variant="outlined"
                >
                    {color_options.map((option) => (
                    <MenuItem key={option} value={option}>
                    {option}
                    </MenuItem>
                    ))}
                </TextField>
            </div>
            <div className='formDiv'>
                <TextField 
                id="outlined-basic" 
                label="Result" 
                variant="outlined" 
                value={result}
                onChange={(e) => setResult(e.target.value)}
                />
                <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
                type='submit'
                >
                Save
                </Button>
            </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addReferral: (referral, history) => dispatch(addReferral(referral, history)),
    editReferral: (id, referral, history) => dispatch(editReferral(id, referral, history)),
})

export default connect(null, mapDispatchToProps)(AddReferal)