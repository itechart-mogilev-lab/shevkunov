import {
  ORDERS_LOAD_SUCCESS,
  GET_ORDERS_ERRORS,
  ORDERS_REQUEST
} from "./actionTypes";
import axios from "axios";

export const getOrdersSuccess = () =>
  /*{docs total, page, pages, limit}*/

  {
    return {
      type: ORDERS_LOAD_SUCCESS,
      payload: {
        //TODO
        docs: [
          {
            company: {
              address: {
                city: "Mogilev",
                country: "Беларусь",
                other: "ул. Островского д.44 кв.44"
              },
              name: "Вадим",
              popularity: 100,
              price: 0.5,
              rating: 100
            },
            customer: {
              _id: "5cacd4eb1f0e6511e42ac152",
              firstname: "vadim123",
              surname: "shevkunov",
              email: "vadimshevkunov@gmail.com",
              phoneNumber: "+375445340708"
            },
            order: {
              address: "ul.Ostrovskogo, d.44,kv.44",
              service: "Chemical_for_carpets",
              standart: "1",
              big: "1",
              toilet: "1",
              reccurent: false,
              date: "2019-04-26",
              startTime: "00:59",
              regularity: "One time",
              duration: 0,
              email: "someemail@com",
              status: "accapted"
            }
          },
          {
            company: {
              address: {
                city: "Mogilev",
                country: "Беларусь",
                other: "ул. Островского д.44 кв.44"
              },
              name: "Вадим",
              popularity: 100,
              price: 0.5,
              rating: 100
            },
            customer: {
              _id: "5cacd4eb1f0e6511e42ac152",
              firstname: "vadim123",
              surname: "shevkunov",
              email: "vadimshevkunov@gmail.com",
              phoneNumber: "+375445340708"
            },
            order: {
              address: "ul.Ostrovskogo, d.44,kv.44",
              service: "Chemical_for_carpets",
              standart: "1",
              big: "1",
              toilet: "1",
              reccurent: false,
              date: "2019-04-26",
              startTime: "00:59",
              regularity: "One time",
              duration: 0,
              email: "someemail@com",
              status: "pending"
            }
          },
          {
            company: {
              address: {
                city: "Mogilev",
                country: "Беларусь",
                other: "ул. Островского д.44 кв.44"
              },
              name: "Вадим",
              popularity: 100,
              price: 0.5,
              rating: 100
            },
            customer: {
              _id: "5cacd4eb1f0e6511e42ac152",
              firstname: "vadim123",
              surname: "shevkunov",
              email: "vadimshevkunov@gmail.com",
              phoneNumber: "+375445340708"
            },
            order: {
              address: "ul.Ostrovskogo, d.44,kv.44",
              service: "Chemical_for_carpets",
              standart: "1",
              big: "1",
              toilet: "1",
              reccurent: false,
              date: "2019-04-26",
              startTime: "00:59",
              regularity: "One time",
              duration: 0,
              email: "someemail@com",
              status: "rejected"
            }
          }
        ],
        total: 1,
        page: 1,
        pages: 1,
        limit: 10
      }
    };
  };

const requestOrders = () => {
  return {
    type: ORDERS_REQUEST
  };
};

export const getOrders = queires => dispatch => {
  dispatch(requestOrders());
  //TODOs
  dispatch(getOrdersSuccess());
  /*axios
    .get(`/api/orders`)
    .then(response => {
      dispatch(getOrdersSuccess(response.data));
    })
    .catch(err => {
      dispatch({
        type: GET_ORDERS_ERRORS,
        payload: err.response
      });
    });*/
};
