import React from 'react'
import { useDispatch } from 'react-redux'
import { eventStartDelete } from '../../actions/events'

export const DeleteEventFab = () => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch( eventStartDelete() );
    }

    return (
        <div>
            <button
                className="btn btn-danger fab-danger"
                onClick={ handleDelete }
            >
                <i className="fas fa-trash"></i>
                <span> Delete Event </span>
            </button>
        </div>
    )
}
