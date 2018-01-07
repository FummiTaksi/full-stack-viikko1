import React from 'react'


class Note extends React.Component {

    render() {
        return(
            <li>{this.props.note.content}</li>
        )
    }
}

export default Note

