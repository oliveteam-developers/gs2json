import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from 'antd';
import ReactJson from 'react-json-view';
import { useFormik } from 'formik';

// Actions
import { fetchSheetData } from '../../actions/openSheetActions';

import './Home.scss';

const Home = () => {
    const dispatch = useDispatch();
    const { sheetData, loading } = useSelector((store) => store.openSheet);

    const [data, setData] = useState(null);

    const validate = (values) => {
        const errors = {};

        if (!values.id || values.id.trim() === '') {
            errors['id'] = 'Sheet ID is required.';
        }

        if (!values.id || values.id.trim() === '') {
            errors['name'] = 'Sheet name is required.';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            id: '1L-r9cR-OJ1MQDii8uiptd2w6zGbNjBxPuYOmdOzDT3k',
            name: 'US',
        },
        validate,
        onSubmit: (values) => {
            dispatch(fetchSheetData(values));
        },
    });

    const formatData = (data) => {
        setData(data);
    };

    useEffect(() => {
        if (sheetData) {
            formatData(sheetData);
        }
    }, [sheetData]);

    return (
        <Fragment>
            <div className="home-content">
                <h3>Google Sheets to Json data</h3>

                <div className="home-content-form">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-item">
                            <h5>Sheet ID</h5>
                            <Input
                                id="id"
                                className="default"
                                autoComplete="off"
                                onChange={formik.handleChange}
                                value={formik.values.id}
                            />
                            {formik.errors.id ? <p className="error">{formik.errors.id}</p> : null}
                        </div>

                        <div className="form-item">
                            <h5>Tab Name</h5>
                            <Input
                                id="name"
                                className="default"
                                autoComplete="off"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            {formik.errors.name ? <p className="error">{formik.errors.name}</p> : null}
                        </div>

                        <div className="form-buttons">
                            <Button htmlType="submit" type="primary">Convert</Button>
                        </div>
                    </form>
                </div>

                <p className="note">
                    This demo has been using google sheets data from the 
                    link: https://docs.google.com/spreadsheets/d/1L-r9cR-OJ1MQDii8uiptd2w6zGbNjBxPuYOmdOzDT3k/ 
                    and tab name is US.
                </p>

                {loading ? (
                    <h4 className="loading">Loading...</h4>
                ) : (
                    <Fragment>
                        {data ? (
                            <div className="home-content-google-sheet-data">
                                <ReactJson theme={'tomorrow'} src={data} />
                            </div>
                        ) : (
                            <h4 className="error">No data</h4>
                        )}
                    </Fragment>
                )}
            </div>
        </Fragment>
    );
};

export default Home;
