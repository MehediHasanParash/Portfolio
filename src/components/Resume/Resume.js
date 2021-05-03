import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs'


const Resume = () => {
    return (
        <PDFViewer
            document={{
                url: 'file:///C:/Users/Mit/Downloads/Mehedi_Hasan_Parash_-_Full_Stack_Web_Developer.pdf',
            }}
        />
    )
};

export default Resume;