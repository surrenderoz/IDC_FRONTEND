import * as React from 'react';
import { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Select from 'react-select';
import Creatable from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import chroma from 'chroma-js';
import BasicExample from './list-box/BasicExample';
import OptGroupExample from './list-box/OptGroupExample';
import FilterExample from './list-box/FilterExample';
import AlignTopExample from './list-box/AlignTopExample';
import DisabledExample from './list-box/DisabledExample';
import PreserveSelectOrderExample from './list-box/PreserveSelectOrderExample';
import AllowDuplicatesExample from './list-box/AllowDuplicatesExample';
import RestrictAvailableExample from './list-box/RestrictAvailableExample';
export const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E', isFixed: true },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' }
];
const dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',
    ':before': {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10
    }
});
const colourStylesSingle = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled ? null : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
            color: isDisabled ? '#ccc' : isSelected ? (chroma.contrast(color, 'white') > 2 ? 'white' : 'black') : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default'
        };
    },
    input: (styles) => ({ ...styles, ...dot() }),
    placeholder: (styles) => ({ ...styles, ...dot() }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) })
};
const colourStylesMulti = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled ? null : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
            color: isDisabled ? '#ccc' : isSelected ? (chroma.contrast(color, 'white') > 2 ? 'white' : 'black') : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default'
        };
    },
    multiValue: (styles, { data }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: color.alpha(0.1).css()
        };
    },
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: data.color
    }),
    multiValueRemove: (styles, { data }) => ({
        ...styles,
        color: data.color,
        ':hover': {
            backgroundColor: data.color,
            color: 'white'
        }
    })
};
const styles = {
    multiValue: (base, state) => {
        return state.data.isFixed ? { ...base, backgroundColor: 'gray' } : base;
    },
    multiValueLabel: (base, state) => {
        return state.data.isFixed ? { ...base, fontWeight: 'bold', color: 'white', paddingRight: 6 } : base;
    },
    multiValueRemove: (base, state) => {
        return state.data.isFixed ? { ...base, display: 'none' } : base;
    }
};
const orderOptions = (values) => {
    return values.filter((v) => v.isFixed).concat(values.filter((v) => !v.isFixed));
};
const FormsSelect = () => {
    const [value, setValue] = useState(orderOptions([colourOptions[3], colourOptions[6], colourOptions[8]]));
    const onChange = (value, { action, removedValue }) => {
        switch (action) {
            case 'remove-value':
            case 'pop-value':
                if (removedValue.isFixed) {
                    return;
                }
                break;
            case 'clear':
                value = colourOptions.filter((v) => v.isFixed);
                break;
            default:
                break;
        }
        value = orderOptions(value);
        setValue(value);
    };
    return (<>
            <Row>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Single Select</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Select className="basic-single" classNamePrefix="select" defaultValue={colourOptions[0]} name="color" options={colourOptions}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Multi Select</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Select defaultValue={[colourOptions[2], colourOptions[3]]} isMulti name="colors" options={colourOptions} className="basic-multi-select" classNamePrefix="select"/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">With Placeholder</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Select className="basic-single" classNamePrefix="select" name="color" options={colourOptions} placeholder="Which is your favourite colour?"/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Tagging Support</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Creatable isMulti options={colourOptions} className="basic-single" pageSize={3} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Clear Selection</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Select className="basic-single" classNamePrefix="select" defaultValue={colourOptions[0]} name="color" options={colourOptions} isClearable/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Searchable</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Select defaultValue={[colourOptions[2], colourOptions[3]]} isMulti name="colors" options={colourOptions} className="basic-multi-select" classNamePrefix="select" isSearchable/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Disabled</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Select className="basic-single" classNamePrefix="select" defaultValue={colourOptions[0]} name="color" options={colourOptions} isDisabled/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">RTL</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Select defaultValue={[colourOptions[2], colourOptions[3]]} isMulti name="colors" options={colourOptions} className="basic-multi-select" classNamePrefix="select" isRtl/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Animation</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Select closeMenuOnSelect={false} className="basic-single" components={makeAnimated()} defaultValue={[colourOptions[4], colourOptions[5]]} isMulti options={colourOptions}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Custom Style Single</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Select defaultValue={colourOptions[2]} label="Single select" className="basic-single" options={colourOptions} styles={colourStylesSingle} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Custom Style Multi</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Select closeMenuOnSelect={false} defaultValue={[colourOptions[0], colourOptions[1]]} isMulti options={colourOptions} className="basic-single" styles={colourStylesMulti}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Custom Style Multi</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Select value={value} isMulti styles={styles} isClearable={value.some((v) => !v.isFixed)} name="colors" className="basic-multi-select" classNamePrefix="select" onChange={onChange} options={colourOptions}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5"> Basic Listbox </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <BasicExample />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5"> Option Groups </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <OptGroupExample />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5"> Filter/Searchable </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <FilterExample />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5"> Align Actions to Top </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AlignTopExample />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5"> Preserve Select Order </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <PreserveSelectOrderExample />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5"> Allow Duplicates Items </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AllowDuplicatesExample />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5"> Restrict Available </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <RestrictAvailableExample />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5"> Disabled </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <DisabledExample />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>);
};
export default FormsSelect;
