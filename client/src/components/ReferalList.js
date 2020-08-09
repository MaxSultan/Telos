import React from 'react'

export default function ReferalList() {
    return (
        <div style={styles.position}>
            <h1><strong>Referral List</strong></h1>
            <div style={styles.back}>
            </div>
        </div>
    )
}

const styles = {
    back: {
        backgroundColor: 'gray',
        height: '23em',
        width: '15em',
    },
}