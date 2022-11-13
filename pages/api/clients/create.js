import db from '../../../libs/db';

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).end()
  const {
    name,
    birthday,
    place_of_birth,
    address,
    phone_number,
    email,
    no_npwp,
    no_ktp,
    no_kk,
    company_name,
    company_address,
    company_capital,
    type_of_business,
    in_proses,
  } = req.body;

  const sendClient = await db('clients').insert({
    name,
    birthday,
    place_of_birth,
    address,
    phone_number,
    email,
    no_npwp,
    no_ktp,
    no_kk,
    company_name,
    company_address,
    company_capital,
    type_of_business,
    in_proses,
  });

  const resClient = await db('clients').where({id:sendClient}).first();
  res.status(200);
  res.json({
    message: 'post client successfully...',
    client : resClient
  })
}
