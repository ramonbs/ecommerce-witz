import mercadoPago from 'mercadopago';
import nodeFetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

mercadoPago.configure({
  access_token: process.env.MP_ACCESS_TOKEN,
});

export const createPreference = async (req, res) => {
  const {
    id, title, unit_price, quantity, currency_id, picture_url, description, category_id,
    name, surname, email, area_code, number, street_name, street_number, zip_code,
    city_name, state_name, cost,
  } = req.body;

  let { floor, apartment } = req.body;

  switch (true) {
    case !title:
      res.status(400).send({ message: 'Title is required' });
      break;
    case !unit_price:
      res.status(400).send({ message: 'Unit price is required' });
      break;
    case !quantity:
      res.status(400).send({ message: 'Quantity is required' });
      break;
    case !picture_url:
      res.status(400).send({ message: 'Picture URL is required' });
      break;
    case !description:
      res.status(400).send({ message: 'Description is required' });
      break;
    case !category_id:
      res.status(400).send({ message: 'Category ID is required' });
      break;
    case !name:
      res.status(400).send({ message: 'Name is required' });
      break;
    case !surname:
      res.status(400).send({ message: 'Surname is required' });
      break;
    case !email:
      res.status(400).send({ message: 'Email is required' });
      break;
    case !area_code:
      res.status(400).send({ message: 'Area code is required' });
      break;
    case !number:
      res.status(400).send({ message: 'Number is required' });
      break;
    case !street_name:
      res.status(400).send({ message: 'Street name is required' });
      break;
    case !street_number:
      res.status(400).send({ message: 'Street number is required' });
      break;
    case !zip_code:
      res.status(400).send({ message: 'Zip code is required' });
      break;
    case !city_name:
      res.status(400).send({ message: 'City name is required' });
      break;
    case !state_name:
      res.status(400).send({ message: 'State name is required' });
      break;
    case !cost:
      res.status(400).send({ message: 'Cost is required' });
      break;
    case !floor:
      floor = '';
      break;
    case !apartment:
      apartment = '';
      break;
    default:
      break;
  }

  const preference = {
    items: [
      {
        id,
        title,
        unit_price,
        quantity,
        currency_id: currency_id || 'BRL',
        picture_url,
        description,
        category_id,
      },
    ],
    payer: {
      name,
      surname,
      email,
      phone: {
        area_code,
        number,
      },
    },
    shipments: {
      receiver_address: {
        zip_code,
        street_name,
        street_number,
        city_name,
        state_name,
        floor,
        apartment,
      },
      cost,
    },

  };

  try {
    const response = await mercadoPago.preferences.create(preference);
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
};

export const getAllPreferences = async (req, res) => {
  try {
    const response = await nodeFetch('https://api.mercadopago.com/checkout/preferences/search', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
      },
    });
    const data = await response.json();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
};

export const getPreferenceByID = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await nodeFetch(`https://api.mercadopago.com/checkout/preferences/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
      },
    });
    const data = await response.json();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
};

export const getAllPayments = async (req, res) => {
  try {
    const response = await nodeFetch('https://api.mercadopago.com/v1/payments/search', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
      },
    });
    const data = await response.json();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
};

export const getPaymentByOrderID = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await nodeFetch(`https://api.mercadopago.com/v1/payments/search?order.id=${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
      },
    });
    const data = await response.json();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
};
