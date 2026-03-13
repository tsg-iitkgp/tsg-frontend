import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';
import apiService from '../../../apiService';
import AppImage from "../../AppImage";

const FileUpload = (props) => {
  const [file, setFile] = useState('');
  const [uploadedFile, setUploadedFile] = useState({});
  const [uploadPercentage, setUploadPercentage] = useState(0);
  

  const onChange = e => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('certificateId', props.id);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': 'https://gymkhana.iitkgp.ac.in',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization',
      },
      onUploadProgress: progressEvent => {
        setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
        props.setStatus(false);
        props.setGenerate('Generating...');
        props.setGenerateStatus('warning');
      }   
    }
    try {
        const res = await axios.post(apiService + '/certificate/upload', formData, config);
        const { fileName, filePath } = res.data;
        setUploadedFile({ fileName, filePath });
        // console.log(res.status);
        props.setMessage('Certificates generated and sent successfully!');
        setUploadPercentage(0);
        props.setGenerate('Generated');
        props.setGenerateStatus('success');
        props.setStatus(false);
        
        if (res.status === 204) {
            props.setMessage('Please attach a file!');
            setUploadPercentage(0);
            props.setGenerate('Generation Failed');
            props.setGenerateStatus('danger');
            props.setStatus(false);
            setTimeout(() => {
                props.setMessage('');
                setUploadPercentage(0);
                props.setGenerate('Generate');
                props.setGenerateStatus('primary');
                props.setStatus(true);
            }, 5000);
        }
    }
    catch (err) {
        if (err.message === "Request failed with status code 422") {
            props.setMessage('The file format is invalid!');
            setUploadPercentage(0);
            props.setGenerate('Generation Failed');
            props.setGenerateStatus('danger');
            props.setStatus(false);      
            setTimeout(() => {
                props.setMessage('');
                setUploadPercentage(0);
                props.setGenerate('Generate');
                props.setGenerateStatus('primary');
                props.setStatus(true);
            }, 5000);
        } else {
          console.log(err)
            props.setMessage('Failed to generate certificates! Please try again later!');
            setUploadPercentage(0);
            props.setGenerate('Generation Failed');
            props.setGenerateStatus('danger');
            props.setStatus(false);
        }
    }
    // console.log(formData);
  }
  return (
    <Fragment>
      {props.message ? <Message msg={props.message} setMessage={props.setMessage} generateStatus={props.generateStatus} /> : null}
      <form onSubmit={onSubmit}>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
        </div>
        <br />
        <Progress percentage={uploadPercentage} />

        <div className='fileuploadbutton'>
          <button
            type="submit"
            value="Generate"
            className={`btn btn-${props.generateStatus} btn-block mt-4 col-lg-7`}
            disabled={!(props.status)}
          >{props.generate}</button>
        </div>
      </form>
      {uploadedFile ? <div className="row mt-5">
        <div className="col-md-6 m-auto"></div>
        <h3 className="text-center">{uploadedFile.fileName}</h3>
        <AppImage style={{ width: '100%' }} src={uploadedFile.filePath} alt="" />
      </div> : null}
    </Fragment>
  );
};

export default FileUpload;
