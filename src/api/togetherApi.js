import jwtAxios from "./jwtAxios";

const host = `${jwtAxios.defaults.baseURL}/api/v1/together`;

export const createTogether = async (formData) => {
  try {
    console.log("formData", formData);
    const response = await jwtAxios.post(`${host}/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("같이가요 게시글 생성에 에러가 발생했습니다:", error);
    throw error;
  }
};

export const readTogether = async (id) => {
  try {
    const response = await jwtAxios.get(`${host}/${id}`);
    return response.data;
  } catch (error) {
    console.error("같이요 게시글 조회에서 에러가 발생하였습니다.");
    throw error;
  }
};

export const updateTogether = async (id, togetherDTO) => {
  try {
    const response = await jwtAxios.put(`${host}/${id}`, togetherDTO);
    return response.data;
  } catch (error) {
    console.error("같이요 게시글 수정에서 에러가 발생하였습니다.");
    throw error;
  }
};

export const deleteTogether = async (id) => {
  try {
    const response = await jwtAxios.delete(`${host}/${id}`);
    return response.data;
  } catch (error) {
    console.error("같이요 게시글 삭제에서 에러가 발생하였습니다.");
    throw error;
  }
};

export const listAllTogethers = async (params) => {
  try {
    const response = await jwtAxios.get(`${host}/list`, { params });
    return response.data;
  } catch (error) {
    console.error(
      "같이가요 게시글 리스트 출력에 에러가 발생하였습니다.:",
      error
    );
    throw error;
  }
};

export const searchTogethers = async (params) => {
  try {
    const response = await jwtAxios.get(`${host}/search`, { params });
    return response.data;
  } catch (error) {
    console.error("같이요 게시글 검색에서 에러가 발생하였습니다.");
    throw error;
  }
};

export const listFavoriteTogethers = async (params) => {
  try {
    const response = await jwtAxios.get(`${host}/favorite/list`, { params });
    return response.data;
  } catch (error) {
    console.error("같이요 게시글 좋아요 리스트에서 에러가 발생하였습니다.");
    throw error;
  }
};

export const listMyTogethers = async (params) => {
  try {
    const response = await jwtAxios.get(`${host}/list/user`, { params });
    return response.data;
  } catch (error) {
    console.error("같이요 게시글 내가 쓴 리스트에서 에러가 발생하였습니다.");
    throw error;
  }
};
