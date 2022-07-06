import { API_URL } from '../config/Config';

const USER_ID = '6279264f16748f6d9bb92f46';

export const GET_ALL_EVENTS = async () => {
     let response;
     try {
          response = await fetch(`${API_URL}/api/event/get/all/${USER_ID}`);
          if (response) return await response.json();
     } catch (error) {
          console.log(error);
     }
};

export const GET_ALL_TICKETS = async (id) => {
     let response;
     try {
          response = await fetch(`${API_URL}/api/ticket/get/all/event/${USER_ID}/${id}`);
          if (response) return await response.json();
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
