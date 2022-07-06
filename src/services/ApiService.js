import { API_URL } from '../config/Config';

const USER_ID = '6279264f16748f6d9bb92f46';

export const GET_ALL_EVENTS = async () => {
     let response;
     try {
          response = await fetch(`${API_URL}/api/event/get/all/${USER_ID}`);
          if (response) return response.json();
     } catch (error) {
          console.log(error);
     }
};

export const GET_ALL_COINS = async () => {
     let response;
     try {
          response = await fetch(`${API_URL}/api/coin/get/all/${USER_ID}`);
          if (response) return response.json();
     } catch (error) {
          console.log(error);
     }
};

export const GET_RECENT_WINNERS = async () => {
     let response;
     try {
          response = await fetch(`${API_URL}/api/winner/recent/event/get/${USER_ID}`);
          if (response) return response.json();
     } catch (error) {
          console.log(error);
     }
};

export const GET_WINNERS_EVENT = async (id) => {
     let response;
     try {
          response = await fetch(`${API_URL}/api/winner/get/${USER_ID}/${id}`);
          if (response) return response.json();
     } catch (error) {
          console.log(error);
     }
};

export const ADD_RESULT = async (data) => {
     data.userId = USER_ID;
     let response;
     try {
          response = await fetch(`${API_URL}/api/winner/create`, { method: 'POST', body: data });
          if (response) return response.json();
     } catch (error) {
          console.log(error);
     }
};
