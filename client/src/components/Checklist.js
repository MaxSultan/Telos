import React from 'react'

export default function Checklist(props) {
    return (
        <div>
            <h3><strong>Checklist</strong></h3>
            <h5>Vetting</h5>
            <input type='checkbox' name='recieve_testing'/>
            <lable for='recieve_testing'>Recieve testing</lable>
            <br/>
            <input type='checkbox' name='review_testing'/>
            <lable for='review_testing'>review testing</lable>
            <br/>
            <input type='checkbox' name='ed_con_call'/>
            <lable for='ed_con_call'>Call with Education Consultant</lable>
            <br/>
            <input type='checkbox' name='w_therapist_call'/>
            <lable for='w_therapist_call'>Call with Wilderness Therapist</lable>
            <br/>
            {props.color == 'yellow' || props.color == 'orange' ?
                        <>
                        <input type='checkbox' name='staffing'/>
                        <lable for='staffing'>Staffing with team</lable>
                        <br/>
                        </> : 
                        null
            }
            <h5>Parents</h5>
            <input type='checkbox' name='parent_call'/>
            <lable for='parent_call'>Call with Parents</lable>
            <br/>
            <input type='checkbox' name='schedule_tour'/>
            <lable for='schedule_tour'>Schedule Tour</lable>
            <br/>
            <input type='checkbox' name='steps_to_enrollment'/>
            <lable for='steps_to_enrollment'>Steps to Enrollment Complete</lable>
            <br/>
            <input type='checkbox' name='application'/>
            <lable for='application'>Application Completed</lable>
            <br/>
            <input type='checkbox' name='documents'/>
            <lable for='documents'>Documents Submitted</lable>
            <br/>
            <h5>Enrollment Process</h5>
            <input type='checkbox' name='inform_team'/>
            <lable for='inform_team'>Team Informed of Enrollment</lable>
            <br/>
            <input type='checkbox' name='team_assigned'/>
            <lable for='team_assigned'>Team Assigned</lable>
            <br/>
            <input type='checkbox' name='load_onto_hq'/>
            <lable for='load_onto_hq'>Loaded onto TelosHQ</lable>
        </div>
    )
}

// Vetting (Recieve referall, recieve testing, review testing, edcon call, wilderness therapist call, staffing with team if needed)
// Parents (educational call with parents, schedule tour, Steps to enrollment, Application, Documents)
// Enrollment Process (Inform team of enrollment, Get team assigned(therapist, lifecoach, apartment), load onto HQ