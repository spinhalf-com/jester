import React from 'react';
import { FileDrop } from 'react-file-drop';

const FileUp = () => {

    const droppedFile = (event) => {
        console.log(event)
    }

    return (
        <div>
           <FileDrop
               // frame={}
               onDrop={(event) => droppedFile(event)}
           />
        </div>
    )
}
export default FileUp;
