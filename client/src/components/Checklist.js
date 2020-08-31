import React, { useState } from 'react' 
import checklist from '../reducers/checklist'

export default function Checklist(props) {
    const [completed_app, setCompleted_app] = useState(props.completed_app ? props.completed_app : false)
    const [edcon_call, setEdcon_call] = useState(props.edcon_call ? true : false)
    const [enrollment, setEnrollment] = useState(props.enrollment ? true : false)
    const [inform_team, setInform_team]  = useState(props.inform_team ? true : false)
    const [parent_call, setParent_call] = useState(props.parent_call ? true : false)
    const [parents, setParents] = useState(props.parents ? true : false)
    const [recieve_testing, setRecieve_testing] = useState(props.recieve_testing ? true : false)
    const [review_testing, setReview_testing] = useState(props.review_testing ? true : false)
    const [staffing, setStaffing] = useState(props.staffing ? true : false)
    const [steps_to_enroll, setSteps_to_enroll] = useState(props.steps_to_enroll ? true : false)
    const [submitted_docs, setSubmitted_docs] = useState(props.submitted_docs ? true : false)
    const [team_assigned, setTeam_assigned] = useState(props.team_assigned? true : false)
    const [telos_hq, setTelos_hq] = useState(props.telos_hq ? true : false)
    const [tour_scheduled, setTour_scheduled] = useState(props.tour_scheduled ? true : false)
    const [vetting, setVetting] = useState(props.vetting? true : false)
    const [w_therapist_call, setW_therapist_call] = useState(props.w_therapist_call ? true : false)
    
    const checklistObj = {
        completed_app,
        edcon_call,
        enrollment,
        inform_team,
        parent_call,
        parents,
        recieve_testing,
        review_testing,
        staffing,
        steps_to_enroll,
        submitted_docs,
        team_assigned,
        telos_hq,
        tour_scheduled,
        vetting,
        w_therapist_call,
    }

    const updateCheck = (item) => {
        switch(item){
            case 'recieve_testing':
                setRecieve_testing(!recieve_testing)
                break;
            case 'review_testing':
                setReview_testing(!review_testing)
                break;
            case 'edcon_call':
                setEdcon_call(!edcon_call)
                break;
            case 'w_therapist_call':
                setW_therapist_call(!w_therapist_call)
                break;
            case 'staffing':
                setStaffing(!staffing)
                break;
            case 'parent_call':
                setParent_call(!parent_call)
                break;
            case 'tour_scheduled':
                setTour_scheduled(!tour_scheduled)
                break;
            case 'steps_to_enroll':
                setSteps_to_enroll(!steps_to_enroll)
                break;
            case 'completed_app':
                setCompleted_app(!completed_app)
                break;
            case 'submitted_docs':
                setSubmitted_docs(!submitted_docs)
                break;
            case 'inform_team':
                setInform_team(!inform_team)
                break;
            case 'team_assigned':
                setTeam_assigned(!team_assigned)
                break;
            case 'telos_hq':
                setTelos_hq(!telos_hq)
                break;
            }
    }

    async function  updateChecklistUi(item, referral_id, id){
            await updateCheck(item)
            if (props.color === "orange" || props.color === "yellow"){
                if (
                    recieve_testing === true && 
                    review_testing === true && 
                    edcon_call === true &&
                    w_therapist_call === true &&
                    staffing === true
                    ) {setVetting(true)} 
            } else if (props.color === "green") {
                   if (
                    recieve_testing === true && 
                    review_testing === true && 
                    edcon_call === true &&
                    w_therapist_call === true
                   ) {setVetting(true)}     
            }
            if (
                parent_call === true && 
                tour_scheduled === true && 
                steps_to_enroll === true &&
                completed_app === true &&
                submitted_docs === true
                ){ setParents(true)}
            if (
                inform_team === true &&
                team_assigned === true &&
                telos_hq === true
            ){setEnrollment(true)}
                await props.setChecklist(checklistObj)
                console.log('beforeAxios:',checklistObj)
                await props.updateChecklist(referral_id, id, checklistObj)
    }

    return (
        <section>
            {console.log('props',props)}
            <h3><strong>Checklist</strong></h3>
            <h5>Vetting</h5>
            <input 
            type='checkbox' 
            name='recieve_testing' 
            checked={!!recieve_testing} 
            onChange={(e) => updateChecklistUi(e.target.name, props.referal_id, props.id)}
            />
            <lable for='recieve_testing'>Recieve testing</lable>
            <br/>
            <input 
            type='checkbox' 
            name='review_testing'
            checked={!!review_testing} 
            onChange={(e) => updateChecklistUi(e.target.name, props.referal_id, props.id)}
            />
            <lable for='review_testing'>Review testing</lable>
            <br/>
            <input 
            type='checkbox' 
            name='edcon_call'
            checked={!!edcon_call} 
            onChange={(e) => updateChecklistUi(e.target.name, props.referal_id, props.id)}
            />
            <lable for='ed_con_call'>Call with Education Consultant</lable>
            <br/>
            <input 
            type='checkbox' 
            name='w_therapist_call'
            checked={!!w_therapist_call} 
            onChange={(e) => updateChecklistUi(e.target.name, props.referal_id, props.id)}
            />
            <lable for='w_therapist_call'>Call with Wilderness Therapist</lable>
            <br/>
            {props.color == 'yellow' || props.color == 'orange' ?
                        <>
                        <input 
                        type='checkbox' 
                        name='staffing'
                        checked={!!staffing} 
                        onChange={(e) => updateChecklistUi(e.target.name, props.referal_id, props.id)}
                        />
                        <lable for='staffing'>Staffing with team</lable>
                        <br/>
                        </> : 
                        null
            }
            <h5>Parents</h5>
            <input 
            type='checkbox' 
            name='parent_call'
            checked={!!parent_call} 
            onChange={(e) => updateChecklistUi(e.target.name, props.referal_id, props.id)}
            />
            <lable for='parent_call'>Call with Parents</lable>
            <br/>
            <input 
            type='checkbox' 
            name='tour_scheduled'
            checked={!!tour_scheduled} 
            onChange={(e) => updateChecklistUi(e.target.name, props.referal_id, props.id)}
            />
            <lable for='tour_scheduled'>Schedule Tour</lable>
            <br/>
            <input 
            type='checkbox' 
            name='steps_to_enroll'
            checked={!!steps_to_enroll} 
            onChange={(e) => updateChecklistUi(e.target.name, props.referal_id, props.id)}
            />
            <lable for='steps_to_enroll'>Steps to Enrollment Complete</lable>
            <br/>
            <input 
            type='checkbox' 
            name='completed_app'
            checked={!!completed_app} 
            onChange={(e) => updateChecklistUi(e.target.name, props.referal_id, props.id)}
            />
            <lable for='completed_app'>Application Completed</lable>
            <br/>
            <input 
            type='checkbox' 
            name='submitted_docs'
            checked={!!submitted_docs} 
            onChange={(e) => updateChecklistUi(e.target.name, props.referal_id, props.id)}
            />
            <lable for='submitted_docs'>Documents Submitted</lable>
            <br/>
            <h5>Enrollment Process</h5>
            <input 
            type='checkbox' 
            name='inform_team'
            checked={!!inform_team} 
            onChange={(e) => updateChecklistUi(e.target.name, props.referal_id, props.id)}
            />
            <lable for='inform_team'>Team Informed of Enrollment</lable>
            <br/>
            <input 
            type='checkbox' 
            name='team_assigned'
            checked={!!team_assigned} 
            onChange={(e) => updateChecklistUi(e.target.name, props.referal_id, props.id)}
            />
            <lable for='team_assigned'>Team Assigned</lable>
            <br/>
            <input 
            type='checkbox' 
            name='telos_hq'
            checked={!!telos_hq} 
            onChange={(e) => updateChecklistUi(e.target.name, props.referal_id, props.id)}
            />
            <lable for='telos_hq'>Loaded onto TelosHQ</lable>
        </section>
    )
}