import http from '@/utils/request';

const apiTest = {
  getTest: (params: any) => http.get<GetTest.data>('/test', params),
  postTest: (params: any) => http.post<PostTest.data>('/test', params)
};

export default apiTest;
