
import React, { useState } from 'react';
import "./css/FileUploadForm.css";

const FileUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setUploadMessage('');
    } else {
      setSelectedFile(null);
      setUploadMessage('Please select a valid PDF file.');
    }
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('pdfFile', selectedFile);

      try {
        const response = await fetch('YOUR_BACKEND_ENDPOINT', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          setUploadMessage('File uploaded successfully!');
        } else {
          setUploadMessage('File upload failed. Please try again.');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        setUploadMessage('An error occurred during file upload.');
      }
    } else {
      setUploadMessage('Please select a valid PDF file before uploading.');
    }
  };


  return (
    <div>
      <h2>PDF File Upload</h2>
      <div className='file-upload-container'>
      <input className='file-upload'
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
      />
     {uploadMessage && <p className="upload-message">{uploadMessage}</p>}
      {selectedFile && (
        <div className="selected-file">
          <p>Selected File: {selectedFile.name}</p>
          <button onClick={handleFileUpload}>Upload File</button>
        </div>
      )}
      </div>
    </div>
  );
};

export default FileUploadForm;
