// components/PdfViewer.js
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfViewer = ({ pdfUrl }) => {
    return (
        <div style={{ height: '750px' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.9.179/build/pdf.worker.min.js`}>
                <Viewer fileUrl={pdfUrl} />
            </Worker>
        </div>
    );
};

export default PdfViewer;
