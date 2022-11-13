import db from '../../../libs/db';
import bcrypt from 'bcryptjs';

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(401).end();
  const { email, password, is_admin } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const passHash = bcrypt.hashSync(password,salt);
  const sendReg = await db('users').insert({
    email,
    password: passHash,
    is_admin
  });

  const resReg = await db('users').where({id:sendReg}).first();
  res.status(200)
  res.json({
    message: 'register succesfully...',
    user: resReg
  })
}
