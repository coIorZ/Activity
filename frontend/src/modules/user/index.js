import Self from "./pages/self";
import Update from "./pages/update";
import Change from "./pages/change";
// import * as services from './services';

export default {
  namespace: "user",
  state: {
    user: {
      username: "xiaoyi",
      name: "xiaoyi",
      email: "longxiaoyi1994@gmail.com",
      gender: "female",
      phone: 84275831,
      location: "Singapore",
      likes: [
        {
          id: 1,
          name: "1",
          image: "/Users/xiaoyi/dev/Activity/WebContent/assets/p1.jpg"
        },
        {
          id: 2,
          name: "2",
          image: "/Users/xiaoyi/dev/Activity/WebContent/assets/p1.jpg"
        },
        {
          id: 3,
          name: "3",
          image: "/Users/xiaoyi/dev/Activity/WebContent/assets/p1.jpg"
        },
        {
          id: 4,
          name: "4",
          image: "/Users/xiaoyi/dev/Activity/WebContent/assets/p1.jpg"
        }
      ],
      history: [
        {
          id: 1,
          name: "1",
          image: "/Users/xiaoyi/dev/Activity/WebContent/assets/p1.jpg"
        },
        {
          id: 2,
          name: "2",
          image: "/Users/xiaoyi/dev/Activity/WebContent/assets/p1.jpg"
        },
        {
          id: 3,
          name: "3",
          image: "/Users/xiaoyi/dev/Activity/WebContent/assets/p1.jpg"
        },
        {
          id: 4,
          name: "4",
          image: "/Users/xiaoyi/dev/Activity/WebContent/assets/p1.jpg"
        }
      ]
    }
  },
  routes: {
    "/self": { component: Self },
    "/update": { component: Update },
    "/change": { component: Change }
  }
};
