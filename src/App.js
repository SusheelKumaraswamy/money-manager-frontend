import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';

class FormikComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: {
        income: '',
        expenditure: '',
        typeofexpense:'',
        purposeofexpense:'',
        date: ''
      },
      VALUE: 5,
    };
  }
  initialValue = {
        income: '',
        expenditure: '',
        typeofexpense:'personal',
        purposeofexpense:'',
        date: ''
  };
  validate = (formData) => {
    var errors = {};
    if (formData.income === '') errors.income = 'Income is Required,Please enter 0 if no income';
    if (formData.expenditure === '') errors.expenditure = 'expenditure is Required';
    if (formData.typeofexpense === '') errors.typeofexpense = 'Type of Expense is Required';
    if (formData.purposeofexpense === '') errors.purposeofexpense = 'Purpose of Expense is Required';
    if (formData.date === '') errors.date = 'date is Required';
    return errors;
  };
  handleSubmit = async (formData) => {
    await this.setState({ ...formData,formData });
    console.log(this.state.formData);

    var response = await axios.post('https://moneymanagerbackend31398.herokuapp.com/moneymanager/add',
    {
      income:formData.income,
      expenditure:formData.expenditure,
      typeofexpense:formData.typeofexpense,
      purposeofexpense:formData.purposeofexpense,
      date:formData.date
    });
    console.log(response);
  };
  render() {
    return (
      <>
        <h3> Formik Component </h3>
        <Formik
          initialValues={this.initialValue}
          validate={(formData) => this.validate(formData)}
          onSubmit={(formData,resetForm) => this.handleSubmit(formData,resetForm)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            resetForm,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label> Income: </label>
                <input
                  type="number"
                  name="income"
                  value={values.income}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span style={{ color: 'red' }}>
                  {touched.income && errors.income}
                </span>
              </div>
              <br />
              <div>
                <label> Expenditure: </label>
                <input
                  type="number"
                  name="expenditure"
                  value={values.expenditure}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span style={{ color: 'red' }}>
                  {touched.expenditure && errors.expenditure}
                  {/* if(touched.lastName && error.lastName) {
                    print(error.lastName)
                  } */}
                </span>
              </div>
              <br></br>


              <div>
                <label> Type of Expense: </label>
                <select
                  name="typeofexpense"
                  value={values.typeofexpense}
                  onChange={handleChange}
                >
                  <option value="official"> official </option>
                  <option value="personal"> personal </option>
                </select>
                <br />
              </div>

              <br />

              <div>
                <label> Purpose of Expense: </label>
                <input
                  type="text"
                  name="purposeofexpense"
                  value={values.purposeofexpense}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span style={{ color: 'red' }}>
                  {touched.expenditure && errors.expenditure}
                  {/* if(touched.lastName && error.lastName) {
                    print(error.lastName)
                  } */}
                </span>
              </div>
              <br></br>


              <div>
                <label> Date: </label>
                <input
                  type="date"
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span style={{ color: 'red' }}>
                  {touched.purposeofexpense && errors.purposeofexpense}
                </span>
              </div>
              <br />
              
              <div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
                &nbsp;
                <button type="reset" onClick={resetForm}> Reset </button>&nbsp;
              </div>
            </form>
          )}
        </Formik>
        <br />
        <br />
      </>
    );
  }
}

export default FormikComponent;
