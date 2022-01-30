import axiosInstance from './config-axios';

export const getCompetition = async () => {
  return axiosInstance
    .get('/competitions/2014/teams')
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch(() => {
      throw new Error('Error');
    });
};

export const getTeam = async (id) => {
  return axiosInstance
    .get(`/teams/${id}`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch(() => {
      throw new Error('Error');
    });
};
