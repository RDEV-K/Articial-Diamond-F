import axios from 'axios';
import { useDispatch } from 'react-redux';
import { SIGN_UP_PENDING, SIGN_UP_FULFILLED, SIGN_UP_REJECTED } from './actionTypes';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
const token = localStorage.getItem('token');

export const getAllDiamonds = async () => {
    try {
      const response = await axios.get(BACKEND_URL + `/diamond`, {
        headers: {
            'Content-Type': 'application/json',
          },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
};

export const getUserResponse = async (allParams) => {
  try {
    const newURL = `${BACKEND_URL}/auth/google/callback${allParams}`;

    const response = await axios.get(newURL, {
      headers: {
          'Content-Type': 'application/json',
        },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const login = async (data) => {
  try {
    const response = await axios.post(BACKEND_URL + `/login`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const signUp = async (data, dispatch) => {
  try {
    const response = await axios.post(BACKEND_URL + `/users`, data);
    dispatch({ type: SIGN_UP_FULFILLED, payload: response });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response.data);
    dispatch({ type: SIGN_UP_REJECTED, payload: error.response.data });
    throw error;
  }
};

export const logout = async (id) => {
  try {
    const response = await axios.post(BACKEND_URL +  `/logout/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const serachDiamond = async (
  params,
  body,
  query
) => {
  let filter = {
    where: {
      data: body,
    },
    limit: params.pageSize,
    skip: (params.current ? params.current - 1 : 0) * (params.pageSize ? params.pageSize : 10),
  }
  try {
    const response = await axios.get(BACKEND_URL + `/diamond/public/search`, {
      params: { filter: JSON.stringify(filter), q: query },
      headers: {
          'Content-Type': 'application/json',
        },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const serachDiamondWithLogin = async (
  params,
  body,
  token,
  query
) => {
  let filter = {
    where: {
      data: body,
    },
    limit: params.pageSize,
    skip: (params.current ? params.current - 1 : 0) * (params.pageSize ? params.pageSize : 10),
  }
  try {
    const response = await axios.get(BACKEND_URL + `/diamond/search`, {
      params: { filter: JSON.stringify(filter), q: query },
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getInventoryDiamond = async (
    params,
    body,
    id,
    token,
    query
) => {
  let filter = {
    where: {
      data: body,
    },
    limit: params.pageSize,
    skip: (params.current ? params.current - 1 : 0) * (params.pageSize ? params.pageSize : 10),
  }
  try {
    const response = await axios.get(BACKEND_URL + `/inventory/diamond/${id}`, {
      params: { filter: JSON.stringify(filter), q: query },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getParticularDiamond = async (id) => {
  try {
    const response = await axios.get(BACKEND_URL + `/diamond/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const deleteParticularDiamond = async (deletedIds) => {
  try {
    const response = await axios.post(BACKEND_URL +  `/diamond/delete`, {ids: deletedIds}, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const editDiamond = async (data, id) => {
  try {
    const response = await axios.patch(BACKEND_URL +  `/diamond/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const uploadFile = async (data) => {
  try {
    const response = await axios.post(BACKEND_URL +  `/diamond/upload`, data, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getConstantData = async () => {
  try {
    const response = await axios.get(BACKEND_URL + `/masters`, {
      headers: {
          'Content-Type': 'application/json',
        },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


export const signInWithGoogle = async () => {
  try {
    // const response = await axios.get(window.location.hostname + `/auth/google`, {
      const response = await axios.get(BACKEND_URL + `/auth/google`, {
      headers: {
          'Content-Type': 'application/json',
        },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const editUserProfile = async (data, id) => {
  try {
    const response = await axios.patch(BACKEND_URL + `/update-user/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const createDiamond = async (data) => {
  try {
    const response = await axios.post(BACKEND_URL + `/diamond`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
