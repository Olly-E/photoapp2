import React from 'react';
import { useState } from 'react';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    const [error, setError] = useState(null);

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError(null);
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)')
        }
    }

  return (
    <form>
        <input type="file"  onChange={changeHandler}/>
        {error && <div className= "error">{error}</div>}
        {file && <div>{file.name}</div>}
    </form>
  );
}

export default UploadForm;
