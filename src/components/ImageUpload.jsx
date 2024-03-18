import { Button } from '@mui/material';
import React, { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageRemove = () => {
    setImage(null);
  };

  return (
    <div>
      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          border: '2px dashed #ccc',

          borderRadius: '5px',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: dragging ? '#f0f0f0' : 'inherit',
        }}
      >
        {image ? (
          <div>
            <img
              src={image}
              alt="Preview"
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
            <button onClick={handleImageRemove}>Remove</button>
          </div>
        ) : (
          <div>
            {/* <span>Drag & drop or</span> */}
            <br />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
              id="image-upload"
            />

            <Button
              sx={{
                color: 'black',
                borderRadius: '10px',
                borderBottom: '2px solid #ccc',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                textTransform: 'none',
                mt: -4,
              }}
            >
              <label htmlFor="image-upload">Upload new</label>
            </Button>
            <p style={{ marginBottom: '5px' }}>Accepts images</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
