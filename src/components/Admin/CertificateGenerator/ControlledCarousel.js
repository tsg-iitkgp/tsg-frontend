import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ControlledCarousel.css';
// import './certif.css';

import CertiTemplate from '../../../data/CertiTemplate.json'
import ExcelPreview from './ExcelPreview';
import AppImage from "../../AppImage";

function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [button, setButton] = useState('Select');
    const [buttonColor, setButtonColor] = useState('warning');

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleTemplate = (selectedTemplate, e) => {
        setSelectedTemplate(selectedTemplate.target.id);
        props.setId(selectedTemplate.target.id);
    };

    useEffect(() => {
        if (index === parseInt(selectedTemplate)) {
            setButton('Selected');
            setButtonColor('primary');
        } else {
            setButton('Select');
            setButtonColor('warning');
        }
    }, [index, selectedTemplate])

    useEffect(() => {
        setSelectedTemplate(null);
        props.setMessage('');
        props.setGenerate('Generate');
        props.setGenerateStatus('primary');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    return (
        <>
            <div style={{ height: 'auto', width: '50vw' }}>
                <Carousel activeIndex={index} onSelect={handleSelect} interval={null} fade={true} touch={true}>
                    {CertiTemplate.Templates.map(template => (
                        <Carousel.Item key={template.id}>
                            <div className='div-shrink m-auto'>
                                <AppImage
                                    className="d-block w-200"
                                    src={template.src}
                                    alt={template.alt}
                                    style={{ borderRadius: '1rem' }}
                                />
                                <Carousel.Caption>
                                    <h3>{template.alt}</h3>
                                    <button className={`btn btn-${buttonColor}`}
                                        id={template.id}
                                        onClick={handleTemplate} >{button}</button>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <p className='text-center d-block btn btn-success m-auto'
                style={{ background: 'transparent', color: 'yellow', border: 'none' }}>Certificate {parseInt(selectedTemplate) + 1} selected!</p>
            <div style={{ height: 'auto', width: '40vw' }}><ExcelPreview id={selectedTemplate} /></div>

        </>
    );
}

export default ControlledCarousel;