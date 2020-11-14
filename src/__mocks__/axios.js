export default {
  post: jest.fn(() => Promise.resolve({ data: { code: "200" } })),
  get: jest.fn(() => Promise.resolve({ data: { name: "wenchang.li" } })),
};
