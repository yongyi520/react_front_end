import axios from 'axios';

import { FETCH_COMPANIES } from './types'

const URL = "http://private-c3d105-dummyapi10.apiary-mock.com/companies";

export const fetchCompanies = (companies) => {
    return {
      type: FETCH_COMPANIES,
      companies
    }
};

export const fetchAllCompanies = () => {
    return (dispatch) => {
      return axios.get(`${URL}`)
        .then(response => {
          dispatch(fetchCompanies(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
};

